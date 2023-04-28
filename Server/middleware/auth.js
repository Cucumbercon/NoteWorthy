const jwt = require("jsonwebtoken");

const auth = async(req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if(!token) {
            return res
            .status(401)
            .json({msg: "Access denied due to unauthorized token"});
        }
        const verified = jwt.verify(token, "passwordKey");
        if(!verified) {
            return res
            .status(401)
            .json({msg: "Access denied due to unverified token"})
        }
        req.user = verified.id;
        next();
    } catch(err) {
        return res.status(500).json({error: err.message});
    }
};
module.exports = auth;