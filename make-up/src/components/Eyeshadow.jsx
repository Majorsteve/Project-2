import React from 'react';
import { fetchEyeshadow } from '../services/makeup';
import { withRouter } from 'react-router-dom';

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

    return (
      <div id="list">
        {
          this.state.eyeshadow.map((eyeshadow) => (
            <div key={eyeshadow.id} id="eyeshadow" onClick={() => {
              this.props.setCurrentItem(eyeshadow);
              this.props.history.push(`/makeupitem/${eyeshadow.id}`)
            }}>
              <img src={eyeshadow.api_featured_image} />
              <h3>{eyeshadow.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }
}

export default withRouter(Eyeshadow);