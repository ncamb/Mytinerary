import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Rating from '@material-ui/lab/Rating';
import Activitiesslider from './Activitiesslider'
import { Chip } from '@material-ui/core';
const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

export default function Itineraryeach2(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const thearray = props.hashtags
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container wrap="nowrap" spacing={1}>
          <Grid item xs={3} zeroMinWidth>
            <Avatar alt="Remy Sharp" src="https://i.ibb.co/kqgd0qd/Gaudi-Lover.png" >
            </Avatar>
            <Typography variant="body2" gutterBottom noWrap>
              {props.user}
            </Typography>
          </Grid>
          <Grid item xs={9}>
            <Typography variant="h5" >
              {props.name}</Typography>
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <Typography variant="body2">
                 Duration:
                 </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2">
                  {props.duration}hs
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography variant="body2">
                  Price
                 </Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography  className=" light-green-text text-accent-2 "variant="body2">
                  {props.price}
                </Typography>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Typography variant="body2">
                  Valoration:
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Rating name="rating" value={Number(props.rating)} precision={0.1} size="small" readOnly />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {
          thearray.map(hash => {
            return (

              <Chip
                key={hash}
                label={hash}
                className={classes.chip}
                size="small"
              />
            );
          }
          )
        }
      </CardContent>
      <CardActions disableSpacing>
      <Typography variant="body2">
          Show Activities </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Activitiesslider key={props.id} name={props.name} />
        </CardContent>
      </Collapse>
    </Card>
  );
}
