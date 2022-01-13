// Categories routes

const { Router } = require( "express" );
const categoriesController = require( "../controllers/categories" );
const categoriesRouter = Router();

categoriesRouter.get( "/", categoriesController.readData );


module.exports = categoriesRouter;