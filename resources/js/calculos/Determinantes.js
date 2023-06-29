export default {
    Det2x2(data) {
        return (data[0][0]*data[1][0]) - (data[0][1]*data[1][0])
    },
    Pasos2x2(data) {

        //let resul = (data[0][0]*data[1][0]) - (data[0][1]*data[1][0])
        let Pasos =[];
        Pasos[0] = "("+ data[0][0].toString()+"*"+ data[1][1].toString()+")-"+"("+ data[0][1].toString()+"*"+ data[1][0].toString()+")";
        Pasos[1] = "("+(data[0][0]*data[1][1]).toString()+")-"+"("+(data[0][1]*data[1][0]).toString()+")"
        Pasos[2] = this.Det2x2(data).toString();
            return Pasos;
    },
    Det3x3(data) {
        //regla de sarrus
        //let resul = 
            //let Paso1 = "Paso 1:\n("+data[1].toString()+"*"+data[4].toString()+")-"+"("+data[2].toString()+"*"+data[3].toString()+")\n"
            //let Paso2 = "Paso 2:\n("+(data[1]*data[4]).toString()+")-"+"("+(data[2]*data[3]).toString()+")\n"

            return ((data[0][0]*data[1][1]*data[2][2])+(data[1][0]*data[2][1]*data[0][2])+(data[2][0]*data[0][1]*data[1][2])) - ((data[0][2]*data[1][1]*data[2][0])+(data[1][2]*data[2][1]*data[0][0])+(data[2][2]*data[0][1]*data[1][0]))
    },
    Pasos3x3(data) {

        //let resul = (data[0][0]*data[1][0]) - (data[0][1]*data[1][0])
        let Pasos =[];
        Pasos[0] = "(("+ data[0][0].toString()+"*"+ data[1][1].toString()+"*"+data[2][2].toString()+")+"+"("+ data[1][0].toString()+"*"+ data[2][1].toString()+"*"+ data[0][2].toString()+")+"+"("+ data[2][0].toString()+"*"+ data[0][1].toString()+"*"+ data[1][2].toString()+"))-"+
                   "(("+ data[0][2].toString()+"*"+ data[1][1].toString()+"*"+data[2][0].toString()+")+"+"("+ data[1][2].toString()+"*"+ data[2][1].toString()+"*"+ data[0][0].toString()+")+"+"("+ data[2][2].toString()+"*"+ data[0][1].toString()+"*"+ data[1][0].toString()+"))";

        Pasos[1] = "(("+ (data[0][0]*data[1][1]*data[2][2]).toString()+")+"+"("+ (data[1][0]*data[2][1]*data[0][2]).toString()+")+"+"("+ (data[2][0]*data[0][1]*data[1][2]).toString()+"))-"+
                    "(("+ (data[0][2]*data[1][1]*data[2][0]).toString()+")+"+"("+ (data[1][2]*data[2][1]*data[0][0]).toString()+")+"+"("+ (data[2][2]*data[0][1]*data[1][0]).toString()+"))";

        Pasos[2] = "("+((data[0][0]*data[1][1]*data[2][2]) + (data[1][0]*data[2][1]*data[0][2])+ (data[2][0]*data[0][1]*data[1][2])).toString()+")-"+
                    "("+ ((data[0][2]*data[1][1]*data[2][0])+(data[1][2]*data[2][1]*data[0][0])+ (data[2][2]*data[0][1]*data[1][0])).toString()+")";           
        Pasos[3] = this.Det3x3(data).toString();
            return Pasos;
    },
    Pasos4x4(data) {

        //let resul = (data[0][0]*data[1][0]) - (data[0][1]*data[1][0])
        let Pasos =[];
        let Dt0 = data.slice(1, 4).map(row => row.slice(1, 4));
        
        let Dt1 = [data[0].slice(1, 4), data[2].slice(1, 4), data[3].slice(1, 4)];
        
        let Dt2 = [data[0].slice(1, 4), data[1].slice(1, 4), data[3].slice(1, 4)];
        
        let Dt3 = [data[0].slice(1, 4), data[1].slice(1, 4), data[2].slice(1, 4)];
       

        //Pasos[0] = "Por metodo de cofactores. Tomas como referencia la primera columna. Se multiplica el primer valor por el determinante de la matriz que se forma al descartar la fila y columna del primer valor y se continua de la misma manera con el segundo valor...";
        Pasos[0] = "Calcular los determinante de cada matriz que se forma al descartar la primera columna y cada fila" 
        Pasos[1] = this.Pasos3x3(Dt0);
        Pasos[2] = this.Pasos3x3(Dt1);
        Pasos[3] = this.Pasos3x3(Dt2);
        Pasos[4] = this.Pasos3x3(Dt3);

        Pasos[5] = "("+ data[0][0].toString()+"*"+"|"+(this.Det3x3(Dt0)).toString()+"|"+")-"+"("+ data[1][0].toString()+"*"+"|"+(this.Det3x3(Dt1)).toString()+"|"+")+"+"("+ data[2][0].toString()+"*"+"|"+(this.Det3x3(Dt2)).toString()+"|"+")-"+"("+ data[3][0].toString()+"*"+"|"+(this.Det3x3(Dt3)).toString()+"|"+")"
        Pasos[6] = "("+ (data[0][0]*(this.Det3x3(Dt0))).toString()+")-"+"("+ (data[1][0]*(this.Det3x3(Dt1))).toString()+")+"+"("+ (data[2][0]*(this.Det3x3(Dt2))).toString()+")-"+"("+ (data[3][0]*(this.Det3x3(Dt3))).toString()+")"
        Pasos[6] = this.Det4x4(data).toString();
        
            return Pasos;
    },
    Det4x4(data) {
        //regla de sarrus
        // let Dt0 =[[data[1][1],data[1][2],data[1][3]],[data[2][1],data[2][2],data[2][3]],[data[3][1],data[3][2],data[3][3]]]
        // let Dt1 =[[data[0][1],data[0][2],data[0][3]],[data[2][1],data[2][2],data[2][3]],[data[3][1],data[3][2],data[3][3]]]
        // let Dt2 =[[data[0][1],data[0][2],data[0][3]],[data[1][1],data[1][2],data[1][3]],[data[3][1],data[3][2],data[3][3]]]
        // let Dt3 =[[data[0][1],data[0][2],data[0][3]],[data[1][1],data[1][2],data[1][3]],[data[2][1],data[2][2],data[2][3]]]

        let Dt0 = data.slice(1, 4).map(row => row.slice(1, 4));
        console.log(Dt0);
        let Dt1 = [data[0].slice(1, 4), data[2].slice(1, 4), data[3].slice(1, 4)];
        console.log(Dt1);
        let Dt2 = [data[0].slice(1, 4), data[1].slice(1, 4), data[3].slice(1, 4)];
        console.log(Dt2);
        let Dt3 = [data[0].slice(1, 4), data[1].slice(1, 4), data[2].slice(1, 4)];
        console.log(Dt3);

        let resul =((data[0][0]*(this.Det3x3(Dt0)))-(data[1][0]*this.Det3x3(Dt1))+(data[2][0]*this.Det3x3(Dt2))-(data[3][0]*this.Det3x3(Dt3)));
            //let Paso1 = "Paso 1:\n("+data[1].toString()+"*"+data[4].toString()+")-"+"("+data[2].toString()+"*"+data[3].toString()+")\n"
            //let Paso2 = "Paso 2:\n("+(data[1]*data[4]).toString()+")-"+"("+(data[2]*data[3]).toString()+")\n"

            return "el determinante de la matriz es:"+ resul.toString()
    },
}