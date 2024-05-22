const data = {
  currentDate: "2023-01-01",
  events: [
    {
      _id: "639c723b992482e5f2834be9",
      name: "Collectivities Party",
      image: "https://i.postimg.cc/Fs03hQDt/Collectivities-Party.jpg",
      date: "2022-12-12",
      description:
        "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      assistance: 42756,
      price: 5,
      __v: 0,
    },
    {
      _id: "639c723b992482e5f2834beb",
      name: "Korean style",
      image: "https://i.postimg.cc/ZmD3Xf57/Korean-style.jpg",
      date: "2023-08-12",
      description:
        "Enjoy the best Korean dishes, with international chefs and awesome events.",
      category: "Food Fair",
      place: "Room A",
      capacity: 45000,
      price: 10,
      __v: 0,
      estimate: 42756,
    },
    {
      _id: "639c723c992482e5f2834bed",
      name: "Jurassic Park",
      image: "https://i.postimg.cc/GmHRkbNV/Jurassic-Park.jpg",
      date: "2022-11-02",
      description:
        "Let's go meet the biggest dinosaurs in the paleontology museum.",
      category: "Museum",
      place: "Field",
      capacity: 82000,
      price: 15,
      __v: 0,
      assistance: 65892,
    },
    {
      _id: "639c723c992482e5f2834bef",
      name: "Parisian Museum",
      image: "https://i.postimg.cc/c4C2zXm8/Parisian-Museum.jpg",
      date: "2023-11-02",
      description:
        "A unique tour in the city of lights, get to know one of the most iconic places.",
      category: "Museum",
      place: "Paris",
      capacity: 8200,
      estimate: 8200,
      price: 3500,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf1",
      name: "Comicon",
      image: "https://i.postimg.cc/KYD0jMf2/comicon.jpg",
      date: "2022-02-12",
      description:
        "For comic lovers, all your favourite characters gathered in one place.",
      category: "Costume Party",
      place: "Room C",
      capacity: 120000,
      assistance: 110000,
      price: 54,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf3",
      name: "Halloween Night",
      image: "https://i.postimg.cc/RZ9fH4Pr/halloween.jpg",
      date: "2023-02-12",
      description: "Come with your scariest costume and win incredible prizes.",
      category: "Costume Party",
      place: "Room C",
      capacity: 12000,
      estimate: 9000,
      price: 12,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf5",
      name: "Metallica in concert",
      image: "https://i.postimg.cc/PrMJ0ZMc/Metallica-in-concert.jpg",
      date: "2023-01-22",
      description: "The only concert of the most emblematic band in the world.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      estimate: 138000,
      price: 150,
      __v: 0,
    },
    {
      _id: "639c723c992482e5f2834bf7",
      name: "Electronic Fest",
      image: "https://i.postimg.cc/KvsSK8cj/Electronic-Fest.jpg",
      date: "2022-01-22",
      description:
        "The best national and international DJs gathered in one place.",
      category: "Music Concert",
      place: "Room A",
      capacity: 138000,
      assistance: 110300,
      price: 250,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bf9",
      name: "10K for life",
      image: "https://i.postimg.cc/fyLqZY9K/10-K-for-life.jpg",
      date: "2022-03-01",
      description: "Come and exercise, improve your health and lifestyle.",
      category: "Race",
      place: "Soccer field",
      capacity: 30000,
      assistance: 25698,
      price: 3,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bfb",
      name: "15K NY",
      image: "https://i.postimg.cc/zv67r65z/15kny.jpg",
      date: "2023-03-01",
      description:
        "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
      category: "Race",
      place: "New York",
      capacity: 3000000,
      price: 3,
      __v: 0,
      estimate: 2569800,
    },
    {
      _id: "639c723d992482e5f2834bfd",
      name: "School's book fair",
      image: "https://i.postimg.cc/Sst763n6/book1.jpg",
      date: "2023-10-15",
      description: "Bring your unused school book and take the one you need.",
      category: "Book Exchange",
      place: "Room D1",
      capacity: 150000,
      estimate: 123286,
      price: 1,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834bff",
      name: "Just for your kitchen",
      image: "https://i.postimg.cc/05FhxHVK/book4.jpg",
      date: "2022-11-09",
      description:
        "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
      category: "Book Exchange",
      place: "Room D6",
      capacity: 130000,
      assistance: 90000,
      price: 100,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c01",
      name: "Batman",
      image: "https://i.postimg.cc/vH52y81C/cinema4.jpg",
      date: "2022-3-11",
      description: "Come see Batman fight crime in Gotham City.",
      category: "Cinema",
      place: "Room D1",
      capacity: 11000,
      assistance: 9300,
      price: 225,
      __v: 0,
    },
    {
      _id: "639c723d992482e5f2834c03",
      name: "Avengers",
      image: "https://i.postimg.cc/T3C92KTN/scale.jpg",
      date: "2023-10-15",
      description:
        "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
      category: "Cinema",
      place: "Room D1",
      capacity: 9000,
      estimate: 9000,
      price: 250,
      __v: 0,
    },
  ],
};

