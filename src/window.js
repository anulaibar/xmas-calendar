import React from 'react'
import Text from './text'

const Window = ({id, onClick, style}) => {

  let now = new Date
  /* TODO: Used for testing, remove */
  now = new Date(2016,11,4)
  const active = now >= new Date(2016,11,id)

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    color: 'white',
    width: '7em',
    height: '7em',
    backgroundColor: 'deepPink',
    margin: '1em .5em 0 .5em',
    cursor: active ? 'pointer' : 'default',
    opacity: active ? '.9' : '.1'
  }

  return (
    <a onClick={() => { onClick(id) }}
      style={Object.assign(defaultStyle, style)}>
        <Text>{id}.</Text>
    </a>
  )
}
export default Window
