import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// import Link from 'next/link'




export default function ProductCard( {recipe}) {
    const { title, slug, cookingTime, thumbnail, method } = recipe.fields
  return (

    <div className="card">
       <div className="featured">
          <Image
            src={'https:' + thumbnail.fields.file.url } 
            width={thumbnail.fields.file.details.image.width}
            height={thumbnail.fields.file.details.image.height}
            />
        </div>
        <div className='info'>
          <div>New</div>
            <div>Eyebrow</div>
                <h1 className='cardTitle'> { title} </h1>
              
                <div className='description'> { documentToReactComponents(method)} </div>
                <button className='cta-style'>Get Started</button>
            </div>
      
            <style jsx>{`
        .card {
          display: inline-block;
          width:31%;
          margin: 10px;
        }
        .info {
          flex-direction: column; 
        }
        .cardTitle {
          font-family:arial;
        }
        
        .description {
          width:100%;
        }
        .cta-style{
          padding: 10px 30px;
          background-color: white;
          border-outline: 5px;
          border-radius: 5px;
        }
      `}</style>

    </div>
  )
}
