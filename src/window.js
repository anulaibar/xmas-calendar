import React from 'react'
import Text from './text'
import queryParams from './queryParams'

const Window = ({id, onClick, style}) => {

  let now
  if(queryParams()['day']){
    now = new Date(2016, 11, queryParams()['day'])
  } else {
    now = new Date()
  }
  const active = now >= new Date(2016, 11, id)
  const pulsate = now.getDate() == id

  const defaultStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    width: '7em',
    height: '7em',
    animation: pulsate ? 'pulsate 3s ease-in-out infinite' : '',
    margin: '1em .5em 0 .5em',
    color: active ? 'white' : 'black',
    backgroundColor: active ? 'red' : 'white',
    cursor: active ? 'pointer' : 'default',
    opacity: active ? '.8' : '.8'
  }

  return (
    <a onClick={() => { active && onClick(id) }}
      style={Object.assign(defaultStyle, style)}>
        <Text>{id}</Text>
    </a>
  )
}
export default Window
