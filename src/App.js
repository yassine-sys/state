import './App.css';
import React, {Component} from 'react';
import Profil from './Profil.js'


class App extends Component {
  state = {
    
    isVisible:false
  }
  toggleVisibility=()=>{
    this.setState({
      isVisible: !this.state.isVisible
    })
  }
  render() {

  return (
    <div className="App">

<button onClick={this.toggleVisibility}>{this.state.isVisible? "hide" : "show"} </button>
{ this.state.isVisible && <Profil/> } 


  

</div>
  
  );
}
}

export default App;
