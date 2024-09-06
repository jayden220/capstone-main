import {pool as db } from '../config/config.js'

const fetchCarts = (req, res) => {
  try {
    const strQry = `
      SELECT distinct c.userID, CONCAT(u.userName) AS fullName,
          group_concat(DISTINCT p.productName) 'Product',
          sum(p.productPrice * c.quantity)  'Total Price',
          sum(c.quantity) 'Quantity'
      FROM Carts c
      JOIN users u ON c.userID = u.userID
      JOIN products p ON c.prodID = p.productID
      group by c.userID;
    `
    db.query(strQry, (err, results) => {
      if (err) throw new Error('Unable to fetch all carts')
      res.json({
        status: res.statusCode,
        results
      })
    })
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    })
  }
}

const fetchuserCart = (req, res) => {
  try {
    const strQry = `
      SELECT c.userID, CONCAT(u.userName) AS fullName,
          p.productID,
          p.productName 'Product',
          p.productPrice * c.quantity  'Total Price',
          c.quantity 'Quantity'
      FROM Carts c
      JOIN users u ON c.userID = u.userID
      JOIN products p ON c.productID = p.productID
      WHERE c.userID = ?;
    `
    db.query(strQry, [req.params.id], (err, results) => {
      if (err) throw new Error(err)
      res.json({
        status: res.statusCode,
        results
      })
    })
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    })
  }
}

const fetchaddUserCart = (req, res) => {
  try {
    const strQry = `
      INSERT INTO Carts
      (userID, productID, quantity)
      VALUES (?, ?, ?);
    `
    db.query(strQry, [req.params.id, req.body.productID, req.body.quantity], (err, results) => {
      if (err) throw new Error(err)
      res.json({
        status: res.statusCode,
        msg: 'added to cart '
      })
    })
  } catch (e) {
    res.json({
      status: 404,
      msg: e.message
    })
  }
}

const fetchupdateUserCart = (req, res) => {
  try {
    const strQry = `
      UPDATE Carts
      SET quantity = ?
      WHERE productID = ? AND userID = ?;
    `
    db.query(strQry, [req.body.quantity, req.params.productID, req.params.id], (err, results) => {
      if (err) throw new Error('Unable to update cart')
      res.json({
        status: res.statusCode,
        msg: 'The quantity has been updated. Aragato:grin:'
      })
    })
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    })
  }
}

const deleteItem = (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE productID = ? AND userID = ?;
    `
    db.query(strQry, [req.params.productID, req.params.id], (err) => {
      if (err) throw new Error('Unable to delete item')
      res.json({
        status: res.statusCode,
        msg: 'An item was removed'
      })
    })
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    })
  }
}

const deleteCart = (req, res) => {
  try {
    const strQry = `
      DELETE FROM Carts
      WHERE userID = ?;
    `
    db.query(strQry, [req.params.id], (err) => {
      if (err) throw new Error('Unable to delete this Cart')
      res.json({
        status: res.statusCode,
        msg: 'A cart was removed'
      })
    })
  } catch (e) {
    res.json({
      status: 404,
      err: e.message
    })
  }
}

export {
  fetchCarts,
  fetchuserCart,
  fetchaddUserCart,
  fetchupdateUserCart,
  deleteItem,
  deleteCart

}