import React from 'react';


// This stateless function replaced code right below it
const Option = (props) => {
  return (
    <div>
     {props.optionText}
     <button 
     onClick={(events) => {
        props.handleDeleteOption(props.optionText);
     }}
     >
     Remove
     </button>   
    </div>
  )
  }

  export default Option
  
  /*
  class Option extends React.Component {
     render() {
         return (
             <div>
              {this.props.optionText}   
             </div>
         )
     }
  }
  
  */