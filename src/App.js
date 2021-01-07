import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';

import Header from './Components/Shared/Header';
import Home from './Pages/Home';
import Footer from './Components/Shared/Footer';

const App = () => {
  
    return (
        <StylesProvider injectFirst>
            <Router>
                <Header />
                <main className="main">
                    <Switch>
                        <Route path="/" exact>
                            <Home />
                        </Route>
                        <Route path="/" render={() => <Redirect to="/" />} />
                    </Switch>
                </main>
                <Footer />
            </Router>
        </StylesProvider>
    );
}

export default App;
