import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import ListTask from './components/ListTask';
import AddTask from './components/AddTask';

function App() {
  
  return (
    <div className="App">
      <h1>List to do</h1>
      <AddTask/>
      <ListTask />
      
    </div>
  );
}

export default App;
