const config = require('./config.json');

// Nueva característica agregada en la versión 3.0: 
// Requerimos que exista un host de base de datos en la configuración.
if (!config.db_host) {
    console.error("❌ ERROR CRÍTICO FATAL: 'db_host' no está definido en config.json.");
    console.error("La aplicación no puede arrancar porque no sabe a qué Base de Datos conectarse.");
    process.exit(1); // Detiene y falla el proceso
}

console.log(`Versión 3.0 - Corriendo en entorno: ${config.env}`);
console.log(`Conectando a API: ${config.api}`);
console.log(`✅ Conectado a la Base de Datos en: ${config.db_host}`);
