import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notfound from './pages/404/Notfound';

const App = () => {
    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/home'>
                        <Home></Home>
                    </Route>
                    <Route path='/about'>
                        <About></About>
                    </Route>
                    <Route path='/courses'>
                        <Courses></Courses>
                    </Route>
                    <Route path='/contact'>
                        <Contact></Contact>
                    </Route>
                    <Route path='/*'>
                        <Notfound></Notfound>
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;