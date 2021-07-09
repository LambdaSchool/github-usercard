/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios';

const cards = document.querySelector('.cards');

// Requesting data and feeding it into the makeCard function
function gitHubCard(url) {
  axios.get(`https://api.github.com/users/${url}`)
  .then(res => {
    const gitCard = makeCard(res.data);
    cards.appendChild(gitCard);

  })
  .catch(err => {
    console.log(err);
  })
  .finally(() => {
    console.log('done');
  })
}

gitHubCard('KRQuinn');


/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

// Creating card for every element in array
followersArray.forEach(element => {
  gitHubCard(element);
})

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

// Instantiate element Callback
function Instantiate(type){
  return document.createElement(type);
}

function makeCard(data) {
  // Instantiating elements
  const card = Instantiate('div');
  const cardImg = Instantiate('img');
  const cardInfo = Instantiate('div');
  const cardName = Instantiate('h3');
  const cardUsername = Instantiate('p');
  const cardLoc = Instantiate('p');
  const cardProf = Instantiate('p');
  const cardFollowers = Instantiate('p');
  const cardFollowing = Instantiate('p');
  const cardBio = Instantiate('p');

  // Creating Hierarchy
  cardInfo.appendChild(cardName);
  cardInfo.appendChild(cardUsername);
  cardInfo.appendChild(cardLoc);
  cardInfo.appendChild(cardProf);
  cardInfo.appendChild(cardFollowers);
  cardInfo.appendChild(cardFollowing);
  cardInfo.appendChild(cardBio);
  card.appendChild(cardImg);
  card.appendChild(cardInfo);

  // Setting class names
  card.classList.add('card');
  cardInfo.classList.add('card-info');
  cardName.classList.add('name');
  cardUsername.classList.add('username');

  //Setting attributes
  cardImg.setAttribute('src', data.avatar_url);
  cardName.textContent = data.name;
  cardUsername.textContent = data.login;
  cardLoc.textContent = `Location: ${data.location}`;
  cardProf.innerHTML = `Profile: <a href="${data.html_url}">${data.html_url}</a>`;
  cardFollowers.textContent = `Followers: ${data.followers}`;
  cardFollowing.textContent = `Following: ${data.following}`;
  cardBio.textContent = `Bio: ${data.bio}`;
  
  return card;
}

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
