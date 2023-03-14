import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import Student from './Student';

function App() {
  return (
   <>
   <Header title="Student list"/>
  <Home />
  <Student student={Student}/>
  </>
  );
}

export default App;
