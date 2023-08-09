import React from "react";
//class CartItem extends React.Component {

  //Below promise make setState work synchronous and works as an API call, its just for testing purposes.
  // testing () {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve('done');
  //     }, 5000);
  //   })

  //   promise.then(() => {
  //     // setState acts like a synchronus call
  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     this.setState({ qty: this.state.qty + 10 });

  //     console.log('state', this.state);
  //   });
  // }
// Moving all below add subtract fn to cart.js
  /* increaseQuantity = () => {
    // this.state.qty += 1;
    // console.log('this', this.state);
    // setState form 1
    // this.setState({
    //   qty: this.state.qty + 1
    // });

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1
      }
    });
  }
  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 1) {
      return;
    }

    // setState form 2 - if prevState required use this
    this.setState((prevState) => {
      return {
        qty: prevState.qty - 1
      }
    });
  }
 */
 /*  render() {
    console.log('this.props', this.props); */
    const CartItem = (props) => {
      const { price, title, qty } = props.product;
      const {
        product,
        onIncreaseQuantity,
        onDecreaseQuantity,
        onDeleteProduct
      } = props;
      return (
        <div className="cart-item">
          <div className="left-block">
            <img style={styles.image} src={product.img}/>
          </div>
          <div className="right-block">
            <div style={ { fontSize: 25 } }>{title}</div>
            <div style={ { color: '#777' } }>Rs {price} </div>
            <div style={ { color: '#777' } }>Qty: {qty} </div>
            <div className="cart-item-actions">
            {/* Buttons */}
            <img
              alt="incease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/4210/4210903.png"
              //onClick={() => this.props.onIncreaseQuantity(this.props.product)}
              //OR
              onClick={() => onIncreaseQuantity(product)}

             // below method is when increasing from same file using this keyword
             //onClick={this.increaseQuantity}
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/1665/1665765.png"
              //onClick={() => this.props.onDecreaseQuantity(this.props.product)}
              onClick={() => onDecreaseQuantity(product)}

            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/128/6096/6096937.png"
              onClick={() => onDeleteProduct(product.id)}

              />
              </div>
            </div>
          </div>
        );
      }
      
      const styles = {
        image: {
          height: 110,
          width: 110,
          borderRadius: 4,
          background: '#ccc'
        }
      }
      
      export default CartItem;