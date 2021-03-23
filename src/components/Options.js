import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <ul>
            {
                props.options.map((option) =>
                    <Option
                        key={option}
                        optionText={option}
                        deleteCurrentitem={props.deleteCurrentitem}
                        editOption={props.editOption}
                        editableOption={props.editableOption} />)
            }
        </ul>
    </div>
)

export default Options;