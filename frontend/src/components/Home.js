import { Fragment, useEffect } from "react";

import{useDispatch, useSelector} from 'react-redux'
import { allProducts } from "../actions/productsAction";


export default function Home(){
    const {products}=useSelector(state=>state.productsState)
    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(allProducts())
    },[dispatch])

    return(
        <Fragment>
            {products && products.map(product=>(
                    <div className="container container-fluid">   
                    <div className="row d-flex justify-content-around">
                    <div className="col-12 col-lg-5 img-fluid" id="product_image">
                        <img src="/images/ghee.webp" alt="ghee" height="500" width="500" />
                    </div>
                    <div className="col-12 col-lg-5 mt-5">
                        <div className="card p-3">
                
                        <h3>{product?.name}</h3>
                        <p id="product_id">{product?._id}</p><hr />
                        <h5 id="product_price">Rs.{product?.price}</h5>
                        <div className="stockCounter d-inline">
                        <span className="btn btn-danger minus" >-</span>
    
                        <input type="number" className="form-control count d-inline" value='1' readOnly />
    
                        <span className="btn btn-primary plus">+</span>
                        <button type="button" id="cart_btn" className="btn btn-primary d-inline mx-5 mt-1">Add to cart</button>
                        <hr />
                        <p>Status : <span className={product?.stock!==0?'greenColor':'redColor'} id="stock_status">{product?.stock!==0?"StockIn":"Out of Stock"}</span> </p>
                        <hr />
                        <h4 className="mt-2">Description:</h4>
                        <p>{product.description}
                        </p>
                    </div>
                        </div>
                      </div>
    
                </div>
    
                    
                    
                    
                </div>
            ))}
            
        </Fragment>
    )
}