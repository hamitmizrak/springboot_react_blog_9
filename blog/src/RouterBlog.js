import React, { Component } from 'react';

// browserRouter, HashRouter

// Context
import { LoginAuthenticationContext } from './context/LoginContext';

// Dil için
import { withTranslation } from 'react-i18next'
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
import { Route, Routes } from 'react-router-dom';


// CLASS
class RouterBlog extends Component {

    static displayName = "Router_Blog";

    constructor(props) {
        super(props);

        // STATE
        this.state = {}

        // BIND
    } //end constructor

    // CONTEXT
    static contextType = LoginAuthenticationContext;

    // RENDER
    render() {

        const { isLoginState, username } = this.state;
        //const isLoginState=this.context.state.isLoginState
        // const username=this.context.state.username;

        // RETURN
        return (
            <React.Fragment>
                <Header logo="" />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<BlogList />} />
                        <Route path="/blog/list" element={<BlogList />} />
                        <Route path="/blog/create" element={<BlogCreate />} />
                        <Route path="/blog/update/:id" element={<BlogUpdate />} />
                        <Route path="/blog/view/:id" element={<BlogView />} />
                    </Routes>
                </div>
                <Footer copy="@Copy; Bütün Haklar Saklıdır" />
            </React.Fragment>
        )
    }
} //end class

// Higher Order Component
export default withTranslation()(RouterBlog);

