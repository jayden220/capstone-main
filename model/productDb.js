import { pool as db } from '/config/config.js';

class Products {
    fetchProducts(req, res) {
        const query = "SELECT productID, productName,productDes, productUrl, weight FROM products;";
        db.query(query, (err, results) => {
            if (err) {
                res.status(500).json({ status: 500, message: 'Error fetching products' });
                return;
            }
            res.json({ status: 200, results });
        });
    }

    recentProducts(req, res) {
        const query = "SELECT productID, productName,productDes, productUrl, weight FROM Products ORDER BY productID DESC LIMIT 5;";
        db.query(query, (err, results) => {
            if (err) {
                res.status(500).json({ status: 500, message: 'Error fetching recent products' });
                return;
            }
            res.json({ status: 200, results });
        });
    }

    fetchProduct(req, res) {
        const query = "SELECT productID, productName,productDes, productUrl, weight FROM Products WHERE productID = ?;";
        db.query(query, [req.params.id], (err, results) => {
            if (err) {
                res.status(500).json({ status: 500, message: 'Error fetching product' });
                return;
            }
            res.json({ status: 200, result: results[0] });
        });
    }

    addProduct(req, res) {
        const query = "INSERT INTO Products SET ?";
        db.query(query, req.body, (err) => {
            if (err) {
                res.status(500).json({ status: 500, message: 'Error adding product' });
                return;
            }
            res.json({ status: 200, message: 'Product added successfully' });
        });
    }

    updateProduct(req, res) {
        const query = "UPDATE Products SET ? WHERE productID = ?;";
        db.query(query, [req.body, req.params.id], (err) => {
            if (err) {
                res.status(500).json({ status: 500, message: 'Error updating product' });
                return;
            }
            res.json({ status: 200, message: 'Product updated successfully' });
        });
    }

    deleteProduct(req, res) {
        const query = "DELETE FROM Products WHERE productID = ?;";
        db.query(query, [req.params.id], (err) => {
            if (err) {
                res.status(500).json({ status: 500, message: 'Error deleting product' });
                return;
            }
            res.json({ status: 200, message: 'Product deleted successfully' });
        });
    }
}

export { Products };
