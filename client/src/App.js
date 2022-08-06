import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import Dashboard from './pages/Dashboard/Dashboard';
import { Entry } from './pages/entry/Entry.page';


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout> 
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
