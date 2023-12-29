import './App.css';
import Main from './Main';
import Form from './Form'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import TodoList from './TodoList';
import Delete from './Delete'

function App() {
  return (
    <Router>
      <h1>React To-Do List App</h1>

      <Switch>
        <Route exact path='/'>
          <Main />
          <TodoList />
        </Route>
        <Route path='/add'>
          <Form />
        </Route>
        <Route path='/delete/:id'>
          <Delete />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
