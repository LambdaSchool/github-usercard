
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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
import axios from 'axios'
import { forEach } from 'lodash'







  axios.get(`https://api.github.com/users/tetondan`)
  .then(res =>{
      const profileCard = gitCardMaker(res.data)
      return profileCard
  })
  .then(profileCard =>{
  infoCards.appendChild(profileCard)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('done')
  })





/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["dustinmyers", "justsml", "luishrd", "bigknell"];

forEach(elem =>{
  const profileCard = followersArray + profileCard;
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

const infoCards = document.querySelector('.cards')

function gitCardMaker(obj){
  const profileCard = document.createElement('div')
  const image = document.createElement('img')
  const cardInfo = document.createElement('div')
  const nameOfUser = document.createElement('h3')
  const loginName = document.createElement('p')
  const userLocation = document.createElement('p')
  const profile = document.createElement('p')
  const addressLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

image.src = obj['avatar_url']
nameOfUser.textContent = obj["name"]
loginName.textContent = obj['login']
userLocation.textContent = `Location: ${obj["location"]}`
addressLink.textContent =  'Profile: ' + addressLink;
addressLink.href = obj['html_url']
addressLink.innerHTML = "Github"
profile.appendChild(addressLink)
followers.textContent = "Followers: " + obj["followers"]
following.textContent = "Following: " + obj["following"]
bio.textContent = "Bio: " + obj["bio"]

console.log(profileCard)

profileCard.classList.add('card')
cardInfo.classList.add('card-info')
image.classList.add('img')
nameOfUser.classList.add('name')
loginName.classList.add('username')


profileCard.appendChild(image)
profileCard.appendChild(cardInfo)
cardInfo.appendChild(nameOfUser)
cardInfo.appendChild(loginName)
cardInfo.appendChild(userLocation)
cardInfo.appendChild(profile)
profile.appendChild(addressLink)
cardInfo.appendChild(followers)
cardInfo.appendChild(following)
cardInfo.appendChild(bio)



return profileCard
}


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
