import React, { Component } from 'react';
import Header from '../../components/header/Header';
import Cards from '../../components/cards/Cards';
import CreateData from '../createdata/CreateData';
import { Route, Switch, withRouter } from 'react-router-dom';
import Footer from '../../components/footer/Footer';

class Container extends Component {
    state = {}
    render() {
        return (
            <div>
                <Header style={{ margin: 'auto' }} />
                <Switch>
                    <Route path="/createpost" component={CreateData} />
                    <Route path="/" exact component={Cards} />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default withRouter(Container);