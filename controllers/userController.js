const { User: UserModel } = require("../models/UserModel");

const userController = {
    create: async (req, res) => {  
              
        try {
            const newUser = {
                id: req.body.id,
                name: req.body.name,
                email: req.body.email,
                password: req.body.password                
            }
            if (!newUser.name ||!newUser.email ||!newUser.password) {
                return res.status(400).json({ message: "Preencha todos os campos!" });
            }
           

            const response = await UserModel.create(newUser)            
            //atencao retornando response
            res.status(201).json({ response, message: "Usuário criado com sucesso!" });
            
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await UserModel.find();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ error: error });
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body
            
            if (!email || !password) {
                return res.status(400).json({ message: "Preencha todos os campos!" });
            }
            
            const userlogin = await UserModel.findOne({ email: email })
            if (!userlogin  || userlogin.password !== password) {
                return res.status(401).json({ message: "email ou senha inválidos" });
            }
            res.status(200).json({ user: userlogin, message: "Login bem-sucedido!" });
             
        }catch (error) {
            res.status(500).json({ error: error });
        }
    }
    

}

module.exports = userController;