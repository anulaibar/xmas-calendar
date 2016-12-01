import React from 'react'
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
    margin: '2em 1em 0 1em',
    animation: pulsate ? 'pulsate 3s ease-in-out infinite' : '',
    color: pulsate ? 'white' : 'black',
    backgroundColor: pulsate ? 'red' : active ? 'white' : 'transparent',
    cursor: active ? 'pointer' : 'default',
    opacity: active ? '.8' : '1'
  }

  return (
    <a onClick={() => { active && onClick(id) }}
      style={Object.assign(defaultStyle, style)}>
      <span style={{fontSize: '3em'}}>
        {id}
      </span>
    </a>
  )
}
export default Window
