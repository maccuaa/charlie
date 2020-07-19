import * as React from "react";

interface Props {
  caption: string;
  imageUrl: string;
  shortcode: string;
}

const LatestPost = ({ caption, imageUrl, shortcode }: Props) => {
  console.log(caption);
  return (
    <div>
      <a href={`https://www.instagram.com/p/${shortcode}`}>
        <img src={imageUrl} />
      </a>
      {/* <pre>{caption}</pre> */}

      <style jsx>{`
        img {
          padding: 2px;
          background-color: #fff;
          max-width: 100%;
          border-radius: 8px;
          max-height: 80vh;
        }
        pre {
          text-align: left;
          font-family: inherit;
          white-space: pre-line;
        }
      `}</style>
    </div>
  );
};

export default LatestPost;
