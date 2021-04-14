const concept = [
    { n_docu: "23248169", c_prod: "000004", l_prod: "FAENAS" },
    { n_docu: "46117631", c_prod: "000005", l_prod: "MULTAS" }
];
const datos = [
    { n_docu: "23248169", l_agen: "USUARIO", FAENAS: "1.00", MULTAS: "0.00" },
    { n_docu: "71377558", l_agen: "SIMEON", FAENAS: "5.00", MULTAS: "1.00" },
    { n_docu: "46117631", l_agen: "EGUAVIL", FAENAS: "0.00", MULTAS: "1.00" }
];

concept.forEach((item) => {
    for (let index in datos) {
        if (datos[index].n_docu == item.n_docu) {
            datos.splice(index, 1);
        }
    }
});

console.log(datos);
