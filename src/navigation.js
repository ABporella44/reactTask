import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.scss';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
function Navigation (){
return(
  <div>
    <Grid  >
      <Grid item xs={12}>
      <Paper className="nav-elements">
          <div className="nav-header">
            <img src="images/element-logo-coloured.png"></img>
          </div>
          <div className="menu-items">
          <ul className="list-items">
           <li><span href="#home">Home</span></li>
           <li><span href="#Prodcuts">Products</span></li>
           <li>
             <div className="support-icon">
             <span href="#Resources">Resources</span>
             <span><ExpandMoreIcon/></span>
             </div>
           </li>
           <li>
             <div className="support-icon">
             <span href="#Support">Support</span>
             <span><ExpandMoreIcon/></span>
             </div>
             </li>
           <li><span href="#about">Company</span></li>
           <div className="button-class"><Button size="large" variant="contained" color="primary" href="#contained-buttons"> Login</Button></div>
          </ul>
           </div>
           
      
         
        </Paper>
      </Grid>
    </Grid>
  </div>
)
}
export default Navigation;