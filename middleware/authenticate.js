import { compare } from "bcrypt";
import { fetchUserDb } from "../model/userDb.js";
import jwt from 'jsonwebtoken'
import {config} from 'dotenv';
config()
const checkUser = async (req, res, next) => {
    const { userEmail, userPass } = req.body;
    let user = await fetchUserDb(userEmail)
    let hashedPassword = user.userPass
    console.log(hashedPassword)
    let result = await compare(userPass, hashedPassword);
    console.log(result);
    try {
        if (result == true) {
            let token = jwt.sign({ userEmail: userEmail }, process.env.SECRET_KEY, { expiresIn: '1hr' });
            console.log(token);
            jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
                console.log(token);
                if (err) {
                    res.json({ message: 'Token is invalid' });
                } else {
                    req.body.emailAdd = decoded.emailAdd;
                    res.json({ message: 'Token is valid' });
                }
            });
            req.body.token = token;
            console.log(token)
            next();
            return;
        } else {
            res.send('Password is incorrect');
        }
    } catch (e) {
        res.json({
            status: 404,
            message: ('An Error has occured')
        });
    }
};
const verifyAToken = (req, res, next) => {
    let { cookie } = req.headers;
    let token = cookie && cookie.split('=')[1];
    if (!token) {
        res.status(401).json({ message: 'Token is missing' });
        return;
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            res.status(401).json({ message: 'Token is invalid' });
        } else {
            req.body.userEmail = decoded.userEmail;
            next();
        }
    });
};
export { checkUser, verifyAToken };