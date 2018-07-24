import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import Header from './components/Header'
import ExpenseDashboardPage from './components/ExpenseDashBoard'
import AddExpensePage from './components/AddExpensePage'
import EditExpensePage from './components/EditExpensePage'
import HelpPage from './components/HelpPage'
import NotFoundPage from './components/NotFoundPage'


const AppRouter = () => (
  <BrowserRouter>
  <div>
  {/* Gives us the ability to have our header on every page */}
    <Header />
    <Switch>
    {/* {}setup component to reference a component we want to show */}
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
   </div> 
  </BrowserRouter>
);

export default AppRouter;