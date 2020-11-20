import * as React from "react";

import Layout from "../../components/Layout";

interface AffiliateLink {
  productURL: string;
  imageURL: string;
  productName: string;
}

const items: AffiliateLink[] = [
  {
    productURL:
      "https://www.amazon.ca/gp/product/B005AP3B7Y/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B005AP3B7Y&linkCode=as2&tag=thecharlied00-20&linkId=6dfb3e128049558ea9c62704bba3e280",
    imageURL:
      "https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B005AP3B7Y&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "KONG The Monkey",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B00444UKCQ/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00444UKCQ&linkCode=as2&tag=thecharlied00-20&linkId=baef7f23d710a7ef3d0ae9273e1cf5f6",
    imageURL:
      "https://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B00444UKCQ&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "Muttluks Dog Boots",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B07L79525K/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B07L79525K&linkCode=as2&tag=thecharlied00-20&linkId=3594621264ee293cbb6b4ddac1ab3678",
    imageURL:
      "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B07L79525K&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "Chuckit Zipflight Flying Ring",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B083FX7J3P/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B083FX7J3P&linkCode=as2&tag=thecharlied00-20&linkId=61cc14b99565663f56b4cf3e61b25228",
    imageURL:
      "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B083FX7J3P&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "Zacro Foldable Small Dog Pool",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B00B4UR0G2/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B00B4UR0G2&linkCode=as2&tag=thecharlied00-20&linkId=c2b98454d2cd2274e01ef5400b74c320",
    imageURL:
      "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B00B4UR0G2&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "KONG Wild Knots Squeaker Bear",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B07MHDDMGL/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B07MHDDMGL&linkCode=as2&tag=thecharlied00-20&linkId=17f0fba27b2080df2d5a08aaa99d46ad",
    imageURL:
      "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B07MHDDMGL&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "goDog Checkers Fat Rooster",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B01CVPEI8G/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B01CVPEI8G&linkCode=as2&tag=thecharlied00-20&linkId=57179762393c69023fd8f875f6a1ce2c",
    imageURL:
      "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B01CVPEI8G&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "Wahl Canada Groom Pro Pet Clipper Kit",
  },
  {
    productURL:
      "https://www.amazon.ca/gp/product/B07WZX5YF3/ref=as_li_tl?ie=UTF8&camp=15121&creative=330641&creativeASIN=B07WZX5YF3&linkCode=as2&tag=thecharlied00-20&linkId=4c93247773100c31df505bf9c1f48a1d",
    imageURL:
      "http://ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=CA&ASIN=B07WZX5YF3&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=thecharlied00-20",
    productName: "LED Dog Collar",
  },
];

const Toys = () => (
  <>
    <Layout>
      <div id="wrapper">
        {items.map((item) => (
          <div className="item">
            <a target="_blank" href={item.productURL}>
              <img src={item.imageURL} />
            </a>
            <div className="caption">{item.productName}</div>
          </div>
        ))}

        <style jsx>{`
          #wrapper {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }
          .item {
            margin: 8px;
            background-color: white;
            width: 250px;
          }
          .caption {
            text-align: center;
            color: #000;
            padding: 12px;
          }
          img {
            width: 250px;
            height: 250px;
          }
        `}</style>
      </div>
    </Layout>
  </>
);

// export async function getStaticProps() {
//   const { caption, display_url, shortcode } = await getLatestPostURL();

//   return {
//     props: {
//       caption,
//       display_url,
//       shortcode,
//     },
//   };
// }

export default Toys;
