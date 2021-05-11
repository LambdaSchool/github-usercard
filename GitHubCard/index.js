import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const followersArray = [    
  'pvahanian',
  'chasingeuphoria',
  'fatima-rizvi',
  'dustinmyers',
  'justsml'
];

const cards = document.querySelector('.cards')

followersArray.forEach( element => {
  axios.get(`https://api.github.com/users/${element}`)
  .then(stuff =>{
    cards.appendChild(gitCardMaker(stuff.data))
  })
  .catch(err => {
    console.log(err)
  })
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

function gitCardMaker(data) {

  let {login, name, location, html_url, avatar_url, followers, following, bio} = data

  const card = document.createElement('div')
  card.classList.add('card')
  
  const image = document.createElement('img')
  image.src = avatar_url

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')

  const names = document.createElement('h3')
  names.classList.add('name')
  names.textContent = `Name: ${name}`
  // setting class names, attributes and text
  
  const logins = document.createElement('p')
  logins.classList.add('username')
  logins.textContent = `Username: ${login}`

  const locations = document.createElement('p')
  locations.textContent = `Location: ${location}`

  const profile = document.createElement('p')
  profile.textContent = `Profile:`
  const gitAddress = document.createElement('a');
  let linkText = document.createTextNode('Follow me!')
  gitAddress.appendChild(linkText)
  gitAddress.href = `${html_url}`
  profile.appendChild(gitAddress)

  const followerss = document.createElement('p')
  followerss.textContent = `Users Followers Count ${followers}`

  const followeringg = document.createElement('p')
  followeringg.textContent = `Users Following Count ${following}`

  const bios = document.createElement('p')
  bios.textContent = `Users Bio: ${bio}`

  card.appendChild(image)
  card.appendChild(cardInfo)
  cardInfo.appendChild(names)
  cardInfo.appendChild(logins)
  cardInfo.appendChild(locations)
  cardInfo.appendChild(profile)
  cardInfo.appendChild(followerss)
  cardInfo.appendChild(followeringg)
  cardInfo.appendChild(bios)

  return card;
}


  