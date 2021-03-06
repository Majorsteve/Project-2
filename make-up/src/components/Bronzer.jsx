import React from 'react';
import { fetchBronzer } from '../services/makeup';
import { withRouter } from 'react-router-dom';

class Bronzer extends React.Component {
  constructor() {
    super();
    this.state = {
      bronzer: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchBronzer();
    this.setState({
      bronzer: data
    });
  }

  render() {

    return (
      <div id="list">
        {
          this.state.bronzer.map((bronzer) => (
            <div key={bronzer.id} id="bronzer" onClick={() => {
              this.props.setCurrentItem(bronzer);
              this.props.history.push(`/makeupitem/${bronzer.id}`)
            }}>
              <img src={bronzer.api_featured_image} />
              <h3>{bronzer.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }

}

export default withRouter(Bronzer);