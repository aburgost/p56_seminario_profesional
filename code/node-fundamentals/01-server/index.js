const  express  =  require ( 'express' )
const  bodyParser  =  require ( 'body-parser' )
 respuesta  constante =  require ( './network/response' )

const  config  =  require ( './config' )
const  db  =  require ( './db' )
const  router  =  require ( './network/routes' )

db (  config . dbUrl  )

var  app  =  express ( )
aplicación . utilizar (  bodyParser . json ( )  )
aplicación . use (  bodyParser . urlencoded (  { extendido : falso }  )  )
enrutador (  aplicación  )

aplicación . use (  config . publicRoute ,  express . static ( 'público' )  )

aplicación . escuchar (  config . puerto  )
consola . log (  `La aplicación está escuchando en $ { config . host } : $ { config . port } $ { config . publicRoute } `  )
//const app = express();

//app.set('port',4000)

//app.listen(app.get('port'), ()=>{
  //  console.log("Server listen on port",app.get('port'));
//});