import React,{useState} from 'react'
import { products } from '../../data'
import Product from '../../components/Products/Product/Product';
import Topper from '../../components/Topper/Topper';
import NavBar from '../../components/NavBar/NavBar';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';

export default function Shop() {

    const categories = ['همه محصولات', 'میوه‌ها', 'سبزیجات', 'آب‌میوه‌ها', 'میوه‌های خشک'];
    const [activeCategory, setActiveCategory] = useState('همه محصولات');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    const filteredProducts = activeCategory === 'همه محصولات'
      ? products
      : products.filter(product => product.category === activeCategory);

      const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
      const startIndex = (currentPage - 1) * itemsPerPage;
    
      const selectedProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);
  return (
    
    <>
      <Topper/>
      <NavBar/>
      <Header title="محصولات"/>
     
   <div className="tabs flex justify-center space-x-4 my-20">
        {categories.map((category,index) => (
          <button
            key={index}
            onClick={() => {
                setActiveCategory(category);
              setCurrentPage(1);
            }}
            className={`tab px-4 py-2 mx-4 rounded ${activeCategory === category ? 'bg-[#82ae46] text-white' : 'dark:bg-gray-200 text-gray-500'}`}
          >
            {category}
          </button>
        ))}
      </div>

     
      <div className="container grid sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {selectedProducts.map((product) => (

            <Product key={product.id} product={product}/>
         
        ))}
      </div>
      <div className="pagination flex justify-center gap-x-4 mb-20">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`page-number px-4 py-1 rounded ${currentPage === index + 1 ? 'bg-[#82ae46] text-white' : 'bg-gray-200 text-black'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>


      
       <Subscribe/>
      <Footer/>
    </>
  )
}
