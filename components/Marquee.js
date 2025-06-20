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
    ctaText,
    ctaUrl,
  } = data.fields;

  const fullWidthImageUrl = "https:" + fullWidthImage.fields.file.url;

  return (
    <div className="marqueeContainer">
      <div className="heroWrapper">
        <div className="heroDesktopImage">
          <Image
            src={"https:" + fullWidthImage.fields.file.url}
            width={fullWidthImage.fields.file.details.image.width}
            height={fullWidthImage.fields.file.details.image.height}
            alt={fullWidthHeading}
            className="marqueeImage"
          />
        </div>

        <div
          className="heroMobileBg"
          style={{ backgroundImage: `url(${fullWidthImageUrl})` }}
        ></div>

        <div className="heroContent" data-cy="marquee-start">
          <div className="eyebrow" data-cy="eyebrow">
            {fullWidthEyebrow}
          </div>
          <h1 className="marqueeTitle" data-cy="headline">
            {fullWidthHeading}
          </h1>
          <div className="marqueeDescription" data-cy="description">
            {documentToReactComponents(fullWidthDescription)}
          </div>
          {ctaText && ctaUrl && (
            <a href={ctaUrl} className="cta-style">
              {ctaText}
            </a>
          )}
        </div>
      </div>

      <style jsx>{`
        .heroWrapper {
          position: relative;
        }

        .heroDesktopImage {
          display: block;
        }

        .heroMobileBg {
          display: none;
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
          border-radius: 8px;
          z-index: 2;
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
          text-decoration: none;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .heroWrapper {
            height: 75vh;
            position: relative;
            overflow: hidden;
          }

          .heroDesktopImage {
            display: none;
          }

          .heroMobileBg {
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-image: url("https:" + fullWidthImage.fields.file.url);
            background-size: cover;
            background-position: left center;
            z-index: 1;
          }

          .heroContent {
            position: relative;
            z-index: 2;
            padding: 20px;
            width: 100%;
            height: 100%;
            max-width: 85%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start; /* Push content higher */
            align-items: flex-start;
            color: black;
            box-sizing: border-box;
          }

          .heroContent > * {
            max-width: 90%;
          }

          .marqueeTitle {
            font-size: 2.2rem;
            margin-bottom: 12px;
          }

          .cta-style {
            width: 100%;
            padding: 12px;
            margin-top: 20px;
            text-align: center;
            align-self: center;
          }
        }
      `}</style>
    </div>
  );
}
