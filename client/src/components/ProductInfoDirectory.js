import React from 'react';

const ProductInfoDirectory = (props) => {
    let categoryNumber = props.productInfoDirectoryProp.id;
    console.log(categoryNumber)

    const renderCategory = (category) => {
        return (
            <div className="product-directory"> 
                <a href="#" className="product-info-category-directory">West Buy</a>
    
                <i className="fas fa-caret-right"></i> 
                <a href="#" className="product-info-category-directory">{category}</a> 
    
                {/* <i className="fas fa-caret-right"></i>
                <a href="#" className="product-info-category-directory">Sub-Category</a> */}
            </div>
        )
    }


    if (categoryNumber <= 20) {
        return (renderCategory("Western Wear"));

    } else if ((categoryNumber >= 21) && (categoryNumber <= 40)) {
        return (renderCategory("Buildings"));

    } else if ((categoryNumber >= 41) && (categoryNumber <= 60)) {
        return (renderCategory("Horses & Accessories"));

    } else if ((categoryNumber >= 61) && (categoryNumber <= 80)) {
        return (renderCategory("NATALIA"));

    } else if (categoryNumber >= 81) {
        return (renderCategory("Guns & Paraphernalia"));
    } else {
        return null;
    }
}


export default ProductInfoDirectory;