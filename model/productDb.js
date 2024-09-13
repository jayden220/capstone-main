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

