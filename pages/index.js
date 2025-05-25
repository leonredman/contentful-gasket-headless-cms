/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
// import GasketEmblem from '@gasket/assets/react/gasket-emblem';

import { createClient } from "contentful";
import Marquee from "../components/Marquee";
import ProductCard from "../components/ProductCard";

// const logoStyle = { width: '250px', height: '250px' };
const pageStyle = { color: "black" };
const headlineStyle = { textAlign: "center" };
const containerStyle = { margin: "40px" };

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const recipeRes = await client.getEntries({ content_type: "recipe" });
  const marqueeRes = await client.getEntries({
    content_type: "fullWidthMarquee",
  });

  return {
    props: {
      recipes: recipeRes.items,
      marqueeData: marqueeRes.items,
    },
  };
}

export const IndexPage = ({ recipes, marqueeData }) => {
  console.log("marqueeData[0]:", marqueeData[0]);
  console.log("Full Width Marquee Entry:", marqueeData);
  console.log("Recipes (card data):", recipes);

  return (
    <div style={pageStyle}>
      <Head title="Home" />

      {marqueeData[0]?.fields && <Marquee data={marqueeData[0]} />}

      <h1 style={headlineStyle}>Contentful Sandbox</h1>
      <h2 style={headlineStyle}>Multi-column</h2>
      <div style={containerStyle} className="container">
        {recipes.map((recipe) => (
          <ProductCard key={recipe.sys.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
