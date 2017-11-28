import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => {
    return  (
        <BrowserRouter>
        <div>
            <Header />
            <Switch>
            <Route path="/contact" component={Contact} />
            <Route path='/portfolio' component={Portfolio} exact={true} />
            <Route path="/portfolio/:id" component={PortfolioItem} />
            <Route path="/" component={HomePage} exact={true} />
            <Route component={NotFoundPage} />
            </Switch>
        </div>

        </BrowserRouter>
    )   
}
export default AppRouter;
