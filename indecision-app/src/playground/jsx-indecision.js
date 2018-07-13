console.log('App.js is running!')

// JSX - JavaScript XML

const app = {
 title: 'Indecision App',
 subtitle: 'Put your life in the hands of a computer',
 options: []
};

// setup events to prevent full page refresh using event.PreventDefault

// const onFormSubmit = (event) => {
//     event.preventDefault();

//     const option = event.target.elements.option.value;

//     if (option) {
//         app.options.push(option);
//         event.target.elements.option.value = '';
//         renderTemplate();

//     }
// };

// const removeAll = () => {
//     app.options = [];
//     renderTemplate();
// };

// const numbers = [55, 101,1000]

const template = (
 <div>
    <h1>{app.title}</h1> 
     {app.subtitle && <p>{app.subtitle}</p>}
     <p>{app.options.length > 0 ? 'Here are your options' :'No options'}</p>
     <p>{app.options.length}</p>
     <ol>
      <button onClick={removeAll}>REMOVE ALL</button>
      <li>Item one</li>
      <li>Item two</li>
     </ol>
     <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Option</button>
     </form>
 </div>
);

const appRoot = document.getElementById('app');

 ReactDOM.render(
   template,
   appRoot  
 );

 const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements.option.value;

    if (option) {
        app.options.push(option);
        event.target.elements.option.value = '';
        renderTemplate();
    }
};

const removeAll = () => {
    app.options = [];
    renderTemplate();
};

// used for the numbers.map function below***
// const numbers = [55, 101,1000]***

const onMakeDecison = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const renderTemplate = () => {
 const template = (
    <div>
       <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' :'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecison}>What should I do?</button>
        <button onClick={removeAll}>REMOVE ALL</button>
        {
            /*    numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>;
                })
            */    
        }
        <ol>
        {
            app.options.map((option) => {
                return <li key={Math.random()}>{option}</li>
            })
        }
        {/* map over app.options getting back an array (in jsx) of list(set key and text)*/}
         {
         /* replaced with code above^^
         <li>Item one</li>
         <li>Item two</li>*/}
        </ol>
        <form onSubmit={onFormSubmit}>
           <input type="text" name="option"/>
           <button>Add Option</button>
        </form>
    </div>
   );

   ReactDOM.render(
    template,
    appRoot  
  );
};
   
    renderTemplate();





/*
This object named user is selected using --> {user.notation} or {user['BracketNotation']}
const user = {
    name: 'Terrance',
    age: 23,
    location: 'Kentucky',
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    } else {
        return undefined;
    }
};

if statements 
ternary operators '?' basically an if/else statement
logical and operators '&&'

terinary operator '?' starts with conditon (True or false) then we move on to the ? then we move on to the value we want this expression to resolve to if its 'true' (EX: true ? 'Terrance' : 'Anonyomous')/ Terrancec will get used
so if user.name exists then we want user.name showinng up but if it doesnt we want the static string 'Anonymous' showing
great for 1 or 2 things

And operator '&&' if this and this is 'true' run the code after the && operator if not true 'false' and nothing runs
just for one thing or else nothing at all

const templateTwo = (
    <div>
      <h1>{user['name'] ? user.name : 'Anonymous'}</h1> 
      {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
      {getLocation(user.location)}
     </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(
    templateTwo,
    appRoot
 );

 */
