import { pool } from '../config/config.js';


const fetchProductsDb= async() => {
    try {
        let [data] = await pool.query('SELECT * FROM products')
        return data;
    }catch (error){
        console.error("ERror0" , error);
        return null
        
    }
}
const getProductDb = async (productID) =>{
    try {
        let [data] = await pool.query(
            'SELECT * FROM products WHERE productID = ?', [productID]);
        if (!data) {
          return null
        }
        return data;
      } catch (error) {
        console.error("Error fetching product:", error);
        return null;
      }
}
const addProductDb = async (productName,productDes ,productPrice,productUrl,weight) => {
    try {
      await pool.query(`
        INSERT INTO products (productName, productDes,productPrice,productUrl,weight)
        VALUES (?,?,?,?,?)
        ` ,[productName,productDes,productPrice,productUrl,weight]);
      return { message: 'Item added successfully' };
    } catch (error) {
      console.error("Error adding product:", error);
      return { message: 'Error adding item' };
    }
};
const deleteProductDb = async (productID) => {
  try {
    let result = await pool.query('DELETE FROM products WHERE productID = ?', [productID]);
    if (result.affectedRows > 0) {
      return { message: 'Product deleted successfully' };
    } else {
      return { message: 'Product not found' };
    }
  } catch (error) {
    console.error("Error deleting product:", error);
    return { message: 'Error deleting product' };
  }
};

const updateProductDb = async (productID, productName, productDes, productPrice, productUrl, weight) => {
    try {
      console.log("Updating product with values:", { productID, productName, productDes, productPrice, productUrl, weight });
      
      let result = await pool.query(`
        UPDATE products
        SET productName = ?, productDes = ?, productPrice = ?, productUrl = ?, weight = ?
        WHERE productID = ?
      `, [productName, productDes, productPrice, productUrl, weight, productID]);
  
      console.log("Query Result:", result);
  
      if (result.affectedRows > 0) {
        return { message: 'Product updated successfully' };
      } else {
        return { message: 'Product not found' };
      }
    } catch (error) {
      console.error("Error updating product:", error);
      return { message: 'Error updating product' };
    }
  };
  

export {fetchProductsDb,updateProductDb,deleteProductDb,getProductDb,addProductDb}

// export function getProductDb(req, res) {
//     const query = "SELECT productID, productName, productDes, productUrl, weight FROM Products WHERE productID = ?;";
//     pool.query(query, [req.params.id], (err, results) => {
//         if (err) {
//             res.status(500).json({ status: 500, message: 'Error fetching product' });
//             return;
//         }
//         res.json({ status: 200, result: results[0] });
//     });
// }


// export function addProductDb(req, res) {
//     const query = "INSERT INTO Products SET ?";
//     pool.query(query, req.body, (err) => {
//         if (err) {
//             res.status(500).json({ status: 500, message: 'Error adding product' });
//             return;
//         }
//         res.json({ status: 200, message: 'Product added' });
//     });
// }


// export function editProductDb(req, res) {
//     const query = "UPDATE Products SET ? WHERE productID = ?;";
//     pool.query(query, [req.body, req.params.id], (err) => {
//         if (err) {
//             res.status(500).json({ status: 500, message: 'Error updating product' });
//             return;
//         }
//         res.json({ status: 200, message: 'Product updated' });
//     });
// }


// export function deleteProductDb(req, res) {
//     const query = "DELETE FROM Products WHERE productID = ?;";
//     pool.query(query, [req.params.id], (err) => {
//         if (err) {
//             res.status(500).json({ status: 500, message: 'Error deleting product' });
//             return;
//         }
//         res.json({ status: 200, message: 'Product deleted' });
//     });
// }

// import {pool} from '../config/config.js'; // Make sure to import your database connection

// export function fetchProductsDb() {
//     const query = "SELECT productID, productName, productDes, productUrl, weight FROM products;";
//     return new Promise((resolve, reject) => {
//         pool.query(query, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// }

// export function getProductDb(productId) {
//     const query = "SELECT productID, productName, productDes, productUrl, weight FROM Products WHERE productID = ?;";
//     return new Promise((resolve, reject) => {
//         pool.query(query, [productId], (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(results[0]);
//             }
//         });
//     });
// }

// export function addProductDb(productData) {
//     const query = "INSERT INTO Products SET ?";
//     return new Promise((resolve, reject) => {
//         pool.query(query, productData, (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve({ message: 'Product added', insertId: results.insertId });
//             }
//         });
//     });
// }

// export function editProductDb(productId, productData) {
//     const query = "UPDATE Products SET ? WHERE productID = ?;";
//     return new Promise((resolve, reject) => {
//         pool.query(query, [productData, productId], (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve({ message: 'Product updated' });
//             }
//         });
//     });
// }

// export function deleteProductDb(productId) {
//     const query = "DELETE FROM Products WHERE productID = ?;";
//     return new Promise((resolve, reject) => {
//         pool.query(query, [productId], (err, results) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve({ message: 'Product deleted' });
//             }
//         });
//     });
// }
