const concerts = [
  {
    artist: "Coldplay",
    date: "2025-07-10",
    location: "Paris, Stade de France",
    image: "coldplay.jpg",
    hotels: ["Hotel ibis Paris", "Novotel Saint-Denis", "Hilton Paris La Défense"],
    genre: "Pop Rock",
    ticketPriceRange: "€70 - €150"
  },
  {
    artist: "Dua Lipa",
    date: "2025-06-22",
    location: "Berlin, Mercedes-Benz Arena",
    image: "dua_lipa.jpg",
    hotels: ["Holiday Inn Express Berlin", "Moxy Berlin Ostbahnhof", "Radisson Blu Berlin"],
    genre: "Pop",
    ticketPriceRange: "€60 - €130"
  },
  {
    artist: "The Weeknd",
    date: "2025-08-05",
    location: "Barcelona, Estadi Olímpic",
    image: "the_weeknd.jpg",
    hotels: ["Hotel Arts Barcelona", "Barcelona Princess", "AC Hotel Victoria Suites"],
    genre: "R&B/Pop",
    ticketPriceRange: "€75 - €160"
  },
  {
    artist: "Taylor Swift",
    date: "2025-05-15",
    location: "London, Wembley Stadium",
    image: "taylor_swift.jpg",
    hotels: ["Hilton London Wembley", "Wembley Park Hotel", "Novotel London Wembley"],
    genre: "Pop/Country",
    ticketPriceRange: "€80 - €180"
  },
  {
    artist: "Ed Sheeran",
    date: "2025-09-01",
    location: "Dublin, Croke Park",
    image: "ed_sheeran.jpg",
    hotels: ["Croke Park Hotel", "The Gibson Hotel", "Clontarf Castle Hotel"],
    genre: "Pop",
    ticketPriceRange: "€65 - €140"
  },
  {
    artist: "Metallica",
    date: "2025-07-20",
    location: "Hamburg, Volksparkstadion",
    image: "metallica.jpg",
    hotels: ["Barceló Hamburg", "Radisson Blu Hotel, Hamburg", "Lindner Park-Hotel Hagenbeck"],
    genre: "Heavy Metal",
    ticketPriceRange: "€70 - €150"
  },
  {
    artist: "Adele",
    date: "2025-10-03",
    location: "Rome, Stadio Olimpico",
    image: "adele.jpg",
    hotels: ["Rome Cavalieri, A Waldorf Astoria Resort", "Hotel Eden", "Hotel Artemide"],
    genre: "Soul/Pop",
    ticketPriceRange: "€90 - €200"
  },
  {
    artist: "Harry Styles",
    date: "2025-06-08",
    location: "Amsterdam, Johan Cruyff Arena",
    image: "harry_styles.jpg",
    hotels: ["Jaz in the City Amsterdam", "Leonardo Hotel Amsterdam Rembrandtpark", "Corendon City Hotel Amsterdam"],
    genre: "Pop/Rock",
    ticketPriceRange: "€60 - €130"
  },
  {
    artist: "Billie Eilish",
    date: "2025-09-25",
    location: "Stockholm, Tele2 Arena",
    image: "billie_eilish.jpg",
    hotels: ["Quality Hotel Globe", "Clarion Hotel Stockholm", "Hotel Hellsten"],
    genre: "Electropop/Dark Pop",
    ticketPriceRange: "€55 - €120"
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
