import React, { Component } from "react";
import asyncComponent from "./components/asyncComponents";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import Layout from './components/layout'
import MyLoadingComponent from "./components/loadingMessage";

const AsyncCarousel = Loadable({
    loader: () => import('./components/3dcarousel'),
    loading: MyLoadingComponent
}),
const AsyncDemo = Loadable({
    loader: () => import('./components/demo'),
    loading: asyncComponent
})
const Routing = ({ childprops }) => {
    <Router>
        <Route>
            <Layout>
                <Switch>
                    <Route path='/demo' component={AsyncDemo} props={childprops} />
                    <Route path='/carousel' component={AsyncCarousel} props={childprops} />
                </Switch>
            </Layout>
        </Route>
    </Router>
}
export default Routing;