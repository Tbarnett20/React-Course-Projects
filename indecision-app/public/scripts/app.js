'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// count - setup default prop value to 0


var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    // Create 3 methods: handleAddOne, handleMinusOne, handleReset
    // Use console.log to print method name
    //  Wire up onClick and 'bind' in the 'constructor'
    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      // use the the default prop here
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      try {
        var stringCount = localStorage.getItem('count');
        var count = parseInt(stringCount, 10);

        if (!isNaN(count)) {
          this.setState(function () {
            return { count: count };
          });
        }
      } catch (events) {
        // do nothing at all if data is invalid
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count);
      }
    }
  }, {
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
    // 

  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      /* when we wanna change the component state we use "this.setState" inside of the handler in this case its handleMinusOne()
      // We then define an updater function inside the setState() method which lets us return an object and on the object we can define the State values we wanna tweak for example "count:"
      */
      this.setState(function (prevState) {
        return {
          // prevState gets the previous Count/state and allows use to change it
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        // no need to define prevState since we are resetting count to 0
        return {
          count: 0
        };
      });
      // this new setState inherits the new coun:0 set in the previous state above
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Count: ',
          this.state.count,
          ' '
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'RESET'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(
// default prop setup here and we start on whatever number we pick
React.createElement(Counter, { count: 5 }), document.getElementById('app'));

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
