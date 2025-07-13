/* eslint-disable no-unused-vars */
import { createClient } from "contentful";
import React from "react";
import Head from "../components/head";
import Header from "../components/Header";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";

const pageStyle = { color: "black" };
const headlineStyle = { textAlign: "center" };
const containerStyle = { margin: "40px" };

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const pageRes = await client.getEntries({
    content_type: "page",
    "fields.slug": "sho-daddy",
    include: 2,
  });

  const page = pageRes.items[0];

  console.log("Fetched Page:", page);

  return {
    props: {
      page,
    },
  };
}

export const IndexPage = ({ page }) => {
  if (!page || !page.fields) {
    return (
      <div data-cy="error" style={{ padding: "2rem", color: "red" }}>
        No page content PageNotFoundError
      </div>
    );
  }
  const sections = page?.fields?.sections || [];

  console.log("Sections:", sections);

  return (
    <div style={pageStyle}>
      <Header />
      <Head title={page.fields.title || "Sho-Daddy"} />

      {sections.map((section, index) => {
        const type = section.sys.contentType.sys.id;

        console.log("Section Type:", section.sys.contentType.sys.id);

        switch (type) {
          case "fullWidthMarquee":
            return <Marquee key={index} data={section} />;

          case "multiColumn":
            console.log("Multi-column items:", section.fields.items);

            return (
              <div key={index} className="container" style={containerStyle}>
                {section.fields.title && (
                  <h2 style={headlineStyle}>{section.fields.title}</h2>
                )}
                <div className="grid" data-cy="multi-column-wrapper">
                  {section.fields.items?.map((item) => (
                    <ProductCard key={item.sys.id} multiColumnItem={item} />
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
      <style jsx>{`
        body {
          overflow-x: hidden;
        }
        .grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 20px;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
