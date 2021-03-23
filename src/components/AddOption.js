import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined,
    }

    addItem = (e) => {
        e.preventDefault();
        const option = e.target.elements.optionItem.value.trim();
        const error = this.props.addItem(option);
        this.setState = {
            error: error
        }
        e.target.elements.optionItem.value = '';

    }

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addItem}>
                    <input name="optionItem" type="text" />
                    <button>{this.props.addname}</button>
                </form>
            </div>
        );
    }
}