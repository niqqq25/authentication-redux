import jwt from "jsonwebtoken";

const JWT_EXPIRATION_TIME = "10h";
const JWT_KEY = "secret";

export const generateToken = (payload) =>
    jwt.sign(payload, JWT_KEY, {
        expiresIn: JWT_EXPIRATION_TIME,
    });

export const verifyToken = (token) => jwt.verify(token, JWT_KEY);
