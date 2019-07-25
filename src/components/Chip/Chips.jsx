import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  chip: {
    margin: theme.spacing(1),
  },
}));

export default function SmallChips() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Chip
        size="small"
        label="Python"
        className={classes.chip}
        color="primary"
      />
      
      <Chip
        size="small"
        label="C++"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Java"
        className={classes.chip}
        color="primary"
      />
      
      <Chip
        size="small"
        label="Flask"
        className={classes.chip}
        color="primary"
      />
      
      <Chip
        size="small"
        label="jinja2"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="SQL"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="HTML/CSS"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Javascript"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="React.js"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Node.js"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Bootstrap"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Postman"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Docker"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Swagger"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Data Science"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Linux"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Lightroom"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Sketch"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Photography"
        className={classes.chip}
        color="primary"
      />

      <Chip
        size="small"
        label="Self-starter"
        className={classes.chip}
        color="secondary"
      />

      <Chip
        size="small"
        label="Leader"
        className={classes.chip}
        color="secondary"
      />

      <Chip
        size="small"
        label="Forward Thinking"
        className={classes.chip}
        color="secondary"
      />

      <Chip
        size="small"
        label="Eye for design"
        className={classes.chip}
        color="secondary"
      />

      <Chip
        size="small"
        label="Team player"
        className={classes.chip}
        color="secondary"
      />

    </div>
  );
}