import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {


    render() {
        return (
            <div id="navigation">
                    <nav class="nav navbar">
                        <ul>
                            <li>
                                <a href="#">
                                    <div class="nav-item">
                                        <div class="nav-left-border">
                                        </div>
                                        <div class="nav-text">
                                            <h2>Home</h2>
                                        </div>
                                        <div class="nav-right-border">
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="nav-item">
                                        <div class="nav-left-border">
                                        </div>
                                        <div class="nav-text">
                                            <h2>Projects</h2>
                                        </div>
                                        <div class="nav-right-border">
                                        </div>
                                    </div>
                                </a>
                                <ul>
                                    <li></li>
                                    <li><a href="#"><h4>Locus</h4></a></li>
                                    <li><a href="#"><h4>The Order of the Marten</h4></a></li>
                                    <li><a href="#"><h4>Threadbare</h4></a></li>
                                    <li><a href="#"><h4>On Distant Shores</h4></a></li>
                                    <li><a href="#"><h4>Rootbound</h4></a></li>
                                    <li><a href="#"><h4>Port Authority</h4></a></li>
                                    <li></li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="nav-item">
                                        <div class="nav-left-border">
                                        </div>
                                        <div class="nav-text">
                                            <h2>Blog</h2>
                                        </div>
                                        <div class="nav-right-border">
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div class="nav-item">
                                        <div class="nav-left-border">
                                        </div>
                                        <div class="nav-text">
                                            <h2>About</h2>
                                        </div>
                                        <div class="nav-right-border">
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Header />, document.getElementById('example'));
}