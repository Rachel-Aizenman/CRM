import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Clients from '../Clients/Clients'
import Actions from '../Actions/Actions'
import Analytics from '../Analytics/Analytics'

import './NavBar.css'




const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
     

          <Router>
          <AppBar position="static">
        <Toolbar className='toolbar'>
            <div>
            <Button variant="outlined" className='button' >
              <Link className='nav-bar-link' to='/clients'>Clients</Link></Button>
            <div class="divider" />
            <Button variant="outlined">
              <Link className='nav-bar-link' to='/actions'>Actions</Link></Button>
            <div className="divider" />
            <Button variant="outlined">
              <Link className='nav-bar-link' to='/analytics'>Analytics</Link></Button>
              </div>


      
        </Toolbar>
      </AppBar>

      <div>
<Route exact path='/clients' render={() => (<Clients/>)} />
<Route exact path='/actions' render={() => (<Actions/>)} /> 
<Route exact path='/analytics'render={() => (<Analytics/>)} />
</div>   

          </Router>
    </div>
  );
}