const card1 = document.querySelector("#card1");
const card2 = document.querySelector("#card2");
const card3 = document.querySelector("#card3");
const card4 = document.querySelector("#card4");

const valor_de_compra1 = document.querySelector("#valor_de_compra1");
const valor_de_compra2 = document.querySelector("#valor_de_compra2");
const valor_de_compra3 = document.querySelector("#valor_de_compra3");
const valor_de_compra4 = document.querySelector("#valor_de_compra4");

const valor_de_venta1 = document.querySelector("#valor_de_venta1");
const valor_de_venta2 = document.querySelector("#valor_de_venta2");
const valor_de_venta3 = document.querySelector("#valor_de_venta3");
const valor_de_venta4 = document.querySelector("#valor_de_venta4");

const variacion_de_valor1 = document.querySelector("#variacion_de_valor1");
const variacion_de_valor2 = document.querySelector("#variacion_de_valor2");
const variacion_de_valor3 = document.querySelector("#variacion_de_valor3");
const variacion_de_valor4 = document.querySelector("#variacion_de_valor4");

window.onload = function () {
  fetch("https://www.dolarsi.com/api/api.php?type=valoresprincipales")
    .then((res) => res.json())
    .then((data) => {
      let title1 = data[0].casa.nombre;
      card1.innerHTML = `${title1}`;

      let title2 = data[1].casa.nombre;
      card2.innerHTML = `${title2}`;

      let title3 = data[2].casa.nombre;
      card3.innerHTML = `${title3}`;

      let title4 = data[3].casa.nombre;
      card4.innerHTML = `${title4}`;

      let compra1 = data[0].casa.compra;
      valor_de_compra1.innerHTML = `${compra1}`;
      let compra2 = data[1].casa.compra;
      valor_de_compra2.innerHTML = `${compra2}`;
      let compra3 = data[2].casa.compra;
      valor_de_compra3.innerHTML = `${compra3}`;
      let compra4 = data[3].casa.compra;
      valor_de_compra4.innerHTML = `${compra4}`;

      let venta1 = data[0].casa.venta;
      valor_de_venta1.innerHTML = `${venta1}`;
      let venta2 = data[1].casa.venta;
      valor_de_venta2.innerHTML = `${venta2}`;
      let venta3 = data[2].casa.venta;
      valor_de_venta3.innerHTML = `${venta3}`;
      let venta4 = data[3].casa.venta;
      valor_de_venta4.innerHTML = `${venta4}`;

      let variacion1 = data[0].casa.variacion;
      variacion_de_valor1.innerHTML = `${variacion1}`;
      let variacion2 = data[1].casa.variacion;
      variacion_de_valor2.innerHTML = `${variacion2}`;
      let variacion3 = data[2].casa.variacion;
      variacion_de_valor3.innerHTML = `${variacion3}`;
      let variacion4 = data[3].casa.variacion;
      variacion_de_valor4.innerHTML = `${variacion4}`;
    });
};
