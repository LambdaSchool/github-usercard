// import axios from 'axios'

// const { default: axios } = require("axios")

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const URL = 'https://api.github.com/users/jthernandez999'

axios
  .get(URL)
  .then(res => {
    const newUser = cardMaker(res.data)
    console.log(res.data)
    cardsDiv.appendChild(newUser)
  })
  .catch(err => {
    console.log('Error', err);
  })
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
const cardsDiv = document.querySelector('.cards')
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


followersArray.forEach(newUser => {
  axios.get(`https://api.github.com/users/${newUser}`)
  .then(res => {
    const newCard = cardMaker(res.data)
  cardsDiv.appendChild(newCard)
  console.log(res)
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

function cardMaker ({ avatar_url, bio, name, location, html_url, followers, following, login }) {

  //instantiating the elements
  const card = document.createElement('div')
  const img = document.createElement('img')

  const cardInfo = document.createElement('div')
  const personsName = document.createElement('h3')
  const userName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const link = document.createElement('a')

  const userFollowers = document.createElement('p')
  const userFollowing = document.createElement('p')
  const userBio = document.createElement('p')
  

  //setting class names, attributes and text
img.setAttribute('src', avatar_url)
personsName.textContent = name
userName.textContent = login
userLocation.textContent = `Location: ${location} `
link.textContent = `Profile: ${html_url}`
userFollowers.textContent = `Followers: ${followers}`
userFollowing.textContent = `Following: ${following}`
userBio.textContent = `Bio: ${bio}` 


  link.setAttribute('href', html_url)
  card.classList.add('card')
  cardInfo.classList.add('card-info')
  personsName.classList.add('name')
  userName.classList.add('username')

//creating the hierarchy 
card.appendChild(img)
card.appendChild(cardInfo)
cardInfo.appendChild(personsName)
cardInfo.appendChild(userName)
cardInfo.appendChild(userLocation)
cardInfo.appendChild(profile)
profile.appendChild(link)
cardInfo.appendChild(userFollowers)
cardInfo.appendChild(userFollowing)
cardInfo.appendChild(userBio)

console.log(card)

return card

}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
