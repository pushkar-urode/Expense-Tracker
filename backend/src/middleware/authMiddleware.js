import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({
                message: "No token provided",
            });
        }

        const decodedToken = jwt.verify(
            token,
            process.env.SECRET_KEY
        );

        req.userId = decodedToken.id;

        next();

    } catch (error) {
        return res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};

export default authMiddleware;