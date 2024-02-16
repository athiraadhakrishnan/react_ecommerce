import { useState } from 'react';

import './App.css';
import Header from './Components/Header';
import Product from './Components/Product/product.js';
function App() {
const [products, SetProducts] = useState([
  {
    image: "https://images.meesho.com/images/products/378895378/d5cqm_512.webp",
    title: "Women Printed Viscose Rayon Flared Kurta",
    price: 559
  },

  {
    image: "https://images.meesho.com/images/products/161852181/szisg_400.webp",
    title: "Charvi superior Kurtis",
    price: 219
  },

  {
    image: "https://images.meesho.com/images/products/295513540/77fpa_400.webp",
    title: "Alisha Fashionable Kurtis",
    price: 352
  },

  {
    image: "https://images.meesho.com/images/products/47775740/fctnk_400.webp",
    title: "Alisha Voguish Kurtis ",
    price: 344
  },

  {
    image: "https://images.meesho.com/images/products/306982031/6hydi_400.webp",
    title: "Aishani Ensemble Kurtis",
    price: 750
  },

  {
    image: "https://images.meesho.com/images/products/297632789/tulbs_400.webp",
    title: "Aakarsha voguish Kurtis",
    price: 899
  },

  {
    image: "https://images.meesho.com/images/products/1049184/2_400.webp",
    title: "Women Crepe Flared Printed Yellow Kurtis ",
    price: 266
  },

  {
    image: "https://images.meesho.com/images/products/38886933/nz05r_400.webp",
    title: "Chitrarekha Refined Kurtis",
    price: 305
  }
]
)
  return (
    <>
    <Header/>
    <main>
      <section>
        <h2>Women's Kurtas</h2>
        <ul className='Products'>
          {
            products.map((item)=>{
              return <Product product={item}/>
            })
          }
        
        </ul>
      
      </section>
    </main>
    <footer></footer>
    </>
    
  );
  }

export default App;
