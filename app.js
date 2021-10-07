const btnAdd = document.getElementById("btnCargar");
btnAdd.addEventListener("click",()=>{
  const resultado = document.getElementById("detalles")
  let lat = document.getElementById("txtLat").value
  let lon = document.getElementById("txtLon").value
  fetch("http://us1.locationiq.com/v1/reverse.php?key=pk.2f3963685bdadf994a6c94b0ff9c7aab&lat="+lat+"&lon="+lon+"&format=json")
  .then((response) => response.json())
  .then((json) => {
    let datos = "";
    for (let i=0;i<json.length;i++){
      datos += `<div>
      <h3>${json[i].display_name}</h3>
      </div>`
      resultado.innerHTML = datos;
    }
  })
})