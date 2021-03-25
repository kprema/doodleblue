import React from 'react';
import {faPlus, faSearch} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      name: '',
      email: '',
      address: '',
      avatar: '',
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    this.setState({
      isShown: !this.state.isShown,
    });
  };

  addItem = (e) => {
    e.preventDefault();
    const details = {
      avatar: this.state.avatar,
      name: this.state.name,
      email: this.state.email,
      address: this.state.address,
      company: this.state.company,
    };
    this.props.addItem(details);
    this.setState({
      avatar: '',
      name: '',
      company: '',
      email: '',
      address: '',
    });
  };
  render() {
    return (
      <div>
        <div>
          <div className='row justify-content-start title'>
            <div className='col-sm col-md-3'>
              <h3>Contacts</h3>
              <p>Welcome to FirstCRM Contact page</p>
            </div>
            <div className='col-sm align-self-center'>
              <span>
                Sort by: <b>Date Created</b>
              </span>
            </div>
          </div>
        </div>

        <div className='row search'>
          <div className='col-xs-12'>
            <input type='text' placeholder='Search contacts' name='search' />

            <FontAwesomeIcon icon={faSearch} />

            <button class='btn-custom' onClick={this.handleClick}>
              <FontAwesomeIcon icon={faPlus} /> Add Contact
            </button>

            <div style={{marginTop: '20px', marginBottom: '20px'}}>
              {this.state.isShown && (
                <div>
                  <form onSubmit={this.addItem}>
                    <input
                      name='avatar'
                      type='text'
                      placeholder='Please enter the Avartar'
                      onChange={this.handleInput}
                      required
                    />
                    <input
                      name='name'
                      type='text'
                      onChange={this.handleInput}
                      placeholder='Please enter the Name'
                      required
                    />
                    <input
                      name='email'
                      type='email'
                      placeholder='Please enter the Email'
                      onChange={this.handleInput}
                      required
                    />
                    <input
                      name='company'
                      type='text'
                      placeholder='Please enter the Company'
                      onChange={this.handleInput}
                      required
                    />
                    <input
                      name='address'
                      type='text'
                      placeholder='Please enter the Address'
                      onChange={this.handleInput}
                      required
                    />
                    <button class='btn-custom update' type='submit'>
                      {this.props.addname}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
