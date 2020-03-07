import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ShowcaseCard from '../CardPaper/ShowcaseCard';
import Title from './Title';
import styles from './landingStyle-jss';

class ShowcaseSlider extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.showcase}>
        <div className={slideMode ? classes.fullWidth : classes.container}>
          <Grid container className={classes.root} spacing={5}>
            <Grid item md={6} xs={12}>
              <Title title="Showcase" align="left" monocolor={slideMode && true} />
              <ShowcaseCard
                landscape
                title="Advanced Search"
                desc="Search with Detailed filters based on your Project"
                action="Try it"
                image="/images/screen/thumb1.jpg"
              />
              <ShowcaseCard
                landscape
                title="A fully Automated Task Board"
                desc="Single point of Action for managing the Lifecycle of a training"
                action="See Demo"
                image="/images/screen/thumb3.jpg"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <ShowcaseCard
                landscape
                title="Seamless Contracts and Documentation"
                desc="Now manage all Contracts and Training Documents in one view"
                action="See Demo"
                image="/images/screen/thumb5.jpg"
              />
              <ShowcaseCard
                landscape
                title="Active Feedback and Review"
                desc="We have over a 100 satisfied clients, this is the power of right feedback"
                action="Try It"
                image="/images/screen/thumb2.jpg"
              />
              <ShowcaseCard
                landscape
                title="Built for Enterprise and Start-ups"
                desc="Large Business or a 2 member startup, we can meet your training needs"
                action="Try Now"
                image="/images/screen/thumb4.jpg"
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}


ShowcaseSlider.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool
};

ShowcaseSlider.defaultProps = {
  slideMode: false
};


export default withStyles(styles)(ShowcaseSlider);
