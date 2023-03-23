import React from 'react';
import {AppBar, Toolbar, Tab, Tabs, Typography} from '@mui/material';
import CalculateIcon from '@mui/icons-material/Calculate';


function Header() {
    return (
        <div>
          <AppBar sx={{background: '#3F91BF'}}>
            <Toolbar>
              <CalculateIcon />
              <Tabs sx={{marginLeft: 'auto'}} textColor='inherit'>
                <Tab label='Home'></Tab>
                <Tab label='Calculator'></Tab>
                <Tab label='Currency'></Tab>
                <Tab label='Units'></Tab>
              </Tabs>
            </Toolbar>
          </AppBar>
        </div>
    );
}

export default Header;