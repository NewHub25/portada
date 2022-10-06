const fs = require('fs');

function errorLectura(error) {
    if(error) throw new Error('Algo salió mal');
}
const nameJson = 'nombresImg' || 'imgs';

fs.readdir('./', (err, files) => {
    errorLectura(err)
    fs.writeFileSync(`${nameJson}.json`, `{\n\t"fondos_pantalla": [`, errorLectura);
    files.forEach( (file, index) => {
        if(/\.jpg$/.test(file)) { //Para archivos formato JPG
            fs.appendFileSync(`${nameJson}.json`, `${index!=0?',':''}\n\t\t"${file}"`, errorLectura);
        }
    });
    fs.appendFileSync(`${nameJson}.json`, `\n\t]\n}`, errorLectura);
});