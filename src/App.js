//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import EmployeePayroll from './components/employee-payroll/EmployeePayroll'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <EmployeePayroll/>
            </Route>
            </Switch>
            </Router>
            </div>
      );
}

export default App;
