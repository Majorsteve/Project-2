import React from 'react';
import { fetchFoundation } from '../services/makeup';

class Foundation extends React.Component {
  constructor() {
    super();
    this.state = {
      foundation: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchFoundation();
    this.setState({
      foundation: data
    });
  }

  render() {
    
    return (
      <div id="foundation-list">
      {
          this.state.foundation.map((foundation) => (
            <div key={foundation.id} id="foundation">
              <img src={foundation.api_featured_image} />
              <h3>{foundation.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }

}

export default Foundation;