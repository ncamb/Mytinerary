import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landpagebody from './components/Landpagebody';
import Login from './components/Login';
import Createaccount from './components/Crateaccount';
import Footer from './components/Footer';
import Landpbody2 from './components/Landpbody2'
import Header from './components/Header';
import ProjectTeam from './components/ProjectTeam';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Route exact path='/' component={Landpagebody} />
        <Route path='/Login' component={Login} />
        <Route path='/Createaccount' component={Createaccount} />
        <Route  path='/Landpbody2' component={Landpbody2} />
        <Route path='/ProjectTeam' component={ProjectTeam}/>

        <Footer />
      </div>
    </BrowserRouter>
  );
}


export default App;
