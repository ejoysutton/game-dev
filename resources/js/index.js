import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Blog from './components/Blog'
import Header from './components/Header'
import Content from './components/Content'
import Footer from './components/Footer'

export default class Index extends Component {
    render() {
        return (
            <div className="">
                <Header/>
                <Content/>
                <Footer/>            
                <Blog/>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
