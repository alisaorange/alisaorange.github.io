import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Products } from '../components/products/Products';
import Cart from "src/components/cart/Cart";

function App() {
  return (
      <Layout>
        <Products />
      </Layout>
  );
}

export default App;

import img1 from '../images/image1.jpg';
import img2 from '../images/image2.jpg';

//посмотреть страницу Корзина
// const App = () => {
//     const [items, setItems] = React.useState([
//         {
//             id: '1',
//             imageUrl: img1,
//             description: 'Кроссовки Nike',
//             price: 5999,
//         },
//         {
//             id: '2',
//             imageUrl: img2,
//             description: 'Кроссовки Adidas',
//             price: 7499,
//         },
//     ]);
//
//     const discount = 10; // 10% скидка
//
//     const handleRemove = (id: string) => {
//         setItems(prevItems => prevItems.filter(item => item.id !== id));
//     };
//
//     return (
//         <div className="app">
//             <Cart items={items} discount={discount} onRemove={handleRemove} />
//         </div>
//     );
// };
//
// export default App;
