// local reviews data
const reviews = [
 {
  id: 1,
  name: "Predrag Acimovic",
  job: "Front end developer",
  img: src="./6_Mars_Astronauts-walking.jpg",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos possimus rem. Voluptate, molestias aliquam delectus mollitia in dicta inventore!",
 },
 {
  id: 2,
  name: "Petar Petrovic",
  job: "Front end developer",
  img: src="./michael-weidner-Jsg3bOedh9g-unsplash.jpg",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos possimus rem. Voluptate, molestias aliquam delectus mollitia in dicta inventore!",
 },
 {
  id: 3,
  name: "Jovo Jovic",
  job: "Front end developer",
  img: src="./ant-rozetsky-nHn8VAejU7Q-unsplash.jpg",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos possimus rem. Voluptate, molestias aliquam delectus mollitia in dicta inventore!",
 },
 {
  id: 4,
  name: "Mitar Miric",
  job: "Front end developer",
  img: src="./scratched-film-tape-stock-illustration-1003182.jpg",
  text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et dignissimos possimus rem. Voluptate, molestias aliquam delectus mollitia in dicta inventore!",
 }];

 // select item

 const img = document.querySelector('.person-img');
 const author = document.querySelector('.person-name');
 const job = document.querySelector('.person-job');
 const info = document.querySelector('.person-info');

 const prevBtn = document.querySelector('.prev-btn');
 const nextBtn = document.querySelector('.next-btn');
 const randomBtn = document.querySelector('.random-btn');

 // set starting items

 let currentItem = 3;

 //load initial item
 window.addEventListener('DOMContentLoaded', function() {

  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
 }
 );