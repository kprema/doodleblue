import React from 'react';

export default class RemoveAll extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.removeAll}>RemoveAll</button>
            </div>
        );
    }
}
