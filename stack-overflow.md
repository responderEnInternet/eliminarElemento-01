> No olvide leer los comentarios que se encuentran en el código. Le será de mucha ayuda.

## Solo se tiene que identificar el índice

Sé que encontrar el índice en un _array_ de objetos puede parecer algo tedioso. Sin embargo, el primer paso es encontrarlo y luego con ello eliminar del _array_ los elementos a partir del otro [_array_].

Solo tiene que utilizar dos bucles, uno anidado en otro:

``` js
concept.forEach(item => {
    for ( index in datos ) {
        ...
    }
});
```

Justo allí (donde van los puntos suspensivos `...` en el ejemplo anterior) compararemos la propiedad `n_docu` de cada objeto en ambos _arrays_ de objetos, es decir:

``` js
if (datos[index].n_docu == item.n_docu) {
    ...
}
```

Y finalmente, eliminamos los elementos del _array_ utilizando el método [**`splice`**][splice]:

``` js
datos.splice(index, 1);
```

Donde `index` es el ìndice del _array_ `datos` y `1` la cantidad de elementos a eliminar.

### Implementación completa

Ya que se tiene claro lo anteriormente expuesto veamos un ejemplo completo de cómo funciona:

<!-- begin snippet: js hide: false console: true babel: false -->

<!-- language: lang-js -->

    const concept = [
      { n_docu: "23248169", c_prod: "000004", l_prod: "FAENAS" },
      { n_docu: "46117631", c_prod: "000005", l_prod: "MULTAS" }
    ];
    
    const datos = [
      { n_docu: "23248169", l_agen: "USUARIO", FAENAS: "1.00", MULTAS: "0.00" },
      { n_docu: "71377558", l_agen: "SIMEON", FAENAS: "5.00", MULTAS: "1.00" },
      { n_docu: "46117631", l_agen: "EGUAVIL",  FAENAS: "0.00", MULTAS: "1.00" }
    ];

    concept.forEach((item) => {
      for (let index in datos) {
        // Si el índice de ambos array coinciden se procederá
        // a eliminar el elemento de «datos»:
        if (datos[index].n_docu == item.n_docu) {
          datos.splice(index, 1);
        }
      }
    });
    
    // Mostrar resultados:
    console.log( datos );

<!-- end snippet -->

[splice]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice "Array.prototype.splice() | MDN Web Docs"

[foreach]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach "Array.prototype.forEach() | MDN Web Docs"