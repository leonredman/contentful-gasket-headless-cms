import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

// import Link from 'next/link'

export default function ProductCard({ multiColumnItem }) {
  const { contentTitle, featuredImage, method, ctaText, ctaUrl } =
    multiColumnItem.fields;

  return (
    <div className="card" data-cy="card">
      <div className="featured" data-cy="img-wrapper">
        <Image
          src={"https:" + featuredImage.fields.file.url}
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          alt={featuredImage.fields.title}
          data-cy="image"
        />
      </div>
      <div className="info" data-cy="multi-column-section">
        <h3 className="cardTitle" data-cy="headline-string">
          {" "}
          {contentTitle}{" "}
        </h3>
        <div className="description" data-cy="description">
          {" "}
          {documentToReactComponents(method)}{" "}
        </div>
        {ctaText && ctaUrl && (
          <a href={ctaUrl} className="cta-style" data-cy="cta">
            {ctaText}
          </a>
        )}
      </div>

      <style jsx>{`
        .card {
          display: inline-block;
          width: 31%;
          margin: 10px;
          vertical-align: top;
          height: 100%;
        }

        .info {
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cardTitle {
          font-family: arial;
        }

        .description {
          min-height: 100px;
          width: 100%;
          font-family: arial;
        }

        .cta-style {
          width: 100px;
          padding: 10px 30px;
          background-color: black;
          color: white;
          font-family: arial;
          text-align: center;
          border: none;
          border-radius: 5px;
          text-decoration: none;
          margin-top: auto;
        }

        @media (max-width: 768px) {
          .card {
            display: block;
            width: 100%;
            margin: 20px 0;
          }
        }
      `}</style>
    </div>
  );
}
