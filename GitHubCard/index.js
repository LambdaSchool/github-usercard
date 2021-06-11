import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// my github card
const myCard = axios.get('https://api.github.com/users/Dalian-Alexander')
.then(res => {
console.log(res.data)
entryPoint.appendChild(cardMaker(res.data));
})
.catch(err => console.log(err))

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
// request for a single card
const getFollowers = (login) => {
  axios.get(`https://api.github.com/users/${login}`)
  .then(({data}) => {
  entryPoint.appendChild(cardMaker(data))})
  .catch(err => console.log(err))
}
getFollowers('BenSchinn')

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell'];

//iterating over followersArray with forEach() method and creating new cards/appending each to div.cards 
const followersArr = (arr) => {
  followersArray.forEach(str => {axios.get(`https://api.github.com/users/${str}`)
  .then(({data}) => {
    entryPoint.appendChild(cardMaker(data))})
  .catch(err => console.log(err))
})}
followersArr(followersArray)
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
const entryPoint = document.querySelector('div.cards')

function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}) {
  const card = document.createElement('div')
  const profileImg = document.createElement('img')
  const divCard = document.createElement('div')
  const nameOfUser = document.createElement('h3')
  const username = document.createElement('p')
  const located = document.createElement('p')
  const profileText = document.createElement('p')
  const githubLink = document.createElement('a')
  const follow = document.createElement('p')
  const followed = document.createElement('p')
  const aboutMe = document.createElement('p')

  card.appendChild(profileImg)
  card.appendChild(divCard)
  divCard.appendChild(nameOfUser)
  divCard.appendChild(username)
  divCard.appendChild(located)
  divCard.appendChild(profileText)
  profileText.appendChild(githubLink)
  divCard.appendChild(follow)
  divCard.appendChild(followed)
  divCard.appendChild(aboutMe)

  card.classList.add('card')
  profileImg.src = avatar_url
  divCard.classList.add('card-info')
  nameOfUser.classList.add('name')
  located.getAttribute('href', html_url)
  nameOfUser.textContent = name
  username.textContent = login
  located.textContent = 'Location: ' + location
  profileText.textContent = 'Profile: ' + html_url
  follow.textContent = 'Followers: ' + followers
  followed.textContent = 'Following: ' + following
  aboutMe.textContent = 'Bio: ' + bio

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