let cardsHome = document.getElementById("pastCard");
let categories = [...new Set(data.events.map((event) => event.category))];
let checkboxContainer = document.getElementById("checkbox-container");
let searchInput = document.getElementById("search");
let searchButton = document.getElementById("search-button");
let renderEvents = (events) => {
  row.innerHTML = "";
  if (events.length === 0) {
    let col = document.createElement("div");
    col.className = "col-12 text-center";
    col.innerHTML = `
      <div class="alert alert-danger" role="alert w-100" center style="margin-top: 20px;">
        404 Not Found - Evento no encontrado, por favor intenta con otros criterios.
        <img src="https://t3.ftcdn.net/jpg/01/99/75/26/240_F_199752659_5oOiVrQHHvfRg6krX4pnmGpldp9Twvfs.jpg" class="img-fluid" alt="404 Not Found">
      </div>
    `;
    row.appendChild(col);
  } else {
    for (let i = 0; i < events.length; i++) {
      let col = document.createElement("div");
      col.className = "col";

      let card = document.createElement("div");
      card.className = "card h-100";
      card.innerHTML = `
        <img src="${events[i].image}" class="card-img-top img-fluid object-fit-cover" alt="${events[i].name}" style="max-height: 200px;">
        <div class="card-body">
            <h5 class="card-title text-center">${events[i].name}</h5>
            <p class="card-text">
                ${events[i].description}
            </p>
            <div class="d-flex justify-content-between align-items-center">
                <p class="m-0">Price: <strong>US ${events[i].price} USD</strong></p>
                <a href="./details.html" class="btn btn-primary">Details</a>
            </div>
        </div>
      `;
      col.appendChild(card);
      row.appendChild(col);
    }
  }
  cardsHome.appendChild(row);
};
let comparisonDate = new Date(2023, 0, 1);

let row = document.createElement("div");
row.className = "row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 justify-content-center";

const filterEvents = () => {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategories = Array.from(
    document.querySelectorAll(".category-checkbox:checked")
  ).map((cb) => cb.value);

  const comparisonDate = new Date(2023, 0, 1);

  const filteredEvents = data.events.filter((event) => {
    const eventDate = new Date(event.date);
    const isUpcoming = eventDate < comparisonDate;
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(event.category);
    const matchesSearch = event.name.toLowerCase().includes(searchQuery);
    return isUpcoming && matchesCategory && matchesSearch;
  });

  renderEvents(filteredEvents);
};

categories.forEach((category, index) => {
  let divCol = document.createElement("div");
  divCol.className = "col-md-auto";

  let divCheck = document.createElement("div");
  divCheck.className = "form-check form-check-inline";

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className = "form-check-input category-checkbox";
  checkbox.id = `inlineCheckbox${index}`;
  checkbox.value = category;

  let label = document.createElement("label");
  label.className = "form-check-label";
  label.htmlFor = `inlineCheckbox${index}`;
  label.textContent = category;

  divCheck.appendChild(checkbox);
  divCheck.appendChild(label);
  divCol.appendChild(divCheck);
  checkboxContainer.appendChild(divCol);

  checkbox.addEventListener("change", filterEvents);
});

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  filterEvents();
});

document.querySelectorAll(".category-checkbox").forEach((checkbox) => {
  checkbox.addEventListener("change", filterEvents);
});

let  pastEvents = data.events.filter((event) => {
  let eventDate = new Date(event.date);
  let comparisonDate = new Date(2023, 0, 1); 
  return eventDate < comparisonDate;
});

renderEvents(pastEvents);

cardsHome.appendChild(row);