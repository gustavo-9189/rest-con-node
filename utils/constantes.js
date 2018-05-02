const Constantes = {
    // Expresiones Regulares
    NAME_PATTERN: /[a-zA-Z\'ÁáÉéÍíÓóÚúÜüÑñ,. ]*/,
    TELEPHONE_PATTERN: /[0-9()+ ]*/,
    EMAIL_PATTERN: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,

    // Datos para la coneccion con la BBDD
    BBDD_URL: 'mongodb://localhost/rest-db',

    // Datos del server
    PORT: 8080,
    HOST: 'localhost'
};

module.exports = Constantes;