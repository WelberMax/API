const { Category: CategoryModel } = require("../models/categoryModel");

const categoryController = {
    create: async (req, res) => {
        try {
            const category = {
                id: req.body.id,
                name: req.body.name
            };
            
            const response = await CategoryModel.create(category);   
            res.status(201).json({response, msg: "categoria criada com sucesso"});                  
        } catch (error) {
            console.log(error);
        }
    },
    getAll: async (req, res) => {
    try {
        const categories = await CategoryModel.find();
        res.status(200).json(categories);        
        
    } catch (error) {
        console.log(error);
    }
  }

}

module.exports = categoryController;