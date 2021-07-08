import axios from 'axios'
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

//for my own data
axios.get('https://api.github.com/users/VAIBHAVIBALAR')
  .then(response => {
      console.log(response.data)
      const myOwnCard = gitCard(response.data)
      entryCard.appendChild(myOwnCard)
})
.catch(err => console.log(err.message))
.finally(() => console.log('done'))


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
  'bigknell',
 ]
 //to iterate through followersArray
 followersArray.forEach(item => 
  {
  everyCard(item);//calling the function 
 });
 
// followersArray.forEach(item =>{
//   const userG = gitCard(item)
//   entryCard.appendChild(userG)
// })
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
const entryCard = document.querySelector('.cards')

//function to create card
function gitCard({avatar_url, name, login,location,html_url,followers, following,bio})
{
    const card = document.createElement('div')
    const image = document.createElement('img')
    const cardInfo = document.createElement('div')
    const  nametitle = document.createElement('h3')
    const uname = document.createElement('p')
    const ul = document.createElement('p')
    const pro = document.createElement('p')
    const link =document.createElement('a')
    const pfo = document.createElement('p')
    const pfol = document.createElement('p')
    const pBio = document.createElement('p')

    card.appendChild(image);
    card.appendChild(cardInfo);
    cardInfo.appendChild(nametitle);
    cardInfo.appendChild(uname);
    cardInfo.appendChild(ul);
    cardInfo.appendChild(pro);
    cardInfo.appendChild(pfo);
    cardInfo.appendChild(pfol);
    cardInfo.appendChild(pBio);

    card.classList.add('card');
    cardInfo.classList.add('card-info');
    nametitle.classList.add('name');
    uname.classList.add('username');
    image.src = avatar_url;
    nametitle.textContent = `${name}`;
    uname.textContent = `${login}`;
    ul.textContent = `Location: ${location}`;
    pro.textContent = `Profile: `;
    link.setAttribute('href', `${html_url}`)
    link.textContent = 'To reach out'
    pro.appendChild(link);

    pfo.textContent = `Followers: ${followers}`;
    pfol.textContent = `Following: ${following}`;
    pBio.textContent = `Bio: ${bio}`;

   return card
}

//function to make card for any individual
  function everyCard(e){
    axios.get(`https://api.github.com/users/${e}`)
     .then(res =>{
        console.log(res)
        const loginData = gitCard(res.data)
        entryCard.appendChild(loginData)
        return loginData
  })
  .catch(err => console.log(err.message))
  .finally(() => console.log('done'))
};
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
