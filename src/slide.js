import React from 'react'

const Slide = ({windowId, id, activeSlide, style, children}) => {

  const imageStyle = {
          zIndex: 0,
          position: 'absolute'
  }
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      opacity: activeSlide == id ? 1 : 0,
      transition: 'all 1s ease-in-out'}}>
      <div>
        {children}
      </div>
      <img
        src={`/img/${windowId}-${id}.jpg`}
        style={Object.assign(style, imageStyle)}/>
    </div>
  )
}

export default Slide
