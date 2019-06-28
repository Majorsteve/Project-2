import React from 'react';
import './App.css';
import { fetchBrand } from './services/makeup'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchBrand();
    this.setState({
      fetchBrand: data
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
