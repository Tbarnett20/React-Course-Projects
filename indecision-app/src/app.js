class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      // changed options into state because we will be updating this information
      this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
      this.handlePick = this.handlePick.bind(this)
      this.handleAddOption = this.handleAddOption.bind(this)
      this.handleDeleteOption = this.handleDeleteOption.bind(this)
      this.state = {
        options: props.options
      };
        
    }
    handleDeleteOptions() {
      // This is the shorthand version of the code below it
      this.setState(() => ({ options: []}));
      // ^^^ This code above is the same as below
     /* this.setState(() => {
        return {
          options: []
        };
      });
      */
    }
    // not to be confused with handleDeleteOption(S)
    handleDeleteOption(optionToRemove) {
      this.setState((prevState) => ({
        options: prevState.options.filter((option) => {
          return optionToRemove !== option;
        })
      
      }))
    }
    // this was used as a prop on the Action component/we also .bind(this) it up top
    handlePick() {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
       alert(option);
    }
    // Create new method handlePick pass down to Action and bind it up here^^^
    // will randomly pick an option and alert it

    handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > - 1) {
        return 'This option already exists';
      } 
      // This is the shorthand version of the code below it
      this.setState((prevState) => ({ options: prevState.options.concat(option)}));
      /*
      this.setState((prevState) => {
        return {
          options: prevState.options.concat(option)
        }
      })
      */
    }
  
    render() {
      // Removed title becauase we set up a default in the Stateless Header component
        // const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
            {/* This a prop almost like an ID this allows us to have things change for example if we wanted the header to change based on if we were on the home page or about page we'd make a prop in this case "title" is our prop and its holding the string "Test Value"
              <Header title='Test Value'/>  */}
              <Header subtitle={subtitle}/> 
              <Action hasOptions={this.state.options.length > 0}
              // We set this handle prop up with the method handlePick we then moved the prop to the Actions component to have access to it with "onClick={this.props.handlePick}" so when we clicked it would run the method we just made that allowed us to pick a random number
              handlePick={this.handlePick}
              />
              <Options 
              options ={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
              handleAddOption={this.handleAddOption}
              />
            </div>
        );
    }
}
IndecisionApp.defaultProps = {
  options: []
};
// This stateless function replaced code right below it
const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      {/* if props.subtitle is provided then run props.subtitle if not don't */}
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  )
};
// set default title prop which means we can go ahhead and remove title from Header componenet (props.title)
Header.defaultProps = {
  title: 'Indecision'
};


// class Header extends React.Component {
//     render() {
//         return(
//         <div>
//         {/* to access/call your prop you made in the indecsion app you use the keyword "this"followed by "props" followed by the prop name/key in this case its "title" all put inside the curly braces "{}" props can be also brought in from Variables for example cons ttile = "Indecision"*/}
//     <h1>{this.props.title}</h1>
//     <h2>{this.props.subtitle}</h2>
//         </div>
//    )
//   }
// }

// This stateless function replaced code right below it
const Action = (props) => {
  return (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        > What Should I Do?
      </button>
    </div>
  )
}

/*
class Action extends React.Component {
    // This is a method below which is called on the button
    render() {
        return (
            <div>
              <button
                onClick={this.props.handlePick}
                disabled={!this.props.hasOptions}
                > What Should I Do?
              </button>
            </div>
        )
    }
}
*/

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

// Option -> option component


//  Challeneg setup form with text and sumbit button
// wire up onSubmit
// handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
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

// Stateless functional component below
// Way faster
// Still allows props
// No acces to 'this' so we pass them (props) into the function as the first argument
// call props as props.propname for example below we used props.name
// no render()
/*
const User = (props) => {
  return (
    <div>
     <p>Name: {props.name} </p>
     <p>Age: {props.age} </p>    
    </div>
)
};

*/

ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
)