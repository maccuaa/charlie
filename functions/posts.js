const instagramPosts = require("instagram-posts");

exports.handler = async event => {
  if (event.httpMethod !== "GET") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log("Fetching posts...");

  // const posts = await instagramPosts("the.charlie.dood");
  const posts = [
    {
      __typename: "GraphImage",
      id: "2195151476763366864",
      dimensions: { height: 1080, width: 1080 },
      display_url:
        "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=c18293837196d9773eede16b68c4ea49&oe=5E98F58C",
      display_resources: [
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=3dc456106ae615e3874eb74ee7666809&oe=5E963569",
          config_width: 640,
          config_height: 640
        },
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s750x750/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=89110a1de5c09289621d4b0e97b8c13f&oe=5EAA1E69",
          config_width: 750,
          config_height: 750
        },
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=c18293837196d9773eede16b68c4ea49&oe=5E98F58C",
          config_width: 1080,
          config_height: 1080
        }
      ],
      is_video: false,
      tracking_token:
        "eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjpmYWxzZSwidXVpZCI6Ijg4YTI3N2Q4ODk3ZjQ2Yzc4ZWMzNWMxZmYxNTk0OGY5MjE5NTE1MTQ3Njc2MzM2Njg2NCJ9LCJzaWduYXR1cmUiOiIifQ==",
      edge_media_to_tagged_user: { edges: [] },
      accessibility_caption: null,
      edge_media_to_caption: {
        edges: [
          {
            node: {
              text:
                "You can't go to hockey 🏒 without me, I'm the MVP!🏆.\n.\n.\n.\n.\n#charliedoodle #goldendoodle #doodle #doubledoodle #minigoldendoodle #doodletales #fluffy #buzzfeedanimals #dogmodel #dogsofinstagram #instadogs #goldendoodlesofinstagram #goldendoodlepuppy #goldendoodlef1b #hockey #puppiesofinstagram #hockeydog #puppylove #cutepuppies #hockeynightincanada #lovemydog #instapet #doglovers #mvp #dogsofinstaworld #doodlesofinstagram #puppiesofinstagram #dogoftheday #doodlesoftheworld #doodlenation"
            }
          }
        ]
      },
      shortcode: "B52vqNAp5XQ",
      edge_media_to_comment: {
        count: 0,
        page_info: { has_next_page: false, end_cursor: null },
        edges: []
      },
      edge_media_to_sponsor_user: { edges: [] },
      comments_disabled: false,
      taken_at_timestamp: 1575902469,
      edge_media_preview_like: { count: 32, edges: [] },
      gating_info: null,
      fact_check_information: null,
      media_preview:
        "ACoqt3ZKpuUZIIIHryOPxGatxqEUAcAf/rqjeEhGwcEA/pzWC1xcOSxYkjjjpj2A498j60DNDUn/AHxGcZVR1rOQFyXBztBPXnp1oMxlYeaQ3AyQPQcDPr6+ppkYVXPBbrwOoGe/H+e9IDYsJGC5OCMEtjvgcHIzjPcdD1HORQbuUngDH0NViVRWX7ruABjuCc9Ox7YrqYoAiKp/hUD8hTQNGPfttQ+/H6c1iW5lRj5TbccZP9Otauqkg4Hbp+Lf4VnwgFBkcDv05P8A9epbaWhSSb1BbfK7myeT04H/ANf+XSlWRXBkYmPbhBtxlup5H9RTJzgcE88Yzx/9f+vektmXBSQfKcY4/P8A/XSV7XG7XsXLENM6KRt2tk+uOuOfcfrXSFjWHpS4ZzgDYNo5znJ659MVvhRVEnN6gW+UnklefqMjFQKAfptx/wDW/CtggEn/AHm/nWdaKPMxj/O6hMCqVwM43bOfbj1qspyP6Vb1Bj0zxtXj8BVAUyS3ay+RIr+h59x/n9RXXBsjI5Brjn7/AO6K6xeg+lAz/9k=",
      owner: { id: "20906864135", username: "the.charlie.dood" },
      location: null,
      viewer_has_liked: false,
      viewer_has_saved: false,
      viewer_has_saved_to_collection: false,
      viewer_in_photo_of_you: false,
      viewer_can_reshare: true,
      thumbnail_src:
        "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=3dc456106ae615e3874eb74ee7666809&oe=5E963569",
      thumbnail_resources: [
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s150x150/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=d5f0329cc8f68dbb4e67468b927f7772&oe=5EB108CE",
          config_width: 150,
          config_height: 150
        },
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s240x240/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=a5db8521a88837bb1609b1cc5165b062&oe=5EB07584",
          config_width: 240,
          config_height: 240
        },
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=1633472c495954c944159bcc629f2ab9&oe=5EA32E3E",
          config_width: 320,
          config_height: 320
        },
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/s480x480/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=a2dd831731f03aabc05b9c916ee7e7eb&oe=5E9B4E64",
          config_width: 480,
          config_height: 480
        },
        {
          src:
            "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/sh0.08/e35/s640x640/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=3dc456106ae615e3874eb74ee7666809&oe=5E963569",
          config_width: 640,
          config_height: 640
        }
      ],
      comments: 0,
      likes: 0,
      media:
        "https://instagram.fybz1-1.fna.fbcdn.net/v/t51.2885-15/e35/78731053_169550220787190_3518640742916441819_n.jpg?_nc_ht=instagram.fybz1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=zNdHSmXICvMAX9gwkwJ&oh=c18293837196d9773eede16b68c4ea49&oe=5E98F58C",
      text:
        "You can't go to hockey 🏒 without me, I'm the MVP!🏆.\n.\n.\n.\n.\n#charliedoodle #goldendoodle #doodle #doubledoodle #minigoldendoodle #doodletales #fluffy #buzzfeedanimals #dogmodel #dogsofinstagram #instadogs #goldendoodlesofinstagram #goldendoodlepuppy #goldendoodlef1b #hockey #puppiesofinstagram #hockeydog #puppylove #cutepuppies #hockeynightincanada #lovemydog #instapet #doglovers #mvp #dogsofinstaworld #doodlesofinstagram #puppiesofinstagram #dogoftheday #doodlesoftheworld #doodlenation",
      time: 1575902469,
      type: "image",
      url: "https://www.instagram.com/p/B52vqNAp5XQ",
      username: "the.charlie.dood"
    }
  ];

  console.log("Successfully got posts");

  return {
    statusCode: 200,
    body: JSON.stringify(posts)
  };
};
