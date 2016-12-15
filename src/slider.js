import React, {Component} from 'react'
import Slide from './slide'

class Slider extends Component {

  constructor(props){
    super(props)
    this.state = { activeSlide: 0 }
    this.next = this.next.bind(this)
    this.lastSlide = 2
  }

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.next()
    }, 5000)
  }

  next() {
    this.setState({
      activeSlide: this.state.activeSlide < this.lastSlide ? this.state.activeSlide + 1 : 0
    })
  }

  render() {
    let slides = []
    for(let i = 0; i <= this.lastSlide; i++){
      slides.push(
        <Slide key={i}
          windowId={this.props.windowId} id={i}
          activeSlide={this.state.activeSlide}
          style={this.props.style}/>
      )
    }
    return (
      <div style={{
        position: 'relative'}}>
        {slides}
        <img src={`/img/${this.props.windowId}-0.jpg`} style={{
          zIndex: 0,
          opacity: 0,
          position: 'relative'}}/>
      </div>
    )
  }
}

export default Slider
