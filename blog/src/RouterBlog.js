import React, { Component } from 'react';
import { Redirect } from 'react-router-dom/cjs/react-router-dom';

// browserRouter, HashRouter
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

// Context
import { LoginAuthenticationContext } from './context/LoginContext';

// Dil için
import {withTranslation} from 'react-i18next'
import './internationalization/i18nlanguage'

// header, main, footer
import Footer from './component/Footer';
import Header from './component/Header';
import Main from './component/Main';
import './RouterBlog.css';

// Blog
import BlogList from './component/blog/BlogList';
import BlogCreate from './component/blog/BlogCreate';
import BlogUpdate from './component/blog/BlogUpdate';
import BlogView from './component/blog/BlogView';

// CLASS
class RouterBlog extends Component {

  static displayName = "Router Blog";

constructor(props){
  super(props);

  // STATE
  this.state={}

  // BIND
} //end constructor

// CONTEXT
static contextType=LoginAuthenticationContext;

// RENDER
  render() {

    // RETURN
    return (
      <React.Fragment>
        <Router>
          <Header logo=""/>

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

          <Footer copy="@Copy; Bütün Haklar Saklıdır"/>
        </Router>
      </React.Fragment>
    )
  }
} //end class

// Higher Order Component
export default withTranslation()(RouterBlog);

