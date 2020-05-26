
const fs = require( 'fs' ); 
var colors = require( 'colors' );

let listarTabla = ( base, limite = 10 ) => {

  console.log('================================='.green);
  console.log(`Tabla de ${base}`.green);
  console.log('================================='.green);
    
    for ( let i = 1; i <= limite; i++ ) {
     console.log(`${ base } * ${ i } = ${ i * base }`);
    }
}

let crearArchivo = ( base, limite = 10  ) => {
  return new Promise ( (resolve, reject ) => {

    if( !Number( base )) {
      reject(`  El valor introducido ${ base } no es un numero`)
      return;
    }

    let data = '';

    for ( let i = 1; i <= limite; i++ ) {
      data += `${ base } * ${ i } = ${ i * base }\n`;
    }

    // const data = new Uint8Array( Buffer.from( 'Hello Node.js' ) );
    fs.writeFile( `tablas/tabla-${ base }.txt`, data, ( err ) => {
      if ( err )
        reject( err )
      else
        resolve( `tabla - ${ base }.txt` )
    } );

  });
}



module.exports = { crearArchivo, listarTabla }
