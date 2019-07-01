import React from 'react';
import { fetchEyeliner } from '../services/makeup';
import { withRouter } from 'react-router-dom';

class Eyeliner extends React.Component {
  constructor() {
    super();
    this.state = {
      eyeliner: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchEyeliner();
    this.setState({
      eyeliner: data
    });
  }

  render() {
    console.log(this.state.eyeliner);

    return (
      <div id="eyeliner-list">
        {
          this.state.eyeliner.map((eyeliner) => (
            <div key={eyeliner.id} id="eyeliner"onClick={() => {
              this.props.setCurrentItem(eyeliner);
              this.props.history.push(`/makeupitem/${eyeliner.id}`)
            }}>
              <img src={eyeliner.api_featured_image} />
              <h3>{eyeliner.name}</h3>
            </div>
          ))
        }
      </div>
    )
  }
}

export default withRouter(Eyeliner);