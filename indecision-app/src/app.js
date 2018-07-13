class IndecisionApp extends React.Component {
    constructor(props){
      super(props);
      // changed options into state because we will be updating this information
      this.state = {
        options: ['Thing one','Thing two','Thing four']
      };
        
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
            {/* This a prop almost like an ID this allows us to have things change for example if we wanted the header to change based on if we were on the home page or about page we'd make a prop in this case "title" is our prop and its holding the string "Test Value"
              <Header title='Test Value'/>  */}
              <Header title={title} subtitle={subtitle}/> 
              <Action hasOptions={this.state.options.length > 0} />
              <Options options ={this.state.options}/>
              <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return(
        <div>
        {/* to access/call your prop you made in the indecsion app you use the keyword "this"followed by "props" followed by the prop name/key in this case its "title" all put inside the curly braces "{}" props can be also brought in from Variables for example cons ttile = "Indecision"*/}
    <h1>{this.props.title}</h1>
    <h2>{this.props.subtitle}</h2>
        </div>
   )
  }
}
// Setup options prop for Options Component
// Render the length of the array in Options

class Action extends React.Component {
    // This is a method below which is called on the button
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
              <button
                onClick={this.handlePick}
                disabled={!this.props.hasOptions}
                > What Should I Do?
              </button>
            </div>
        )
    }
}
/* Mapped over the options array then for ever option in the array we returned them as p tags shorthand version below

"this.props.options.map((option) => <p key={Math.random()}>{option}</p>)"
*/

// Challenege add Remoev all button
// Setup handleRemoveAll
// setup onClick to fire the method

class Options extends React.Component {
  /* Overides constructor to fix the 'this' binding so we could access to it and super allows us to have acces to this.props.  Then we set the handle to itself with .bind(this) which just makes sure wherever we call this its in context
  */
 
    constructor(props) {
      super(props);
      this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    // This is a method below it gets called with onClick={this.handleRemoveAll} dont call as function
    handleRemoveAll() {
        console.log(this.props.options)
    }
    render() {
        return (
         <div>
         <button onClick={this.handleRemoveAll}>Remove All</button>
            {
             this.props.options.map((option) => {
               return <Option key={Math.random()} optionText={option} /> })
            }
            </div>
        );
    }
}
 class Option extends React.Component {
     render() {
         return (
             <div>
              {this.props.optionText}   
             </div>
         )
     }
 }
// Option -> option component


//  Challeneg setup form with text and sumbit button
// wire up onSubmit
// handleAddOption -> fetch the value typed -> if value, then alert
class AddOption extends React.Component {
    handleAddOption(event) {
      event.preventDefault();
      // "Event.target" is the form element
      // then uses 'Elements" to go into the "input" by its name which is 'option" then we grab its value property
      const option = event.target.elements.option.value.trim();
      // if theres an option then do something which is alert that option
      if (option) {
        alert(option);
      }
    }
    render() {
        return (
            <div>
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

ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
)