import React, {Component} from 'react'
import Window from './window'
import Overlay from './overlay'

class App extends Component {

  constructor(){
    super()
    this.state = { activeOverlay: null}
    this.handleWindowClick = this.handleWindowClick.bind(this)
    this.order = [9,14,19,24,18,11,17,10,13,1,21,3,22,15,23,4,2,7,6,5,8,16,20,12]
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
    const windows = []
    for(let i = 0; i < this.order.length; i++){
      windows.push(<Window key={this.order[i]} id={this.order[i]} onClick={(id) => this.handleWindowClick(id)}/>)
    }

    return (
      <div style={{
        fontFamily: 'Georgia',
        fontWeight: 'bold'}}>
        <div style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap'}}>
          {windows}
        </div>
        <Overlay id={1}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}>
          På Wärdshuset finns pizza<br/>
          för bagare att baka<br/>
          Och våra bästa grannar<br/>
          tog med oss dit att smaka
        </Overlay>
        <Overlay id={2}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}>
          På sportlovet i Edsåsdalen<br/>
          Om tiden kunde stanna<br/>
          Vi vill tillbaks och mysa mer<br/>
          med Greta, Olle, Hanna
        </Overlay>
        <Overlay id={3} video
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}>
          Åka pulka<br/>
          och sjunga<br/>
          Det är sköj<br/>
          för de unga
        </Overlay>
      </div>
    )
  }
}
export default App
