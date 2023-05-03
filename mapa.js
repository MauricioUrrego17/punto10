// Crear una instancia del mapa
var mapa = L.map('mapa').setView([6.2443677,-75.663614,12], 10);

// Añadir una capa de mosaicos
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(mapa);

// Crear un marcador y agregarlo al mapa
var marker = L.marker([6.2801752,-75.5835855,18.4]).addTo(mapa);

// Añadir un evento de clic al marcador
marker.on('click', function() {
  alert('Tecnologico de Antioquia, Aqui estudio!.');
});

// Crear otro marcador y agregarlo al mapa
var marker2 = L.marker([6.2948793,-75.5824742,17]).addTo(mapa);

// Añadir un evento de clic al segundo marcador
marker2.on('click', function() {
  alert('Esta es mi casa!.');
});
