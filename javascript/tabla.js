var tablaDeAmortizacion=document.querySelector('#tabla_de_amortizacion');
var tabla;

var capital=document.querySelector('#capitalInput');
var tasa=document.querySelector('#tasaInput');
var tiempo=document.querySelector('#tiempoInput');
var periodo=document.querySelector('#periodoSelect');

var p;
var interes,cuota;
let amortizacion;
var capitalPendiente;

var enviar=document.querySelector('#liBoton');
var fila;
var header;
var cell;
var texto;

var t;
function run() {
    p=0;
    tabla=document.createElement('table');
    t=document.getElementById('tablaDeAmortizacion');
    amortizacion=parseFloat(capital.value)/(parseFloat(tiempo.value)*(12/parseFloat(periodo.value)));
    capitalPendiente=parseFloat(capital.value);
    if(t!=null)
        tablaDeAmortizacion.removeChild(t);
    crearCampos();
    for(var i=0;i<=(12/parseFloat(periodo.value))*parseFloat(tiempo.value);i++)
        crearRegistros();

    crearTabla();

}


function crearCelda(value) {
    texto=document.createTextNode(value);
    cell=document.createElement('td');
    cell.appendChild(texto);
}

function crearRegistros() {
    fila=document.createElement('tr');



    for(var i=0;i<5;i++) {
        if(i==0) {
            crearCelda(p++);
        }
        else if(i==1) {
            interes=capitalPendiente*(parseFloat(tasa.value)/100);
            crearCelda(interes);
        }
        else if(i==2) {
            crearCelda(amortizacion);
        }
        else if(i==3) {
            cuota=amortizacion+interes;
            crearCelda(cuota);
        }
        else if(i==4) {
            crearCelda(capitalPendiente);
            capitalPendiente=capitalPendiente-amortizacion;
        }

        fila.appendChild(cell);
    }
    tabla.appendChild(fila);
}

function crearCampos() {
    fila=document.createElement('tr');
    fila.setAttribute('id','campos');
    header=document.createElement('th');
    for(var i=0;i<5;i++) {
        if(i==0) {
            crearCelda('Periodo');
            fila.appendChild(cell);
        }
        else if(i==1) {
            crearCelda('Interes');
            fila.appendChild(cell);
        }
        else if(i==2) {
            crearCelda('Amortizacion del capital');
            fila.appendChild(cell);
        }
        else if(i==3) {
            crearCelda('Cuota');
            fila.appendChild(cell);
        }
        else if(i==4) {
            crearCelda('Capital pendiente');
            fila.appendChild(cell);
        }
    }
    tabla.appendChild(fila);
}

function crearTabla() {
    tabla.setAttribute('class','tabla');
    tabla.setAttribute('id','tablaDeAmortizacion');
    tablaDeAmortizacion.appendChild(tabla);

}

