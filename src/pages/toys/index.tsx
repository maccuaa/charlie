import * as React from "react";

import Layout from "../../components/Layout";

const Toys = () => (
  <>
    <Layout>
      <h3>Coming Soon!</h3>

      <style jsx>{`
        h3 {
          text-align: center;
        }
      `}</style>
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
