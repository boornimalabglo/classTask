import { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Edit from './crud/edit';
import Studentdetails from './crud/student-details';


class App extends Component {
  constructor() {
    super()
  }                                                                                                                                                                       
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={<Studentdetails />} />
            <Route exact path='/:edit' element={<Edit />} />
          </Routes>
        </Router>
      </>
    );
  }

}

export default App;
