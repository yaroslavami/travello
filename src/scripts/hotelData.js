const hotels = [
    // United Kingdom
    {
        name: "The Langham",
        address: "1C Portland Place, London W1B 1JA",
        starRating: 5,
        country: "United Kingdom",
        description: "A luxurious hotel known for its classic Victorian style and impeccable service. Perfect for guests seeking a blend of tradition and modern comfort.",
        bookingUrl: "https://www.langhamhotels.co.uk/the-langham-london/"
    },
    {
        name: "The Ritz",
        address: "150 Piccadilly, London W1J 9BR",
        starRating: 5,
        country: "United Kingdom",
        description: "A symbol of opulence and elegance, offering a quintessentially British experience in a grand setting.",
        bookingUrl: "https://www.theritzlondon.com/"
    },
    {
        name: "The Savoy",
        address: "Strand, London WC2R 0EZ",
        starRating: 5,
        country: "United Kingdom",
        description: "One of London's most iconic hotels, offering world-class dining, a beautiful spa, and timeless luxury.",
        bookingUrl: "https://www.fairmont.com/savoy-london/"
    },
    {
        name: "Claridge's",
        address: "Brook Street, London W1K 4HR",
        starRating: 5,
        country: "United Kingdom",
        description: "A sophisticated Art Deco hotel, offering high-end accommodations and exceptional service.",
        bookingUrl: "https://www.claridges.co.uk/"
    },
    {
        name: "The Dorchester",
        address: "53 Park Lane, London W1K 1QA",
        starRating: 5,
        country: "United Kingdom",
        description: "A landmark of luxury, featuring elegant rooms, award-winning dining, and stunning park views.",
        bookingUrl: "https://www.dorchestercollection.com/en/london/the-dorchester/"
    },
    {
        name: "The Hoxton",
        address: "81 Great Eastern Street, London EC2A 3HU",
        starRating: 4,
        country: "United Kingdom",
        description: "A trendy, modern hotel offering stylish rooms and a lively atmosphere in Shoreditch.",
        bookingUrl: "https://www.thehoxton.com/london"
    },
    {
        name: "The Zetter Townhouse",
        address: "49-50 St John's Square, London EC1V 4JJ",
        starRating: 4,
        country: "United Kingdom",
        description: "A boutique hotel with a charming, eccentric décor and intimate, luxurious accommodations.",
        bookingUrl: "https://www.thezettertownhouse.com/"
    },
    {
        name: "Radisson Blu Edwardian",
        address: "97 Great Russell Street, London WC1B 3LB",
        starRating: 4,
        country: "United Kingdom",
        description: "A stylish hotel offering a blend of contemporary design and comfortable amenities in central London.",
        bookingUrl: "https://www.radissonhotels.com/en-us/hotels/radisson-blu-edwardian-london"
    },
    {
        name: "Hotel Café Royal",
        address: "68 Regent Street, London W1B 4DY",
        starRating: 4,
        country: "United Kingdom",
        description: "A historic hotel known for its stunning architecture, luxurious rooms, and exceptional dining.",
        bookingUrl: "https://www.hotelcaferoyal.com/"
    },
    {
        name: "Hotel Indigo",
        address: "1 Leicester Place, London WC2H 7BP",
        starRating: 4,
        country: "United Kingdom",
        description: "A stylish boutique hotel featuring modern accommodations with a touch of local charm.",
        bookingUrl: "https://www.ihg.com/hotelindigo/hotels/gb/en/london/lonsb/hoteldetail"
    },
    {
        name: "The Nadler Victoria",
        address: "10 Palace Street, London SW1E 5BW",
        starRating: 3,
        country: "United Kingdom",
        description: "A comfortable and convenient hotel offering modern amenities and a great location near major attractions.",
        bookingUrl: "https://www.nadlerhotels.com/victoria/"
    },
    {
        name: "Premier Inn London City (Aldgate)",
        address: "66 Alie Street, London E1 8PX",
        starRating: 3,
        country: "United Kingdom",
        description: "A well-regarded budget hotel with clean, modern rooms and excellent transport links to the city center.",
        bookingUrl: "https://www.premierinn.com/gb/en/home.html"
    },
    {
        name: "ibis London Blackfriars",
        address: "49 Blackfriars Road, London SE1 8NZ",
        starRating: 3,
        country: "United Kingdom",
        description: "A comfortable, no-frills hotel offering affordability and practicality with easy access to central London.",
        bookingUrl: "https://all.accor.com/hotel/3629/index.en.shtml"
    },
    {
        name: "The Best Western Plus London Wembley",
        address: "365 High Road, Wembley HA9 6AY",
        starRating: 3,
        country: "United Kingdom",
        description: "A modern hotel ideal for sports fans and event attendees near Wembley Stadium.",
        bookingUrl: "https://www.bestwestern.co.uk/hotels/best-western-plus-london-wembley-83815"
    },
    {
        name: "The Z Hotel Shoreditch",
        address: "136-144 City Road, London EC1V 2RL",
        starRating: 3,
        country: "United Kingdom",
        description: "A trendy, compact hotel with stylish rooms and a great location for exploring East London’s vibrant culture.",
        bookingUrl: "https://www.thezhotels.com/shoreditch"
    },

    // France
    {
        name: "The Ritz",
        address: "15 Place Vendôme, 75001 Paris",
        starRating: 5,
        country: "France",
        description: "A historic and luxurious hotel, offering classic elegance and exceptional service in the heart of Paris.",
        bookingUrl: "https://www.ritzparis.com/"
    },
    {
        name: "Le Meurice",
        address: "228 Rue de Rivoli, 75001 Paris",
        starRating: 5,
        country: "France",
        description: "An iconic hotel known for its opulent interiors, gourmet dining, and prime location near major attractions.",
        bookingUrl: "https://www.lemeurice.com/"
    },
    {
        name: "Hôtel Plaza Athénée",
        address: "25 Avenue Montaigne, 75008 Paris",
        starRating: 5,
        country: "France",
        description: "A symbol of luxury, offering chic accommodations and stunning views of the Eiffel Tower.",
        bookingUrl: "https://www.plaza-athenee-paris.com/"
    },
    {
        name: "Four Seasons Hotel George V",
        address: "31 Avenue George V, 75008 Paris",
        starRating: 5,
        country: "France",
        description: "A prestigious hotel known for its opulence, award-winning dining, and refined service.",
        bookingUrl: "https://www.fourseasons.com/georgev/"
    },
    {
        name: "Shangri-La Paris",
        address: "10 Avenue d'Iéna, 75116 Paris",
        starRating: 5,
        country: "France",
        description: "A former palace turned luxury hotel, offering breathtaking views of the Eiffel Tower and elegant accommodations.",
        bookingUrl: "https://www.shangri-la.com/paris/"
    },
    {
        name: "Le Relais Saint-Germain",
        address: "9 Carrefour de l'Odéon, 75006 Paris",
        starRating: 4,
        country: "France",
        description: "A boutique hotel known for its intimate setting, exceptional service, and artistic charm.",
        bookingUrl: "https://www.lerelais-saintgermain.com/"
    },
    {
        name: "Hotel La Villa Saint-Germain-des-Prés",
        address: "29 Rue Jacob, 75006 Paris",
        starRating: 4,
        country: "France",
        description: "A chic, modern hotel nestled in the historic Saint-Germain-des-Prés district, offering contemporary style and comfort.",
        bookingUrl: "https://www.villa-saint-germain-paris.com/"
    },
    {
        name: "Hotel Lutetia",
        address: "45 Boulevard Raspail, 75006 Paris",
        starRating: 4,
        country: "France",
        description: "A renowned art deco hotel featuring luxurious accommodations and exceptional dining options.",
        bookingUrl: "https://www.lutetia.paris/"
    },
    {
        name: "Hotel Le Petit Moulin",
        address: "29/31 Rue de Poitou, 75003 Paris",
        starRating: 4,
        country: "France",
        description: "A boutique hotel with a charming design, offering cozy rooms and a unique Parisian experience.",
        bookingUrl: "https://www.hotel-lepetitmoulin.com/"
    },
    {
        name: "Hôtel le 123 Sébastopol",
        address: "123 Boulevard de Sébastopol, 75002 Paris",
        starRating: 4,
        country: "France",
        description: "A stylish hotel blending contemporary comfort with historic charm, ideally located in central Paris.",
        bookingUrl: "https://www.hotel123sebastopol.com/"
    },
    {
        name: "Hôtel La Demeure",
        address: "51 Boulevard Saint-Marcel, 75013 Paris",
        starRating: 3,
        country: "France",
        description: "A cozy hotel offering a peaceful retreat in a charming Parisian district.",
        bookingUrl: "https://www.lademeure.com/"
    },
    {
        name: "Hôtel du Champs-Élysées",
        address: "140 Avenue des Champs-Élysées, 75008 Paris",
        starRating: 3,
        country: "France",
        description: "A comfortable hotel located along the famous Champs-Élysées avenue, providing easy access to top attractions.",
        bookingUrl: "https://www.hotel-du-champs-elysees.com/"
    },
    {
        name: "Hôtel de la Herse d'Or",
        address: "6 Rue de la Herse, 75004 Paris",
        starRating: 3,
        country: "France",
        description: "A charming hotel offering a blend of comfort and traditional Parisian hospitality.",
        bookingUrl: "https://www.hotelherse.com/"
    },
    {
        name: "Hôtel Elysée Montmartre",
        address: "18 Rue du Mont-Cenis, 75018 Paris",
        starRating: 3,
        country: "France",
        description: "A welcoming hotel offering a quiet atmosphere with proximity to Montmartre’s vibrant culture.",
        bookingUrl: "https://www.elysee-montmartre.com/"
    },
    {
        name: "Hôtel du Lion",
        address: "2 Rue du Montparnasse, 75006 Paris",
        starRating: 3,
        country: "France",
        description: "A comfortable hotel with a relaxed ambiance, ideal for exploring Paris’s Left Bank.",
        bookingUrl: "https://www.hotel-du-lion-paris.com/"
    },

    // Italy
    {
        name: "Hotel Danieli",
        address: "Riva degli Schiavoni, 4196, 30122 Venice",
        starRating: 5,
        country: "Italy",
        description: "A historic and luxurious hotel located on the Grand Canal, offering stunning views and exceptional service.",
        bookingUrl: "https://www.danielihotelvenice.com/"
    },
    {
        name: "Hotel Hassler",
        address: "Piazza Trinità dei Monti, 6, 00187 Rome",
        starRating: 5,
        country: "Italy",
        description: "An elegant hotel located near the Spanish Steps, known for its refined atmosphere and personalized service.",
        bookingUrl: "https://www.hotelhasslerroma.com/"
    },
    {
        name: "Belmond Hotel Cipriani",
        address: "Giudecca 10, 30133 Venice",
        starRating: 5,
        country: "Italy",
        description: "A luxury retreat featuring breathtaking views of Venice, exquisite dining, and unparalleled luxury.",
        bookingUrl: "https://www.belmond.com/hotels/europe/italy/venice/belmond-hotel-cipriani/"
    },
    {
        name: "Four Seasons Hotel Milano",
        address: "Via Gesù, 6/8, 20121 Milan",
        starRating: 5,
        country: "Italy",
        description: "A sophisticated hotel offering world-class amenities, exceptional dining, and a central location in Milan.",
        bookingUrl: "https://www.fourseasons.com/milan/"
    },
    {
        name: "Grand Hotel Tremezzo",
        address: "Via Roma, 8, 22016 Tremezzo",
        starRating: 5,
        country: "Italy",
        description: "A stunning lakeside property on Lake Como, providing luxurious accommodations and breathtaking views.",
        bookingUrl: "https://www.grandhoteltremezzo.com/"
    },
    {
        name: "Hotel Artemide",
        address: "Via Nazionale, 22, 00184 Rome",
        starRating: 4,
        country: "Italy",
        description: "A stylish boutique hotel offering modern comfort and a prime location near Rome's historic center.",
        bookingUrl: "https://www.hotelartemideroma.com/"
    },
    {
        name: "Starhotels Anderson",
        address: "Piazza Luigi di Savoia, 20, 20124 Milan",
        starRating: 4,
        country: "Italy",
        description: "A contemporary hotel near Milan’s main railway station, providing comfort and easy access to the city.",
        bookingUrl: "https://www.starhotels.com/anderson/"
    },
    {
        name: "Hotel Brunelleschi",
        address: "Piazza Santa Elisabetta, 3, 50122 Florence",
        starRating: 4,
        country: "Italy",
        description: "A historic hotel with elegant design and close proximity to Florence’s major attractions.",
        bookingUrl: "https://www.hotelbrunelleschi.it/"
    },
    {
        name: "Hotel L’Orologio",
        address: "Piazza Santa Maria Novella, 24, 50123 Florence",
        starRating: 4,
        country: "Italy",
        description: "A chic boutique hotel offering modern accommodations and a central location near Florence’s train station.",
        bookingUrl: "https://www.hotellorologio.com/"
    },
    {
        name: "Hotel La Pace",
        address: "Viale Gramsci, 14, 56125 Pisa",
        starRating: 4,
        country: "Italy",
        description: "A charming hotel in Pisa with comfortable rooms and a welcoming atmosphere.",
        bookingUrl: "https://www.hotellapacepisa.com/"
    },
    {
        name: "Hotel Edera",
        address: "Via Vicenza, 34, 00185 Rome",
        starRating: 3,
        country: "Italy",
        description: "A cozy and budget-friendly option near Rome’s main attractions.",
        bookingUrl: "https://www.ederahotel.com/"
    },
    {
        name: "Hotel Al Ponte Mocenigo",
        address: "Campo San Stae, 1995, 30135 Venice",
        starRating: 3,
        country: "Italy",
        description: "A quaint hotel offering a traditional Venetian experience with a convenient location.",
        bookingUrl: "https://www.alpontevenice.com/"
    },
    {
        name: "Hotel Milano",
        address: "Via Nazionale, 22, 50123 Florence",
        starRating: 3,
        country: "Italy",
        description: "A comfortable hotel in Florence, providing basic amenities with a prime location.",
        bookingUrl: "https://www.hotel-milano-florence.com/"
    },
    {
        name: "Hotel De La Ville",
        address: "Via Cusani, 6, 20121 Milan",
        starRating: 3,
        country: "Italy",
        description: "A relaxed hotel offering budget-friendly accommodations in the heart of Milan.",
        bookingUrl: "https://www.hoteldelavillemilan.com/"
    },
    {
        name: "Hotel San Remo",
        address: "Via dei Serpenti, 109, 00184 Rome",
        starRating: 3,
        country: "Italy",
        description: "A simple, affordable hotel near Rome’s historic sites, providing a comfortable stay.",
        bookingUrl: "https://www.hotelsanremo-roma.com/"
    },

    // Germany
    {
      name: "Hotel Adlon Kempinski", 
      address: "Unter den Linden 77, 10117 Berlin", 
      starRating: 5, 
      country: "Germany", 
      description: "A luxurious 5-star hotel located in the heart of Berlin near Brandenburg Gate.", 
      bookingUrl: "https://www.hoteladlon.com" 
    },
    { 
      name: "The Ritz-Carlton", 
      address: "Potsdamer Platz 3, 10785 Berlin", 
      starRating: 5, 
      country: "Germany", 
      description: "An elegant 5-star hotel in Berlin offering world-class service and a premium experience.", 
      bookingUrl: "https://www.ritzcarlton.com/berlin" 
    },
    { 
      name: "Bulgari Hotel", 
      address: "Brandenburger Tor, 10117 Berlin", 
      starRating: 5, 
      country: "Germany", 
      description: "Exclusive 5-star hotel featuring modern luxury and exceptional amenities in the heart of Berlin.", 
      bookingUrl: "https://www.bulgarihotels.com/berlin" 
    },
    { 
      name: "Hotel Atlantic Kempinski", 
      address: "An der Alster 72-79, 20099 Hamburg", 
      starRating: 5, 
      country: "Germany", 
      description: "5-star hotel overlooking the Alster Lake in Hamburg, offering sophisticated accommodations.", 
      bookingUrl: "https://www.kempinski.com/en/hamburg/hotel-atlantic-kempinski" 
    },
    { 
      name: "Bayerischer Hof", 
      address: "Promenadeplatz 2-6, 80333 Munich", 
      starRating: 5, 
      country: "Germany", 
      description: "A historic 5-star hotel in Munich with opulent rooms and an array of wellness facilities.", 
      bookingUrl: "https://www.bayerischerhof.de" 
    },
    { 
      name: "Motel One Berlin-Alexanderplatz", 
      address: "Alexanderplatz 9, 10178 Berlin", 
      starRating: 4, 
      country: "Germany", 
      description: "Stylish 4-star hotel near Alexanderplatz with modern rooms and a relaxed atmosphere.", 
      bookingUrl: "https://www.motel-one.com/de/" 
    },
    { 
      name: "NH Collection Berlin Mitte", 
      address: "Leipziger Straße 106-111, 10117 Berlin", 
      starRating: 4, 
      country: "Germany", 
      description: "Contemporary 4-star hotel in the city center, close to Berlin’s major attractions.", 
      bookingUrl: "https://www.nh-hotels.com" 
    },
    { 
      name: "Maritim Hotel", 
      address: "Theodor-Heuss-Allee 3, 60486 Frankfurt", 
      starRating: 4, 
      country: "Germany", 
      description: "4-star hotel in Frankfurt offering comfortable rooms and excellent conference facilities.", 
      bookingUrl: "https://www.maritim.com" 
    },
    { 
      name: "Steigenberger Hotel", 
      address: "Bayerstraße 12, 80335 Munich", 
      starRating: 4, 
      country: "Germany", 
      description: "4-star hotel located in Munich with modern amenities and close proximity to the city center.", 
      bookingUrl: "https://www.steigenberger.com" 
    },
    { 
      name: "Hotel Europäischer Hof", 
      address: "Friedrich-Ebert-Anlage 1, 69117 Heidelberg", 
      starRating: 4, 
      country: "Germany", 
      description: "4-star hotel in Heidelberg featuring elegant rooms and a central location.", 
      bookingUrl: "https://www.europaischerhof.de" 
    },
    { 
      name: "Hotel Berlin", 
      address: "Lützowplatz 17, 10785 Berlin", 
      starRating: 3, 
      country: "Germany", 
      description: "3-star hotel in Berlin offering comfortable rooms and easy access to major attractions.", 
      bookingUrl: "https://www.hotel-berlin.de" 
    },
    { 
      name: "ibis Styles Hamburg Alster City", 
      address: "Mühlendamm 1, 22087 Hamburg", 
      starRating: 3, 
      country: "Germany", 
      description: "3-star hotel in Hamburg providing modern accommodations at an affordable price.", 
      bookingUrl: "https://www.accorhotels.com" 
    },
    { 
      name: "Hotel Amadeus", 
      address: "Amadeusstraße 5, 60325 Frankfurt", 
      starRating: 3, 
      country: "Germany", 
      description: "A 3-star hotel in Frankfurt, perfect for business and leisure travelers.", 
      bookingUrl: "https://www.hotel-amadeus.de" 
    },
    { 
      name: "Holiday Inn Express", 
      address: "Schwanthalerstraße 121, 80339 Munich", 
      starRating: 3, 
      country: "Germany", 
      description: "3-star hotel in Munich featuring comfortable rooms and convenient amenities for short stays.", 
      bookingUrl: "https://www.ihg.com" 
    },
    { 
      name: "Hotel Ibis", 
      address: "Bismarckstraße 19, 69115 Heidelberg", 
      starRating: 3, 
      country: "Germany", 
      description: "A 3-star hotel in Heidelberg offering simple and comfortable accommodations.", 
      bookingUrl: "https://www.accorhotels.com" 
    },

    // Spain
    { 
      name: "Hotel Ritz", 
      address: "Plaza de la Lealtad, 5, 28014 Madrid", 
      starRating: 5, 
      country: "Spain", 
      description: "A luxurious 5-star hotel located in the heart of Madrid with opulent accommodations and exquisite dining.", 
      bookingUrl: "https://www.hotelritz.es" 
    },
    { 
      name: "The One Barcelona", 
      address: "Carrer de Provença, 277, 08008 Barcelona", 
      starRating: 5, 
      country: "Spain", 
      description: "An elegant 5-star hotel offering modern amenities and exceptional service in the vibrant city of Barcelona.", 
      bookingUrl: "https://www.theonehotels.com/barcelona" 
    },
    { 
      name: "Hotel Alfonso XIII", 
      address: "Calle San Fernando, 2, 41004 Seville", 
      starRating: 5, 
      country: "Spain", 
      description: "A historic 5-star hotel in Seville with classic architecture and luxurious accommodations.", 
      bookingUrl: "https://www.hotelalfonsoxiii.com" 
    },
    { 
      name: "Mandarin Oriental", 
      address: "Passeig de Gràcia, 38-40, 08007 Barcelona", 
      starRating: 5, 
      country: "Spain", 
      description: "A 5-star hotel in Barcelona offering opulent rooms and world-class dining experiences.", 
      bookingUrl: "https://www.mandarinoriental.com/barcelona" 
    },
    { 
      name: "Gran Melia Palacio de los Duques", 
      address: "Cuesta de Santo Domingo, 5, 28013 Madrid", 
      starRating: 5, 
      country: "Spain", 
      description: "A 5-star hotel in Madrid offering historic charm with modern luxury amenities.", 
      bookingUrl: "https://www.granmelia.com/madrid" 
    },
    { 
      name: "Hotel Barcelona Center", 
      address: "Carrer del Diputació, 234, 08007 Barcelona", 
      starRating: 4, 
      country: "Spain", 
      description: "A modern 4-star hotel in the heart of Barcelona offering comfortable and stylish accommodations.", 
      bookingUrl: "https://www.hotelbarcelonacenter.com" 
    },
    { 
      name: "H10 Madison", 
      address: "Carrer de Pau Claris, 19, 08010 Barcelona", 
      starRating: 4, 
      country: "Spain", 
      description: "A 4-star boutique hotel in Barcelona providing personalized service and a convenient location.", 
      bookingUrl: "https://www.h10hotels.com" 
    },
    { 
      name: "Hotel Santo Domingo", 
      address: "Calle San Bernardo, 1, 28015 Madrid", 
      starRating: 4, 
      country: "Spain", 
      description: "A 4-star hotel offering a blend of tradition and modern comfort in Madrid.", 
      bookingUrl: "https://www.hotelsantodomingo.com" 
    },
    { 
      name: "NH Collection Madrid Suecia", 
      address: "Calle del Marqués de Casa Riera, 4, 28014 Madrid", 
      starRating: 4, 
      country: "Spain", 
      description: "A stylish 4-star hotel in Madrid with contemporary rooms and excellent amenities.", 
      bookingUrl: "https://www.nh-hotels.com" 
    },
    { 
      name: "Hotel Gran Via", 
      address: "Gran Vía, 25, 28013 Madrid", 
      starRating: 4, 
      country: "Spain", 
      description: "A 4-star hotel on Gran Vía offering modern amenities and a prime location in Madrid.", 
      bookingUrl: "https://www.hotelgranvia.com" 
    },
    { 
      name: "Hotel Regente", 
      address: "Calle Gran Vía, 51, 28013 Madrid", 
      starRating: 3, 
      country: "Spain", 
      description: "A 3-star hotel featuring comfortable rooms and easy access to Madrid's attractions.", 
      bookingUrl: "https://www.hotelregente.com" 
    },
    { 
      name: "Hotel Internacional", 
      address: "Carrer de la Boqueria, 21, 08002 Barcelona", 
      starRating: 3, 
      country: "Spain", 
      description: "A 3-star hotel in Barcelona offering budget-friendly accommodation in the heart of the city.", 
      bookingUrl: "https://www.hotel-internacional.com" 
    },
    { 
      name: "Hotel Meliá", 
      address: "Dr. Pedro de Castro, 1, 41004 Seville", 
      starRating: 3, 
      country: "Spain", 
      description: "A 3-star hotel in Seville featuring comfortable rooms and modern amenities.", 
      bookingUrl: "https://www.melia.com" 
    },
    { 
      name: "Hotel Nouvel", 
      address: "Carrer de Sant Pau, 9-11, 08001 Barcelona", 
      starRating: 3, 
      country: "Spain", 
      description: "A 3-star hotel providing simple accommodations with easy access to Barcelona's attractions.", 
      bookingUrl: "https://www.hotelnouvel.com" 
    },
    { 
      name: "Ibis Madrid Centro", 
      address: "Calle de Valverde, 9, 28004 Madrid", 
      starRating: 3, 
      country: "Spain", 
      description: "A 3-star hotel in central Madrid offering a budget-friendly stay with modern facilities.", 
      bookingUrl: "https://www.ibis.com" 
    },

    // Switzerland
    { 
      name: "Badrutt’s Palace Hotel", 
      address: "Via Serlas 27, 7500 St. Moritz", 
      starRating: 5, 
      country: "Switzerland", 
      description: "A luxurious 5-star hotel offering exceptional service and stunning views in St. Moritz.", 
      bookingUrl: "https://www.badruttspalace.com" 
    },
    { 
      name: "The Dolder Grand", 
      address: "Kurhausstrasse 65, 8032 Zurich", 
      starRating: 5, 
      country: "Switzerland", 
      description: "A world-renowned 5-star hotel in Zurich offering wellness and fine dining experiences.", 
      bookingUrl: "https://www.thedoldergrand.com" 
    },
    { 
      name: "Kulm Hotel", 
      address: "Via Claudia Augusta 2, 7500 St. Moritz", 
      starRating: 5, 
      country: "Switzerland", 
      description: "An iconic 5-star hotel with a rich history and luxurious accommodations in St. Moritz.", 
      bookingUrl: "https://www.kulm.com" 
    },
    { 
      name: "Hotel des Trois Couronnes", 
      address: "Place du Mont-Pèlerin 34, 1800 Vevey", 
      starRating: 5, 
      country: "Switzerland", 
      description: "A charming 5-star hotel located in Vevey, offering stunning lake views and gourmet dining.", 
      bookingUrl: "https://www.destroiscouronnes.com" 
    },
    { 
      name: "Badrutt’s Palace Hotel", 
      address: "Via Serlas 27, 7500 St. Moritz", 
      starRating: 5, 
      country: "Switzerland", 
      description: "A luxurious 5-star hotel offering exceptional service and stunning views in St. Moritz.", 
      bookingUrl: "https://www.badruttspalace.com" 
    },
    { 
      name: "Hotel Seehof", 
      address: "Seehofstrasse 11, 8008 Zurich", 
      starRating: 4, 
      country: "Switzerland", 
      description: "A 4-star boutique hotel in Zurich with modern amenities and a serene lakeside setting.", 
      bookingUrl: "https://www.hotelseehof.ch" 
    },
    { 
      name: "Hotel Bristol", 
      address: "10 Rue du Mont-Blanc, 1201 Geneva", 
      starRating: 4, 
      country: "Switzerland", 
      description: "A classic 4-star hotel in Geneva offering elegant accommodations and excellent service.", 
      bookingUrl: "https://www.hotelbristolgeneva.ch" 
    },
    { 
      name: "Hotel Royal", 
      address: "Weinmarkt 12, 6004 Lucerne", 
      starRating: 4, 
      country: "Switzerland", 
      description: "A 4-star hotel in Lucerne offering a blend of luxury and comfort with stunning views.", 
      bookingUrl: "https://www.hotelroyallucerne.ch" 
    },
    { 
      name: "Swissotel Zurich", 
      address: "Schulstrasse 44, 8050 Zurich", 
      starRating: 4, 
      country: "Switzerland", 
      description: "A contemporary 4-star hotel near Zurich Airport with modern facilities and excellent dining options.", 
      bookingUrl: "https://www.swissotel.com/zurich" 
    },
    { 
      name: "Hotel Alina", 
      address: "6 Rue du Mont-Blanc, 1201 Geneva", 
      starRating: 4, 
      country: "Switzerland", 
      description: "A cozy 4-star hotel in Geneva featuring stylish rooms and central location.", 
      bookingUrl: "https://www.hotelalina.ch" 
    },
    { 
      name: "Hotel City", 
      address: "Buckhauserstrasse 36, 8048 Zurich", 
      starRating: 3, 
      country: "Switzerland", 
      description: "A 3-star hotel in Zurich offering budget-friendly accommodations with easy access to the city center.", 
      bookingUrl: "https://www.hotelcity.ch" 
    },
    { 
      name: "ibis Styles Geneve Mont Blanc", 
      address: "8-10 Rue Ami-Levrier, 1201 Geneva", 
      starRating: 3, 
      country: "Switzerland", 
      description: "A 3-star hotel in Geneva providing modern, comfortable accommodations and good value for money.", 
      bookingUrl: "https://www.ibis.com" 
    },
    { 
      name: "Hotel Ibis Basel", 
      address: "Basel SBB, 4002 Basel", 
      starRating: 3, 
      country: "Switzerland", 
      description: "A 3-star hotel in Basel featuring simple, yet comfortable rooms and convenient amenities.", 
      bookingUrl: "https://www.ibis.com" 
    },
    { 
      name: "Hotel Ibis Luzern", 
      address: "Pilatusstrasse 29, 6003 Lucerne", 
      starRating: 3, 
      country: "Switzerland", 
      description: "A 3-star hotel in Lucerne offering a central location and basic modern facilities.", 
      bookingUrl: "https://www.ibis.com" 
    },
    { 
      name: "Hotel Adler", 
      address: "Rosengasse 10, 8001 Zurich", 
      starRating: 3, 
      country: "Switzerland", 
      description: "A 3-star hotel in Zurich featuring traditional charm and easy access to the city.", 
      bookingUrl: "https://www.hoteladler.ch" 
    },

    // Ukraine
    { 
      name: "Premier Palace Hotel", 
      address: "5-7/29 T. Shevchenka Blvd., Kyiv", 
      starRating: 5, 
      country: "Ukraine", 
      description: "A luxurious 5-star hotel offering elegant accommodations and exceptional service in Kyiv.", 
      bookingUrl: "https://www.premierpalacehotel.com" 
    },
    { 
      name: "InterContinental", 
      address: "2A Velyka Zhytomyrska St, Kyiv", 
      starRating: 5, 
      country: "Ukraine", 
      description: "A prestigious 5-star hotel with luxurious rooms and a prime location in Kyiv.", 
      bookingUrl: "https://www.ihg.com/intercontinental/hotels" 
    },
    { 
      name: "Fairmont Grand Hotel", 
      address: "1 Naberezhno-Khreshchatytska St, Kyiv", 
      starRating: 5, 
      country: "Ukraine", 
      description: "A 5-star hotel offering exceptional dining options and stunning river views in Kyiv.", 
      bookingUrl: "https://www.fairmont.com/grand-hotel-kyiv/" 
    },
    { 
      name: "Hyatt Regency", 
      address: "5, A. Tarasova St, Kyiv", 
      starRating: 5, 
      country: "Ukraine", 
      description: "A modern 5-star hotel providing upscale amenities and a central location in Kyiv.", 
      bookingUrl: "https://www.hyatt.com" 
    },
    { 
      name: "Hilton", 
      address: "30 Tarasa Shevchenka Blvd, Kyiv", 
      starRating: 5, 
      country: "Ukraine", 
      description: "A stylish 5-star hotel with top-tier services and a convenient location in Kyiv.", 
      bookingUrl: "https://www.hilton.com" 
    },
    { 
      name: "Hotel Ukraine", 
      address: "4 Institutskaya St, Kyiv", 
      starRating: 4, 
      country: "Ukraine", 
      description: "A 4-star hotel known for its rich history and central location in Kyiv.", 
      bookingUrl: "https://www.hotelukraine.com" 
    },
    { 
      name: "Radisson Blu Hotel", 
      address: "22 Yaroslaviv Val St, Kyiv", 
      starRating: 4, 
      country: "Ukraine", 
      description: "A 4-star hotel offering modern accommodations and top-notch amenities in Kyiv.", 
      bookingUrl: "https://www.radisson.com/kyiv" 
    },
    { 
      name: "11 Mirrors Design Hotel", 
      address: "34A Bogdana Khmelnytskogo St, Kyiv", 
      starRating: 4, 
      country: "Ukraine", 
      description: "A boutique 4-star hotel known for its stylish design and excellent service in Kyiv.", 
      bookingUrl: "https://11mirrors.com" 
    },
    { 
      name: "Opera Hotel", 
      address: "53 B. Khmelnitskogo St, Kyiv", 
      starRating: 4, 
      country: "Ukraine", 
      description: "A refined 4-star hotel offering a perfect blend of comfort and elegance in Kyiv.", 
      bookingUrl: "https://www.operahotel.com" 
    },
    { 
      name: "Hotel Dnipro", 
      address: "1/2 Khreshchatyk St, Kyiv", 
      starRating: 3, 
      country: "Ukraine", 
      description: "A 3-star hotel with a convenient central location and affordable pricing in Kyiv.", 
      bookingUrl: "https://www.hoteldnipro.com" 
    },
    { 
      name: "ibis Kiev City Center", 
      address: "Taras Shevchenko Blvd, 25, Kyiv", 
      starRating: 3, 
      country: "Ukraine", 
      description: "A 3-star hotel offering comfortable accommodations and easy access to Kyiv attractions.", 
      bookingUrl: "https://www.ibis.com" 
    },
    { 
      name: "Hotel Bakkara", 
      address: "1, Venice Island, Hydropark, Kyiv", 
      starRating: 3, 
      country: "Ukraine", 
      description: "A 3-star hotel with a scenic river view and simple, comfortable rooms in Kyiv.", 
      bookingUrl: "https://www.hotelbakkara.com" 
    },
    { 
      name: "Hotel Bratislava", 
      address: "1 Malyshko St, Kyiv", 
      starRating: 3, 
      country: "Ukraine", 
      description: "A 3-star hotel offering budget-friendly stays and a peaceful environment in Kyiv.", 
      bookingUrl: "https://www.hotelbratislava.com" 
    },
    { 
      name: "Hotel Mir", 
      address: "70, Holosiivskyi Ave, Kyiv", 
      starRating: 3, 
      country: "Ukraine", 
      description: "A 3-star hotel known for its affordability and convenient location in Kyiv.", 
      bookingUrl: "https://www.hotelmir.com" 
    },

    // Poland
    { 
      name: "Raffles Europejski", 
      address: "Krakowskie Przedmieście 13, 00-071 Warsaw", 
      starRating: 5, 
      country: "Poland", 
      description: "A luxurious 5-star hotel offering historic charm and exceptional service in Warsaw.", 
      bookingUrl: "https://www.raffles.com/warsaw" 
    },
    { 
      name: "Sheraton Grand", 
      address: "Powiśle 7, 31-101 Kraków", 
      starRating: 5, 
      country: "Poland", 
      description: "A prestigious 5-star hotel providing upscale accommodations and excellent amenities in Kraków.", 
      bookingUrl: "https://www.marriott.com/sheraton-grand-krakow" 
    },
    { 
      name: "Sofitel Warsaw Victoria", 
      address: "Królewska 11, 00-065 Warsaw", 
      starRating: 5, 
      country: "Poland", 
      description: "A stylish 5-star hotel offering luxurious comfort and a prime location in Warsaw.", 
      bookingUrl: "https://www.sofitel.com/sofitel-warsaw-victoria" 
    },
    { 
      name: "The Westin", 
      address: "Al. Jana Pawła II 21, 00-854 Warsaw", 
      starRating: 5, 
      country: "Poland", 
      description: "A modern 5-star hotel with top-tier amenities and a convenient location in Warsaw.", 
      bookingUrl: "https://www.marriott.com/the-westin-warsaw" 
    },
    { 
      name: "Hotel Bristol, a Luxury Collection Hotel", 
      address: "Krakowskie Przedmieście 42/44, 00-325 Warsaw", 
      starRating: 5, 
      country: "Poland", 
      description: "A historic 5-star hotel known for its elegant interiors and rich heritage in Warsaw.", 
      bookingUrl: "https://www.luxurycollection.com/hotel-bristol-warsaw" 
    },
    { 
      name: "PURO Hotel", 
      address: "Ogrodowa 10, 31-155 Kraków", 
      starRating: 4, 
      country: "Poland", 
      description: "A trendy 4-star boutique hotel offering contemporary design and excellent service in Kraków.", 
      bookingUrl: "https://www.purohotel.com/krakow-ogrodowa" 
    },
    { 
      name: "Vienna House Andel’s", 
      address: "Ogrodowa 17, 91-065 Łódź", 
      starRating: 4, 
      country: "Poland", 
      description: "A modern 4-star hotel with comfortable rooms and excellent facilities in Łódź.", 
      bookingUrl: "https://www.viennahouse.com/andels-lodz" 
    },
    { 
      name: "Radisson Blu Sobieski Hotel", 
      address: "Plac Artura Zawiszy 1, 02-025 Warsaw", 
      starRating: 4, 
      country: "Poland", 
      description: "A stylish 4-star hotel offering upscale accommodations and great amenities in Warsaw.", 
      bookingUrl: "https://www.radisson.com/sobieski-warsaw" 
    },
    { 
      name: "Hotel Mercure Wrocław Centrum", 
      address: "Pl. Dominikański 1, 50-159 Wrocław", 
      starRating: 4, 
      country: "Poland", 
      description: "A comfortable 4-star hotel with easy access to Wrocław’s main attractions.", 
      bookingUrl: "https://www.mercure.com/wroclaw-centrum" 
    },
    { 
      name: "Holiday Inn Kraków City Centre", 
      address: "Wielopole 4, 31-072 Kraków", 
      starRating: 4, 
      country: "Poland", 
      description: "A 4-star hotel offering modern amenities and a great location in the heart of Kraków.", 
      bookingUrl: "https://www.ihg.com/holidayinn/hotels" 
    },
    { 
      name: "Ibis Kraków Stare Miasto", 
      address: "Pawia 15, 31-154 Kraków", 
      starRating: 3, 
      country: "Poland", 
      description: "A 3-star hotel providing affordable and comfortable stays in central Kraków.", 
      bookingUrl: "https://www.ibis.com/ibis-krakow-stare-miasto" 
    },
    { 
      name: "Hotel Gromada Warszawa Centrum", 
      address: "Pl. Powstańców Warszawy 2, 00-030 Warsaw", 
      starRating: 3, 
      country: "Poland", 
      description: "A 3-star hotel offering simple yet comfortable accommodations in Warsaw.", 
      bookingUrl: "https://www.hotelgromada.com/warsaw-centrum" 
    },
    { 
      name: "Campanile Wroclaw Centrum", 
      address: "Ślężna 26, 53-302 Wrocław", 
      starRating: 3, 
      country: "Poland", 
      description: "A 3-star hotel with affordable pricing and convenient access to Wrocław attractions.", 
      bookingUrl: "https://www.campanile.com/wroclaw" 
    },
    { 
      name: "Hotel Metropol", 
      address: "Marszałkowska 99a, 00-693 Warsaw", 
      starRating: 3, 
      country: "Poland", 
      description: "A budget-friendly 3-star hotel with basic amenities in central Warsaw.", 
      bookingUrl: "https://www.hotelmetropol.com/warsaw" 
    },
    { 
      name: "Ibis Warszawa Centrum", 
      address: "Al. Solidarności 165, 00-876 Warsaw", 
      starRating: 3, 
      country: "Poland", 
      description: "A 3-star hotel offering a great location and practical accommodations in Warsaw.", 
      bookingUrl: "https://www.ibis.com/ibis-warsaw-centrum" 
    },

    // Portugal
    { 
      name: "Four Seasons Hotel Ritz", 
      address: "R. Rodrigo da Fonseca 88, 1099-039 Lisbon", 
      starRating: 5, 
      country: "Portugal", 
      description: "A luxurious 5-star hotel offering world-class amenities and stunning views in Lisbon.", 
      bookingUrl: "https://www.fourseasons.com/ritz-lisbon" 
    },
    { 
      name: "Pestana Palace", 
      address: "Rua Jau 54, 1300-314 Lisbon", 
      starRating: 5, 
      country: "Portugal", 
      description: "An elegant 5-star hotel with a rich history and beautiful gardens in Lisbon.", 
      bookingUrl: "https://www.pestana.com/pestana-palace-lisbon" 
    },
    { 
      name: "Belmond Reid's Palace", 
      address: "Estrada Monumental 139, 9000-098 Funchal", 
      starRating: 5, 
      country: "Portugal", 
      description: "A prestigious 5-star hotel offering a luxurious experience in Funchal, Madeira.", 
      bookingUrl: "https://www.belmond.com/reids-palace-funchal" 
    },
    { 
      name: "The Yeatman", 
      address: "Rua do Choupelo, 4400-088 Vila Nova de Gaia", 
      starRating: 5, 
      country: "Portugal", 
      description: "A 5-star hotel renowned for its exceptional wine-themed luxury in Vila Nova de Gaia.", 
      bookingUrl: "https://www.the-yeatman-hotel.com" 
    },
    { 
      name: "Vila Vita Parc Resort & Spa", 
      address: "R. Anneliese Pohl, 8400-450 Porches", 
      starRating: 5, 
      country: "Portugal", 
      description: "A 5-star resort offering extensive amenities and a tranquil setting in Algarve.", 
      bookingUrl: "https://www.vilavitaparc.com" 
    },
    { 
      name: "Hotel Avenida Palace", 
      address: "R. 1º de Dezembro 123, 1200-359 Lisbon", 
      starRating: 4, 
      country: "Portugal", 
      description: "A charming 4-star hotel offering luxury and convenience in the heart of Lisbon.", 
      bookingUrl: "https://www.avenidapalace.com" 
    },
    { 
      name: "InterContinental Porto - Palacio das Cardosas", 
      address: "Praça da Liberdade 25, 4000-322 Porto", 
      starRating: 4, 
      country: "Portugal", 
      description: "A luxurious 4-star hotel with elegant accommodations in Porto.", 
      bookingUrl: "https://www.intercontinental.com/porto-palacio-das-cardosas" 
    },
    { 
      name: "Pousada de Lisboa", 
      address: "Praça do Comércio 31-34, 1100-148 Lisbon", 
      starRating: 4, 
      country: "Portugal", 
      description: "A historic 4-star hotel offering a blend of tradition and modern comfort in Lisbon.", 
      bookingUrl: "https://www.pousadas.pt/pousada-de-lisboa" 
    },
    { 
      name: "PortoBay Liberdade", 
      address: "Rua Rosa Araújo 8, 1250-195 Lisbon", 
      starRating: 4, 
      country: "Portugal", 
      description: "A 4-star boutique hotel providing a stylish experience in Lisbon.", 
      bookingUrl: "https://www.portobay.com/portobay-lisbon" 
    },
    { 
      name: "Altis Avenida Hotel", 
      address: "R. 1º de Dezembro 120, 1200-360 Lisbon", 
      starRating: 4, 
      country: "Portugal", 
      description: "A 4-star hotel offering a unique blend of art deco design and comfort in Lisbon.", 
      bookingUrl: "https://www.altishotels.com/altis-avenida" 
    },
    { 
      name: "Ibis Lisboa Centro Saldanha", 
      address: "Avenida Casal Ribeiro 23, 1000-090 Lisbon", 
      starRating: 3, 
      country: "Portugal", 
      description: "A budget-friendly 3-star hotel offering simple and convenient stays in Lisbon.", 
      bookingUrl: "https://www.ibis.com/ibis-lisboa-centro-saldanha" 
    },
    { 
      name: "Hotel Gat Rossio", 
      address: "Rua do Jardim do Regedor 27-35, 1150-193 Lisbon", 
      starRating: 3, 
      country: "Portugal", 
      description: "A 3-star hotel providing modern amenities and a central location in Lisbon.", 
      bookingUrl: "https://www.hotelgatrossio.com" 
    },
    { 
      name: "Hotel PortoBay Marquês", 
      address: "Rua Duque de Palmela 32, 1250-098 Lisbon", 
      starRating: 3, 
      country: "Portugal", 
      description: "A 3-star hotel offering comfortable stays and easy access to Lisbon attractions.", 
      bookingUrl: "https://www.portobay.com/porto-bay-marques" 
    },
    { 
      name: "Hotel Dom Carlos Park", 
      address: "Avenida Duque de Loule 121, 1050-089 Lisbon", 
      starRating: 3, 
      country: "Portugal", 
      description: "A budget-friendly 3-star hotel with basic amenities in Lisbon.", 
      bookingUrl: "https://www.hoteldomcarlospark.com" 
    },
    { 
      name: "Holiday Inn Express Lisbon - Av. Liberdade", 
      address: "Rua Alexandre Herculano 40, 1250-011 Lisbon", 
      starRating: 3, 
      country: "Portugal", 
      description: "A 3-star hotel providing comfortable stays at an affordable rate in Lisbon.", 
      bookingUrl: "https://www.ihg.com/holidayinnexpress/holiday-inn-express-lisbon" 
    },

    // Greece
    { 
      name: "Hotel Grande Bretagne", 
      address: "1 Vasileos Georgiou A' St, 105 64 Athens", 
      starRating: 5, 
      country: "Greece", 
      description: "A luxurious 5-star hotel offering world-class services and stunning views in Athens.", 
      bookingUrl: "https://www.grandebretagne.gr" 
    },
    { 
      name: "King George", 
      address: "3 Vasileos Georgiou A' St, 105 64 Athens", 
      starRating: 5, 
      country: "Greece", 
      description: "An elegant 5-star hotel with historic charm and sophisticated amenities in Athens.", 
      bookingUrl: "https://www.kinggeorge.gr" 
    },
    { 
      name: "Canaves Oia Suites", 
      address: "Oia, 84702 Santorini", 
      starRating: 5, 
      country: "Greece", 
      description: "A luxury 5-star resort with stunning views of the Caldera in Santorini.", 
      bookingUrl: "https://www.canaves.com" 
    },
    { 
      name: "Blue Palace, a Luxury Collection Resort", 
      address: "Plaka, Elounda, 720 53 Crete", 
      starRating: 5, 
      country: "Greece", 
      description: "A beautiful 5-star resort offering beachfront luxury in Crete.", 
      bookingUrl: "https://www.luxurycollection.com/blue-palace" 
    },
    { 
      name: "Santorini Secret Suites & Spa", 
      address: "Oia, 84702 Santorini", 
      starRating: 5, 
      country: "Greece", 
      description: "A secluded 5-star retreat offering luxury and relaxation in Santorini.", 
      bookingUrl: "https://www.santorinisecrets.com" 
    },
    { 
      name: "Electra Metropolis", 
      address: "15 Mitropoleos St, 105 57 Athens", 
      starRating: 4, 
      country: "Greece", 
      description: "A modern 4-star hotel offering comfortable stays with city views in Athens.", 
      bookingUrl: "https://www.electrametropolis.gr" 
    },
    { 
      name: "Royal Olympic Hotel", 
      address: "28-34 Athanasiou Diakou St, 117 43 Athens", 
      starRating: 4, 
      country: "Greece", 
      description: "A classic 4-star hotel near historic sites in Athens.", 
      bookingUrl: "https://www.royalolympichotel.gr" 
    },
    { 
      name: "Athenaeum InterContinental", 
      address: "89-93 Syngrou Ave, 117 45 Athens", 
      starRating: 4, 
      country: "Greece", 
      description: "A prestigious 4-star hotel offering luxury accommodations in Athens.", 
      bookingUrl: "https://www.athenaeum.intercontinental.com" 
    },
    { 
      name: "Radisson Blu Park Hotel", 
      address: "10 Alexandras Ave, 106 82 Athens", 
      starRating: 4, 
      country: "Greece", 
      description: "A 4-star hotel providing comfort and excellent facilities in Athens.", 
      bookingUrl: "https://www.radissonblu.com/athens-park" 
    },
    { 
      name: "Melia Athens", 
      address: "14 Chalkokondili St, 106 77 Athens", 
      starRating: 4, 
      country: "Greece", 
      description: "A stylish 4-star hotel offering a contemporary experience in Athens.", 
      bookingUrl: "https://www.melia.com/en/hotels/greece/athens/melia-athens" 
    },
    { 
      name: "Hotel Parthenon", 
      address: "6 Makri St, 117 42 Athens", 
      starRating: 3, 
      country: "Greece", 
      description: "A cozy 3-star hotel located near the Acropolis in Athens.", 
      bookingUrl: "https://www.hotelparthenon.gr" 
    },
    { 
      name: "Philippos Hotel", 
      address: "3 Mitseon St, 117 42 Athens", 
      starRating: 3, 
      country: "Greece", 
      description: "A budget-friendly 3-star hotel offering simple amenities near the Acropolis.", 
      bookingUrl: "https://www.hotelphilippos.gr" 
    },
    { 
      name: "Athens Center Square Hotel", 
      address: "15 Aristogitonos St, 105 52 Athens", 
      starRating: 3, 
      country: "Greece", 
      description: "A central 3-star hotel with easy access to Athens' main attractions.", 
      bookingUrl: "https://www.athenscentersquarehotel.com" 
    },
    { 
      name: "Acropolis Hill Hotel", 
      address: "7 Mousson St, 117 42 Athens", 
      starRating: 3, 
      country: "Greece", 
      description: "A 3-star hotel offering scenic views of the Acropolis in Athens.", 
      bookingUrl: "https://www.acropolishill.gr" 
    },
    { 
      name: "Hermes Hotel", 
      address: "19 Apollonos St, 105 57 Athens", 
      starRating: 3, 
      country: "Greece", 
      description: "A 3-star hotel providing affordable stays in a central location in Athens.", 
      bookingUrl: "https://www.hermeshotel.gr" 
    },

    // United States
    { 
      name: "The Plaza Hotel", 
      address: "768 5th Ave, New York, NY 10019", 
      starRating: 5, 
      country: "United States", 
      description: "A luxury 5-star hotel offering iconic accommodations in New York City.", 
      bookingUrl: "https://www.theplaza.com" 
    },
    { 
      name: "The Beverly Hills Hotel", 
      address: "9641 Sunset Blvd, Beverly Hills, CA 90210", 
      starRating: 5, 
      country: "United States", 
      description: "A glamorous 5-star hotel with Hollywood-style luxury in Beverly Hills.", 
      bookingUrl: "https://www.beverlyhillshotel.com" 
    },
    { 
      name: "Four Seasons Hotel Chicago", 
      address: "120 E Delaware Pl, Chicago, IL 60611", 
      starRating: 5, 
      country: "United States", 
      description: "A high-end 5-star hotel offering upscale accommodations in Chicago.", 
      bookingUrl: "https://www.fourseasons.com/chicago" 
    },
    { 
      name: "The Venetian Resort", 
      address: "3355 S Las Vegas Blvd, Las Vegas, NV 89109", 
      starRating: 4, 
      country: "United States", 
      description: "A luxurious 4-star resort providing a Venetian-inspired experience in Las Vegas.", 
      bookingUrl: "https://www.venetian.com" 
    },
    { 
      name: "Hilton Garden Inn", 
      address: "815 14th St NW, Washington, DC 20005", 
      starRating: 3, 
      country: "United States", 
      description: "A comfortable 3-star hotel with modern amenities in Washington, DC.", 
      bookingUrl: "https://www.hiltongardeninn.com" 
    },

    // Canada
    { 
      name: "Fairmont Banff Springs", 
      address: "405 Spray Ave, Banff, AB T1L 1J4", 
      starRating: 5, 
      country: "Canada", 
      description: "A historic 5-star resort offering stunning views and luxurious amenities in Banff.", 
      bookingUrl: "https://www.fairmont.com/banff-springs" 
    },
    { 
      name: "Hotel Le Germain", 
      address: "1227 Rue de la Montagne, Montreal, QC H3G 1Z2", 
      starRating: 4, 
      country: "Canada", 
      description: "A chic 4-star hotel featuring modern design and central location in Montreal.", 
      bookingUrl: "https://www.germainmontreal.com" 
    },
    { 
      name: "The Wickaninnish Inn", 
      address: "500 Osprey Lane, Tofino, BC V0R 2Z0", 
      starRating: 4, 
      country: "Canada", 
      description: "A luxurious 4-star resort offering beachfront tranquility in Tofino.", 
      bookingUrl: "https://www.wickinn.com" 
    },
    { 
      name: "Sheraton Centre Toronto Hotel", 
      address: "123 Queen St W, Toronto, ON M5H 2M9", 
      starRating: 3, 
      country: "Canada", 
      description: "A centrally located 3-star hotel providing a comfortable stay in Toronto.", 
      bookingUrl: "https://www.sheratontoronto.com" 
    },
    { 
      name: "Delta Hotels by Marriott", 
      address: "2094 Rue de Champlain, Montreal, QC H2L 2T6", 
      starRating: 3, 
      country: "Canada", 
      description: "A convenient 3-star hotel offering modern accommodations in Montreal.", 
      bookingUrl: "https://www.marriott.com/delta-hotels" 
    },
// Australia
    { 
      name: "Park Hyatt Sydney", 
      address: "7 Hickson Rd, The Rocks NSW 2000", 
      starRating: 5, 
      country: "Australia", 
      description: "A luxury 5-star hotel offering stunning views of Sydney Harbour.", 
      bookingUrl: "https://www.hyatt.com/en-US/hotel/australia/park-hyatt-sydney/sydph" 
    },
    { 
      name: "Crown Towers Melbourne", 
      address: "8 Whiteman St, Southbank VIC 3006", 
      starRating: 5, 
      country: "Australia", 
      description: "A premium 5-star resort offering world-class amenities in Melbourne.", 
      bookingUrl: "https://www.crowntowers.com.au/melbourne" 
    },
    { 
      name: "The Langham Melbourne", 
      address: "1 Southgate Ave, Southbank VIC 3006", 
      starRating: 4, 
      country: "Australia", 
      description: "A sophisticated 4-star hotel located in Southbank, Melbourne.", 
      bookingUrl: "https://www.langhamhotels.com/en/the-langham/melbourne" 
    },
    { 
      name: "Novotel Sydney Darling Square", 
      address: "17 Little Pier St, Sydney NSW 2000", 
      starRating: 3, 
      country: "Australia", 
      description: "A contemporary 3-star hotel with comfortable accommodations in Sydney.", 
      bookingUrl: "https://all.accor.com/hotel/A3B2/index.en.shtml" 
    },
    { 
      name: "Adina Apartment Hotel Brisbane", 
      address: "171 George St, Brisbane City QLD 4000", 
      starRating: 3, 
      country: "Australia", 
      description: "A stylish 3-star apartment hotel providing convenient stays in Brisbane.", 
      bookingUrl: "https://www.adinahotels.com" 
    },

    // Japan
    { 
      name: "The Ritz-Carlton Tokyo", 
      address: "Tokyo Midtown 9-7-1, Akasaka, Minato City, Tokyo 107-6245", 
      starRating: 5, 
      country: "Japan", 
      description: "A luxurious 5-star hotel offering impeccable service in Tokyo.", 
      bookingUrl: "https://www.ritzcarlton.com/en/hotels/japan/tokyo" 
    },
    { 
      name: "Aman Tokyo", 
      address: "Otemachi Tower, 1 Chome-5-6 Otemachi, Chiyoda City, Tokyo 100-0004", 
      starRating: 5, 
      country: "Japan", 
      description: "A serene 5-star retreat offering ultimate privacy in Tokyo.", 
      bookingUrl: "https://www.aman.com/resorts/aman-tokyo" 
    },
    { 
      name: "Conrad Osaka", 
      address: "3-2-4 Nakanoshima, Kita Ward, Osaka, 530-0005", 
      starRating: 4, 
      country: "Japan", 
      description: "A modern 4-star hotel featuring luxurious amenities in Osaka.", 
      bookingUrl: "https://www.hilton.com/en/hotels/osakcqq-conrad-osaka/" 
    },
    { 
      name: "Hotel Granvia Kyoto", 
      address: "JR Kyoto Station Karasuma Chuo-guchi, Kyoto, 600-8216", 
      starRating: 4, 
      country: "Japan", 
      description: "A convenient 4-star hotel located directly at Kyoto Station.", 
      bookingUrl: "https://www.granvia-kyoto.co.jp/en/" 
    },
    { 
      name: "Tokyu Stay Shinjuku", 
      address: "3 Chome-7-1 Shinjuku, Shinjuku City, Tokyo 160-0022", 
      starRating: 3, 
      country: "Japan", 
      description: "A practical 3-star hotel ideal for extended stays in Shinjuku, Tokyo.", 
      bookingUrl: "https://www.tokyustay.co.jp/en/shinjuku/" 
    },

    // Brazil
    { 
      name: "Copacabana Palace", 
      address: "Avenida Atlântica, 1702, Copacabana, Rio de Janeiro - RJ, 22021-001", 
      starRating: 5, 
      country: "Brazil", 
      description: "A luxurious 5-star hotel offering stunning views of Copacabana beach.", 
      bookingUrl: "https://www.copacabanapalace.com.br/" 
    },
    { 
      name: "Fasano São Paulo", 
      address: "Rua Vitório Fasano, 88, São Paulo - SP, 01414-020", 
      starRating: 5, 
      country: "Brazil", 
      description: "A stylish 5-star hotel with upscale dining options in São Paulo.", 
      bookingUrl: "https://fasano.com.br/saopaulo/" 
    },
    { 
      name: "Hotel Unique", 
      address: "Avenida Brigadeiro Luís Antônio, 4700, São Paulo - SP, 01402-002", 
      starRating: 4, 
      country: "Brazil", 
      description: "A contemporary 4-star hotel with unique architectural design.", 
      bookingUrl: "https://hotelunique.com.br/" 
    },
    { 
      name: "Grand Hyatt Rio de Janeiro", 
      address: "Av. Lucio Costa, 9600, Barra da Tijuca, Rio de Janeiro - RJ, 22795-007", 
      starRating: 4, 
      country: "Brazil", 
      description: "A premium 4-star hotel with luxury amenities in Rio de Janeiro.", 
      bookingUrl: "https://www.grandhyatt.com.br/" 
    },
    { 
      name: "Ibis Budget Curitiba", 
      address: "Rua Mariano Torres, 927, Centro, Curitiba - PR, 80060-120", 
      starRating: 3, 
      country: "Brazil", 
      description: "A budget 3-star hotel offering affordable accommodations in Curitiba.", 
      bookingUrl: "https://www.ibis.com/pt-br/hotel-7137-ibis-budget-curitiba-centro/" 
    },

    // South Africa
    { 
      name: "One&Only Cape Town", 
      address: "Dock Rd, Victoria & Alfred Waterfront, Cape Town, 8001", 
      starRating: 5, 
      country: "South Africa", 
      description: "A luxurious 5-star resort in the heart of Cape Town.", 
      bookingUrl: "https://www.oneandonlyresorts.com/one-and-only-cape-town/" 
    },
    { 
      name: "The Saxon Hotel", 
      address: "36 Saxon Rd, Sandhurst, Sandton, Johannesburg, 2196", 
      starRating: 5, 
      country: "South Africa", 
      description: "A prestigious 5-star boutique hotel offering opulence in Johannesburg.", 
      bookingUrl: "https://www.saxon.co.za/" 
    },
    { 
      name: "Cape Grace Hotel", 
      address: "West Quay Rd, Victoria & Alfred Waterfront, Cape Town, 8001", 
      starRating: 4, 
      country: "South Africa", 
      description: "A charming 4-star hotel offering luxurious waterfront views.", 
      bookingUrl: "https://www.capegrace.com/" 
    },
    { 
      name: "The Peech Hotel", 
      address: "61 North St, Melrose, Johannesburg, 2196", 
      starRating: 4, 
      country: "South Africa", 
      description: "A boutique 4-star hotel providing a peaceful retreat in Johannesburg.", 
      bookingUrl: "https://www.thepeechhotel.com/" 
    },
    { 
      name: "Road Lodge Cape Town", 
      address: "Adjoining BP service and Filling Station, N2 and R300, Cape Town, 7530", 
      starRating: 3, 
      country: "South Africa", 
      description: "A basic 3-star hotel ideal for budget travelers in Cape Town.", 
      bookingUrl: "https://www.lodges.co.za/road-lodge-cape-town/" 
    }
];

export default hotels;
