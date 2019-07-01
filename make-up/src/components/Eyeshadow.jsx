import React from 'react';
import { fetchEyeshadow } from '../services/makeup';

class Eyeshadow extends React.Component {
  constructor() {
    super();
    this.state = {
      eyeshadow: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchEyeshadow();
    this.setState({
      eyeshadow: data
    });
  }

  render() {
    console.log(this.state.eyeshadow);

    return (
      <div id="eyeshadow-list">
        {
          this.state.eyeshadow.map((eyeshadow) => (
            <div key={eyeshadow.id} id="eyeshadow">
              <img src={eyeshadow.api_featured_image} />
              <h3>{eyeshadow.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Eyeshadow;