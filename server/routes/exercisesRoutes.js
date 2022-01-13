// Exercises routes

const router = require( "express" ).Router();
const controller = require( "../controllers/exercisesController" );

// exercisesRouter.get( "/", exercisesController.readData );

router
    .route('/')
    .get( controller.index )
    .post( controller.add );
    



module.exports = router;