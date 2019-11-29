import React from 'react';
import ReactDOM from 'react-dom';

const Header = (
    <header>
        header
    </header>
)
const Header2 = function (props){
    return (
        <header>
            header {props.name}
        </header>
    )
}

const Bottom = (
    <div>
        bottom
    </div>
)
const div = (
    <div>
        {Header}
        {Header2({name: 'xxx'})}
        <Header2 name= 'xxxc'/>
        <p>
            <span>hi</span>
        </p>
        {Bottom}
    </div>
)

console.log(div);
ReactDOM.render(div,document.getElementById('root'))


