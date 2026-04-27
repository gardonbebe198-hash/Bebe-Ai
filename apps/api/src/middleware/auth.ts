import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Replace with your own secret key

// Middleware to authenticate JWT
export const authenticateJWT = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];

    if (token) {
        jwt.verify(token, SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

// Function to generate JWT
generateToken = (user) => {
    return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' });
};

// Middleware for role-based access control
export const roleMiddleware = (roles) => {
    return (req, res, next) => {
        const userRole = req.user.role;
        if (roles.includes(userRole)) {
            next();
        } else {
            res.sendStatus(403);
        }
    };
};

export { generateToken };