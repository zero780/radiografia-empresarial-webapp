export const validateEmail = email => {
    const patternMail = new RegExp(/^[a-z_A-Z\-0-9.*#$!~%^&\-+?|]+@+(espol\.edu\.ec)$/i);
    return patternMail.test(email);
};

export const validateText = word => {
    const patternText = new RegExp(/^[a-zA-ZÀ-ú]+$/i);
    return patternText.test(word);
};

const modulo10_Cedula_RucNatural = identificacion => {
    let suma = 0;
    let residuo = 0;
    let coeficientes_arr = [2, 1, 2, 1, 2, 1, 2, 1, 2];
    for (let i = 0; i < coeficientes_arr.length; i++) {
        let v = parseInt(identificacion.charAt(i)) * coeficientes_arr[i];
        if(v > 9) {
            v = v -9;
        } suma = suma + v;
    } residuo = suma % 10;
    if(residuo == 0) {
        return 0;
    } return (10 - residuo);
};

const modulo11_RucSociedadPrivada = ruc => {
    let suma = 0;
    let residuo = 0;
    let coeficientes_arr = [4, 3, 2, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < coeficientes_arr.length; i++) {
        suma = suma + parseInt(ruc.charAt(i)) * coeficientes_arr[i];
    } residuo = suma % 11;
    if(residuo == 0) {
        return 0;
    } return (11 - residuo);
};

const modulo11_RucSociedadPublica = ruc => {
    let suma = 0;
    let residuo = 0;
    let coeficientes_arr = [3, 2, 7, 6, 5, 4, 3, 2];
    for (let i = 0; i < coeficientes_arr.length; i++) {
        suma = suma + parseInt(ruc.charAt(i)) * coeficientes_arr[i];
    } residuo = suma % 11;
    if(residuo == 0) {
        return 0;
    } return (11 - residuo);
};

export const validateRucPersonaNatural = ruc => {
    if(ruc.length != 13 || !(Number.isInteger(ruc))) {
        return false;
    } let prov = parseInt(ruc.substring(0, 2));
    if (prov!= 30 && (prov < 1 || prov > 24)) {
        return false;
    } let digito_verificador = modulo10_Cedula_RucNatural(ruc);
    if(digito_verificador != parseInt(ruc.charAt(9))) {
        return false;
    } if(parseInt(ruc.slice(-3)) < 1) {
        return false;
    } //console.log('* RUC - Persona Natural *');
    return true;
};

export const validateRucSociedadPublica = ruc => {
    if(ruc.length != 13 || !(Number.isInteger(ruc))) {
        return false;
    } let prov = parseInt(ruc.substring(0, 2));
    if (prov!= 30 && (prov < 1 || prov > 24)) {
        return false;
    } let tercer_digito = parseInt(ruc.charAt(2));
    if (tercer_digito != 6) { //Validacion del tercer digito
        return false;
    } let digito_verificador = modulo11_RucSociedadPublica(ruc);
    //console.log(digito_verificador + ' - ' + parseInt(ruc.charAt(8)));
    if(digito_verificador != parseInt(ruc.charAt(8))) {
        return false;
    } if(parseInt(ruc.slice(-4)) < 1) {
        return false;
    } //console.log('* RUC - Sociedad Pública *');
    return true;
};

export const validateRucSociedadPrivada = ruc => {
    if(ruc.length != 13 || !(Number.isInteger(ruc))) {
        return false;
    } let prov = parseInt(ruc.substring(0, 2));
    if (prov!= 30 && (prov < 1 || prov > 24)) {
        return false;
    } let tercer_digito = parseInt(ruc.charAt(2));
    if (tercer_digito != 9) { //Validacion del tercer digito
        return false;
    } let digito_verificador = modulo11_RucSociedadPrivada(ruc);
    if(digito_verificador != parseInt(ruc.charAt(9))) {
        return false;
    } if(parseInt(ruc.slice(-3)) < 1) {
        return false;
    } //console.log('* RUC - Sociedad Jurídica *');
    return true;
};

export const validateRUC = ruc => {
    return validateRucPersonaNatural(ruc) || validateRucSociedadPublica(ruc) || validateRucSociedadPrivada(ruc);
};

export const validateCedula = cedula => {
    if(cedula.length != 10 || !(Number.isInteger(cedula))) {
        return false;
    } let prov = parseInt(cedula.substring(0, 2));
    if (prov!= 30 && (prov < 1 || prov > 24)) {
        return false;
    } let digito_verificador = modulo10_Cedula_RucNatural(cedula);
    if(digito_verificador != parseInt(cedula.slice(-1))) {
        return false;
    } //console.log('* Cédula de identidad *');
    return true;
};

export const validateIdentificacionByTipo = (identificacion, tipo) => {
    switch (tipo) {
        case 'cedula':
            return validateCedula(identificacion);
        case 'ruc':
            return validateRUC(identificacion);
        default:
            return false;
    }
};