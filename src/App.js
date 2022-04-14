import './App.css';
import Navbar from './Nav.js';
import{
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  }from 'react-router-dom';
import Boardmain from './board/Boardmain';

function App() {
  return (
    <Router>
      <Navbar />
      <h1 class="display-4">환영합니다.</h1>
      <Route exact path='/about'>
      <h2> about Site</h2>
      <br />
      <br />
      <p>이곳은 test용 게시판입니다.</p>
      </Route>
      <Route exact path='/board'>
      <Boardmain />
      </Route>
    </Router>
  );
}

export default App;
