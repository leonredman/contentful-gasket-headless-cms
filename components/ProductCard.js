import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import React from "react";

// import Link from 'next/link'

export default function ProductCard({ recipe }) {
  const { title, slug, cookingTime, thumbnail, method } = recipe.fields;
  return (
    <div className="card">
      <div className="featured">
        <Image
          src={"https:" + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="info">
        <h1 className="cardTitle"> {title} </h1>
        <div className="description"> {documentToReactComponents(method)} </div>
        <button className="cta-style">Get Started</button>
      </div>

      <style jsx>{`
        .card {
          display: inline-block;
          width: 31%;
          margin: 10px;
          vertical-align: top;
        }

        .info {
          display: flex;
          flex-direction: column;
        }

        .cardTitle {
          font-family: arial;
        }

        .description {
          width: 100%;
        }

        .cta-style {
          width: 160px;
          padding: 10px 30px;
          background-color: black;
          color: white;
          border: none;
          border-radius: 5px;
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
