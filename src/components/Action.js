import React from 'react';

const Action = (props) => (
    <div>
        <button disabled={!props.hasOption}>What should I do</button>
    </div>
)
export default Action;