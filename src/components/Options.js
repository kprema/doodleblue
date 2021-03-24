import React from 'react';
import Option from './Option';

import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Options = (props) => (
  <div className='col-xs-12 col-md-6'>
    <ul className='heading'>
      <li className='d-flex justify-content-between table-list align-items-center'>
        <span>
          <FontAwesomeIcon icon={faPlus} />
        </span>
        <span>Basic Info</span>
        <span>Company</span>
      </li>
    </ul>

    <ul>
      {props.options.map((option) => (
        <Option
          key={option}
          optionText={option}
          deleteCurrentitem={props.deleteCurrentitem}
          editOption={props.editOption}
          editableOption={props.editableOption}
        />
      ))}
    </ul>
  </div>
);

export default Options;
