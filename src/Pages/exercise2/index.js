import React, { useState, useEffect } from 'react'
import data from './data.json'
import './style.css'

const Exercise2 = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleTabClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  if (isMobile) {
    return (
      <div class="accordion-body">
        <div class="simplicity-text-mobile">Simplicity is Sophistication</div>
        <div class="responsive-accordion">
          {data.map((item, index) => (
            <div
              key={index}
              class={`tab ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {item.title}
              {activeIndex === index && (
                <div class="content" dangerouslySetInnerHTML={{ __html: item.content }} />
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div class="tabs-body">
      <div class="responsive-tabs">
        <div class="tabs">
          {data.map((item, index) => (
            <div
              key={index}
              class={`tab ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {item.title}
            </div>
          ))}
        </div>
        {activeIndex !== null ? (<div
          class="content"
          dangerouslySetInnerHTML={{ __html: data[activeIndex]?.content }}
        />):
        <div class="simplicity-text-desktop">Simplicity is Sophistication</div>
        }


      </div>
    </div>
  )
}

export default Exercise2
