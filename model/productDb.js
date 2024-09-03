// import { pool } from '../config/config.js';


// export function fetchProductsDb(req, res) {
//     const query = "SELECT productID, productName, productDes, productUrl, weight FROM products;";
//     pool.query(query, (err, results) => {
//         if (err) {
//             res.status(500).json({ status: 500, message: 'Error fetching products' });
//             return;
//         }
//         res.json({ status: 200, results });
//     });
// }


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
import {pool} from '../config/config.js'; // Make sure to import your database connection

export function fetchProductsDb() {
    const query = "SELECT productID, productName, productDes, productUrl, weight FROM products;";
    return new Promise((resolve, reject) => {
        pool.query(query, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

export function getProductDb(productId) {
    const query = "SELECT productID, productName, productDes, productUrl, weight FROM Products WHERE productID = ?;";
    return new Promise((resolve, reject) => {
        pool.query(query, [productId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve(results[0]);
            }
        });
    });
}

export function addProductDb(productData) {
    const query = "INSERT INTO Products SET ?";
    return new Promise((resolve, reject) => {
        pool.query(query, productData, (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'Product added', insertId: results.insertId });
            }
        });
    });
}

export function editProductDb(productId, productData) {
    const query = "UPDATE Products SET ? WHERE productID = ?;";
    return new Promise((resolve, reject) => {
        pool.query(query, [productData, productId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'Product updated' });
            }
        });
    });
}

export function deleteProductDb(productId) {
    const query = "DELETE FROM Products WHERE productID = ?;";
    return new Promise((resolve, reject) => {
        pool.query(query, [productId], (err, results) => {
            if (err) {
                reject(err);
            } else {
                resolve({ message: 'Product deleted' });
            }
        });
    });
}
