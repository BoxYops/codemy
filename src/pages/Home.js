export default function Home() {
    return (
        <>
            <h1>Homepage</h1>
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
    )
}