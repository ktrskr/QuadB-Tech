import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ShowList from 'components/ShowList';
import ShowDetail from 'components/ShowDetail';
import 'styles.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" exact component={ShowList} />
        <Route path="/show/:id" component={ShowDetail} />
      </div>
    </Router>
  );
}

export default App;
