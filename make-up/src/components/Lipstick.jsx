import React from 'react';
import { fetchLipstick } from '../services/makeup';

class Lipstick extends React.Component {
  constructor() {
    super();
    this.state = {
      lipstick: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchLipstick();
    this.setState({
      lipstick: data
    });
  }

  render() {
    return (
      <div id="lipstick-list">
        {
          this.state.lipstick.map((lipstick) => (
            <div key={lipstick.id} id="lipstick">
              <img src={lipstick.api_featured_image} />
              <h3>{lipstick.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }

}

export default Lipstick;


