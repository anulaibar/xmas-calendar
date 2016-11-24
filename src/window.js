import React from 'react'
import Text from './text'
import queryParams from './queryParams'

const Window = ({id, onClick, style}) => {

  let now = new Date
  /* TODO: Used for testing, remove */
  now = new Date(2016,11,queryParams()['day'])
  const active = now >= new Date(2016,11,id)
  const pulsate = now.getDate() == id

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    color: 'white',
    width: '7em',
    height: '7em',
    animation: pulsate ? 'pulsate 3s ease-in-out infinite' : '',
    backgroundColor: 'deepPink',
    margin: '1em .5em 0 .5em',
    cursor: active ? 'pointer' : 'default',
    opacity: active ? '1' : '.5'
  }

  return (
    <a onClick={() => { active && onClick(id) }}
      style={Object.assign(defaultStyle, style)}>
        <Text>{id}.</Text>
    </a>
  )
}
export default Window
