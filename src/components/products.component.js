import {Component} from "react";

class Products extends Component {
    state = {
        cart: 0,
        product: [],
        products: [
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {"rate": 3.9, "count": 120}
            }, {
                "id": 2,
                "title": "Mens Casual Premium Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {"rate": 4.1, "count": 259}
            }, {
                "id": 3,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "rating": {"rate": 4.7, "count": 500}
            }, {
                "id": 4,
                "title": "Mens Casual Slim Fit",
                "price": 15.99,
                "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "rating": {"rate": 2.1, "count": 430}
            }, {
                "id": 5,
                "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
                "price": 695,
                "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
                "category": "jewelery",
                "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
                "rating": {"rate": 4.6, "count": 400}
            }]
    };


    handleIncrement = (id) => {
        const cartStore = this.state
        const result = cartStore.products.find((value, idx) => value.id === id)
        result['quantity'] = result['quantity'] ? result['quantity'] + 1 : 1
        let tempCart = [...cartStore.product];
        tempCart.push(result);
        const seen = new Set();
        const filteredArr = tempCart.filter(el => {
            const duplicate = seen.has(el.id);
            seen.add(el.id);
            return !duplicate;
        });
        console.log(filteredArr)
        this.setState({
            product: filteredArr,
            cart: parseInt(cartStore.cart) ? parseInt(cartStore.cart) + 1 : 1
        })
        this.props.updateCart(filteredArr.length)
    };

    handleDecrement = (id) => {
        const {product} =[...this.state]
        // eslint-disable-next-line array-callback-return
        let tmpArray = product.map((item, index) => {
            if (item !== undefined) {
                if (item.id === id && item.quantity <= 1) {
                    delete product[index];
                } else if (item.id === id && item.quantity > 1) {
                    item.quantity -= 1
                }
            } else {
                return false;
            }
        })
        let tmp = tmpArray.filter(item => item !== undefined);
        this.setState({
            product: tmp
        })
        this.props.updateCart(this.state.product.length)
    }

    render() {
        return (
            <div className='p-2 container'>
                <div className='row'>
                    {
                        this.state.products.map((item, index) => {
                            let updateItem = this.state.product.find(product => product.id === item.id);
                            return (
                                <div className="card col-3" style={{'margin': '5px'}} key={index}>
                                    <img src="" className="card-img-top" alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.description.substring(0, 100)}</p>
                                        <p className="card-text"><strong>Category : </strong>{item.category}</p>
                                        <div className="row">
                                            <div className='col'>
                                                <button className='btn btn-info'
                                                        onClick={() => this.handleDecrement(item.id)}>-
                                                </button>
                                                <span className='p-2'>{updateItem ? updateItem.quantity : 0}</span>
                                                <button className='btn btn-info'
                                                        onClick={() => this.handleIncrement(item.id)}>+
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Products