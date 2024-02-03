

import React, { useState } from 'react';
import ProductCard from './ProductCard';
import Navbar from './Navbar';
import Footer from './Footer';



const MenCategory = () => {
    const [sortingStyle, setSortingStyle] = useState('default');

    const products = [
        [11, 'Dolorum ', 29],
        [12, 'Voluptatibus', 39],
        [13, 'Temporibus', 59],
        [14, 'Mollitia', 19],
        [15, 'Numquam', 89],
        [16, ' Esse', 49]
    ];

    const handleSortChange = (event) => {
        setSortingStyle(event.target.value);
    };

    const getSortedProducts = () => {
        switch (sortingStyle) {
            case 'lowToHigh':
                return products.slice().sort((a, b) => a[2] - b[2]);
            case 'highToLow':
                return products.slice().sort((a, b) => b[2] - a[2]);
            case 'alphabetical':
                return products.slice().sort((a, b) => a[1].localeCompare(b[1]));
            default:
                return products;
        }
    };
 
    return (
        <div>
            <Navbar />
            <div className='flex flex-col'> 

            <div className='  ml-10'>
                <h1 className='mt-10'>HOME / MEN</h1>
                <h1 className='text-6xl title'>MEN </h1>
            </div>
            <div className='my-10  ml-5'>
                <label className=''>Sort by:</label>
                <select value={sortingStyle} onChange={handleSortChange}>
                    <option value="default">Default</option>
                    <option value="lowToHigh">Price Low to High</option>
                    <option value="highToLow">Price High to Low</option>
                    <option value="alphabetical">Alphabetical</option>
                </select>
            </div>
            {/* <div className='flex flex-row flex-wrap space-x-5 items-center justify-center space-y-10'> */}
            <div className='flex flex-row flex-wrap  items-center justify-center gap-10'>
            {getSortedProducts().map((product) => (
                <ProductCard key={product[0]} category="men" index={product[0]} />
            ))}
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default MenCategory;


    