import React,{Component} from 'react'

class Overlay extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.onkeyup = (event) => {
      let esc = 27
      if(event.keyCode == esc){
        this.props.onClose()
      }
    }
  }

  render() {
    const active = this.props.activeOverlay == this.props.id

    return (
      <div>
        <div style={{
          position: 'fixed',
          top: active ? 0 : '-100vh',
          transition: 'all .5s',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: '.7'}}/>
        <div onClick={() => this.props.onClose()} style={{
          display: 'block',
          position: 'fixed',
          top: active ? 0 : '-100vh',
          transition: 'all .5s',
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>
          <div style={{position: 'relative'}}>
            <div onClick={() => this.props.onClose()} style={{
              font: '2em sans-serif',
              lineHeight: '0',
              color: 'white',
              position: 'absolute',
              top: '1em',
              right: '1em'}}>
              <a style={{cursor: 'pointer'}}>×</a>
            </div>
            <p style={{
              position: 'absolute',
              bottom: '1em',
              left: '1em',
              color: 'White',
              margin: 0}}>
              {this.props.children}
            </p>
            <img style={{
              width: '100%',
              borderRadius: '1em',
              zIndex: 10}}
              src={`/img/${this.props.id}.jpg`}/>
          </div>
        </div>
      </div>
    )
  }
}
export default Overlay
