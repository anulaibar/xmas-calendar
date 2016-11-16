import React, {Component} from 'react'
import Window from './window'
import Overlay from './overlay'

class App extends Component {

  constructor(){
    super()
    this.state = { activeOverlay: null}
    this.handleWindowClick = this.handleWindowClick.bind(this)
  }

  handleWindowClick(id){
    this.setState(
      {
        activeOverlay: id
      }
    )
  }

  handleOverlayClose(){
    this.setState(
      {
        activeOverlay: null
      }
    )
  }

  render() {
    return (
      <div>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'}}>
          <Window id={1}
            onClick={(id) => this.handleWindowClick(id)}
            style={{
            backgroundColor: 'deepPink'}}/>
          <Window id={2}
            onClick={(id) => this.handleWindowClick(id)}
            style={{
            backgroundColor: 'crimson'}}/>
          <Window id={3}
            onClick={(id) => this.handleWindowClick(id)}
            style={{
            backgroundColor: 'hotPink'}}/>
          <Window id={4}
            onClick={(id) => this.handleWindowClick(id)}
            style={{
            backgroundColor: 'black'}}/>
          <Window id={5}
            onClick={(id) => this.handleWindowClick(id)}
            style={{
            backgroundColor: 'yellow',
            color: 'black'}}/>
          <Window id={6}
            onClick={(id) => this.handleWindowClick(id)}
            style={{
            backgroundColor: 'rebeccaPurple',
            color: 'lime'}}/>
        </div>
        <Overlay id={1}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}/>
        <Overlay id={2}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}/>
        <Overlay id={3}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}/>
        <Overlay id={4}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}/>
      </div>
    )
  }
}
export default App
