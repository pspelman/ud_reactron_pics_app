import React from 'react'
import ImageCard from "./ImageCard";
import './ImageList.css'


const ImageList = props => {
  console.log(`ImageList.js: `, props.images)
  const imageDivs = props.images.map((image) => {
    return (
      <ImageCard key={image.id} image={image} />
      // <img src={urls.regular}
      //      key={id}
      //      alt={description}
      // />
    )
  })

  return (
    <div className='image-list'>
      {imageDivs}
    </div>
  )

}


export default ImageList