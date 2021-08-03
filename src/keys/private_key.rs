use std::{
    convert::{TryFrom, TryInto},
    fmt::{self, Debug, Formatter},
    str::FromStr,
};

use rsa::{
    pkcs8::{self, FromPrivateKey},
    PaddingScheme, RsaPrivateKey,
};
use sha1::Sha1;

use crate::DecryptionError;

/// A private key that can be used to decrypt items in the password vault.
#[derive(Clone, PartialEq)]
pub struct PrivateKey(RsaPrivateKey);

impl TryFrom<Vec<u8>> for PrivateKey {
    type Error = pkcs8::Error;

    fn try_from(value: Vec<u8>) -> Result<Self, Self::Error> {
        rsa::RsaPrivateKey::from_pkcs8_der(&value).map(|key| PrivateKey(key))
    }
}

impl PrivateKey {
    pub fn decrypt(
        &self,
        ciphertext: &[u8],
    ) -> Result<Vec<u8>, DecryptionError> {
        if ciphertext.is_empty() {
            // If there's no input, there's nothing to decrypt
            return Ok(Vec::new());
        }

        self.0
            .decrypt(PaddingScheme::new_oaep::<Sha1>(), ciphertext)
            .map_err(|e| DecryptionError::RsaDecryptionFailed(e))
    }

    pub fn from_rsa(key: rsa::RsaPrivateKey) -> PrivateKey {
        PrivateKey(key)
    }
}

#[derive(Debug, Clone, thiserror::Error)]
pub enum PrivateKeyParseError {
    #[error("The string did not parse into hex")]
    HexError(#[from] hex::FromHexError),
    #[error("The binary blob did not form a valid key")]
    Pkcs8Error(pkcs8::Error),
}

impl FromStr for PrivateKey {
    type Err = PrivateKeyParseError;

    fn from_str(s: &str) -> Result<PrivateKey, Self::Err> {
        let decoded =
            hex::decode(s).map_err(|e| PrivateKeyParseError::HexError(e))?;
        decoded
            .try_into()
            .map_err(|e| PrivateKeyParseError::Pkcs8Error(e))
    }
}

impl Debug for PrivateKey {
    fn fmt(&self, f: &mut Formatter<'_>) -> fmt::Result {
        f.debug_tuple("PrivateKey").field(&"<redacted>").finish()
    }
}
