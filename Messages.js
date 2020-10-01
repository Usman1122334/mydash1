import React from 'react';
import {Grid, Divider, Typography, ListItemIcon} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import PhotoLibraryIycon from '@material-ui/icons/PhotoLibrary';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import VideocamIcon from '@material-ui/icons/Videocam';
import nikklaus from './nikklaus.jpg'
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Snackbar from './Snackbar';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: '#fcfcfc',
      height:'900px',
      marginTop: '20px'
    },
    avatarst:{
        width: 250,
        height: 250,
        marginLeft: '15px',
        marginTop: '20px'
    }
  }));

  
const Messages= () => {

    const classes = useStyles();
    return ( 
      <Grid container direction="coloumn">
          <Grid item sm={3} xs={12}>
          <List className={classes.root}>
      <ListItem>
        <Avatar className={classes.avatarst}  alt="Remy Sharp" src={nikklaus}/>
      
      </ListItem>
      <div style={{marginLeft:'20px'}}>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton  color="primary" aria-label="upload picture" component="span">
          <PhotoCamera  style={{fontSize:'30px'}}/>
        </IconButton>
      </label>
      </div>
      <Typography className={classes.avatarst} variant="h3"  style={{color:'#6042f5' , marginLeft:'40px'}}>
          Klaus Mikaelson
          <Divider style={{marginTop:'30px'}}/>
          Dashboard
          <Divider style={{marginTop:'30px'}}/>
          <Button variant="contained" color="primary" disableElevation>
           Settings
          </Button>
          <Divider style={{marginTop:'20px'}}/>
          <Button variant="contained" color="primary" disableElevation>
          Messages
         </Button>
     
      </Typography>
 
    </List>
          </Grid>
          <Grid container style={{marginTop:'20px', backgroundColor:'#edf0f2'}}>
          <div className="avatar"> <Avatar style={{height:'60px',width:'60px',marginLeft:'10px'}} src={nikklaus}/> 
          </div> 
         <div> 
             <input style={{maxWidth:'300px',width:'400px',height:'40px',marginTop:'5px', borderRadius:'99px', paddingLeft:'20px',marginLeft:'10px', borderColor:"white",borderBlockEndColor:"grey"
            }} type="text" placeholder="What's on your mind dawg?"/>
          
             </div> 
             <div style={{marginLeft:'10px', marginTop:'10px'}}>
             <PhotoCameraIcon style={{fontSize:'40px', color:'#3254a8', marginLeft:'40px'}}/>
             <PhotoLibraryIycon style={{fontSize:'40px', marginLeft:'40px', color:'#27ab2c'}}/>
             <VideocamIcon style={{fontSize:'40px', marginLeft:'40px', color:'red'}}/>
           
             </div>
             <Divider/>
             <Button variant="contained" style={{width:'150px', height:'40px', marginLeft:'50px', marginTop:'9px', color:'blue',fontSize:'20px',paddingTop:'5px'}}>Post</Button> 
             </Grid>
          
          <Grid item sm={7} xs={12} style={{background: '#fcfcfc',marginTop:'20px'}} > 
              <Snackbar/>
          </Grid>
      </Grid>
    );
}
 
export default Messages;