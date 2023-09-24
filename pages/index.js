/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
// import GasketEmblem from '@gasket/assets/react/gasket-emblem';

import { createClient } from 'contentful';
import ProductCard from '../components/ProductCard';

// const logoStyle = { width: '250px', height: '250px' };
const pageStyle = { color: 'black' };
const headlineStyle = { textAlign: 'center' };
const containerStyle= { margin: '40px' };


export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'recipe' })

  return {
    props: {
      recipes: res.items,
      fullWidthMarquee: res.items
    }
  }
}


export const IndexPage = ( {recipes}) => (
  console.log(recipes),

  <div style={ pageStyle }>
     <Head title='Home'/>
      <h1 style={ headlineStyle }>Contentful Sandbox</h1> 
        <h2 style={ headlineStyle }>Multi-column</h2>
          <div style={ containerStyle } className='container'>
             {recipes.map(recipe => (
                <ProductCard key={recipe.sys.id} recipe={recipe}/>
             ))}

         
        </div>
  </div>
 

);

export default IndexPage;
