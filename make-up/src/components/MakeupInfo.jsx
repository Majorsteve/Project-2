import React from 'react';

class MakeupInfo extends React.Component {

  componentDidMount = async () => {
    console.log(this.props.makeUpItem)
  }

  render() {
    return (

      this.props.makeUpItem &&
      <>

        <h3>{this.props.makeUpItem.name}</h3>
        <img src={this.props.makeUpItem.api_featured_image} />
        <h3>{this.props.makeUpItem.description}</h3>
      </>

    )
  }
}
export default MakeupInfo;
