// updated marquee
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

export default function Marquee({ fullWidthMarquee }) {
  const {
    fullWidthImage,
    fullWidthHeading,
    fullWidtEyebrow,
    fullWidthDescription,
  } = recipe.fields;
  return (
    <div className="marqueeContainer">
      <div className="heroBackground">
        <div className="marqueeImage">
          <Image
            src={"https:" + fullWidthImage.fields.file.url}
            width={fullWidthImage.fields.file.details.image.width}
            height={fullWidthImage.fields.file.details.image.height}
          />
        </div>
        <div className="info">
          <div>New</div>
          <div>Eyebrow</div>
          <h1 className="marqueeTitle"> {title} </h1>

          <div className="marqueeDescription">
            {" "}
            {documentToReactComponents(fullWidthDescription)}{" "}
          </div>
          <button className="cta-style">Get Started</button>
        </div>

        <style jsx>{`
          .marqueeImage {
            width: 100%;
          }
        `}</style>
      </div>
    </div>
  );
}
