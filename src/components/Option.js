import React from 'react';
import {faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class Option extends React.Component {
  render() {
    return (
      <li className='d-flex justify-content-between table-list align-items-center'>
        <input type='checkbox' onChange={this.handleChange} />
        <div className='d-flex basicInfo'>
          <div className='avatar'>{this.props.optionText.avatar}</div>
          <div className='details'>
            <p>{this.props.optionText.name}</p>
            <span>{this.props.optionText.email}</span>
          </div>
        </div>
        <p>{this.props.optionText.company}</p>

        <span
          style={{marginLeft: '20px', cursor: 'pointer'}}
          onClick={(e) => {
            this.props.editOption(this.props.optionText);
          }}
          className='d-none d-sm-block'>
          <FontAwesomeIcon icon={faEdit} />
        </span>

        <span
          style={{marginLeft: '20px', cursor: 'pointer'}}
          onClick={(e) => {
            this.props.deleteCurrentitem(this.props.optionText);
          }}
          className='d-none d-sm-block'>
          <FontAwesomeIcon icon={faTrash} />
        </span>
      </li>
    );
  }
}
export default Option;
