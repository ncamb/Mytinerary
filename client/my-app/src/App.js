import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import Landpagebody from './components/Landpagebody';
import Login from './components/Login';
import Createaccount from './components/Crateaccount';
import Footer from './components/Footer';
import Landpbody2 from './components/Landpbody2'
import Header from './components/Header';
import ProjectTeam from './components/ProjectTeam';
import Cities from './components/Cities';
import Afterregister from './components/Afterregister';


import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Landpagebody} />
        <Route path='/Login' component={Login} />
        <Route path='/Createaccount' component={Createaccount} />
        <Route path='/Landpbody2' component={Landpbody2} />
        <Route path='/ProjectTeam' component={ProjectTeam} />
        <Route path='/Afterregister' component={Afterregister} />      
        <Route path='/Cities' component={Cities} />
        <Footer />
      </div>
    </BrowserRouter>
    </Provider>
  );
}


export default App;
