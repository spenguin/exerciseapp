// Categories routes


const router = require( "express" ).Router();
const controller = require( "../controllers/categoriesController" );

router
    .route('/')
    .get( controller.index )
    .post( controller.add );
    



module.exports = router;