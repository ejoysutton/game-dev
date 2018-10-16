import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Content extends Component {


    render() {
        return (
            <div class="content">
                    <div class="content-box container">
                        <div class="content-area">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque pulvinar sapien vel consectetur accumsan. Duis sit amet fringilla lorem, eu rutrum mauris. Nullam commodo erat est, gravida luctus ante dapibus nec. Praesent leo urna, sodales ac enim vitae, elementum pretium metus. Suspendisse rhoncus lacinia semper. Nullam sed sagittis velit. Sed semper dictum fringilla. Maecenas vel dolor eros. Pellentesque massa orci, laoreet eu facilisis sed, luctus gravida magna. Suspendisse laoreet neque et eros rhoncus, eget aliquam sapien suscipit. Phasellus semper ultrices eros, nec rhoncus quam faucibus nec. Duis tincidunt ac tortor eget vulputate. Pellentesque quis blandit enim.</p>

                            <p>Aliquam erat volutpat. Sed consequat, quam quis vulputate cursus, metus mauris blandit magna, a dictum dui erat et turpis. Phasellus mauris justo, consectetur vel auctor id, blandit ac tortor. Vestibulum ipsum ligula, rhoncus et vulputate id, consequat ac nulla. Maecenas iaculis interdum ipsum, ut elementum leo luctus quis. Aenean feugiat ligula dui, ut iaculis ipsum egestas nec. Cras condimentum nunc id fringilla luctus. Sed cursus quam vel leo finibus luctus. Etiam turpis odio, aliquet at posuere porttitor, fringilla vel orci. Sed at eros in enim porttitor commodo vel tincidunt nunc. Suspendisse egestas diam ligula, eget pharetra nisl pellentesque ac.</p>

                            <p>Fusce ac convallis risus. Aliquam est eros, mattis ac magna quis, vehicula blandit augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce pellentesque velit sed enim fermentum porttitor. Nullam non accumsan est. Ut consectetur rhoncus est in laoreet. Fusce porttitor vitae tellus eget molestie. Ut vitae condimentum arcu. Curabitur eu lectus pretium, commodo tellus eu, eleifend justo. Phasellus eget magna malesuada, elementum justo sit amet, congue metus. Sed sit amet nunc id sapien rhoncus varius at a ante. Suspendisse eu placerat massa. Donec congue laoreet turpis, auctor imperdiet dolor rutrum vel.</p>

                            <p>Maecenas est nunc, scelerisque nec massa quis, varius scelerisque lectus. Curabitur accumsan ante nec laoreet tempus. Donec viverra, libero et posuere sodales, mi nisl commodo justo, at viverra velit elit a enim. Pellentesque gravida dapibus neque sit amet tempus. Integer sit amet ultricies justo, id semper magna. Praesent at diam aliquet, scelerisque leo in, lobortis massa. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                            <p>Mauris hendrerit arcu nec scelerisque tincidunt. Donec eget varius ligula. Aenean interdum, urna sed vehicula gravida, lorem neque aliquam metus, at dapibus diam nulla sed enim. Quisque vel egestas leo. Etiam ac arcu rhoncus, hendrerit nulla in, hendrerit sapien. Maecenas facilisis quis leo tincidunt malesuada. Aenean condimentum eleifend sem, in aliquet lorem ornare id. Nam in quam pharetra, sagittis ipsum eu, viverra enim. Praesent mauris enim, suscipit ac condimentum et, pulvinar in ante. Mauris scelerisque ultrices enim a tempus. </p>
                        </div>
                    </div>
                </div>
        )
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Content />, document.getElementById('example'));
}