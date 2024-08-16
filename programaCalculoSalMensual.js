let salarioMinimo2024 = 1300000;
let salarioSup2 = (salarioMinimo2024 * 2);
let salarioMensual = 0;
let aporteSalud = (salarioMensual * (12.5%));
let aportePension = (salarioMensual * (16%));
let cesantias = (salarioMensual / 12);
let prima = (salarioMensual / 12);
let auxiliotransp = (162000);

salarioMensual = prompt("Me indica su salario mensual");

if (salarioMensual < salarioSup2 ) {
  alert("Su Ingreso mensual es: " ${salarioMensual + aporteSalud + aportepension + cesantias + prima + auxiliotransp});
}
else {
  alert("Su Ingreso mensual es: " ${salarioMensual + aporteSalud + aportepension + cesantias + prima});
     }
  

