import { getProductDb, fetchProductsDb, addProductDb, updateProductDb, deleteProductDb } from '../model/productDb.js';

const getProducts = async (req, res) => {
    try {
        const allProducts = await fetchProductsDb();
        res.status(200).json(allProducts);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch products', error: error.message });
    }
};

const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await getProductDb(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch product', error: error.message });
    }
};

const addProduct = async (req, res) => {
    try {
        const {productName, productDes, productPrice,productUrl,weight } = req.body;
        const newproduct = await addProductDb(productName, productDes, productPrice, productUrl, weight);
        res.status(200).json(newproduct);
        
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add product', error: error.message });
    }
};


const editProduct = async (req, res) => {
    try {
      const id = req.params.id;
      const { productName, productDes,productPrice, productUrl,weight} = req.body;
      const updatedProduct = await updateProductDb(id, productName, productDes, productPrice, productUrl, weight);
      if (!updatedProduct) {
        res.status(404).json({ message: 'Product not found' });
      } else {
        res.json({ message: 'Product updated successfully'});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating product' });
    }
  };
  
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await deleteProductDb(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete product', error: error.message });
    }
};

export { getProducts, getProduct, deleteProduct, addProduct, editProduct };
