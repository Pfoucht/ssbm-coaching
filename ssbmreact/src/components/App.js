import React from 'react';
import Routes from '../routes';
import { connect } from 'react-redux';

import NavContainer from '../containers/NavContainer.js';
import AuthContainer from '../containers/AuthContainer';
import Footer from '../components/Footer/Footer';
import './App.css';

const App = (props) => (
  <div className="App">
    <NavContainer/>
    <AuthContainer/>
    <Routes />
    <Footer/>
  </div>
)


// Reference code
// const mapStateToProps = state => ( {
//   ...state
// })

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
