import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import SettingsIcon from '@material-ui/icons/Settings';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PhoneIcon from '@material-ui/icons/Phone';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function InsetDividers() {
    const classes = useStyles();

    return (
        <List className={classes.root}>
        <ListItem>
        <ListItemAvatar>
        <Avatar>
        <SettingsIcon />
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Change Password" secondary="Reset your password" />
        <Button variant="contained" color="primary" disableElevation>
      Change
    </Button>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
        <ListItemAvatar>
        <Avatar>
        <AccountCircleIcon/>
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary="ChangeName" secondary="change your name" />
        <Button variant="contained" color="primary" disableElevation>
      Change
    </Button>
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem>
        <ListItemAvatar>
        <Avatar>
        < PhoneIcon/>
        </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Change Number" secondary="change your phone numer" />
        <Button variant="contained" color="primary" disableElevation>
      Change
    </Button>
        </ListItem>
        </List>
);
}