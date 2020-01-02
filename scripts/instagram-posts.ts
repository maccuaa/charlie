import axios from "axios";

export interface Post {
  __typename: string;
  id: string;
  dimensions: {
    height: number;
    width: number;
  };
  display_url: string;
  display_resources: Array<Object>;
  is_video: boolean;
  tracking_token: string;
  edge_media_to_tagged_user: { edges: [] };
  accessibility_caption: string | null;
  edge_media_to_caption: {
    edges: Array<{
      node: {
        text: string;
      };
    }>;
  };
  shortcode: string;
  edge_liked_by: {
    count: number;
  };
  edge_media_to_comment: {
    count: number;
    page_info: Array<Object>;
    edges: [];
  };
  edge_media_to_sponsor_user: { edges: [] };
  comments_disabled: boolean;
  taken_at_timestamp: number;
  edge_media_preview_like: { count: number; edges: [] };
  gating_info: null;
  fact_check_information: null;
  media_preview: string;
  owner: { id: string; username: string };
  location: null;
  viewer_has_liked: boolean;
  viewer_has_saved: boolean;
  viewer_has_saved_to_collection: boolean;
  viewer_in_photo_of_you: boolean;
  viewer_can_reshare: boolean;
  thumbnail_src: string;
  thumbnail_resources: Array<Object>;
  comments: number;
  likes: number;
  media: string;
  text: string;
  time: number;
  type: string;
  url: string;
  username: string;
}

interface Options {
  count: number;
  filter?: (data: Post) => boolean;
}

const QUERY_HASH = "58b6785bea111c67129decbe6a448951";

const transformPosts = (posts: Array<{ node: Post }> = []) =>
  posts.map(({ node }) => ({
    ...node,
    comments: node.edge_media_to_comment ? node.edge_media_to_comment.count : 0,
    likes: node.edge_liked_by ? node.edge_liked_by.count : 0,
    media: node.display_url,
    text: node.edge_media_to_caption.edges
      .map(({ node: { text } }) => text)
      .join(""),
    time: node.taken_at_timestamp,
    type: node.is_video ? "video" : "image",
    url: `https://www.instagram.com/p/${node.shortcode}`,
    username: node.owner.username
  }));

const fetchPosts = async (
  id: string,
  posts: Post[] = [],
  cursor: any,
  options: Options
): Promise<Post[]> => {
  const postsLeft = options.count - posts.length;

  const response = await axios.get("https://www.instagram.com/graphql/query", {
    params: {
      query_hash: QUERY_HASH,
      variables: JSON.stringify({
        after: cursor,
        first: postsLeft,
        id
      })
    }
  });

  const {
    data: {
      user: {
        edge_owner_to_timeline_media: {
          edges: currentPosts,
          page_info: { end_cursor, has_next_page }
        }
      }
    }
  } = response.data;

  let newPosts = transformPosts(currentPosts);

  if (typeof options.filter === "function") {
    newPosts = newPosts.filter(options.filter);
  }

  if (has_next_page && posts.length + newPosts.length < options.count) {
    return fetchPosts(id, posts.concat(newPosts), end_cursor, options);
  }

  return posts.concat(newPosts.slice(0, postsLeft));
};

export const instagramPosts = async (
  username: string,
  options: Options
): Promise<Post[]> => {
  const {
    edge_owner_to_timeline_media: {
      edges: currentPosts,
      page_info: { end_cursor, has_next_page }
    },
    id
  } = await instagramUser(username);

  let newPosts = transformPosts(currentPosts);

  if (options.filter) {
    newPosts = newPosts.filter(options.filter);
  }

  if (has_next_page && newPosts.length < options.count) {
    return fetchPosts(id, newPosts, end_cursor, options);
  }

  return newPosts.slice(0, options.count);
};

const instagramUser = async (username: string) => {
  if (typeof username !== "string") {
    throw new TypeError(
      `Expected 'username' to be of type 'string' but received type '${typeof username}'`
    );
  }

  const url = `https://instagram.com/${username}`;
  const response = await axios.get(url, { params: { __a: 1 } });

  const {
    graphql: { user }
  } = response.data;

  return {
    ...user,
    description: user.biography,
    followers: user.edge_followed_by.count,
    following: user.edge_follow.count,
    fullName: user.full_name,
    posts: user.edge_owner_to_timeline_media.count,
    url,
    username,
    website: user.external_url
  };
};

export default instagramPosts;
