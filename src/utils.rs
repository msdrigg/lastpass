pub(crate) fn cipher_unbase64(val: &str) -> Option<Vec<u8>> {
    if val.bytes().nth(0) != Some(b'!') {
        return base64::decode(val).ok();
    }
    let (iv, data) = val.strip_prefix("!")?.split_once("|")?;
    let iv = base64::decode(iv).ok()?;
    let data = base64::decode(data).ok()?;

    let mut encrypted_key_bytes =
        Vec::<u8>::with_capacity(iv.len() + data.len() + 1);
    encrypted_key_bytes.push(b'!');
    encrypted_key_bytes.extend(iv);
    encrypted_key_bytes.extend(data);

    Some(encrypted_key_bytes)
}
