import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';
import classNames from 'classnames';
import Card from '@material-ui/core/Card';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
// import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
// import Fab from '@material-ui/core/Fab';
import Type from 'dan-styles/Typography.scss';
import Ionicon from 'react-ionicons';
import Rating from '../Rating/Rating';
import styles from './cardStyle-jss';

class ProductCard extends React.Component {
  render() {
    const {
      classes,
      discount,
      soldout,
      thumbnail,
      name,
      desc,
      highDemand,
      ratting,
      price,
      prevPrice,
      list,
      detailOpen,
      addToCart,
      width,
      // courses
    } = this.props;
    return (
      <Card className={classNames(classes.cardProduct, isWidthUp('sm', width) && list ? classes.cardList : '')}>
        <div className={classes.status}>
          {discount !== '' && (
            <Chip label={'Trainers ' + discount} className={classes.chipDiscount} />
          )}
          {soldout && (
            <Chip label="High Demand" className={classes.chipSold} />
          )}
        </div>
        <CardMedia
          className={classes.mediaProduct}
          image={thumbnail}
          title={name}
        />
        <CardContent className={classes.floatingButtonWrap}>
          <Typography noWrap gutterBottom variant="h5" className={classes.title} component="h2">
            {name}
          </Typography>

          {
            highDemand ? (
              <div>
                <Ionicon color="#FF0000" icon="ios-alert" />
                <Typography color="error" noWrap gutterBottom component="span">
                  In High demand
                </Typography>
              </div>
            ) : null
          }

          <Typography component="p" className={classes.desc}>
            {desc}
          </Typography>
          <div className={classes.ratting}>
            <Rating value={ratting} max={5} readOnly />
          </div>
        </CardContent>
        <CardActions className={classes.price}>
          <Typography variant="h5">
            <span>
              ₹
              {' '}
              {price}
              {' '}
              onwards
            </span>
          </Typography>
          {prevPrice > 0 && (
            <Typography variant="caption" component="h5">
              <span className={Type.lineThrought}>
                Rs
                {prevPrice}
              </span>
            </Typography>
          )}
          <div className={classes.rightAction}>
            <Button size="small" variant="outlined" color="secondary" onClick={detailOpen}>
              See Detail
            </Button>
          </div>
        </CardActions>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired,
  discount: PropTypes.string,
  width: PropTypes.string.isRequired,
  soldout: PropTypes.bool,
  thumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  highDemand: PropTypes.bool,
  ratting: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  prevPrice: PropTypes.number,
  list: PropTypes.bool,
  detailOpen: PropTypes.func,
  // addToCart: PropTypes.func,
};

ProductCard.defaultProps = {
  discount: '',
  soldout: false,
  highDemand: false,
  prevPrice: 0,
  list: false,
  detailOpen: () => (false),
  // addToCart: () => (false),
};

const ProductCardResponsive = withWidth()(ProductCard);
export default withStyles(styles)(ProductCardResponsive);
