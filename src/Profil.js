import './App.css';
import React, {Component} from 'react';
class Profil extends Component {
    state = {
        fullName:"Yassine Mezghani",
        bio:"dev web",
        imgSrc:"./avatar.png",
        profession:"ingenieur informatique",
        intervall: null,
        timer: 0,
        isVisible:false
      }

      componentDidMount() {
        console.log('3. componentDidMount()');
        this.setState({
          intervall: setInterval(() => {
            this.setState({ timer: this.state.timer + 1 });
          }, 1000),
        });
      }
      render(){
          return <div>
               {      this.state.fullName }  <hr /> 
{      this.state.bio }   <hr />
<img src={      this.state.imgSrc }/>   <hr />
{      this.state.profession }<hr/>
{this.state.timer}
          </div>
      }
}

export default Profil;

