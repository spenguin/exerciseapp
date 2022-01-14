const express = require( 'express' );
const cors = require("cors");
const app = express();
const PORT = 8080 //process.env.PORT || 5050; FIX

const exerciseRoutes = require( './routes/exercisesRoutes' );
const categoriesRoutes = require( './routes/categoriesRoutes' );

app.use( express.json() );
app.use( cors() );

app.use( '/exercises', exerciseRoutes );
app.use( '/categories', categoriesRoutes );

app.listen( PORT, () => {
    console.log( `running at http://localhost:${PORT}` ); 
})