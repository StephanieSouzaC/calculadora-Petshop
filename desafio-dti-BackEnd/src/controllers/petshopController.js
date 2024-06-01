import bestPetshop from "../services/petshopService.js";

class PetshopController {
    static getBestPetshop (req,res){
        const {date, smallDogs, largeDogs} = req.body;
        if (smallDogs == null || largeDogs == null){
            return res.status(400).send("Digite todos os campos.");
        };
        try{
            const calculatedResult = bestPetshop(date, smallDogs, largeDogs); 
            console.log(calculatedResult);
            res.json(calculatedResult);
        } catch (err){
            res.status(400).send({message: `${err.message} - Falha na requisição.`})
        };
    };
};

export default PetshopController;