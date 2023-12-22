/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';


const pageStyle = { textAlign: 'center' };


export const DemoPage = () => (
  <div style={ pageStyle }>
    <Head title='Demo-Page'/>
 
    <h1>"Hello World" Welcome to Gasket!</h1>
    <p>To get started, edit <code>pages/index.js</code> and save to reload.</p>
    <p>Next-JS Front end application built with Gasket Framework builder and Contentful CMS.</p>
   

  </div>
);

export default DemoPage;