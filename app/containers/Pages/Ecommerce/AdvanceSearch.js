import React from 'react';
import { fromJS, List } from 'immutable';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import brand from 'dan-api/dummy/brand';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import data from 'dan-api/apps/productData';
import { SearchProduct, ProductGallery, Notification } from 'dan-components';
import {
  fetchAction,
  addAction,
  removeAction,
  checkoutAction,
  detailAction,
  searchAction,
  closeNotifAction
} from 'dan-actions/EcommerceActions';


const dataProduct = fromJS([{
  id: 1,
  name: 'Reinwald Burdell',
  thumbnail: 'http://dummyimage.com/164x176.bmp/dddddd/000000',
  desc: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.',
  ratting: 4,
  price: 6304,
  discount: '104.86.120.75',
  soldout: '205.59.50.165',
  courses: 0.23,
  is_high_demand: true
}, {
  id: 2,
  name: 'Betteann Gallagher',
  thumbnail: 'http://dummyimage.com/114x153.jpg/ff4444/ffffff',
  desc: 'In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
  ratting: 1,
  price: 7915,
  discount: '195.39.56.162',
  soldout: '30.99.68.94',
  courses: 0.5,
  is_high_demand: true
}, {
  id: 3,
  name: 'Lefty Greedyer',
  thumbnail: 'http://dummyimage.com/233x202.bmp/cc0000/ffffff',
  desc: 'Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  ratting: 3,
  price: 8312,
  discount: '136.60.109.44',
  soldout: '116.168.119.210',
  courses: 0.28,
  is_high_demand: false
}, {
  id: 4,
  name: 'Querida Prattington',
  thumbnail: 'http://dummyimage.com/112x197.jpg/5fa2dd/ffffff',
  desc: 'Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
  ratting: 2,
  price: 7198,
  discount: '25.179.73.239',
  soldout: '197.220.79.231',
  courses: 0.02,
  is_high_demand: true
}, {
  id: 5,
  name: 'Suzanne Jarman',
  thumbnail: 'http://dummyimage.com/138x237.bmp/ff4444/ffffff',
  desc: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.',
  ratting: 4,
  price: 5436,
  discount: '3.185.0.76',
  soldout: '167.88.122.26',
  courses: 0.21,
  is_high_demand: false
}, {
  id: 6,
  name: 'Lishe Gent',
  thumbnail: 'http://dummyimage.com/112x151.png/5fa2dd/ffffff',
  desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus.\n\nVestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
  ratting: 2,
  price: 6243,
  discount: '169.107.173.68',
  soldout: '222.248.93.170',
  courses: 0.31,
  is_high_demand: true
}, {
  id: 7,
  name: 'Jeremie Blincko',
  thumbnail: 'http://dummyimage.com/147x171.jpg/5fa2dd/ffffff',
  desc: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  ratting: 4,
  price: 5787,
  discount: '185.217.225.74',
  soldout: '127.119.217.178',
  courses: 0.09,
  is_high_demand: false
}, {
  id: 8,
  name: 'Trixy Tysall',
  thumbnail: 'http://dummyimage.com/165x225.png/dddddd/000000',
  desc: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
  ratting: 2,
  price: 8410,
  discount: '144.222.12.33',
  soldout: '118.122.71.13',
  courses: 0.41,
  is_high_demand: true
}, {
  id: 9,
  name: 'Steven Basden',
  thumbnail: 'http://dummyimage.com/129x107.png/dddddd/000000',
  desc: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
  ratting: 3,
  price: 7496,
  discount: '175.115.236.53',
  soldout: '74.63.4.245',
  courses: 0.45,
  is_high_demand: true
}, {
  id: 10,
  name: 'Martguerita Hellard',
  thumbnail: 'http://dummyimage.com/174x236.png/5fa2dd/ffffff',
  desc: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.',
  ratting: 3,
  price: 8100,
  discount: '10.198.203.32',
  soldout: '241.84.200.4',
  courses: 0.62,
  is_high_demand: false
}, {
  id: 11,
  name: 'Salomone Demangeot',
  thumbnail: 'http://dummyimage.com/166x147.bmp/ff4444/ffffff',
  desc: 'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  ratting: 3,
  price: 5370,
  discount: '245.243.172.189',
  soldout: '132.213.251.54',
  courses: 0.58,
  is_high_demand: false
}, {
  id: 12,
  name: 'Lexine Celes',
  thumbnail: 'http://dummyimage.com/223x125.jpg/cc0000/ffffff',
  desc: 'Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.',
  ratting: 1,
  price: 6598,
  discount: '84.179.120.59',
  soldout: '115.56.61.90',
  courses: 0.01,
  is_high_demand: false
}, {
  id: 13,
  name: 'Alano De Hailes',
  thumbnail: 'http://dummyimage.com/219x197.png/ff4444/ffffff',
  desc: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.',
  ratting: 1,
  price: 8744,
  discount: '14.98.27.248',
  soldout: '122.235.228.142',
  courses: 0.35,
  is_high_demand: true
}, {
  id: 14,
  name: 'Merrill Ventris',
  thumbnail: 'http://dummyimage.com/120x151.bmp/ff4444/ffffff',
  desc: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
  ratting: 1,
  price: 9149,
  discount: '79.249.62.202',
  soldout: '191.216.63.128',
  courses: 0.19,
  is_high_demand: true
}, {
  id: 15,
  name: 'Sibeal Beig',
  thumbnail: 'http://dummyimage.com/234x130.bmp/5fa2dd/ffffff',
  desc: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.',
  ratting: 5,
  price: 8627,
  discount: '53.49.109.157',
  soldout: '174.179.212.133',
  courses: 0.2,
  is_high_demand: false
}, {
  id: 16,
  name: 'Norrie Randlesome',
  thumbnail: 'http://dummyimage.com/238x180.png/dddddd/000000',
  desc: 'Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
  ratting: 4,
  price: 6254,
  discount: '175.66.15.14',
  soldout: '60.101.36.83',
  courses: 0.97,
  is_high_demand: true
}, {
  id: 17,
  name: 'Car Katzmann',
  thumbnail: 'http://dummyimage.com/139x232.jpg/cc0000/ffffff',
  desc: 'Quisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
  ratting: 5,
  price: 7677,
  discount: '122.70.183.204',
  soldout: '20.227.178.197',
  courses: 0.33,
  is_high_demand: false
}, {
  id: 18,
  name: 'Katharine Mettricke',
  thumbnail: 'http://dummyimage.com/244x183.bmp/5fa2dd/ffffff',
  desc: 'Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
  ratting: 3,
  price: 6577,
  discount: '87.70.243.86',
  soldout: '33.163.152.60',
  courses: 0.77,
  is_high_demand: false
}, {
  id: 19,
  name: 'Sheena Astell',
  thumbnail: 'http://dummyimage.com/138x108.jpg/dddddd/000000',
  desc: 'Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.',
  ratting: 4,
  price: 6617,
  discount: '72.222.133.180',
  soldout: '146.142.63.118',
  courses: 0.2,
  is_high_demand: true
}, {
  id: 20,
  name: 'Tim Vanni',
  thumbnail: 'http://dummyimage.com/164x248.jpg/ff4444/ffffff',
  desc: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.',
  ratting: 4,
  price: 6012,
  discount: '199.212.217.177',
  soldout: '45.60.77.165',
  courses: 0.08,
  is_high_demand: false
}]);
class Ecommerce extends React.Component {
  state = {
    listView: 'list',
  }

