import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Products } from '../components/products/Products';
import { InputBtn } from '../components/inputBtn/InputBtn';
import Cart from "src/components/cart/Cart";

import { ThemeProvider } from '../components/header/ThemeContext';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';


function App() {
  return (
      <I18nextProvider i18n={i18n}>
          <ThemeProvider>
              <Layout>
                  <InputBtn />
                <Products />
              </Layout>
          </ThemeProvider>
      </I18nextProvider>
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
