import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PricingCard from '../CardPaper/PricingCard';
import Title from './Title';
import styles from './landingStyle-jss';

class Pricing extends React.Component {
  render() {
    const { classes, slideMode } = this.props;
    return (
      <div className={classes.pricing}>
        <div className={slideMode ? classes.fullWidth : classes.container}>
          <Title title="Pricing" desc="Cras convallis lacus orci, tristique tincidunt magna consequat in." align="center" monocolor={slideMode && true} />
          <Grid container className={classes.root} spacing={5}>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="For Startups"
                price="FREE"
                tier="free"
                feature={['Advanced Search', 'Trainer Suggestions', 'Work Tracking Board', 'Trainer Schedule Management', 'FAQ Support']}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="Enterprise"
                price="$24"
                tier="cheap"
                feature={['Free Tier +', 'Expertize Search', 'Trainer Comparison', 'Course Material', 'Training Management Dashboard', 'Basic Support']}
              />
            </Grid>
            <Grid item md={4} xs={12}>
              <PricingCard
                title="Extended"
                price="$50"
                tier="expensive"
                feature={['Enterprise +', 'Dedicated Training Manager', 'Advanced Project Tracking Board', 'Sourcing', '24x7 Support']}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

Pricing.propTypes = {
  classes: PropTypes.object.isRequired,
  slideMode: PropTypes.bool,
};

Pricing.defaultProps = {
  slideMode: false
};

export default withStyles(styles)(Pricing);
