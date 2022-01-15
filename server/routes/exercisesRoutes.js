// Exercises routes

const router = require( "express" ).Router();
const controller = require( "../controllers/exercisesController" );

// exercisesRouter.get( "/", exercisesController.readData );

router
    .route('/')
    .get( controller.index )
    .post( controller.add );

router
    .route( '/category/:categoryId' )
    .get( controller.readByCategory );
    



module.exports = router;