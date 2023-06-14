function keistiSpalva() {
  const kvadratas = document.getElementById("kvadratas");
  const spalvosKodas = generuotiAtsitiktineSpalva();
  kvadratas.style.backgroundColor = spalvosKodas;
  kvadratas.innerHTML = spalvosKodas;
  kvadratas.style.color = gautiInvertuotaSpalva(spalvosKodas);
}

function generuotiAtsitiktineSpalva() {
  const spalvosR = Math.floor(Math.random() * 256);
  const spalvosG = Math.floor(Math.random() * 256);
  const spalvosB = Math.floor(Math.random() * 256);
  return "rgb(" + spalvosR + ", " + spalvosG + ", " + spalvosB + ")";
}

function gautiInvertuotaSpalva(rgb) {
  // Išskaidome RGB kodą į raudoną, žalią ir mėlyną dalis
  var rgbDalys = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  var r = parseInt(rgbDalys[1]);
  var g = parseInt(rgbDalys[2]);
  var b = parseInt(rgbDalys[3]);

  // Invertuojame spalvas
  var invertedR = 255 - r;
  var invertedG = 255 - g;
  var invertedB = 255 - b;

  // Sukuriame invertuotą RGB spalvos kodą
  var invertedRGB =
    "rgb(" + invertedR + ", " + invertedG + ", " + invertedB + ")";

  return invertedRGB;
}
function gautiInvertuotaSpalva(rgb) {
  // Išskaidome RGB kodą į raudoną, žalią ir mėlyną dalis
  var rgbDalys = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  var r = parseInt(rgbDalys[1]);
  var g = parseInt(rgbDalys[2]);
  var b = parseInt(rgbDalys[3]);

  // Invertuojame spalvas
  var invertedR = 255 - r;
  var invertedG = 255 - g;
  var invertedB = 255 - b;

  // Sukuriame invertuotą RGB spalvos kodą
  var invertedRGB =
    "rgb(" + invertedR + ", " + invertedG + ", " + invertedB + ")";

  return invertedRGB;
}
