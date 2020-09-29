/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios
  .get('https://api.github.com/users/alexandrakay')
  .then((res) => {
    console.log(res)
    res.data.forEach((item) => {
      const newMyGitHub = myGitHub(item)
      entry.appendChild(newMyGitHub);

    })
  })

  .catch((err) => { console.log(err) })


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

const followersArray = [    
  'pvahanian',
  'kristapants',
  'christopher-barrett',
  'dustinmyers',
  'alexandrakay'
];

const cards = document.querySelector('.cards')

followersArray.forEach( element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(stuff =>{
    cards.appendChild(gitHubCard(stuff.data))
  })
  .catch(err => {
    console.log(err)
  })
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

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
function gitHubCard(item) {


  const myCard = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const titleName = document.createElement('h3');
  const userName = document.createElement('p');
  const userLocation = document.createElement('p');
  const profile = document.createElement('p');
  const userAddress = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');


  // classes 

  myCard.classList.add('card');
  cardInfo.classList.add('card-info');
  titleName.classList.add('name');
  userName.classList.add('username')

  myCard.appendChild(image);
  myCard.appendChild(cardInfo);
  cardInfo.appendChild(titleName);
  cardInfo.appendChild(userName);
  cardInfo.appendChild(userLocation);
  cardInfo.appendChild(profile);
  cardInfo.appendChild(userAddress);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);
  profile.appendChild(userAddress);

  // text content 

  image.src = item.avatar_url;

  titleName.textContent = item.name;
  userName.textContent = item.login;
  userLocation.textContent = item.location;
  followers.textContent = `Followers: ${item.followers}`;
  following.textContent = `Following: ${item.following}`;
  bio.textContent = `Bio: ${item.bio}`;
  userAddress.textContent = `Address: ${item.html_url}`;

  userAddress.href = item.html_url;

  return myCard

}



const entry = document.querySelector('.cards');

