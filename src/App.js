import React from 'react';
import './App.css';
import Header from './components/header'
import Landing from './pages/landing'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      heigth: 0
    }
  }
componentDidMount(){
  const head = document.querySelector('header')
  console.log(head.offsetHeight)
  this.setState({heigth:head.offsetHeight})
}
 render(){
   
   return (
    <div className='page'>
    <Header/>
    <Landing marginTop={this.state.heigth} />
    </div>
  );
 }
}

export default App;
