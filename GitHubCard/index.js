import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/



// axios.get('https://api.github.com/users/broveku')
  




/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

function cardMaker(obj){

const card = document.createElement('div')
const imgURL = document.createElement('img')
const cardInfo = document.createElement('div')
const userName = document.createElement('h3')
const usersUsername = document.createElement('p')
const userLocation = document.createElement('p')
const userProfile = document.createElement('p')
const userProfileLink = document.createElement('a')
const userFollowers = document.createElement('p')
const userFollowing = document.createElement('p')
const userBio = document.createElement('p')

card.classList.add('card')
cardInfo.classList.add('card-info')
userName.classList.add('name')
usersUsername.classList.add('username')


imgURL.src = obj['avatar_url']
userName.textContent = obj.name
usersUsername.textContent = obj.login
userLocation.textContent = `Location ${obj.location}`
userProfile.textContent = `Profile: `
userProfileLink.href = obj.html_url
userProfileLink.innerHTML = 'Github'
userFollowers.textContent = `Followers: ${obj.followers}`
userFollowing.textContent = `Following: ${obj.following}`
userBio.textContent = `Bio: ${obj.bio}`

card.appendChild(imgURL)
card.appendChild(cardInfo)
cardInfo.appendChild(userName)
cardInfo.appendChild(usersUsername)
cardInfo.appendChild(userLocation)
cardInfo.appendChild(userProfile)
userProfile.appendChild(userProfileLink)
cardInfo.appendChild(userFollowers)
cardInfo.appendChild(userFollowing)
cardInfo.appendChild(userBio)

console.log(card)

return card

}

const target = document.querySelector('.cards')

axios.get('https://api.github.com/users/broveku')
  .then(res => {
    const card = cardMaker(res.data)
    return card   
  })
  .then(card =>{
    target.appendChild(card)
  })  
  .catch(err => console.log(err))
  .finally(() => console.log('done'))


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


const followersArray = []

axios.get('https://api.github.com/users/tetondan/followers')
  .then(res => {
    res.data.forEach(obj => {
      followersArray.push(obj.login)
    })
    return followersArray
  })
  
  .then(names =>{
    followersArray.forEach(name => {

      axios.get(`https://api.github.com/users/${name}`)
        .then(res =>{
          console.log(res.data)
          target.appendChild(cardMaker(res.data))
        })
        .catch(err => {
          console.log(err)
        })
    })
  })
  
    

  // console.log(followersArray)

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







