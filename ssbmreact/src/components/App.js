import React, { Component } from 'react';
import Routes from '../routes';
import { connect } from 'react-redux';

import NavContainer from '../containers/NavContainer.js';
import AuthContainer from '../containers/AuthContainer';
import Footer from '../components/Footer/Footer';
import './App.scss';
import { checkAuthState } from '../store/actions';
import { withRouter } from 'react-router-dom';


class App extends Component {

  componentDidMount(){
    this.props.onCheckAuthState();
  }

  render(){
    return (
      <div className="App">
        <NavContainer/>
        <AuthContainer/>
        <Routes />
        <Footer/>
      </div>  
    )
  }

}


// Reference code
// const mapStateToProps = state => ( {
//   ...state
// })

// const mapDispatchToProps = dispatch => ({
//   simpleAction: () => dispatch(simpleAction())
// })

// export default connect(mapStateToProps, mapDispatchToProps)(App);

const mapDispatchToProps = dispatch => {
  return {
    onCheckAuthState: () => dispatch(checkAuthState())
  }
}


export default withRouter(connect(null, mapDispatchToProps)(App));
