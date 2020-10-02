const  express  =  require ( 'express' )
const  carrera  =  require ( '../components/carrera/network' )
const  docente  =  require ( '../components/docente/network' )
const  estudiante  =  require ( '../components/estudiante/network' )
const  titulacion  =  require ( '../components/titulacion/network' )

 rutas  constantes =  función ( servidor )  {
    servidor . use ( '/ carrera' ,  carrera )
    servidor . use ( '/ docente' ,  docente )
    servidor . use ( '/ estudiante' ,  estudiante )
    servidor . use ( '/ titulacion' ,  titulacion )
}

módulo . exportaciones  =  rutas