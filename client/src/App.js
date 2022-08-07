import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
// import Dashboard from './pages/Dashboard/Dashboard';
// import { Entry } from './pages/entry/Entry.page';
// import { AddTicket } from './pages/New-ticket/AddTicket.Pages';
import { TicketLists } from './pages/Ticket-listing/TicketList.pages';


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout> 
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
