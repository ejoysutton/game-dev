import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Footer extends Component {


    render() {
        return (
            <div class=" container">
                    <div class="footer">
                        <div class="footer-left">
                        </div>
                        
                        <div class="footer-right">
                        </div>
                    </div>
                    <div class="footer-bottom">
                    </div>
                </div>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Footer />, document.getElementById('example'));
}