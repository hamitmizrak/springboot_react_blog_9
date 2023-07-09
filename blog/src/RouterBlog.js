import React, { Component } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import './RouterBlog.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import BlogList from './component/blog/BlogList';
import BlogCreate from './component/blog/BlogCreate';
import BlogUpdate from './component/blog/BlogUpdate';
import BlogView from './component/blog/BlogView';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

export default class RouterBlog extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />

          <Main className="container">
            <Switch>
              <Route path="/" exact component={BlogList}></Route>
              <Route path="/blog" component={BlogList}></Route>

              <Route path="/blog/list" component={BlogList}></Route>
              <Route path="/blog/create" component={BlogCreate}></Route>
              <Route path="/blog/update/:id" component={BlogUpdate}></Route>
              <Route path="/blog/view/:id" component={BlogView}></Route>
              <Redirect to="/" />
            </Switch>
          </Main>

          <Footer />
        </Router>
      </React.Fragment>
    )
  }
}

