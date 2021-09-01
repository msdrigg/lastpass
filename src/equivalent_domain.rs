use url::Host;

use crate::Id;

/// The domains provided by lastpass don't include schemes, so
/// we can't parse them as urls. We instead parse them as Hosts.
///
/// An alternative could be to use plain strings but I don't know if
/// that would be better
#[derive(Debug, Clone, PartialEq)]
pub struct EquivalentDomain {
    pub id: Id,
    pub hosts: Vec<Host>,
}

impl EquivalentDomain {
    /// At the time of writing this (Aug 5, 2021), this is the
    /// default list of equivalent domains provided by lastpass
    /// when a new account is created
    pub fn list_default() -> Vec<EquivalentDomain> {
        vec![
            EquivalentDomain {
                id: Id::from("1"),
                hosts: vec![
                    Host::parse("ameritrade.com").unwrap(),
                    Host::parse("tdameritrade.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2"),
                hosts: vec![
                    Host::parse("bankofamerica.com").unwrap(),
                    Host::parse("bofa.com").unwrap(),
                    Host::parse("mbna.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("4"),
                hosts: vec![
                    Host::parse("youtube.com").unwrap(),
                    Host::parse("google.com").unwrap(),
                    Host::parse("gmail.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("5"),
                hosts: vec![
                    Host::parse("apple.com").unwrap(),
                    Host::parse("icloud.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("6"),
                hosts: vec![
                    Host::parse("wellsfargo.com").unwrap(),
                    Host::parse("wf.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2296"),
                hosts: vec![
                    Host::parse("mymerrill.com").unwrap(),
                    Host::parse("ml.com").unwrap(),
                    Host::parse("merrilledge.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("12"),
                hosts: vec![
                    Host::parse("accountonline.com").unwrap(),
                    Host::parse("citi.com").unwrap(),
                    Host::parse("citibank.com").unwrap(),
                    Host::parse("citicards.com").unwrap(),
                    Host::parse("citibankonline.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("22"),
                hosts: vec![
                    Host::parse("cnet.com").unwrap(),
                    Host::parse("cnettv.com").unwrap(),
                    Host::parse("download.com").unwrap(),
                    Host::parse("news.com").unwrap(),
                    Host::parse("upload.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("32"),
                hosts: vec![
                    Host::parse("bananarepublic.com").unwrap(),
                    Host::parse("gap.com").unwrap(),
                    Host::parse("oldnavy.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("42"),
                hosts: vec![
                    Host::parse("bing.com").unwrap(),
                    Host::parse("hotmail.com").unwrap(),
                    Host::parse("live.com").unwrap(),
                    Host::parse("microsoft.com").unwrap(),
                    Host::parse("msn.com").unwrap(),
                    Host::parse("windows.com").unwrap(),
                    Host::parse("windowsazure.com").unwrap(),
                    Host::parse("office.com").unwrap(),
                    Host::parse("skype.com").unwrap(),
                    Host::parse("azure.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("52"),
                hosts: vec![
                    Host::parse("ua2go.com").unwrap(),
                    Host::parse("united.com").unwrap(),
                    Host::parse("unitedwifi.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("82"),
                hosts: vec![
                    Host::parse("overture.com").unwrap(),
                    Host::parse("yahoo.com").unwrap(),
                    Host::parse("flickr.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("92"),
                hosts: vec![
                    Host::parse("zonealarm.com").unwrap(),
                    Host::parse("zonelabs.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("842"),
                hosts: vec![
                    Host::parse("avon.com").unwrap(),
                    Host::parse("youravon.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("1474"),
                hosts: vec![
                    Host::parse("1800contacts.com").unwrap(),
                    Host::parse("800contacts.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2000"),
                hosts: vec![
                    Host::parse("amazon.com").unwrap(),
                    Host::parse("amazon.co.uk").unwrap(),
                    Host::parse("amazon.ca").unwrap(),
                    Host::parse("amazon.de").unwrap(),
                    Host::parse("amazon.fr").unwrap(),
                    Host::parse("amazon.es").unwrap(),
                    Host::parse("amazon.it").unwrap(),
                    Host::parse("amazon.com.au").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2010"),
                hosts: vec![
                    Host::parse("express-scripts.com").unwrap(),
                    Host::parse("medcohealth.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2011"),
                hosts: vec![
                    Host::parse("cox.com").unwrap(),
                    Host::parse("cox.net").unwrap(),
                    Host::parse("coxbusiness.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2021"),
                hosts: vec![
                    Host::parse("mynortonaccount.com").unwrap(),
                    Host::parse("norton.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2031"),
                hosts: vec![
                    Host::parse("verizon.com").unwrap(),
                    Host::parse("verizon.net").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2041"),
                hosts: vec![
                    Host::parse("logmein.com").unwrap(),
                    Host::parse("logme.in").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2051"),
                hosts: vec![
                    Host::parse("rakuten.com").unwrap(),
                    Host::parse("buy.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2061"),
                hosts: vec![
                    Host::parse("siriusxm.com").unwrap(),
                    Host::parse("sirius.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2071"),
                hosts: vec![
                    Host::parse("ea.com").unwrap(),
                    Host::parse("origin.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2081"),
                hosts: vec![
                    Host::parse("37signals.com").unwrap(),
                    Host::parse("basecamp.com").unwrap(),
                    Host::parse("basecamphq.com").unwrap(),
                    Host::parse("highrisehq.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2091"),
                hosts: vec![
                    Host::parse("steampowered.com").unwrap(),
                    Host::parse("steamcommunity.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2101"),
                hosts: vec![
                    Host::parse("chart.io").unwrap(),
                    Host::parse("chartio.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2111"),
                hosts: vec![
                    Host::parse("gotomeeting.com").unwrap(),
                    Host::parse("citrixonline.com").unwrap(),
                    Host::parse("logmeininc.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2201"),
                hosts: vec![
                    Host::parse("gogoair.com").unwrap(),
                    Host::parse("gogoinflight.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2211"),
                hosts: vec![
                    Host::parse("mysql.com").unwrap(),
                    Host::parse("oracle.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2221"),
                hosts: vec![
                    Host::parse("discover.com").unwrap(),
                    Host::parse("discovercard.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2231"),
                hosts: vec![
                    Host::parse("dcu.org").unwrap(),
                    Host::parse("dcu-online.org").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2241"),
                hosts: vec![
                    Host::parse("nefcuonline.com").unwrap(),
                    Host::parse("nefcu.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2271"),
                hosts: vec![
                    Host::parse("century21.com").unwrap(),
                    Host::parse("21online.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2281"),
                hosts: vec![
                    Host::parse("comcast.com").unwrap(),
                    Host::parse("comcast.net").unwrap(),
                    Host::parse("xfinity.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2291"),
                hosts: vec![
                    Host::parse("cricketwireless.com").unwrap(),
                    Host::parse("aiowireless.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2292"),
                hosts: vec![
                    Host::parse("mandtbank.com").unwrap(),
                    Host::parse("mtb.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2293"),
                hosts: vec![
                    Host::parse("alibaba.com").unwrap(),
                    Host::parse("aliexpress.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2294"),
                hosts: vec![
                    Host::parse("mercadolivre.com").unwrap(),
                    Host::parse("mercadolivre.com.br").unwrap(),
                    Host::parse("mercadolibre.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2295"),
                hosts: vec![
                    Host::parse("taobao.com").unwrap(),
                    Host::parse("tmall.com").unwrap(),
                    Host::parse("alimama.com").unwrap(),
                    Host::parse("1688.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2297"),
                hosts: vec![
                    Host::parse("zendesk.com").unwrap(),
                    Host::parse("zopim.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2298"),
                hosts: vec![
                    Host::parse("telekom.com").unwrap(),
                    Host::parse("t-online.de").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2299"),
                hosts: vec![
                    Host::parse("autodesk.com").unwrap(),
                    Host::parse("tinkercad.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2300"),
                hosts: vec![
                    Host::parse("railnation.ru").unwrap(),
                    Host::parse("railnation.de").unwrap(),
                    Host::parse("rail-nation.com").unwrap(),
                    Host::parse("railnation.gr").unwrap(),
                    Host::parse("railnation.us").unwrap(),
                    Host::parse("trucknation.de").unwrap(),
                    Host::parse("traviangames.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2301"),
                hosts: vec![
                    Host::parse("wpcu.coop").unwrap(),
                    Host::parse("wpcuonline.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2302"),
                hosts: vec![
                    Host::parse("mathletics.com").unwrap(),
                    Host::parse("mathletics.com.au").unwrap(),
                    Host::parse("mathletics.co.uk").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2303"),
                hosts: vec![
                    Host::parse("mi.com").unwrap(),
                    Host::parse("xiaomi.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2304"),
                hosts: vec![
                    Host::parse("facebook.com").unwrap(),
                    Host::parse("messenger.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2305"),
                hosts: vec![
                    Host::parse("disneymoviesanywhere.com").unwrap(),
                    Host::parse("go.com").unwrap(),
                    Host::parse("disney.com").unwrap(),
                    Host::parse("espn.com").unwrap(),
                    Host::parse("disneyplus.com").unwrap(),
                    Host::parse("d23.com").unwrap(),
                    Host::parse("shopdisney.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2306"),
                hosts: vec![
                    Host::parse("myuv.com").unwrap(),
                    Host::parse("uvvu.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2307"),
                hosts: vec![
                    Host::parse("bank-yahav.co.il").unwrap(),
                    Host::parse("bankhapoalim.co.il").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2308"),
                hosts: vec![
                    Host::parse("mdsol.com").unwrap(),
                    Host::parse("imedidata.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2309"),
                hosts: vec![
                    Host::parse("volvooceanrace.com").unwrap(),
                    Host::parse("virtualregatta.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2310"),
                hosts: vec![
                    Host::parse("mycanal.fr").unwrap(),
                    Host::parse("canal-plus.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2311"),
                hosts: vec![
                    Host::parse("trsretire.com").unwrap(),
                    Host::parse("divinvest.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2312"),
                hosts: vec![
                    Host::parse("norsk-tipping.no").unwrap(),
                    Host::parse("buypass.no").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2313"),
                hosts: vec![
                    Host::parse("my-bookings.org").unwrap(),
                    Host::parse("my-bookings.cc").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2314"),
                hosts: vec![
                    Host::parse("skygo.co.nz").unwrap(),
                    Host::parse("skytv.co.nz").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2315"),
                hosts: vec![
                    Host::parse("xiami.com").unwrap(),
                    Host::parse("alipay.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2316"),
                hosts: vec![
                    Host::parse("bancomer.com").unwrap(),
                    Host::parse("bancomer.com.mx").unwrap(),
                    Host::parse("bbvanet.com.mx").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2317"),
                hosts: vec![
                    Host::parse("turbotax.com").unwrap(),
                    Host::parse("intuit.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2318"),
                hosts: vec![
                    Host::parse("shopify.com").unwrap(),
                    Host::parse("myshopify.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2319"),
                hosts: vec![
                    Host::parse("concur.com").unwrap(),
                    Host::parse("concursolutions.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2320"),
                hosts: vec![
                    Host::parse("ebay.com").unwrap(),
                    Host::parse("ebay.at").unwrap(),
                    Host::parse("ebay.be").unwrap(),
                    Host::parse("ebay.ca").unwrap(),
                    Host::parse("ebay.ch").unwrap(),
                    Host::parse("ebay.cn").unwrap(),
                    Host::parse("ebay.co.jp").unwrap(),
                    Host::parse("ebay.co.th").unwrap(),
                    Host::parse("ebay.co.uk").unwrap(),
                    Host::parse("ebay.com.au").unwrap(),
                    Host::parse("ebay.com.hk").unwrap(),
                    Host::parse("ebay.com.my").unwrap(),
                    Host::parse("ebay.com.sg").unwrap(),
                    Host::parse("ebay.com.tw").unwrap(),
                    Host::parse("ebay.de").unwrap(),
                    Host::parse("ebay.es").unwrap(),
                    Host::parse("ebay.ie").unwrap(),
                    Host::parse("ebay.fr").unwrap(),
                    Host::parse("ebay.in").unwrap(),
                    Host::parse("ebay.it").unwrap(),
                    Host::parse("ebay.nl").unwrap(),
                    Host::parse("ebay.ph").unwrap(),
                    Host::parse("ebay.pl").unwrap(),
                    Host::parse("ebay.se").unwrap(),
                    Host::parse("ebay.vn").unwrap(),
                    Host::parse("gittigidiyor.com").unwrap(),
                    Host::parse("gmarket.co.kr").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2321"),
                hosts: vec![
                    Host::parse("schwab.com").unwrap(),
                    Host::parse("schwabplan.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2322"),
                hosts: vec![
                    Host::parse("hvfcu.org").unwrap(),
                    Host::parse("hvfcuonline.org").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2323"),
                hosts: vec![
                    Host::parse("firefox.com").unwrap(),
                    Host::parse("mozilla.org").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2324"),
                hosts: vec![
                    Host::parse("morganstanley.com").unwrap(),
                    Host::parse("morganstanleyclientserv.com").unwrap(),
                    Host::parse("stockplanconnect.com").unwrap(),
                    Host::parse("ms.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2325"),
                hosts: vec![
                    Host::parse("askubuntu.com").unwrap(),
                    Host::parse("mathoverflow.net").unwrap(),
                    Host::parse("serverfault.com").unwrap(),
                    Host::parse("stackapps.com").unwrap(),
                    Host::parse("stackexchange.com").unwrap(),
                    Host::parse("stackoverflow.com").unwrap(),
                    Host::parse("superuser.com").unwrap(),
                ],
            },
            EquivalentDomain {
                id: Id::from("2326"),
                hosts: vec![
                    Host::parse("kfc.com").unwrap(),
                    Host::parse("yumconnect.dev").unwrap(),
                ],
            },
        ]
    }
}

#[cfg(test)]
mod tests {
    use super::EquivalentDomain;

    /// This test asserts that we can parse all hosts that are
    /// otherwise unwraped (This isn't tested at compile time otherwise)
    #[test]
    fn test_equivalent_domains_parses() {
        assert_eq!(EquivalentDomain::list_default().len(), 70)
    }
}
