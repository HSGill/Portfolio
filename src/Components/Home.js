import React from 'react';
import Projects from './Projects';
import image from "../images/HG-logo.png";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';

//import logo from './logo.svg';
import './Home.css';
class Home extends React.Component {
  constructor(props) {
    super();
    this.state ={
      proj:[],
      route:'home'
    }
  }
  componentDidMount (){
    fetch('https://api.github.com/user/repos', {
      method:'GET',
      headers: {
         'Authorization': 'Bearer ' + 'ea51c0b97bfe324b6418c54e04d026c88dc7c60b', 
         'Content-Type': 'application/json'
      }
   })
   .then(response=>response.json())
   .then(users=> {this.setState({proj: users})})
   .catch(error=> console.log(error));
  }
  render() {
    return (
      <div className="container">
      <Link style={{  color: 'inherit', textDecoration: 'inherit'}} to='/'>
       <img className="logo" src={image} alt="portfolio" ></img>
        </Link>

      {/* <Particles className='particles' params={particlesOptions}></Particles> */}
        <Projects projGit={this.state.proj}></Projects>
        
      </div>
    );
  }
}

export default Home;
