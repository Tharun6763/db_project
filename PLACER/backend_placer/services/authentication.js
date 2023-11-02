const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null)
        return res.sendStatus(401);

    jwt.verify(token, process.env.ACCESS_TOKEN, (err, response) => {
        if (err)return res.sendStatus(403);
        res.locals= response;
        next();
    });
}

module.exports = { authenticateToken: authenticateToken };

//to check this or use it go to the postman and use localhost:8080/user/get  first login then u will get a token use this token in key then try use Bearer
