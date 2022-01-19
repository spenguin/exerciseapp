// Exercises routes

const router = require( "express" ).Router();
const controller = require( "../controllers/exercisesController" );

// exercisesRouter.get( "/", exercisesController.readData );

router
    .route('/')
    .get( controller.index )
    .post( controller.add );

router
    .route( '/category/' )
    .get( controller.readWithCategory );

router
    .route( '/category/:categoryId' )
    .get( controller.readByCategory );
    
router
    .route( '/children/' )
    .get( controller.readChildren );

module.exports = router;