import React from 'react';
import {SignUpDialog, WelcomeDialog} from './SignupDialog';
import Game from './Game.js';
import Dialog from './Dialog.js';
import Calculator from './Calculator.js';
import FilterableProductTable from './FilterableProductTable.js';
import {PRODUCTS} from './FilterableProductTable.js';
import {Button} from 'antd';
import {Link} from 'react-router-dom';

class GamePage extends React.Component {
  render() {
    return (
        <div className='game-body'>
          <Button><Link to='/home'>Home</Link></Button>
          <FilterableProductTable products={PRODUCTS} />,
          <hr/>,
          <WelcomeDialog />,
          <hr/>,
          <Game />,
          <hr/>,
          <SignUpDialog />,
          <hr/>,
          <Calculator/>
        </div>
    );
  }
}
export default GamePage;

// ReactDOM.render(
//     <App />,
//     document.getElementById('calculator')
// );