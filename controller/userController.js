import { fetchUsersDb,fetchUserDb,addUserDb,deleteUserDb,updateUserDb,loginUserDb} from "../model/userDb.js";


const getUsers = async (req, res) => {
    try {
        const allUsers = await fetchUsersDb();
        res.status(200).json(allUsers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch users', error: error.message });
    }
};

const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await fetchUserDb(id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to fetch user', error: error.message });
    }
};


// const addUser = async (req, res) => {
//     try {
//       console.log("Request Body:", req.body); 
  
//       const { userName, userEmail, userCell, userPass, userProfile, userRole } = req.body;
//       const newuser = await addUserDb(userName, userEmail, userCell, userPass, userProfile, userRole);
      
//       res.status(200).json(newuser);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Failed to add user', error: error.message });
//     }
//   };

  const addUser = async (req,res)=>{
    let {userName, userEmail, userCell, userPass, userProfile, userRole,Userpass}=req.body
    let hashedP = await hash(password,10)
    //if(hashedP.stack) throw hashedP //to account for not using err handling
    // // Below uses error handling and call back funct
    // hash(password,10,async (err, hashedP)=>{
    //     if(err) throw err
    //     console.log(hashedP)
    //     await insertUserDb(name,surname,age,code,car,color,username,hashedP)
    // })
    res.json({message:"User created successfully"})
    // await insertUserDb(name,surname,age,code,car,color,username,hashedP)
}
  

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await deleteUserDb(id);
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to delete user', error: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
      const id = req.params.id;
      const { userName, userEmail, userCell, userPass, userProfile, userRole } = req.body;
      const updatedUser = await updateUserDb(id, userName, userEmail, userCell, userPass, userProfile, userRole);
      
      if (!updatedUser || updatedUser.affectedRows === 0) {
        res.status(404).json({ message: 'User not found' });
      } else {
        res.json({ message: 'User updated successfully' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error updating user' });
    }
};
const loginUser = async (req, res) => {
  try {
    const { userEmail, userPass } = req.body;
    const user = await loginUserDb(userEmail, userPass);
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.status(200).json({ message: 'User logged in successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to login user', error: error.message });
  }
};



export {
    getUsers,
    getUser,
    addUser,
    deleteUser,
    updateUser,
    loginUser

}

