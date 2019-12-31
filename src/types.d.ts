declare module "instagram-posts" {
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
    edge_media_to_caption: { edges: Array<Object> };
    shortcode: string;
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

  export interface Options {
    count?: number;
    filter?: (data: Post) => boolean;
  }

  export default function instagramPosts(
    username: string,
    options?: Options
  ): Promise<Post[]>;
}
