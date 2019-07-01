import React from 'react';
import { fetchEyebrow } from '../services/makeup';

class Eyebrow extends React.Component {
  constructor() {
    super();
    this.state = {
      eyebrow: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchEyebrow();
    this.setState({
      eyebrow: data
    });
  }

  render() {
    return (
      <div id="eyebrow-list">
        {
          this.state.eyebrow.map((eyebrow) => (
            <div key={eyebrow.id} id="eyebrow">
              <img src={eyebrow.api_featured_image} />
              <h3>{eyebrow.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Eyebrow;