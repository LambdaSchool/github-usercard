/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'

const cards = document.querySelector('.cards')

const userAPI = 'https://api.github.com/users/KevinLam2980'

axios.get(userAPI)
.then((res) => {
cards.appendChild(cardCreator(res.data))

const followers = res.data.followers_url
axios.get(followers)
.then((res) => {
  // console.log(res)
  res.data.forEach(follower => {
    axios.get(`https://api.github.com/users/${follower.login}`)
    .then((res) => {
        cards.appendChild(cardCreator(res.data))
    })
})
// console.log(followers)
// console.log(res.data)
})
})
.catch(function(err){
  console.log(err)
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
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

followersArray.forEach(profile => {
  axios.get(`https://api.github.com/users/${profile}`)
  .then(function(res){
    cards.appendChild(cardCreator(res.data))
  })
  .catch(function(err){
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

function cardCreator(obj){
  const card = document.createElement('div')
  const img = document.createElement('img')
  const cardInfo = document.createElement("div")
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const gitURL = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')
  
  img.src = obj.avatar_url
  h3.textContent = obj.name
  username.textContent = obj.login
  location.textContent = obj.location
  profile.textContent = `Profile:`
  gitURL.href =  obj.html_url
  gitURL.textContent = gitURL.href
  followers.textContent = obj.followers_url
  following.textContent = obj.following_url
  bio.textContent = obj.bio
  
  card.appendChild(img)
  card.appendChild(cardInfo)
  cardInfo.appendChild(h3)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(gitURL)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)
  
  card.className = 'card'
  cardInfo.className = 'card-info'
  h3.className = 'name'
  username.className ='username'
  
  // console.log(gitURL)
  // console.log(card)
  
  return card
}


// cardCreator()
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
