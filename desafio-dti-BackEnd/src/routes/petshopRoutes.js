import express from 'express';
import PetshopController from '../controllers/petshopController.js'

const routes = express.Router();

routes.post("/calcular", PetshopController.getBestPetshop);

export default routes;