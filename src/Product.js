
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getProducts } from './Redux/Action';


const Product = ({getProducts, loading, products}) => {
    React.useEffect(() => {
        getProducts();
    }, [getProducts])
    if(loading){
        return <h2 className="section-title">Loading...</h2>
    }

    return (
        <section className="section">
            <h2 className="section-title">Our Products</h2>
            <ul className="products">
                {products.map(item => {
                    return <li key={item.id} className="product">
                        <img src={item.image.url} alt={item.title}/>
                        <h4> {item.title} </h4>
                    </li>
                })}
            </ul>
        </section>
    );
};

Product.propTypes = {
    loading: PropTypes.bool.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateProps = ({productState: {products, loading}}) => {
    return {loading, products}
}

export default connect(mapStateProps, {getProducts})(Product);