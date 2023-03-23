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
                <Tab value={'1'} label='Home'>Home</Tab>
                <Tab value={'2'} label='Calculator'>Calculator</Tab>
                <Tab value={'3'} label='Currency'>Currency</Tab>
                <Tab value={'4'} label='Units'>Units</Tab>
              </Tabs>
            </Toolbar>
          </AppBar>
        </div>
    );
}

export default Header;