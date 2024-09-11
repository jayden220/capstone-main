import { pool } from "../config/config.js";
import { hash,compare } from "bcrypt";
import { createToken } from "../middleware/authenticate.js";

const fetchUsersDb = async() => {
    try {
        let [data] = await pool.query('SELECT * FROM users')
        return data;
    }catch (error){
        console.error("ERror0" , error);
        return null
        
    }
}
const fetchUserDb = async (userID) =>{
    try {
        let [data] = await pool.query(
            'SELECT * FROM users WHERE userID = ?', [userID]);
        if (!data) {
          return null
        }
        return data;
      } catch (error) {
        console.error("Error fetching product:", error);
        return null;
      }
}

const addUserDb = async (userName, userEmail, userCell, userPass, userProfile, userRole) => {
    try {
      const hashedPassword = await hash(userPass, 12);
      console.log("Input to addUserDb:", { userName, userEmail, userCell, hashedPassword, userProfile, userRole });
      const query = `
        INSERT INTO users (userName, userEmail, userCell, userPass, userProfile, userRole)
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      const values = [userName, userEmail, userCell, hashedPassword, userProfile, userRole];
  
      await pool.query(query, values);
  
      return { message: 'Registered successfully' };
    } catch (error) {
      console.error("Error adding User:", error);
      return { message: `Error adding User: ${error.message}` };
    }
  };
  
const deleteUserDb = async (userID) => {
    try {
      let result = await pool.query('DELETE FROM users WHERE userID = ?', [userID]);
      if (result.affectedRows > 0) {
        return { message: 'User deleted successfully' };
      } else {
        return { message: 'User not found' };
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      return { message: 'Error deleting user' };
    }
  };

  const updateUserDb = async (userID, userName, userEmail, userCell, userPass, userProfile, userRole) => {
    try {
      console.log("Updating user with values:", { userID, userName, userEmail, userCell, userPass, userProfile, userRole });
      
      let result = await pool.query(`
        UPDATE users
        SET userName = ?, userEmail = ?, userCell = ?, userPass = ?, userProfile = ?, userRole = ?
        WHERE userID = ?
      `, [userName, userEmail, userCell, userPass, userProfile, userRole, userID]);
  
      console.log("Query Result:", result);
  
      if (result.affectedRows > 0) {
        return { message: 'User updated successfully', affectedRows: result.affectedRows };
      } else {
        return { message: 'User not found', affectedRows: 0 };
      }
    } catch (error) {
      console.error("Error updating user:", error);
      return { message: 'Error updating user' };
    }
};



// const loginUserDb = async (userEmail, userPass) => {
//   try {
     
//       const query = `SELECT userID, userCell, userEmail,userPass FROM Users WHERE userEmail = ?;`;
//       const values = [userEmail];
      

//       const [rows] = await pool.query(query, values);
      
 
//       if (rows.length === 0) {
//           return res.status(401).json({
//               status: 401,
//               msg: 'Invalid email address.'
//           });
//       }
      

//       const isValidPass = await compare(userPass, rows[0].userPass);
//       if (isValidPass) {
//           const token = createToken({
//               userEmail,
//               userPass
//           });
//           return res.status(200).json({
//               status: 200,
//               token,
//               user: rows[0]
//           });
//       } else {
//           return res.status(401).json({
//               status: 401,
//               msg: 'Invalid password.'
//           });
//       }
//   } catch (error) {
//       console.error("Error during login:", error);
//       return res.status(500).json({
//           status: 500,
//           msg: `Error during login: ${error.message}`
//       });
//   }
// };
const loginUserDb = async (userEmail, userPass) => {
  try {
    const query = `SELECT userID, userName, userEmail, userCell, userPass FROM users WHERE userEmail = ?;`;
    const values = [userEmail];

    const [rows] = await pool.query(query, values);

    if (rows.length === 0) {
      return {
        status: 401,
        msg: 'Invalid email address.',
      };
    }

    const isValidPass = await compare(userPass, rows[0].userPass);

    if (isValidPass) {
      const token = createToken({
        userEmail,
        userPass,
      });

      return {
        status: 200,
        token,
        user: rows[0],
        msg: 'Successfully logged in',
      };
    } else {
      return {
        status: 401,
        msg: 'Invalid password.',
      };
    }
  } catch (error) {
    console.error('Error during login:', error);
    return {
      status: 500,
      msg: `Error during login: ${error.message}`,
    };
  }
};



export {fetchUsersDb,fetchUserDb,addUserDb,deleteUserDb,updateUserDb,loginUserDb}