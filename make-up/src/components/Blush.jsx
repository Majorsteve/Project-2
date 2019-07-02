import React from 'react';
import { fetchBlush } from '../services/makeup';
import { withRouter } from 'react-router-dom';

class Blush extends React.Component {
  constructor() {
    super();
    this.state = {
      blush: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchBlush();
    this.setState({
      blush: data
    });
  }

  render() {
    console.log(this.state.blush);

    return (
      <div id= "list">
        {
          this.state.blush.map((blush) => (
            <div key={blush.id} id="blush" onClick={() => {
              this.props.setCurrentItem(blush);
              this.props.history.push(`/makeupitem/${blush.id}`)
            }}>
              <img src={blush.api_featured_image} />
              <h3>{blush.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }
}

export default withRouter(Blush);