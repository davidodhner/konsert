const concerts = [
  {
    artist: "Coldplay",
    date: "2025-07-10",
    location: "Paris, Stade de France",
    image: "coldplay.jpg",
    hotels: ["Hotel ibis Paris", "Novotel Saint-Denis", "Hilton Paris La Défense"]
  },
  {
    artist: "Dua Lipa",
    date: "2025-06-22",
    location: "Berlin, Mercedes-Benz Arena",
    image: "dua lipa.jpg",
    hotels: ["Holiday Inn Express Berlin", "Moxy Berlin Ostbahnhof", "Radisson Blu Berlin"]
  },
  {
    artist: "The Weeknd",
    date: "2025-08-05",
    location: "Barcelona, Estadi Olímpic",
    image: "the weekend.jpg",
    hotels: ["Hotel Arts Barcelona", "Barcelona Princess", "AC Hotel Victoria Suites"]
  }
];

const container = document.getElementById('concert-list');

concerts.forEach(concert => {
  const card = document.createElement('div');
  card.className = 'concert-card';

  card.innerHTML = `
    <img src="${concert.image}" alt="${concert.artist}">
    <div class="concert-info">
      <h2>${concert.artist}</h2>
      <p>📅 ${new Date(concert.date).toLocaleDateString('sv-SE')}</p>
      <p>📍 ${concert.location}</p>
      <div class="hotel-section">
        <h3>🏨 Hotell i närheten</h3>
        <ul>
          ${concert.hotels.map(hotel => `<li>${hotel}</li>`).join("")}
        </ul>
      </div>
    </div>
  `;
  container.appendChild(card);
});
