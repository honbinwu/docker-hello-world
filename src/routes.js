const express 	= require( 'express' )
const appRouter = express.Router()

appRouter.get( '/*', function( req, res ) {
  res.send( '<h1>Hello from  DockerCon!</h1>' )
})

module.exports = appRouter
