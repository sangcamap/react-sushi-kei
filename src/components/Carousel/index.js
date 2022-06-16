import React, { useEffect, useRef, useState } from 'react'
import { image } from '~/assets'
import './Carousel.scss'

export default function Carousel() {
const [slideIndex, setSlideIndex] = useState(0)
const ref = useRef() 
const handleNextSLide = () => {
    setSlideIndex(slideIndex + 1)
    if (slideIndex === image.slide.length - 1) setSlideIndex(0)
    clearTimeout(ref.current)
}

const handlePrevSLide = () => {
    setSlideIndex(slideIndex - 1)
    clearTimeout(ref.current)
    if (slideIndex === 0) setSlideIndex(image.slide.length - 1)
}

useEffect(() => {
    
   ref.current = setTimeout(() => handleNextSLide(), 3000)
})

  return (
    <div className='Carousel'>
        <img src={image.slide[slideIndex]} className = "Carousel__item"></img>
        <button className='Carousel__nextBtn' onClick={handleNextSLide}><i className="fa-solid fa-angle-right"></i></button>
        <button className='Carousel__prevBtn' onClick={handlePrevSLide}><i className="fa-solid fa-angle-left"></i></button>
    </div>
  )
}
