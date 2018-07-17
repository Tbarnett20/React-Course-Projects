import React from 'React';

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

  export default Header