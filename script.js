function keistiSpalva() {
    const kvadratas = document.getElementById("kvadratas");
    const spalvosKodas = generuotiAtsitiktineSpalva();
    kvadratas.style.backgroundColor = spalvosKodas;
  }
  
  function generuotiAtsitiktineSpalva() {
    const spalvosR = Math.floor(Math.random() * 256);
    const spalvosG = Math.floor(Math.random() * 256);
    const spalvosB = Math.floor(Math.random() * 256);
    return "rgb(" + spalvosR + ", " + spalvosG + ", " + spalvosB + ")";
  }