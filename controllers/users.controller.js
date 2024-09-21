const UsersModel = require('../models/users.model.js');
exports.getUser = async (req,res) => {
    try {
        console.log("users")
        let users = await UsersModel.findAll();
        console.log("users", users)
        res.send(users)
    } catch (error) {
        console.log(error);
    }
}

exports.createUser = async (req,res) => {
    try {
        let data = req.body;
        console.log(data);
        let result = await UsersModel.create(data)
        res.send(result);
    } catch (error) {
        console.log(error);
    }
}

exports.loginUser = async (req, res) => {
    const { username, password } = req.body;
    const user = await UsersModel.findOne({ where: { username:req.body.username, password:req.body.password } });
    try {
        if (!username || !password) {
            //check whether the client input the data needed.
            return res.status(400).send({
                success: false,
                message: "Please provide the necessary fields.",
            });
        }
        if (!user) {
            //check the database if the requested user is existing.
            return res.status(400).send({
                success: false,
                message: "Invalid Credentials.",
            });
        }
        else{
            res.status(200).send({
                //if the user fulfills the request then return the user data
                success: true,
                message: "Login successful",
                data: user,
            });
        }
        // const isMatch = await compare(password, UsersModel.password); //encrypt the hashed password in the database, then compare it with the password in the request body
        // if (!isMatch) {
        //     // validate the password
        //     return res.status(400).send({
        //         success: false,
        //         message: "Invalid Credentials.",
        //     });
        // }
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Internal Server Error.",
            error: error.message,
        });
    }
};

