import React from 'react';


const Option = (props) => (
    <li>
        {props.optionText}

        <span style={{ marginLeft: '20px', cursor: 'pointer' }}
            onClick={props.editOption} item={props.optionText}>
            Edit
        </span>

        <span style={{ marginLeft: '20px', cursor: 'pointer' }}
            onClick={(e) => { props.deleteCurrentitem(props.optionText) }}>
            remove
        </span>


    </li>
)
export default Option;