exportaciones . éxito  =  función ( req ,  res ,  mensaje ,  estado )  {
    res . estado (  estado  ) . enviar (  {
        error : '' , 
        cuerpo : mensaje 
    }  )
}

exportaciones . error  =  función ( req ,  res ,  mensaje ,  estado )  {
    consola . error (  `[Registro de errores] - $ { mensaje } `  )
    
    res . estado (  estado  ) . enviar (  {
        error : mensaje , 
        cuerpo : '' 
    }  )
}