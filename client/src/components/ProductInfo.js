import React from 'react';

const ProductInfo = (props) => {
    return (
        <div className="product-info-column-one">
            <h1 className="product-title">{props.productInfoProp.productName}</h1>
            <div className="product-info">
                <div className="product-model">
                <span className="product-info-label">Model: </span>
                <span>{props.productInfoProp.model} </span>
                </div>

                <div className="product-sku">
                <span className="product-info-label">SKU: </span>
                <span>{props.productInfoProp.sku}</span>
                </div>
            </div>

            <div className="product-feedback">
                <div className="product-feedback-bar">
                    <div className="product-info-review-bar">
                    <div id="product-info-star-placeholder"></div>
                    <a className="product-info-review-link" href="#">
                        <span className="product-info-review-score">4.5 </span>
                        <span className="product-info-review-total">(3000 Reviews)</span>
                    </a>
                    <a className="product-info-review-caret" href="#">
                        <i className="fas fa-chevron-down" id="chevron-icon"></i>
                    </a>
                    </div>

                    <div className="product-info-questions-bar">
                    <a href="#" className="product-info-questions-bar-link">85 Answered Questions</a>
                    </div>
                </div>
            </div>
            <div className="product-info-only-at-row">
                <div className="product-info-only-at-div">
                <button className="product-info-only-at-button">
                    <p className="product-info-only-at-text-one"><span>Only</span> 
                    <span className="product-info-only-at-text-two"> @ West Buy</span></p> 
                </button>
                </div>
            </div>

            <div className="image-modal-component">
            </div>
        </div>
    )
}

export default ProductInfo;