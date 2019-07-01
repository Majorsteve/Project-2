import React from 'react';

class MakeupInfo extends React.Component {

  render() {
    // console.log(this.props.makeUpItem)
    return (
      <div>
        {
          this.props.item.map((makeUpItem) => (
            <h3>{makeUpItem.name}</h3>
            ))
          }
      </div>

    )
  }
}
export default MakeupInfo;
