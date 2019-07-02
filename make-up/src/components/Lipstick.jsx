import React from 'react';
import { fetchLipstick } from '../services/makeup';
import { withRouter } from 'react-router-dom';

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
      <div id="list">
        {
          this.state.lipstick.map((lipstick) => (
            <div key={lipstick.id} id="lipstick" onClick={() => {
              this.props.setCurrentItem(lipstick);
              this.props.history.push(`/makeupitem/${lipstick.id}`)
            }}>
              <img src={lipstick.api_featured_image} />
              <h3>{lipstick.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }

}

export default withRouter(Lipstick);


