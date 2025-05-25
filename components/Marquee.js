// updated marquee
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

export default function Marquee({ data }) {
  const {
    fullWidthImage,
    fullWidthHeading,
    fullWidthEyebrow,
    fullWidthDescription,
  } = data.fields;
  return (
    <div className="marqueeContainer">
      <div className="heroWrapper">
        <Image
          src={"https:" + fullWidthImage.fields.file.url}
          width={fullWidthImage.fields.file.details.image.width}
          height={fullWidthImage.fields.file.details.image.height}
          alt={fullWidthHeading}
          className="marqueeImage"
        />

        <div className="heroContent">
          <div className="eyebrow">{fullWidthEyebrow}</div>
          <h1 className="marqueeTitle">{fullWidthHeading}</h1>
          <div className="marqueeDescription">
            {documentToReactComponents(fullWidthDescription)}
          </div>
          <button className="cta-style">Get Started</button>
        </div>
      </div>

      <style jsx>{`
        .heroWrapper {
          position: relative;
        }

        .marqueeImage {
          width: 100%;
          height: auto;
          display: block;
        }

        .heroContent {
          font-family: arial;
          position: absolute;
          top: 50%;
          left: 5%;
          transform: translateY(-50%);
          color: black;
          max-width: 30%;
          padding: 20px;
          // background: rgba(0, 0, 0, 0.4);
          border-radius: 8px;
        }

        .eyebrow {
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 1px;
          margin-bottom: 10px;
        }

        .marqueeTitle {
          font-size: 2.5rem;
          margin: 0 0 10px 0;
        }

        .marqueeDescription {
          margin-bottom: 20px;
        }

        .cta-style {
          padding: 10px 20px;
          font-weight: bold;
          background-color: white;
          color: black;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .heroContent {
            max-width: 90%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
          }

          .marqueeTitle {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </div>
  );
}
