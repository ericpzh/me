import React from 'react';
import './App.css';
import { elastic as Menu } from 'react-burger-menu';
import { Header, Icon } from 'semantic-ui-react';

function Menu_({lang, toggleLang}) {
  return (
    <div>
    <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
      // <a className='menu-item' onClick={() => toggleLang(!lang)}>
      //   <span> <Icon name='language' /> </span>
      //   <span> 汉语 / English </span>
      // </a>
      <a className='menu-item' href="/me">
        <span> <Icon name='home' /> </span>
        <span> Home </span>
      </a>
      <a className='menu-item' href='https://github.com/ericpzh'>
        <span> <Icon name='github' /> </span>
        <span> Github </span>
      </a>
      <a className='menu-item' href='mailto: zp3@illinois.edu'>
        <span> <Icon name='mail' /> </span>
        <span> Email </span>
      </a>
    </Menu>
    </div>
  )
}

export default Menu_;
