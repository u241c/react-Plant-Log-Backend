const Plant = require('../models/plant');


async function index(req, res) {
   try {
       const plants = await Plant.find({});
       res.status(200).json(plants); // send mountains as JSON data as an HTTP response
   } catch (error) {
       console.log(error);
       res.status(400).json({ error: 'something went wrong' });
   }
}

async function create(req, res) {
    try {
        const plant = await Plant.create(req.body);
        
         index(req, res);
    } catch (error) {
        res.status(401).json({ error: 'something went wrong' });
    }
}

async function deletePlant(req, res){
    try {
        
        const deletedPlant = await Plant.findByIdAndDelete(req.params.id);
        
        index(req, res);
    } catch (error) {
        
    }

}
        

    module.exports = {
    index,
    create,
    delete: deletePlant,
    
};