  componentDidMount() {
    // const { fetchData } = this.props;
    // fetchData(data);
  }

  handleSwitchView = (event, value) => {
    this.setState({
      listView: value
    });
  }

  render() {
    const title = brand.name + ' - Ecommerce';
    const description = brand.desc;
    const { listView } = this.state;
    const {
    //   dataProduct,
      handleAddToCart,
      dataCart,
      removeItem,
      checkout,
      showDetail,
      productIndex,
      totalItems,
      totalPrice,
      search,
      keyword,
      closeNotif,
      messageNotif
    } = this.props;
    return (
      <div>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="twitter:title" content={title} />
          <meta property="twitter:description" content={description} />
        </Helmet>
        <Notification close={() => closeNotif()} message={messageNotif} />
        <SearchProduct
          dataCart={dataCart}
          dataProduct={dataProduct}
          removeItem={removeItem}
          checkout={checkout}
          totalItems={totalItems}
          totalPrice={totalPrice}
          search={search}
          keyword={keyword}
          listView={listView}
          handleSwitchView={this.handleSwitchView}
          placeholder="Search Trainers"
        />
        <ProductGallery
          listView={listView}
          dataProduct={dataProduct}
          showDetail={showDetail}
          handleAddToCart={handleAddToCart}
          productIndex={productIndex}
          keyword={keyword}
        />
      </div>
    );
  }
}

Ecommerce.propTypes = {
  fetchData: PropTypes.func.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  showDetail: PropTypes.func.isRequired,
  checkout: PropTypes.func.isRequired,
  search: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  //   dataProduct: PropTypes.object.isRequired,
  dataCart: PropTypes.object.isRequired,
  productIndex: PropTypes.number.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  closeNotif: PropTypes.func.isRequired,
  messageNotif: PropTypes.string.isRequired,
};

const reducer = 'ecommerce';
const mapStateToProps = state => ({
  force: state, // force state from reducer
  keyword: state.getIn([reducer, 'keywordValue']),
  //   dataProduct: state.getIn([reducer, 'productList']),
  dataCart: state.getIn([reducer, 'cart']),
  productIndex: state.getIn([reducer, 'productIndex']),
  totalItems: state.getIn([reducer, 'totalItems']),
  totalPrice: state.getIn([reducer, 'totalPrice']),
  messageNotif: state.getIn([reducer, 'notifMsg']),
});

const constDispatchToProps = dispatch => ({
  fetchData: bindActionCreators(fetchAction, dispatch),
  search: bindActionCreators(searchAction, dispatch),
  handleAddToCart: bindActionCreators(addAction, dispatch),
  removeItem: bindActionCreators(removeAction, dispatch),
  showDetail: bindActionCreators(detailAction, dispatch),
  checkout: () => dispatch(checkoutAction),
  closeNotif: () => dispatch(closeNotifAction),
});

const EcommerceMapped = connect(
  mapStateToProps,
  constDispatchToProps
)(Ecommerce);

export default EcommerceMapped;
