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
        <Overlay id={7}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Alvar spelar i EIK"
          row2="kämpar och har kul"
          row3="Jagar boll och skjuter mål"
          row4="ända fram till jul"/>
        <Overlay id={8}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Lott 69"
          row2="blev vår till slut"
          row3="Efter 4 månader"
          row4="åkte vi ut"/>
        <Overlay id={9}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Den 12e maj"
          row2="efter midnatt"
          row3="Kom vår fine pöjk"
          row4="liten som en katt"/>
        <Overlay id={10}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Söte Egil"
          row2="en liten man"
          row3="Livets mirakel"
          row4="det är han"/>
        <Overlay id={11}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Coke zero"
          row2="är väldigt bra"
          row3="Mot en zombie"
          row4="som dig vill ta"/>
        <Overlay id={12}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Yayoi Kusama"
          row2="på Moderna"
          row3="Det var prickigt"
          row4="hon är en stjärna"/>
        <Overlay id={13}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Kom på grillparty"
          row2="om du vill"
          row3="Vi ärvde brf:ens"
          row4="gamla grill"/>
        <Overlay id={14} m4v
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="I Fårösund"
          row2="på Familjedagen"
          row3="Hoppar Alvar"
          row4="säck i hagen"/>
        <Overlay id={15} textAlign="right"
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Till Ekstakusten"
          row2="åkte vi för att leka,"
          row3="köra fyrhjuling, bada"
          row4="och bara steka"/>
        <Overlay id={16} slider textAlign="right"
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Choi Jeong Hwa ♥️ plast"
          row2="Ernesto Neto ♥️ garn"
          row3="På Kiasma i Helsingfors"
          row4="lekte små som stora barn"/>
        <Overlay id={17}
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Fafa's falafel"
          row2="på Stora Robertsgatan"
          row3="Vi blev förvånade"
          row4="den var god som satan"/>
        <Overlay id={18} m4v textAlign="right"
          activeOverlay={this.state.activeOverlay}
          onClose={() => this.handleOverlayClose()}
          row1="Skrivis är klurigt"
          row2="lurigt och glatt"
          row3="Så stolt man kan bli"
          row4="av en dansande katt"/>
      </div>
    )
  }
}
export default App
