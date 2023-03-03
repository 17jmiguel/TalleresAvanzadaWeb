// PROBLEMA: Watto paga a su personal de ventas un salario de 3500000 mensuales, más una comisión de 1500000 por cada licencia de software vendida menos el 5% de deducciones por impuestos sobre el total devengadp. Codifica un programa que calcule e imprima el salario mensual de un vendedor dado;

function SueldoTrabajador (ns){
    let comision = 1500000*ns;
    let total = (3500000 + comision)*0.95;
    console.log("El salario mensual de Miguel es de $"+total)
}

let sueldoTrabajadorFLE = (ns) => (1500000*ns + 3500000)*0.95;
let SV = 3
let imprimirST = sueldoTrabajadorFLE(SV);


SueldoTrabajador(3);
console.log("Funcion flecha: Miguel vendio un total de "+SV+" licencias de sofware, por lo tanto su sueldo este mes es de $"+ imprimirST)