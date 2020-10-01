import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
    <Button color="secondary" size="small">
      lorem ipsum dolorem
    </Button>
  );
  
  const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 600,
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
export default function LongTextSnackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <SnackbarContent message="Hey this is mac i want a plumber if you are interested do let me know." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
      />
      <SnackbarContent message="I love candy. I love cookies. I love cupcakes." action={action} />
      <SnackbarContent
        message={
          'I love candy. I love cookies. I love cupcakes. \
          I love cheesecake. I love chocolate.'
        }
        action={action}
      />
    </div>
  );
}
