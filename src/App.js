import React from 'react';
import ReactDOM from 'react-dom';

import RemoveAll from './components/RemoveAll';
import AddOption from './components/AddOption';
import Option from './components/Option';
import Options from './components/Options';
import Action from './components/Action';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  state = {
    options: ['one', 'two', 'three'],
    itemindex: -1,
    editableOption: false,
    addname: 'AddITEM',
  };

  addItem = (option) => {
    if (!option) {
      alert('Please enter the value');
      return 'Please enter the value';
    } else if (this.state.options.indexOf(option) > -1) {
      alert("There is 'NO' update");
      return 'The value already exists';
    } else if (this.state.itemindex > -1) {
      this.state.options[this.state.itemindex] = option;
      this.setState({
        itemindex: -1,
        addname: 'AddItem',
      });
    } else {
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option),
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

  editOption = (e) => {
    document.getElementsByName('optionItem')[0].value =
      e.target.attributes[0].value;
    const editItemIndex = this.state.options.indexOf(
      e.target.attributes[0].value
    );

    this.setState({
      addname: 'update',
      itemindex: editItemIndex,
    });
  };

  render() {
    const title = 'Todo App using MERN';
    return (
      <div className='container'>
        <Header title={title} />
        <Action hasOption={this.state.options.length > 0} />
        <Options
          options={this.state.options}
          deleteCurrentitem={this.deleteCurrentitem}
          editOption={this.editOption}
          editableOption={this.state.editableOption}
        />
        <AddOption addItem={this.addItem} addname={this.state.addname} />
        <RemoveAll removeAll={this.removeAll} />
      </div>
    );
  }
}

<div className='container'>
  <Header />

  <Action />

  <Options />

  <Option />

  <AddOption />

  <RemoveAll />
</div>;

export default App;
