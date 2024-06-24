const fs = require("fs")

const leer =()=>{
    try {
        const data = fs.readFileSync('citas.json', 'utf8');
        return data.toString();
    } catch (error) {
        console.log("No se pudo leer el archivo")
    }
}

const registrar =(nombre, edad, tipo, color, enfermedad)=>{
    try {
        const data = leer()
        const citas = JSON.parse(data)
        citas.push({nombre, edad, tipo, color, enfermedad})
        fs.writeFileSync("citas.json", JSON.stringify(citas))
        return "Registro exitoso"
    } catch (error) {
        console.log("No se pudo ingresar información")
    }
}

module.exports = { leer,registrar }