import * as React from "react";

interface Props {
  caption: string;
  imageUrl: string;
  shortcode: string;
}

const LatestPost = ({ caption, imageUrl, shortcode }: Props) => {
  return (
    <div id="wrapper">
      <a href={`https://www.instagram.com/p/${shortcode}`}>
        <img src={imageUrl} />
      </a>
      <Caption caption={caption} />

      <style jsx>{`
        #wrapper {
          margin: 0;
        }

        a {
          margin: 0px;
          padding: 0px;
        }

        img {
          max-width: 100%;
        }
      `}</style>
    </div>
  );
};

const Caption = ({ caption }: { caption: string }) => {
  const first = caption.split("\n")[0];
  const [showAll, setShowAll] = React.useState(false);

  return (
    <div id="caption">
      {!showAll && (
        <>
          {first}
          <br />
          <button onClick={() => setShowAll(true)}>...more</button>
        </>
      )}
      {showAll && <span>{caption}</span>}

      <style jsx>{`
        #caption {
          text-align: left;
          white-space: pre-line;
          background-color: #fff;
          color: #000;
          margin-top: -4px;
          padding: 12px;
        }
        button {
          color: #888;
          background: unset;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default LatestPost;
