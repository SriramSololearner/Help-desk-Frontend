import './App.css';
import { DefaultLayout } from './layout/DefaultLayout';
import { Entry } from './pages/entry/Entry.page';


function App() {
  return (
    <div className="App">
      {/* <Entry /> */}
      <DefaultLayout>
        <h1>Dashboard</h1>
      </DefaultLayout>
    </div>
  );
}

export default App;
