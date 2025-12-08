import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/home';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home/ >} />
        <Route path="/signIn" element={ <SignIn/ >} />
        <Route path="/signUp" element={ <SignUp/ >} />
        
      </Routes>
    </Router>
  )
}

export default App
