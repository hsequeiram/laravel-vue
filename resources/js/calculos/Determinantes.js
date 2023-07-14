export default {
    Det2x2(data) {
        return data[0][0] * data[1][1] - data[0][1] * data[1][0];
    },
    Pasos2x2(data) {
        
        let Pasos = [];
        Pasos[0] = "(" + data[0][0].toString() + "*" + data[1][1].toString() + ")-" + "(" + data[0][1].toString() + "*" + data[1][0].toString() + ")";
        Pasos[1] = "(" + (data[0][0] * data[1][1]).toString() + ")-" + "(" + (data[0][1] * data[1][0]).toString() + ")";
        Pasos[2] = this.Det2x2(data).toString();
        return Pasos;
    },
    Det3x3(data) {
        //regla de sarrus
        //let resul =
        //let Paso1 = "Paso 1:\n("+data[1].toString()+"*"+data[4].toString()+")-"+"("+data[2].toString()+"*"+data[3].toString()+")\n"
        //let Paso2 = "Paso 2:\n("+(data[1]*data[4]).toString()+")-"+"("+(data[2]*data[3]).toString()+")\n"

        return (
            data[0][0] * data[1][1] * data[2][2] +
            data[1][0] * data[2][1] * data[0][2] +
            data[2][0] * data[0][1] * data[1][2] -
            (data[0][2] * data[1][1] * data[2][0] +
                data[1][2] * data[2][1] * data[0][0] +
                data[2][2] * data[0][1] * data[1][0])
        );
    },
    Pasos3x3(data) {
        //let resul = (data[0][0]*data[1][0]) - (data[0][1]*data[1][0])
        let Pasos = [];
        Pasos[0] =
            "((" +
            data[0][0].toString() +
            "*" +
            data[1][1].toString() +
            "*" +
            data[2][2].toString() +
            ")+" +
            "(" +
            data[1][0].toString() +
            "*" +
            data[2][1].toString() +
            "*" +
            data[0][2].toString() +
            ")+" +
            "(" +
            data[2][0].toString() +
            "*" +
            data[0][1].toString() +
            "*" +
            data[1][2].toString() +
            "))-" +
            "((" +
            data[0][2].toString() +
            "*" +
            data[1][1].toString() +
            "*" +
            data[2][0].toString() +
            ")+" +
            "(" +
            data[1][2].toString() +
            "*" +
            data[2][1].toString() +
            "*" +
            data[0][0].toString() +
            ")+" +
            "(" +
            data[2][2].toString() +
            "*" +
            data[0][1].toString() +
            "*" +
            data[1][0].toString() +
            "))";

        Pasos[1] =
            "((" +
            (data[0][0] * data[1][1] * data[2][2]).toString() +
            ")+" +
            "(" +
            (data[1][0] * data[2][1] * data[0][2]).toString() +
            ")+" +
            "(" +
            (data[2][0] * data[0][1] * data[1][2]).toString() +
            "))-" +
            "((" +
            (data[0][2] * data[1][1] * data[2][0]).toString() +
            ")+" +
            "(" +
            (data[1][2] * data[2][1] * data[0][0]).toString() +
            ")+" +
            "(" +
            (data[2][2] * data[0][1] * data[1][0]).toString() +
            "))";

        Pasos[2] =
            "(" +
            (
                data[0][0] * data[1][1] * data[2][2] +
                data[1][0] * data[2][1] * data[0][2] +
                data[2][0] * data[0][1] * data[1][2]
            ).toString() +
            ")-" +
            "(" +
            (
                data[0][2] * data[1][1] * data[2][0] +
                data[1][2] * data[2][1] * data[0][0] +
                data[2][2] * data[0][1] * data[1][0]
            ).toString() +
            ")";
        Pasos[3] = this.Det3x3(data).toString();
        return Pasos;
    },
    Pasos4x4(data) {
        //let resul = (data[0][0]*data[1][0]) - (data[0][1]*data[1][0])
        let Pasos = [];
        let Dt0 = data.slice(1, 4).map((row) => row.slice(1, 4));

        let Dt1 = [
            data[0].slice(1, 4),
            data[2].slice(1, 4),
            data[3].slice(1, 4),
        ];

        let Dt2 = [
            data[0].slice(1, 4),
            data[1].slice(1, 4),
            data[3].slice(1, 4),
        ];

        let Dt3 = [
            data[0].slice(1, 4),
            data[1].slice(1, 4),
            data[2].slice(1, 4),
        ];

        //Pasos[0] = "Por metodo de cofactores. Tomas como referencia la primera columna. Se multiplica el primer valor por el determinante de la matriz que se forma al descartar la fila y columna del primer valor y se continua de la misma manera con el segundo valor...";
        Pasos[0] =
            "Calcular los determinante de cada matriz que se forma al descartar la primera columna y cada fila";
        Pasos[1] = this.Pasos3x3(Dt0);
        Pasos[2] = this.Pasos3x3(Dt1);
        Pasos[3] = this.Pasos3x3(Dt2);
        Pasos[4] = this.Pasos3x3(Dt3);

        Pasos[5] =
            "(" +
            data[0][0].toString() +
            "*" +
            "|" +
            this.Det3x3(Dt0).toString() +
            "|" +
            ")-" +
            "(" +
            data[1][0].toString() +
            "*" +
            "|" +
            this.Det3x3(Dt1).toString() +
            "|" +
            ")+" +
            "(" +
            data[2][0].toString() +
            "*" +
            "|" +
            this.Det3x3(Dt2).toString() +
            "|" +
            ")-" +
            "(" +
            data[3][0].toString() +
            "*" +
            "|" +
            this.Det3x3(Dt3).toString() +
            "|" +
            ")";
        Pasos[6] =
            "(" +
            (data[0][0] * this.Det3x3(Dt0)).toString() +
            ")-" +
            "(" +
            (data[1][0] * this.Det3x3(Dt1)).toString() +
            ")+" +
            "(" +
            (data[2][0] * this.Det3x3(Dt2)).toString() +
            ")-" +
            "(" +
            (data[3][0] * this.Det3x3(Dt3)).toString() +
            ")";
        Pasos[6] = this.Det4x4(data).toString();

        return Pasos;
    },
    Det4x4(data) {
        //regla de sarrus
        // let Dt0 =[[data[1][1],data[1][2],data[1][3]],[data[2][1],data[2][2],data[2][3]],[data[3][1],data[3][2],data[3][3]]]
        // let Dt1 =[[data[0][1],data[0][2],data[0][3]],[data[2][1],data[2][2],data[2][3]],[data[3][1],data[3][2],data[3][3]]]
        // let Dt2 =[[data[0][1],data[0][2],data[0][3]],[data[1][1],data[1][2],data[1][3]],[data[3][1],data[3][2],data[3][3]]]
        // let Dt3 =[[data[0][1],data[0][2],data[0][3]],[data[1][1],data[1][2],data[1][3]],[data[2][1],data[2][2],data[2][3]]]

        let Dt0 = data.slice(1, 4).map((row) => row.slice(1, 4));
        console.log(Dt0);
        let Dt1 = [
            data[0].slice(1, 4),
            data[2].slice(1, 4),
            data[3].slice(1, 4),
        ];
        console.log(Dt1);
        let Dt2 = [
            data[0].slice(1, 4),
            data[1].slice(1, 4),
            data[3].slice(1, 4),
        ];
        console.log(Dt2);
        let Dt3 = [
            data[0].slice(1, 4),
            data[1].slice(1, 4),
            data[2].slice(1, 4),
        ];
        console.log(Dt3);

        let resul =
            data[0][0] * this.Det3x3(Dt0) -
            data[1][0] * this.Det3x3(Dt1) +
            data[2][0] * this.Det3x3(Dt2) -
            data[3][0] * this.Det3x3(Dt3);
        //let Paso1 = "Paso 1:\n("+data[1].toString()+"*"+data[4].toString()+")-"+"("+data[2].toString()+"*"+data[3].toString()+")\n"
        //let Paso2 = "Paso 2:\n("+(data[1]*data[4]).toString()+")-"+"("+(data[2]*data[3]).toString()+")\n"

        return "el determinante de la matriz es:" + resul.toString();
    },
    PasosSistEcu2(data) {
        let Mt2x2 = [
            [data[0][0], data[0][1]],
            [data[1][0], data[1][1]],
        ];

        let MtX = [
            [data[0][0], data[0][2]],
            [data[1][0], data[1][2]],
        ];
        let MtY = [
            [data[0][2], data[0][1]],
            [data[1][2], data[1][1]],
        ];

        let Dsist = this.Det2x2(Mt2x2);
        let Dx = this.Det2x2(MtX);
        let Dy = this.Det2x2(MtY);

        let Pasos = [];
        Pasos[0] =
            "calcular el determinante del sistema utilizando los coeficientes de las X y Y formando una matriz de 2x2";
        Pasos[1] = this.Pasos2x2(Mt2x2);
        Pasos[2] = "△ = " + Dsist.toString();
        Pasos[3] =
            "calcular el determinante de X con los coeficientes de las Y y los terminos independentes ";
        Pasos[4] = this.Pasos2x2(MtX);
        Pasos[5] = "△x = " + Dx.toString();
        Pasos[6] = "X = △x➗△";
        Pasos[7] = "X = " + Dx.toString() + "➗" + Dsist.toString();
        Pasos[8] = "X = " + (Dx / Dsist).toString();
        Pasos[9] =
            "calcular el determinante de Y con los coeficientes de las X y los terminos independentes ";
        Pasos[10] = this.Pasos2x2(MtY);
        Pasos[11] = "△y = " + Dy.toString();
        Pasos[12] = "Y = △y➗△";
        Pasos[13] = "Y = " + Dy.toString() + "➗" + Dsist.toString();
        Pasos[14] = "Y = " + (Dy / Dsist).toString();
        Pasos[15] = Pasos[8] + " " + Pasos[14];
        return Pasos;
    },
    PasosSistEcu3(data) {
        console.log(data);
        let Mt3x3 = [
            [data[0][0], data[0][1], data[0][2]],
            [data[1][0], data[1][1], data[1][2]],
            [data[2][0], data[2][1], data[2][2]],
        ];

        let MtX = [
            [data[0][3], data[0][1], data[0][2]],
            [data[1][3], data[1][1], data[1][2]],
            [data[2][3], data[2][1], data[2][2]],
        ];

        let MtY = [
            [data[0][0], data[0][3], data[0][2]],
            [data[1][0], data[1][3], data[1][2]],
            [data[2][0], data[2][3], data[2][2]],
        ];

        let MtZ = [
            [data[0][0], data[0][1], data[0][3]],
            [data[1][0], data[1][1], data[1][3]],
            [data[2][0], data[2][1], data[2][3]],
        ];
        console.log(MtX);
        console.log(MtY);
        console.log(MtZ);
        let Dsist = this.Det3x3(Mt3x3);
        let Dx = this.Det3x3(MtX);
        let Dy = this.Det3x3(MtY);
        let Dz = this.Det3x3(MtZ);
        let Pasos = [];
        Pasos[0] =
            "calcular el determinante del sistema utilizando los coeficientes de las X, Y, Z formando una matriz de 3x3 y utilizando la regla de sarrus";
        Pasos[1] = this.Pasos3x3(Mt3x3);
        Pasos[2] = "△ = " + Dsist.toString();
        Pasos[3] =
            "calcular el determinante de X con los coeficientes de las Y, Z y los terminos independentes ";
        Pasos[4] = this.Pasos3x3(MtX);
        Pasos[5] = "△x = " + Dx.toString();
        Pasos[6] = "X = △x➗△";
        Pasos[7] = "X = " + Dx.toString() + "➗" + Dsist.toString();
        Pasos[8] = "X = " + (Dx / Dsist).toString();
        Pasos[9] =
            "calcular el determinante de Y con los coeficientes de las X, Z y los terminos independentes ";
        Pasos[10] = this.Pasos3x3(MtY);
        Pasos[11] = "△y = " + Dy.toString();
        Pasos[12] = "Y = △y➗△";
        Pasos[13] = "Y = " + Dy.toString() + "➗" + Dsist.toString();
        Pasos[14] = "Y = " + (Dy / Dsist).toString();
        Pasos[15] =
            "calcular el determinante de Z con los coeficientes de las X, Y y los terminos independentes ";
        Pasos[16] = this.Pasos3x3(MtZ);
        Pasos[17] = "△z = " + Dz.toString();
        Pasos[18] = "Z = △z➗△";
        Pasos[19] = "Z = " + Dz.toString() + "➗" + Dsist.toString();
        Pasos[20] = "Z = " + (Dz / Dsist).toString();
        Pasos[21] = Pasos[8] + " " + Pasos[14] + " " + Pasos[20];
        return Pasos;
    },
    calcularAdjunta(matriz) {
        // Obtener las dimensiones de la matriz
        const filas = matriz.length;
        const columnas = matriz[0].length;

        // Verificar si la matriz es cuadrada
        if (filas !== columnas) {
            throw new Error(
                "La matriz debe ser cuadrada para calcular la adjunta."
            );
        }

        // Crear una matriz vacía para almacenar la adjunta
        const adjunta = [];

        // Calcular la adjunta de la matriz
        for (let i = 0; i < filas; i++) {
            adjunta[i] = [];
            for (let j = 0; j < columnas; j++) {
                const submatriz = this.obtenerSubmatriz(matriz, i, j);
                const cofactor = this.calcularCofactor(submatriz);
                const signo = (i + j) % 2 === 0 ? 1 : -1;
                adjunta[i][j] = signo * cofactor;
            }
        }

        return adjunta;
    },

    // Función auxiliar para obtener la submatriz eliminando la fila 'i' y la columna 'j'
    obtenerSubmatriz(matriz, fila, columna) {
        return matriz
            .filter((_, i) => i !== fila)
            .map((fila) => fila.filter((_, j) => j !== columna));
    },

    // Función auxiliar para calcular el cofactor de una submatriz
    calcularCofactor(matriz) {
        if (matriz.length === 1) {
            return matriz[0][0];
        }

        let cofactor = 0;
        for (let i = 0; i < matriz.length; i++) {
            const signo = i % 2 === 0 ? 1 : -1;
            cofactor +=
                signo *
                matriz[0][i] *
                this.calcularCofactor(this.obtenerSubmatriz(matriz, 0, i));
        }

        return cofactor;
    },
    obtenerTraspuesta(matriz) {
        const filas = matriz.length;
        const columnas = matriz[0].length;

        // Crear una matriz vacía para almacenar la traspuesta
        const traspuesta = new Array(columnas);
        for (let i = 0; i < columnas; i++) {
            traspuesta[i] = new Array(filas);
        }

        // Calcular la traspuesta de la matriz
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                traspuesta[j][i] = matriz[i][j];
            }
        }

        return traspuesta;
    },
    dividirMatrizPorEscalar(escalar, matriz) {
      var resultado = [];
    
      for (var i = 0; i < matriz.length; i++) {
        var fila = [];
    
        for (var j = 0; j < matriz[i].length; j++) {
          fila.push( matriz[i][j]/escalar );
        }
    
        resultado.push(fila);
      }
    
      return resultado;
    },
    PasosInv2x2(data) {
        let Pasos = [];
        let Dt = this.Det2x2(data)
        const adjunta = this.calcularAdjunta(data);
        const traspuesta = this.obtenerTraspuesta(data);
        const Inversa = this.dividirMatrizPorEscalar(Dt, adjunta);
        console.log(traspuesta)
        console.log(adjunta)
        Pasos[0] = "calcular el determinante de la Matriz y determinar si es ≠ 0";
        Pasos[1] = this.Pasos2x2(data);
        if ( Dt === 0) {
            Pasos[2] = "La Matriz no tiene Inversa";
            return Pasos;
        }
        Pasos[2] = "determinar la traspuesta";
        Pasos[3] = "[("+traspuesta[0][0]+","+traspuesta[0][1]+")\n"+"("+traspuesta[1][0]+","+traspuesta[1][1]+")]";
        Pasos[4] = "determinar la matriz adjunta de la traspuesta.(metodo de cofactores)";
        Pasos[5] = "Adj ="+ adjunta;
        Pasos[6] = "dividir la matriz adjunta por el determinante "
        Pasos[7] = "[("+Inversa[0][0]+","+Inversa[0][1]+")\n"+"("+Inversa[1][0]+","+Inversa[1][1]+")]";
        return Pasos;
    },
};