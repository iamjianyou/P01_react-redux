import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }

  /** Add ********************************************************/
  addNinja = (ninja) => {
    ninja.id = Math.random();
    // create ninjas to a new array
    let ninjas = [...this.state.ninjas, ninja]
    this.setState({
      ninjas: ninjas
    })
  }

  /** Delete ********************************************************/
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas: ninjas

    })
  }

  iClick = (e) => {
    console.log(e.target)
      this.setState({
      ninjas:[
        {name: 'jianyou', age: 22, belt: 'green'}
      ]
    })
  }
  
  /** componentDidMount componentDidUpdate ****************************/
  componentDidMount() {
    console.log('component mounted')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log('prevProps prevState')
  }

  /** render ********************************************************/
  render() {
    return (
      <div className="App">
        <h1> 戴天宇 </h1>
        <AddNinja addNinja={this.addNinja} />
        <Ninjas deleteNinja={this.deleteNinja} iClick={this.iClick} ninjas={this.state.ninjas} />

        
      </div>
    );
  }
}

export default App;