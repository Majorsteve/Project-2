import React from 'react';
import { fetchMascara } from '../services/makeup';
import { withRouter } from 'react-router-dom';

class Mascara extends React.Component{
  constructor() {
    super();
    this.state = {
      mascara: []
    }
  }

  componentDidMount = async () => {
    const data = await fetchMascara();
    this.setState({
      mascara: data
    });
  }

  render() {
    return (
      <div id="mascara-list">
        {
          this.state.mascara.map((mascara) => (
            <div key={mascara.id} id="mascara" onClick={() => {
              this.props.setCurrentItem(mascara);
              this.props.history.push(`/makeupitem/${mascara.id}`)
            }}>>
            <img src={mascara.api_featured_image} />
            <h3>{mascara.name}</h3>
          </div>
          ))
        }
      </div>
    )
  }
}

export default withRouter(Mascara);
