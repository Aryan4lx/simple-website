
const aiPictures = [
    { id: 1, title: "pic1", price: "10$", imageUrl: "pic11_thumb.jpg",thumbnailUrl: "pic11.jpg" },
    { id: 2, title: "pic2", price: "10$", imageUrl: "pic12_thumb.jpg",thumbnailUrl: "pic12.jpg" },
    { id: 3, title: "pic3", price: "10$", imageUrl: "pic13_thumb.jpg",thumbnailUrl: "pic13.jpg" },
    { id: 4, title: "pic4", price: "10$", imageUrl: "pic4_thumb.jpg",thumbnailUrl: "pic4.jpg" },
    { id: 5, title: "pic5", price: "10$", imageUrl: "pic5_thumb.jpg",thumbnailUrl: "pic5.jpg" },
    { id: 6, title: "pic6", price: "10$", imageUrl: "pic6_thumb.jpg",thumbnailUrl: "pic6.jpg" },
    { id: 7, title: "pic7", price: "10$", imageUrl: "pic7_thumb.jpg",thumbnailUrl: "pic7.jpg" },
    { id: 8, title: "pic8", price: "10$", imageUrl: "pic8_thumb.jpg",thumbnailUrl: "pic8.jpg" },
    { id: 9, title: "pic9", price: "10$", imageUrl: "pic9_thumb.jpg",thumbnailUrl: "pic9.jpg" },
    { id: 10, title: "pic10", price: "10$", imageUrl: "pic10_thumb.jpg",thumbnailUrl: "pic10.jpg" }
  ];
  
  
  const books = [
    { id: 1, title: "The Chronicles of Narnia book", price: "10$", imageUrl: "book1_thumb.jpg" ,thumbnailUrl: "book1.jpg" },
    { id: 2, title: "Company of One book", price: "10$", imageUrl: "book2_thumb.jpg",thumbnailUrl: "book2.jpg" },
    { id: 3, title: "The Two Towers book", price: "10$", imageUrl: "book3_thumb.jpg",thumbnailUrl: "book3.jpg" },
    { id: 4, title: "Stupore e tremori book", price: "10$", imageUrl: "book4_thumb.jpg",thumbnailUrl: "book4.jpg" },
    { id: 5, title: "Harry Potter and the Prisoner of Azkaban book", price: "10$", imageUrl: "book5_thumb.jpg",thumbnailUrl: "book5.jpg" },
    { id: 6, title: "Zero to One: Notes on Start Ups book", price: "10$", imageUrl: "book6_thumb.jpg",thumbnailUrl: "book6.jpg" },
    { id: 7, title: "Milk and Honey book", price: "10$", imageUrl: "book7_thumb.jpg",thumbnailUrl: "book7.jpg" },
    { id: 8, title: "A New Testament Biblical Theology book", price: "10$", imageUrl: "book8_thumb.jpg",thumbnailUrl: "book8.jpg" },
    { id: 9, title: "I Came Upon a Lighthouse book", price: "10$", imageUrl: "book9_thumb.jpg",thumbnailUrl: "book9.jpg" },
    { id: 10, title: "Les Nuits(The Scholemaster) book", price: "10$", imageUrl: "book10_thumb.jpg" ,thumbnailUrl: "book10.jpg"}
  ];
  
  
  const movies = [
    { id: 1, title: "INCEPTION movie", price: "10$", imageUrl: "mov1_thumb.jpg",thumbnailUrl: "mov1.jpg" },
    { id: 2, title: "Joker movie", price: "10$", imageUrl: "mov2_thumb.jpg",thumbnailUrl: "mov2.jpg" },
    { id: 3, title: "Godzilla  movie", price: "10$", imageUrl: "mov3_thumb.jpg",thumbnailUrl: "mov3.jpg" },
    { id: 4, title: "Baby Driver movie", price: "10$", imageUrl: "mov4_thumb.jpg",thumbnailUrl: "mov4.jpg" },
    { id: 5, title: "Kung Fu Panda 3 movie", price: "10$", imageUrl: "mov5_thumb.jpg",thumbnailUrl: "mov5.jpg" },
    { id: 6, title: "Angry Birds movie", price: "10$", imageUrl: "mov6_thumb.jpg",thumbnailUrl: "mov6.jpg" },
    { id: 7, title: "Mad Max movie", price: "10$", imageUrl: "mov7_thumb.jpg",thumbnailUrl: "mov7.jpg" },
    { id: 8, title: "Warcraft movie", price: "10$", imageUrl: "mov8_thumb.jpg",thumbnailUrl: "mov8.jpg" },
    { id: 9, title: "Truman Show movie", price: "10$", imageUrl: "mov9_thumb.jpg",thumbnailUrl: "mov9.jpg" },
    { id: 10, title: "Inception movie", price: "10$", imageUrl: "mov10_thumb.jpg" ,thumbnailUrl: "mov10.jpg"}
  ];
  
  
  function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('card');
  
    const image = document.createElement('img');
    image.src = item.imageUrl; 
    card.appendChild(image);
  
    const content = document.createElement('div');
    content.classList.add('card-content');
  
    const title = document.createElement('h3');
    title.textContent = item.title;
    content.appendChild(title);
  
    const price = document.createElement('p');
    price.classList.add('price');
    price.textContent = item.price;
    content.appendChild(price);
  
    const button = document.createElement('button');
    button.classList.add('btn');
    button.textContent = 'download';
    button.addEventListener('click', () => downloadPicture(item.thumbnailUrl, item.title)); 
    content.appendChild(button);
  
    card.appendChild(content);
  
    return card;
  }
  function downloadPicture(imageUrl, title) {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title}_high_quality.jpg`; 
    link.click();
  }
  
  
  
  function displayAiPictures() {
    const pictureContainer = document.getElementById('picture-cards');
  
    aiPictures.forEach(item => {
      const card = createCard(item);
      pictureContainer.appendChild(card);
    });
  }
  
  
  function displayBooks() {
    const bookContainer = document.getElementById('book-cards');
  
    books.forEach(item => {
      const card = createCard(item);
      bookContainer.appendChild(card);
    });
  }
  
  
  function displayMovies() {
    const movieContainer = document.getElementById('movie-cards');
  
    movies.forEach(item => {
      const card = createCard(item);
      movieContainer.appendChild(card);
    });
  }
  
  function scrollToSections() {
    const picturesSection = document.getElementById('ai-pictures-section');
    picturesSection.scrollIntoView({ behavior: 'smooth' });
  }
  
  
  
  
  
  function handleSearch() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
  
    const pictureContainer = document.getElementById('picture-cards');
    const bookContainer = document.getElementById('book-cards');
    const movieContainer = document.getElementById('movie-cards');
    
    pictureContainer.innerHTML = '';
    bookContainer.innerHTML = '';
    movieContainer.innerHTML = '';
  
    aiPictures.forEach(item => {
      if (item.title.toLowerCase().includes(searchInput)) {
        const card = createCard(item);
        pictureContainer.appendChild(card);
      }
    });
  
    books.forEach(item => {
      if (item.title.toLowerCase().includes(searchInput)) {
        const card = createCard(item);
        bookContainer.appendChild(card);
      }
    });
  
    movies.forEach(item => {
      if (item.title.toLowerCase().includes(searchInput)) {
        const card = createCard(item);
        movieContainer.appendChild(card);
      }
    });
  }
  
  const searchInput = document.getElementById('search-input');
  searchInput.addEventListener('input', handleSearch);
  
  handleSearch();
  
  displayAiPictures();
  displayBooks();
  displayMovies();
  