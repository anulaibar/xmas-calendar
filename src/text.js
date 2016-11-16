import React from 'react'

const Text = ({children}) => {

  return <span style={{
    fontFamily: 'Georgia',
    fontWeight: 'bold',
    fontSize: '3em'}}>
    {children}
</span>

}
export default Text
