import React from 'react';

import RemoveAll from './components/RemoveAll';
import Options from './components/Options';
import Details from './components/Details';
import EditForm from './components/EditForm';
import Header from './components/Header';
import Navigation from './components/Navigation';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import data from './data.json';

class App extends React.Component {
  state = {
    options: data.options,
    itemindex: -1,
    editableOption: false,
    addname: 'Submit',
    editUser: undefined,
    currentItem: '',
    isShown: false,
  };

  addItem = (details) => {
    if (!details) {
      alert('Please enter the value');
      return 'Please enter the value';
    } else if (this.state.options.indexOf(details) > -1) {
      alert("There is 'NO' update");
      return 'The value already exists';
    } else if (this.state.itemindex > -1) {
      this.state.options[this.state.itemindex] = details;
      this.setState({
        itemindex: -1,
        addname: 'AddItem',
      });
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(details),
        };
      });
    }
  };

  removeAll = () => {
    this.setState(() => {
      return {
        options: [],
      };
    });
  };

  deleteCurrentitem = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      }),
    }));
  };

  editOption = (optionToEdit) => {
    this.setState({
      editUser: optionToEdit,
      currentIndex: optionToEdit._id,
    });
  };

  editForm = (editdetails) => {
    const currentIndex = this.state.currentIndex - 1;
    const editDetails = editdetails;
    this.state.options.splice(currentIndex, 1, editDetails);

    this.setState({
      name: editdetails.name,
      address: editdetails.address,
      company: editdetails.company,
      email: editdetails.email,
      id: editdetails._id,
    });
  };

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div className='container mobile'>
          <Header addItem={this.addItem} addname={this.state.addname} />
          <div className='row'>
            <Options
              options={this.state.options}
              deleteCurrentitem={this.deleteCurrentitem}
              editOption={this.editOption}
              editableOption={this.state.editableOption}
            />
            <Details></Details>
          </div>
          {this.state.editUser && (
            <EditForm
              editForm={this.editForm}
              userDetails={this.state.editUser}></EditForm>
          )}
          <RemoveAll removeAll={this.removeAll} />
        </div>
      </div>
    );
  }
}

export default App;
