import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/backend-practice.js';

async function loadPage() {
  try {
    // throw 'error occured'
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // throw 'error 2'
      loadCart(() => {
        // reject('error 3')
        resolve('value3');
      });
    });

  } catch(error){
       console.log("Unexpected error occured. Please try again later");

  }


  renderOrderSummary();
  renderPaymentSummary();

}

loadPage();

// Promise.all([
//   loadProductsFetch(),

//   new Promise((resolve) => {
//       loadCart(() => {
//         resolve("value2");
//       });
//    })
// ]).then((values) => {
//   console.log(values);
//   renderPaymentSummary();
//   renderOrderSummary();
// })


// new Promise((resolve) =>{
//      loadProducts(() =>{
//         resolve("value1");
//      });

// }).then((value) => {
//   console.log(value);
//     return new Promise((resolve) => {
//        loadCart(() => {
//         resolve();
//        });
//     });

// }).then(() => {
//    renderPaymentSummary();
//    renderOrderSummary();
// })


// loadProducts(() =>{
//   loadCart(() => {
//    renderPaymentSummary();
//    renderOrderSummary();
//   });
// });

