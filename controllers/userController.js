const { User: UserModel } = require("../models/UserModel");

const userController = {
    create: async (req, res) => {  
              
        try {
            const { name, email, password, confirmPassword } = req.body;                          
            
            if (!name ||!email ||!password) {
                return res.status(400).json({ message: "Preencha todos os campos!" });
            }
            if(password !== confirmPassword){
                return res.status(400).json({ message: "As senhas precisam ser iguais!" });
            }
            
            //verificar se o email existe
            const userExists = await UserModel.findOne({ email: email });
            if (userExists) {
                return res.status(400).json({ message: "Email ja existe!" });
            }
            
            const newUser = new UserModel({ 
                    name,
                    email,
                    password
                 });
            
            //criar o novo user
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
    getUserId: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id);
            res.status(200).json(user);
        }catch (error) {
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