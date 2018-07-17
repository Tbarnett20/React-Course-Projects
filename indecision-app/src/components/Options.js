import React from 'react';
import Option from './Option'

/* Mapped over the options array then for ever option in the array we returned them as p tags shorthand version below

"this.props.options.map((option) => <p key={Math.random()}>{option}</p>)"
*/

// Challenege add Remoev all button
// Setup handleRemoveAll
// setup onClick to fire the method

// This stateless function replaced code right below it
const Options = (props) => {
  return (
    <div>
    <button onClick={props.handleDeleteOptions}>Remove All</button>
       {props.options.length === 0 && <p>Please add an option to get started!</p>}
        {
        props.options.map((option) => {
          return (
            <Option 
            key={Math.random()} 
            optionText={option} 
            handleDeleteOption={props.handleDeleteOption}
            />
          )})
       }
       </div>
   );
  };
  
  /*
  
  class Options extends React.Component {
  // deleted constructor function because we didnt need to bind a method
  
    render() {
        return (
         <div>
         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
            {
             this.props.options.map((option) => {
               return <Option key={Math.random()} optionText={option} /> })
            }
            </div>
        );
    }
  }
  
  */

  export default Options