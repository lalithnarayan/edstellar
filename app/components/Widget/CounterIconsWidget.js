import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import OndemandVideo from '@material-ui/icons/OndemandVideo';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import CollectionsBookmark from '@material-ui/icons/CollectionsBookmark';
import Edit from '@material-ui/icons/Edit';
import colorfull from 'dan-api/palette/colorfull';
import CounterWidget from '../Counter/CounterWidget';
import styles from './widget-jss';


class CounterIconWidget extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.rootCounterFull}>
        <Grid container spacing={2}>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[0]}
              start={0}
              end={10}
              duration={3}
              title="Projects"
            >
              <OndemandVideo className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[1]}
              start={0}
              end={8}
              duration={3}
              title="Trainers"
            >
              <SupervisorAccount className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[2]}
              start={0}
              end={67}
              duration={3}
              title="Candidates"
            >
              <Edit className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
          <Grid item xs={6} md={6}>
            <CounterWidget
              color={colorfull[3]}
              start={0}
              end={36}
              duration={3}
              title="Total Certifications"
            >
              <CollectionsBookmark className={classes.counterIcon} />
            </CounterWidget>
          </Grid>
        </Grid>
      </div>
    );
  }
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterIconWidget);
