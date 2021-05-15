import './App.css';
import Wrapper from './components/Wrapper'
// import ML from './components/MachineLearning'
import Bootcamp from './components/Bootcamp'
import Navbar from './components/Header'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home'
import ML from './pages/ML'
import UwBootcamp from './pages/UwBootcamp'


function App() {
  return (
    <Router>
      <Wrapper>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route exact path='/ml' component={ML} />
        <Route exact path='/uwbootcamp' component={UwBootcamp} />
                
      </Wrapper>
    </Router>
    
    
  )
}

export default App;
