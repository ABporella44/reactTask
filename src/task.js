import React from 'react';
import Navigation from '../src/navigation';
import Grid from '@material-ui/core/Grid';
import {  Card, CardMedia } from '@material-ui/core';
import Button from '@material-ui/core/Button';


class Landingpage extends React.Component{
 constructor(props){
   super(props);
   this.state={
     images:[
       'images2/bitmap.png',
       'images2/celcom-logo-wine-01.png',
       'images2/group-18.png',
       'images2/group-18-1.png',
       'images2/indian-navy-logo.png',
       'images2/jio-digital-life-logo-vector.png',
       'images2/image2.png',
       'images2/image3.png',
     ]
   }
 }
 render(){
   console.log(this.state.images)
   return(
    <div className="body-class">
  
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <Navigation/> 
        </Grid>
        <Grid  className="landing-body" item xs={12}>
        <div className="first-component">
         <Grid className="content-place" item xs={6}>
           <div className="first-content">
              Powerful products to accelerate efficiency and productivity
           </div>
           <div className="second-content">
           Tools to help you gain control of remote access and security along with asset management and compliance. 
           </div>
         </Grid>
         <Grid className="imagein-grid" item xs={6}>
           <img src="images/illustration-header.png"></img>  
         </Grid>
       </div>
        </Grid>
        <Grid item xs={12}>
            <div className="middle-page">
              <div className="product-button">
                <div className="product-text">
                Products
                </div>
              </div>
              <div className="infraon-suit">
                The Infraon Suite – hike efficiency and business success
                </div>
                <div className="bottom-text">
                Products that bolster your IT Infra, Networks and Service Delivery
                </div>
             </div>
        </Grid>
        <Grid className="card-elements-pri" item xs={12}>
             <Grid className="card-area" item xs={6}>
               <Card className="card-intro">
                 <div className="card-elements"> 
                   <div className="top-cardelements">
                     <div className="image-conatiner">
                     <img src="images/group-5-1.png"/>
                     </div>
                     <div className="topeside-menu">
                       <div className="topside-menu-conatiner">
                       <div className="infra-text">InfraonSecura</div>
                       <div className="sub-text">Powered By EverestIMS</div>
                       </div>
                       <div className="sub-ext-text1">[Standard]</div>
                       <div className="sub-ext-text">A Remote Access,Authorization & Security System </div>
                     </div>
                     
                   </div>
                   <div className="path-line"></div>
                   <div className="bottom-elements">
                     <div className="price-tag">
                     <div className="pd-0">$</div>
                     <div className="price-elements">89
                        <div className="pd-1">.00</div>
                        <div className="pd-2">/mo</div>
                     </div>
                   </div>
                   <div className="button-class">
                     <Button variant="contained" color="primary" size="large">GetStarted</Button>
                   </div>
                     </div>
                 </div>
                 </Card>
             </Grid>
             <Grid className="card-area" item xs={6}>
             <Card className="card-intro">
                 <div className="card-elements"> 
                   <div className="top-cardelements">
                     <div className="image-conatiner">
                     <img src="images/group-5-1.png"/>
                     </div>
                     <div className="topeside-menu">
                       <div className="topside-menu-conatiner">
                       <div className="infra-text">InfraonSecura</div>
                       <div className="sub-text">Powered By EverestIMS</div>
                       </div>
                       <div className="sub-ext-text1">[Standard]</div>
                       <div className="sub-ext-text">A Remote Access,Authorization & Security System </div>
                     </div>
                     
                   </div>
                   <div className="path-line"></div>
                   <div className="bottom-elements">
                     <div className="price-tag">
                     <div className="pd-0">$</div>
                     <div className="price-elements">89
                        <div className="pd-1">.00</div>
                        <div className="pd-2">/mo</div>
                     </div>
                    
                   </div>
                   <div className="button-class">
                       <Button variant="contained" color="primary" size="large">GetStarted</Button>
                   </div>
                     </div>

                 </div>
                 </Card>
             </Grid>
             
        </Grid>
        <Grid container className="middle-text" item xs={12}>
                 <div className="text-class">
                 Over 150 Enterprises, Banks, FIs, 
                 Large Telcos and other customers across the world trust us with their most crucial IT needs and outcomes
                 </div>
             </Grid>
             <Grid container className="card-list" item xs={12}>
                 <div className="cardlist-class">
                   <div className="allinone-card">
                       <div className="image-icon">
                         <img src="images/group.png"></img>  
                       </div>    
                     <div className="card-elmments">
                        <div className="insert-icon">
                          <img src="images/icons1.png"></img>
                        </div>
                        <div className="number-class">
                            150+
                        </div>
                        <div className="text-class">
                          Clients
                        </div> 
                     </div>             
                   </div>
                   <div className="allinone-card">
                       <div className="image-icon">
                         <img style={{ margin: "-55px"}} src="images/group-2.png"></img>  
                       </div>    
                     <div className="card-elmments">
                        <div className="insert-icon">
                          <img src="images/icons2.png"></img>
                        </div>
                        <div style={{color:"white"}} className="number-class">
                            500K+
                        </div>
                        <div   style={{color:"white"}} className="text-class">
                          Nodes
                        </div> 
                     </div>             
                   </div>
                   <div className="allinone-card">
                       <div className="image-icon">
                         <img src="images/group.png"></img>  
                       </div>    
                     <div className="card-elmments">
                        <div className="insert-icon">
                          <img src="images/icons3.png"></img>
                        </div>
                        <div className="number-class">
                            30K+
                        </div>
                        <div className="text-class">
                          Remote Managment
                        </div> 
                     </div>             
                   </div>
                   <div className="allinone-card">
                       <div className="image-icon">
                         <img src="images/group.png"></img>  
                       </div>    
                     <div className="card-elmments">
                        <div className="insert-icon">
                          <img src="images/icons4.png"></img>
                        </div>
                        <div className="number-class">
                            10K+
                        </div>
                        <div className="text-class">
                          Users
                        </div> 
                     </div>             
                   </div>
                 </div>
             </Grid>
             <Grid container item xs={12}>
               <div className="image-grid">
                  <div className="heading">
                           Our Loyal Customers
                   </div>
                   <Grid container item xs={8} className="images">
                     {this.state.images.map((item,index)=>(
                       <Grid container className="image-setting" item xs={3}>
                           <div className="image-holder">
                             <img  src={item}></img>
                             </div>
                                    
                       </Grid>
                       ))}
                     </Grid>
               </div>
             </Grid>
      </Grid>
    </div>  
   )
 }
}
export default Landingpage;