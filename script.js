const botonEntrar = document.querySelector("#entrar");
const escenaPorton = document.querySelector("#porton");
const escenaMapa = document.querySelector("#mapa");

botonEntrar.addEventListener("click", () => {
  escenaPorton.classList.remove("escena-activa");
  escenaMapa.classList.add("escena-activa");
});
