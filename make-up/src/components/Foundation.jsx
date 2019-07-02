import React from 'react';
import { fetchFoundation } from '../services/makeup';
import { withRouter } from 'react-router-dom';

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
      <div id="list">
      {
          this.state.foundation.map((foundation) => (
            <div key={foundation.id} id="foundation" onClick={() => {
              this.props.setCurrentItem(foundation);
              this.props.history.push(`/makeupitem/${foundation.id}`)
            }}>
              <img src={foundation.api_featured_image} />
              <h3>{foundation.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }

}

export default withRouter(Foundation);