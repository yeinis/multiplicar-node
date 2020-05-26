
const argv = require('./config/yargs').argv;
var colors = require( 'colors/safe' );

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');



// console.log(process.argv);
// let argv2 = process.argv;
let comando = argv._[0];
console.log(argv);

switch ( comando ) {
  case 'listar':
    listarTabla( argv.base, argv.limite );
    break;

  case 'crear':
    crearArchivo( argv.base, argv.limite )
      .then( archivo => console.log( `Archivo creado:`, colors.green( archivo )))
    .catch( e => console.log(e));
    break;

    default:
    console.log('Comando no reconocido');
    break;
}



// let parametro  = argv[2];
// let base = parametro.split('=')[1];





