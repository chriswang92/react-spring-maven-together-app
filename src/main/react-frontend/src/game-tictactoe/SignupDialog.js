import React from 'react';
import ReactDOM from 'react-dom';
import Game from './Game.js';
import Dialog from './Dialog.js';
import Calculator from './Calculator.js';
import FilterableProductTable from './FilterableProductTable.js';
// Not used locally, used in index.html
import Clock from './Clock.js';

export class WelcomeDialog extends React.Component {
    render() {
        return (
        <Dialog title='Welcome'
            message='Thank you for visiting our spacecraft!'/>
        );
    }
}
export class SignUpDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSignUp=this.handleSignUp.bind(this);
        this.state={login: ''};
    }
    handleChange(e) {
        this.setState({login: e.target.value});
    }
    handleSignUp() {
        alert(`Welcome board, ${this.state.login}!`);
    }
    render() {
        return (
        <Dialog title="Mars Exploration Program"
                message="How should we refer to you?">
            <input value={this.state.login}
                    onChange={this.handleChange}/>
            <button onClick={this.handleSignUp}>
            Sign Me Up!
            </button>        
        </Dialog>
        );
    }
}
// ================== ReactDOM Render ======================

// ReactDOM.render(
//     <App />,
//     document.getElementById('calculator')
// );