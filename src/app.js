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
          onClose={() => this.handleOverlayClose()}
          row1="På Wärdshuset finns pizza"
          row2="för bagare att baka"
          row3="Och våra bästa grannar"
          row4="tog med oss dit att smaka"/>
        <Overlay id={2}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="På sportlovet i Edsåsdalen"
          row2="Om tiden kunde stanna"
          row3="Vi vill tillbaks och mysa mer"
          row4="med Greta, Olle, Hanna"/>
        <Overlay id={3} m4v
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Åka pulka"
          row2="och sjunga"
          row3="Det är sköj"
          row4="för de unga"/>
        <Overlay id={4} gif
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="När 5 ska bli 6"
          row2="får man improvisera"
          row3="På 8 kvadrat"
          row4="fick vi in ett rum mera"/>
        <Overlay id={5}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Mormor bjöd på tårta"
          row2="när Vide fyllde tre"
          row3="Han firades ordentligt"
          row4="med flugan lätt på sne"/>
        <Overlay id={6}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Det finns en krabat"
          row2="där inne i magen"
          row3="Men än dröjer lite"
          row4="innan hen får se dagen"/>
      </div>
    )
  }
}
export default App
