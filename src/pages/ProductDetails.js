import { useParams } from "react-router-dom";
import { useContext } from 'react'
import Context from '../components/Context'

export default function ProductDetails() {
    const userData = useContext(Context)
    const params = useParams();
    let productData = null


    switch (params.id) {
        case "143":
            productData = {
                name: 'c++'
                price: 0.00,
                image: require('../images/c++.jpeg')
                
            }
            break
            case "486":
            productData = {
                name: 'python',
                price: 25.00,
                image: require ('../images/python .jpeg')

            }
            break

        default:
            break
               

    return (
        <>
            <h1>Product Details </h1>
            <ul className="productBox">
                <li>
                    <a href="/product/143" className="productLink"><img className="productImage" src={require('../images/c++.jpeg')} alt="It's a good day to code"/></a>
                    <br /><a href="/product/143" className="productLink">Click here to learn more about c++.</a>
                </li>
                <li>
                    <a href="/product/486" className="productLink"><img className="productImage" src={require('../images/python .jpeg')} alt="Eat. Sleep. Code. Repeat."/></a>
                    <br /><a href="/product/486" className="productLink">Click here to learn more about python.</a>
                </li>
            </ul>
        </>
    );
}
