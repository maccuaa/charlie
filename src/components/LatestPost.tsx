import React from "react";

interface Props {
  caption: string;
  imageUrl: string;
  shortcode: string;
}

const LatestPost = ({ caption, imageUrl, shortcode }: Props) => {
  const imgRef = React.useRef<HTMLImageElement>(null);

  const [width, setWidth] = React.useState<null | number>(null);

  React.useEffect(() => {
    setWidth(imgRef.current?.width ?? null);
  });

  return (
    <div id="wrapper">
      <a href={`https://www.instagram.com/p/${shortcode}`}>
        <img src={imageUrl} ref={imgRef} />
      </a>

      {width !== null && <Caption caption={caption} width={width} />}

      <style jsx>{`
        #wrapper {
          margin: 0;
          text-align: center;
        }

        a {
          margin: 0px;
          padding: 0px;
        }

        img {
          max-width: 100%;
          max-height: 800px;
        }
      `}</style>
    </div>
  );
};

const Caption = ({ caption, width }: { caption: string; width: number }) => {
  const first = caption.split("\n")[0];
  const [showAll, setShowAll] = React.useState(first === caption);

  return (
    <div id="caption-wrapper">
      <div id="caption">
        {!showAll && (
          <>
            {first}
            <br />
            <button onClick={() => setShowAll(true)}>...more</button>
          </>
        )}
        {showAll && <span>{caption}</span>}
      </div>
      <style jsx>{`
        #caption-wrapper {
          width: ${width}px;
          margin: 0 auto;
        }
        #caption {
          text-align: left;
          white-space: pre-line;
          background-color: #fff;
          color: #000;
          margin: 0 auto;
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
