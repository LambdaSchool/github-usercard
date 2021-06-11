import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const container = document.querySelector('.cards')

axios.get('https://api.github.com/users/Jbain912')
.then((res)=> {
  const myData = res.data
    container.appendChild(cardMaker(myData))
}
)
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
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell']

  followersArray.forEach(data => {
    axios.get(`https://api.github.com/users/${data}`)
    .then((res) => {
      const newData = res.data
      container.appendChild(cardMaker(newData))

    })

  })

  const entryPoint = document.querySelector('div.cards')
    function cardMaker({avatar_url, name, login, location, html_url, followers, following, bio}) {
      const card = document.createElement('div')
      const avatar = document.createElement('img')
      const cardInfo = document.createElement('div')
      const fullName = document.createElement('h3')
      const username = document.createElement('p')
      const locations = document.createElement('p')
      const profile = document.createElement('p')
      const address = document.createElement('a')
      const followerCount = document.createElement('p')
      const followingCount = document.createElement('p')
      const fullBio = document.createElement('p')

      card.classList.add('card')
      avatar.src = avatar_url
      cardInfo.classList.add('card-info')
      fullName.classList.add('name')
      fullName.textContent = `${name}`
      username.classList.add('username')
      username.textContent = `${login}`
      locations.textContent = `Location: ${location}`
      profile.textContent = `Profile:`
      address.src = html_url
      followerCount.textContent = `Followers: ${followers}`
      followingCount.textContent = `Following: ${following}`
      fullBio.textContent = `${bio}`

      card.appendChild(avatar)
      card.appendChild(cardInfo)
      cardInfo.appendChild(fullName)
      cardInfo.appendChild(username)
      cardInfo.appendChild(locations)
      cardInfo.appendChild(profile)
      profile.appendChild(address)
      cardInfo.appendChild(followerCount)
      cardInfo.appendChild(followingCount)
      cardInfo.appendChild(fullBio)



      return card
    }