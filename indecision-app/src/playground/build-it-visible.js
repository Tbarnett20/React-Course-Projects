// Create component VisibilityToggle - render, constructor,handleToggleVisibility
// visbility -> false
class VisibilityToggle extends React.Component {
    constructor(props) {
    super(props)
    // setup your handler method() and set it equal to itself but with .bind(this) on it
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
    this.state = {
    // Set visbility to false so nothing shows up to screen
      visibility: false
      };
    }

    handleToggleVisibility() {
      // pass in updateer function wiht prevState
      this.setState((prevState) => {
        return {
          // prevState gets the previous Count/state and allows use to change it
          visibility: !prevState.visibility
        }
      })
    }
    
    render() {
      return (
      <div>
      <h1>Visibility Toggle</h1>
          <button onClick={this.handleToggleVisibility}>{this.state.visibility ? "Hide details" : "Show Details"}</button>
          {
            this.state.visibility && (
              <div>
                <p>Just showing you these details</p>
              </div>  
          )

           }
      </div>
      );
    }
    
}

ReactDOM.render(
    <VisibilityToggle />,
    document.getElementById('app'))


/* let details;
let detailsButton= 'Show Details'
const app = {
   details:'',
};

const showDetails = () => {
    app.details = "Just trying to show details",
    details = 'Details Showed'
    renderTemplate();
};

const renderTemplate = () => {
const template = (
    <div>
    <h1>Visibility Toggle</h1>
        <button onClick={showDetails}>{detailsButton}</button>
        <p>{app.details}</p>
    </div>
);

ReactDOM.render(
    template,
    document.getElementById('app')
)
 };

 renderTemplate();

 */

/*

 let visibility = false;
const app = {
   details:'',
};

const ToggleVisibility = () => {
    visibility= !visibility;
    renderTemplate();
};

const renderTemplate = () => {
const template = (
    <div>
    <h1>Visibility Toggle</h1>
        <button onClick={ToggleVisibility}>{visibility ? "Hide details" : "Show Details"}</button>
        {visibility && (
            <div>
            <p>Showing you these details</p>
            </div>
        )}
    </div>
);

ReactDOM.render(
    template,
    document.getElementById('app')
)
 };

 renderTemplate();

 */