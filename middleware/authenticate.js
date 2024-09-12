import { compare } from "bcrypt";
// import { fetchUserDb } from "../model/userDb.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv';
const { sign, verify } = jwt
config()
console.log("SECRET_KEY: ", process.env.SECRET_KEY);

function createToken(user) {
    return sign(
        {
            userEmail: user.userEmail,
            userPass: user.userPass
        },
        process.env.SECRET_KEY,
        {
            expiresIn: '1h'
        }
    )
}
function verifyAToken(req, res, next) {
    const token = req?.headers["authorization"]
    console.log(token)
    if (token) {
        if (verify(token, process.env.SECRET_KEY)) {
            next()
        } else {
            res?.json({
                status: res.statusCode,
                msg: "Please provide the correct credentials."
            })
        }
    } else {
        res?.json({
            status: res.statusCode,
            msg: "Please login."
        })
    }
}
export {
    createToken, verifyAToken
}


// const checkUser = async (req, res, next) => {
//     const { userEmail, userPass } = req.body;
//     let user = await fetchUserDb(userEmail)
//     let hashedPassword = user.userPass
//     console.log(hashedPassword)
//     let result = await compare(userPass, hashedPassword);
//     console.log(result);
//     try {
//         if (result == true) {
//             let token = jwt.sign({ userEmail: userEmail }, process.env.SECRET_KEY, { expiresIn: '1hr' });
//             console.log(token);
//             jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//                 console.log(token);
//                 if (err) {
//                     res.json({ message: 'Token is invalid' });
//                 } else {
//                     req.body.userEmail= decoded.userEmail;
//                     // res.setHeader('Set-Cookie', `token=${token};`);
//                     res.json({ message: 'Token is valid' });
//                 }
//             });
//             req.body.token = token;
//             console.log(token)
//             next();
//             return;
//         } else {
//             res.send('Password is incorrect');
//         }
//     } catch (e) {
//         res.json({
//             status: 404,
//             message: ('An Error has occured')
//         });
//     }
    // try {
    //     if (result == true) {
    //         let token = jwt.sign({ userEmail: userEmail }, process.env.SECRET_KEY, { expiresIn: '1hr' });
    //         console.log("Generated Token:", token);
    //         res.setHeader('Set-Cookie', `token=${token}; HttpOnly`); 
    //         res.json({ message: 'Token is valid', token }); 
    //         return; 
    //     } else {
    //         res.send('Password is incorrect');
    //     }
    // } catch (e) {
    //     res.json({
    //         status: 404,
    //         message: 'An Error has occurred',
    //     });
    // }
    
// };
// chad 
// const checkUser = async (req, res, next) => {
//     const { userEmail, userPass } = req.body; // Plaintext password from the user
//     let user = await fetchUserDb(userEmail);
    
//     if (!user) {
//         res.status(404).json({ message: "User not found" });
//         return;
//     }

//     let hashedPassword = user.userPass;
    
//     // Log both values to debug
//     console.log("Plaintext Password:", userPass); // Expecting the password entered by the user
//     console.log("Hashed Password from DB:", hashedPassword); // Expecting the hashed password from the database
    
//     if (!userPass || !hashedPassword) {
//         res.status(400).json({ message: "Password and hash are required for comparison" });
//         return;
//     }

//     try {
//         let result = await compare(userPass, hashedPassword); // Compare passwords
//         console.log("Password comparison result:", result);

//         if (result) {
//             // Proceed with token generation and validation...
//         } else {
//             res.send("Password is incorrect");
//         }
//     } catch (error) {
//         res.status(500).json({ message: "An error occurred during password comparison" });
//     }
// };

// const verifyAToken = (req, res, next) => {
//     console.log(req.headers.cookie);
//     let { cookie } = req.headers;

//     let token = cookie && cookie.split('=')[1];
//     if (!token) {
//         res.status(401).json({ message: 'Token is missing' });
//         return;
//     }
//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             res.status(401).json({ message: 'Token is invalid' });
//         } else {
//             req.body.userEmail = decoded.userEmail;
//             next();
//         }
//     });
// };
// const verifyAToken = (req, res, next) => {
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split(' ')[1]; // Expecting 'Bearer <token>'

    
//     if (!token) {
//         res.status(401).json({ message: 'Token is missing' });
//         return;
//     }
    
//     jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
//         if (err) {
//             res.status(401).json({ message: 'Token is invalid' });
//         } else {
//             req.body.userEmail = decoded.userEmail;
//             next();
//         }
//     });
// };

// export { checkUser, verifyAToken };