// count - setup default prop value to 0


class Counter extends React.Component {
    constructor(props) {
        super(props)
// Create 3 methods: handleAddOne, handleMinusOne, handleReset
// Use console.log to print method name
//  Wire up onClick and 'bind' in the 'constructor'
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            // use the the default prop here
          count: props.count
        };
    }
    handleAddOne() {
        this.setState((prevState) => {
          return {
            count: prevState.count + 1
          }
        });
    }
    // 
    handleMinusOne() {
      /* when we wanna change the component state we use "this.setState" inside of the handler in this case its handleMinusOne()
      // We then define an updater function inside the setState() method which lets us return an object and on the object we can define the State values we wanna tweak for example "count:"
      */ 
      this.setState((prevState) => {
        return {
          // prevState gets the previous Count/state and allows use to change it
          count: prevState.count - 1
        }
      })
    }
    handleReset() {
        this.setState(() => {
          // no need to define prevState since we are resetting count to 0
          return {
            count: 0
          }
        })
        // this new setState inherits the new coun:0 set in the previous state above
    }
    render() {
        return (
            <div>
            <h1> Count: {this.state.count} </h1>
            <button onClick={this.handleAddOne} >+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>RESET</button>
            </div>
        );
    }
}
// default prop here
Counter.defaultProps = {
    count: 0
};

ReactDOM.render(
    // default prop setup here and we start on whatever number we pick
    <Counter count = {5}/>,
    document.getElementById('app'))


/* // Challenge TIME!!
// Make button "-1" setup minusOne function and register - log "minusOne"
// Make reset button "reset" - setup reset function - log "reset"

let count = 0;
const addOne = () => {
    count++;
    // count =  count + 1;
    renderCounterApp();
}

const minusOne = () => {
    count--;
    renderCounterApp();
};

const reset = () => {
    count = 0;
    renderCounterApp();
};

const  templateTwo = (
 <div>
    <h1> Count: {count}</h1>
    <button onClick={addOne}>+1</button>
    <button onClick={minusOne}>-1</button>
    <button onClick={reset}>RESET</button>
 </div>
);

console.log(templateTwo);

const appRoot = document.getElementById('app');

ReactDOM.render(
  templateTwo,
  appRoot  
);

// JSX does not have built in data biniding 


const renderCounterApp = () => {
    const  templateTwo = (
        <div>
           <h1> Count: {count}</h1>
           <button onClick={addOne}>+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>RESET</button>
        </div>
       );
       ReactDOM.render(
        templateTwo,
        appRoot  
 );
};

renderCounterApp();

*/