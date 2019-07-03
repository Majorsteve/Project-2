import React from 'react';

class MakeupInfo extends React.Component {

  componentDidMount = async () => {
  }

  render() {
    return (
      this.props.makeUpItem &&
      <div className="Info">
        <h3>{this.props.makeUpItem.name}</h3>
        <div id="description">
          <img src={this.props.makeUpItem.api_featured_image} />
          <p><b>Description:</b><br />
            {this.props.makeUpItem.description}</p>
          <a href={this.props.makeUpItem.website_link}>Website</a>
        </div>


      </div>
    )
  }
}
export default MakeupInfo;
