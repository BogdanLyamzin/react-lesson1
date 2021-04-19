import logo from './logo.svg';
import './App.css';
// import CaseList from './components/CaseList';

function App() {
  const address = "deep hell";
  const title = <h2>Welcome to {address}, bitches!</h2>;
  
  return (
    <div className="App">
      {title}
     {/* <CaseList /> */}
    </div>
  );
}

export default App;
