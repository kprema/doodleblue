import React from 'react';

export default class EditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: true,
      avatar: props.userDetails.avatar,
      name: props.userDetails.name,
      address: props.userDetails.address,
      company: props.userDetails.company,
      email: props.userDetails.email,
    };
  }

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };

  editForm = (e, editData) => {
    e.preventDefault();
    console.log(editData);
    const editdetails = {
      avatar: this.state.avatar,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      company: this.state.company,
    };
    this.props.editForm(editdetails);
  };

  render() {
    return (
      <div>
        <div className='row search'>
          <div className='col-xs-12'>
            <h4>Edit Fields</h4>
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
              {this.state.isShown && (
                <form onSubmit={this.editForm}>
                  <input
                    name='avatar'
                    type='text'
                    value={this.state.avatar}
                    onChange={this.handleInput}
                    required
                  />
                  <input
                    name='name'
                    type='text'
                    onChange={this.handleInput}
                    value={this.state.name}
                    required
                  />
                  <input
                    name='email'
                    type='email'
                    value={this.state.email}
                    onChange={this.handleInput}
                    required
                  />
                  <input
                    name='company'
                    type='text'
                    value={this.state.company}
                    onChange={this.handleInput}
                    required
                  />
                  <input
                    name='address'
                    type='text'
                    value={this.state.address}
                    onChange={this.handleInput}
                    required
                  />
                  <button class='btn-custom' type='submit'>
                    Update
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
