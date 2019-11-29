import React from 'react';
import ReactDOM from 'react-dom';

const div = (
    React.createElement('div',null,
        React.createElement('p',null,
            React.createElement('span',null,'hi')))

)
//等价于：
const div = (
    <div>
        <p>
            <span>hi</span>
        </p>
    </div>
)
console.log(div);
ReactDOM.render(div,document.getElementById('root'))


