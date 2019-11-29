import React from 'react';
import ReactDOM from 'react-dom';

const Header = (
    <header>
        header
    </header>
)
const Bottom = (
    <div>
        bottom
    </div>
)
const div = (
    <div>
        {Header}
        <p>
            <span>hi</span>
        </p>
        {Bottom}
    </div>
)

console.log(div);
ReactDOM.render(div,document.getElementById('root'))


