import React,{Component} from 'react'

class Overlay extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    window.onkeyup = (event) => {
      // TODO: Change to ESC
      let p = 80
      if(event.keyCode == p){
          this.props.onClose()
      }
    }
  }

  render() {
    const active = this.props.activeOverlay == this.props.id

    return (
      <div>
        <div style={{
          position: 'absolute',
          top: active ? 0 : '-100vh',
          transition: 'all .5s',
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          opacity: '.7'}}/>
        <div onClick={() => this.props.onClose()} style={{
          display: 'block',
          position: 'absolute',
          top: active ? 0 : '-100vh',
          transition: 'all .5s',
          left: 0,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'}}>
          <div style={{
            backgroundColor: 'aliceBlue',
            color: 'black',
            borderRadius: '1em',
            zIndex: 10}}>
            <div onClick={() => this.props.onClose()} style={{
              textAlign: 'center',
              padding: '1em',
              font: '1em sans-serif',
              color: 'darkGray',
              borderBottom: '1px solid darkGray'}}>
              <a style={{cursor: 'pointer'}}>X</a>
            </div>
            <div>
              <img src={`/img/${this.props.id}.gif`}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Overlay
