const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}


const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Genera un archivo con la  tabla de multiplicar', opts)
    .help()
    .argv; //no lleva ./ eso es pq es un paquete no un path relativo


module.exports = {
    argv
}