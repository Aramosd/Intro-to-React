import React from 'react';
import { Header, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const menuItems = [{
  name: 'albums',
  position: null,
},
{
  name: 'photos',
  position: null
},
{
  name: 'login',
  position: null,
}];

const Nav = () => {
  renderMenuItems = (item) => {
    return (
      <Menu.Item position={item.position}
        key={item.name}
        name={item.name}
        as={NavLink}
        to={`/${item.name}`} />
    );
  };


  return (
    <Menu tabular>
      <Menu.Item>
        <Header as="h3" icon="camera retro" floated="right" />
      </Menu.Item>
      {
        menuItems.map(item =>{
          return renderMenuItems(item)
        })
      }
    </Menu>
  );
}

export default Nav;
