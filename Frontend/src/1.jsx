import React, { useEffect, useState } from "react";
import './1.css';

function Bir_jest() {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log('Fetching data from server...');
        fetch("http://localhost:3000?id=2")
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data fetched:', data);
                setProduct(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="App">
            <h1>Product Details</h1>
            {product ? (
                <div>
                    <strong>{product.img_name}</strong><br />
                    {product.img && <img src={product.img} alt={product.img_name} style={{ width: "100px", height: "100px" }} />}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Bir_jest;
