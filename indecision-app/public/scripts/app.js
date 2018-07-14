'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    // changed options into state because we will be updating this information
    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.state = {
      options: props.options
    };

    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
    // this was used as a prop on the Action component/we also .bind(this) it up top

  }, {
    key: 'handlePick',
    value: function handlePick() {
      var randomNum = Math.floor(Math.random() * this.state.options.length);
      var option = this.state.options[randomNum];
      alert(option);
    }
    // Create new method handlePick pass down to Action and bind it up here^^^
    // will randomly pick an option and alert it

  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat(option)
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      // Removed title becauase we set up a default in the Stateless Header component
      // const title = 'Indecision';
      var subtitle = 'Put your life in the hands of a computer';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0
          // We set this handle prop up with the method handlePick we then moved the prop to the Actions component to have access to it with "onClick={this.props.handlePick}" so when we clicked it would run the method we just made that allowed us to pick a random number
          , handlePick: this.handlePick
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

IndecisionApp.defaultProps = {
  options: []
};
// This stateless function replaced code right below it
var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    props.subtitle && React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
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
var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions
      },
      ' What Should I Do?'
    )
  );
};

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
var Options = function Options(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove All'
    ),
    props.options.map(function (option) {
      return React.createElement(Option, { key: Math.random(), optionText: option });
    })
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
var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    props.optionText
  );
};

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

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    // since we used this inside of handleAddOption we need to set up a constructor/ so before render()
    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(event) {
      event.preventDefault();
      // "Event.target" is the form element
      // then uses 'Elements" to go into the "input" by its name which is 'option" then we grab its value property
      var option = event.target.elements.option.value.trim();
      var error = this.props.handleAddOption(option);
      // if theres an option then do something which is alert that option

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            null,
            'Add Option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

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

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
