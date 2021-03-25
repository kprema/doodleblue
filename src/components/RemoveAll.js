import React from 'react';

export default class RemoveAll extends React.Component {
  render() {
    return (
      <div>
        <button className='btn-custom update' onClick={this.props.removeAll}>
          RemoveAll
        </button>
      </div>
    );
  }
}
