import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { DefaultLayout } from './layout/DefaultLayout';
import { Ticket } from './pages/Ticket/Ticket.pages';
import Dashboard from './pages/Dashboard/Dashboard.Pages';
import { Entry } from './pages/entry/Entry.page';
import { AddTicket } from './pages/New-ticket/AddTicket.Pages';
import { TicketLists } from './pages/Ticket-listing/TicketList.pages';
import { PrivateRoute } from './Components/Private-route/PrivateRoute.Comp';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Entry />
          </Route>
          
            
            <PrivateRoute path ="/dashboard"> <Dashboard /> </PrivateRoute>
            <PrivateRoute path="/add-ticket"> <AddTicket /> </PrivateRoute>
            <PrivateRoute path="/tickets"> <TicketLists /> </PrivateRoute>
            <PrivateRoute path="/ticket/:tId"> <Ticket /> </PrivateRoute>
            
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
