import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';
import moviesPage from './components/pages/moviesPage';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
    return (
        <div className="App">
            <Header />

            <Container text>
                <Route path='/movies' component={moviesPage}></Route>
            </Container>

            <Footer />
        </div>
    );
}

export default App;
