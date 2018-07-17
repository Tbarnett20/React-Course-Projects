import React from 'react';

//  Challeneg setup form with text and sumbit button
// wire up onSubmit
// handleAddOption -> fetch the value typed -> if value, then alert
export default class AddOption extends React.Component {
  constructor(props) {
    super(props)
    // since we used this inside of handleAddOption we need to set up a constructor/ so before render()
    this.handleAddOption = this.handleAddOption.bind(this)
    this.state = {
      error: undefined
    };
  }
    handleAddOption(event) {
      event.preventDefault();
      // "Event.target" is the form element
      // then uses 'Elements" to go into the "input" by its name which is 'option" then we grab its value property
      const option = event.target.elements.option.value.trim();
      const error = this.props.handleAddOption(option);
      // if theres an option then do something which is alert that option
  
      // This is the shorthand version of the code below it
      this.setState(() => ({error: error}))
      /*this.setState(() => {
        return { error: error }
      })
      */
     if (!error) {
      event.target.elements.option.value = '';
     }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
            {/* this calls the handleAddOption method from above */}
              <form onSubmit={this.handleAddOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
              </form>
            </div>
        );
    }
  }
  
  // class Options--> options componenet here
  // addOptions Component -> this will allow the form