

const adminMiddleware = async (req, res, next) => {
    if (req.userInfo !== "admin") {
        return res.status(403).json({
            success: false,
            message: "User not authorized",
        });
    }

    next();
};


export default adminMiddleware ;