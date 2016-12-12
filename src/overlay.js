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

    const style = {
      width: '100%',
      borderRadius: '1em',
      zIndex: 10
    }
    const m4v = this.props.m4v && (
      <video controls style={style}
        src={`https://s3.eu-central-1.amazonaws.com/xmas-cal/${this.props.id}.m4v`}/>
    )
    const gif = this.props.gif && (
      <img style={style}
        src={`/img/${this.props.id}.gif`}/>
    )
    const jpg = (
      <img style={style}
        src={`/img/${this.props.id}.jpg`}/>
    )
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
          <div style={{
            position: 'relative',
            width: '600px'}}>
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
              color: 'White',
              margin: 0}}>
              <span style={{backgroundColor: 'rgba(0,0,0,.7)'}}>
                {this.props.row1}
              </span><br/>
              <span style={{backgroundColor: 'rgba(0,0,0,.7)'}}>
                {this.props.row2}
              </span><br/>
              <span style={{backgroundColor: 'rgba(0,0,0,.7)'}}>
                {this.props.row3}
              </span><br/>
              <span style={{backgroundColor: 'rgba(0,0,0,.7)'}}>
                {this.props.row4}
              </span>
            </p>
            {m4v || gif || jpg}
          </div>
        </div>
      </div>
    )
  }
}
export default Overlay
