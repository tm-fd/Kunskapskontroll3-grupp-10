// Skapar kort-objekt
// Construtor
function Card(bSource) {
    this.bSource = bSource; // Bakgrunden på korten
    this.urlSource = `http://live.staticflickr.com/${_serverId}/${_id}_${_secret}_m.jpg`;
    this.id;
}

// Instans-metod
Array.prototype.arrLength = function() {
    let card = new Card();
}