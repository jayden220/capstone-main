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


