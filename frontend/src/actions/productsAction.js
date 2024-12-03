import axios from 'axios'
import { productsFail, productsRequests, productsSuccess } from '../slices/productsSlice'

export const allProducts=()=>async(dispatch)=>{
    try {
        dispatch(productsRequests())
        
        const {data}=await axios.get('/prasanth/products')
        
        dispatch(productsSuccess(data))
    } catch (error) {
        dispatch(productsFail(error.response.data.message))
    }
}