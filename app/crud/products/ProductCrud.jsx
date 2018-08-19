import React, { Component } from 'react'
import { fetchBasket, fetchBasketById, putBasket, postBasket, deleteBasketItem, passView } from '../../actions/basketActions'
import { connect } from 'react-redux'
import ProductList from './list/ProductList.jsx'
import ProductCrudCreateEdit from './create-edit/ProductCrudCreateEdit.jsx'
import ProductCrudDetails from './details/ProductCrudDetails.jsx'


class ProductCrud extends Component {

  // constructor(props) {
  //   super(props)
  //   console.log('constructor props', props)
  //   this.state = {
  //     view: ''
  //   }
  //   // this.changeView = this.changeView.bind(this)
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('shouldcomponentupdate', nextProps, nextState)
  //   return true
  // }


  // changeView(view) {
  //   console.log('changeViewFunction', view)
  //   this.setState({ view })
  //   console.log('change view state', this.state)
  // }

  componentWillMount() {
    this.props.fetchBasket()
  }

  renderProductCrudCreateEdit() {
    return (
      <ProductCrudCreateEdit
        basket={this.props.basket}
        delete={this.props.deleteBasketItem}
        changeView={this.props.passView}
        put={this.props.putBasket}
        post={this.props.postBasket}
        view={this.props.view}
        productId={this.props.productId}
      />
    )
  }

  renderProductCrudDetails() {
    return (
      <ProductCrudDetails
        basket={this.props.basket}
        changeView={this.props.passView}
        delete={this.props.deleteBasketItem}
        productId={this.props.productId}
      />
    )
  }

  renderProductList() {
    return (
      <ProductList
        products={this.props.basket}
        changeView={this.props.passView}
        delete={this.props.deleteBasketItem}
        getById={this.props.fetchBasketById}
      />
    )
  }


  render() {

    console.log('props from ProductCrud', this.props)

    if (this.props.view === 'details') {
      return (
        <div>
          {this.renderProductCrudDetails()}
        </div>
      )
    } else if (this.props.view === 'create') {
      return (
        <div>
          {this.renderProductCrudCreateEdit()}
        </div>
      )
    } else if (this.props.view === 'edit') {
      return (
        <div>
          {this.renderProductCrudCreateEdit()}
        </div>
      )
    } else if (this.props.view === '' || null || undefined || 'list') {
      return (
        <div>
          {this.renderProductList()}
        </div>
      )
    }
    // if (this.state.view === '') {
    //   return (
    //     <div>
    //       {this.renderProductList()}
    //     </div>
    //   )
    // } else if (this.state.view === 'details') {
    //   return this.renderProductCrudDetails()

    // } else if (this.state.view === 'create' || 'edit') {
    //   return this.renderProductCrudCreateEdit()
    // }


    // return (
    //   <div>
    //   {/* {this.state.view === 'details' ? this.renderProductCrudDetails() : 
    //   // this.state.view === 'create' || 'edit' ? this.renderProductCrudCreateEdit() :
    //   this.renderProductList()} */}
    //   </div>
    // )
  }
}

const mapStateToProps = state => ({
  basket: state.basket.items,
  productId: state.basket.item,
  view: state.basket.view
})


export default connect(mapStateToProps, { fetchBasket, fetchBasketById, putBasket, postBasket, deleteBasketItem, passView })(ProductCrud)