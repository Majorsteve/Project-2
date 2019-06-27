import React from 'react';
import './App.css';
import { fetchData } from './services/makeup'

class App extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        data: []
      }
    }

    componentDidMount  = async () => {
      const data = await fetchData();
      this.setState({
        fetchData: data
      });
      }
  
  render() {
    return (
      <div className="App">
        <h1>Hello
      </h1>
      
      </div>
    );
  }
}
// console.log(fetchData)
export default App;
