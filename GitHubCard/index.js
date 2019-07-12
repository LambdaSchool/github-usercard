/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/





//  .catch(error => 
  
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [ 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
 ' bigknell'];



let roloDex = document.querySelector('.cards');
const devCard = document.createElement("div");

followersArray.forEach(dev =>   {                       
axios
.get(`https://api.github.com/users/${dev}`)
  .then(data => {
    // 1. (see above)
    // Handles Success: here's where we get the results from server
    console.log('My github data', data)
    const devData = data.data
   // devData.forEach(item => {
    console.log('index.js -> %cdevData:', 'color: red', devData)
      // 2. (see above)
      const element = gitDevCard(devData)
      //name, login, location, html_url, followers_url, following_url, bio
      // 3. (see above)

      roloDex.appendChild(devCard)
    })
  // })
  .catch(error => {

  console.log('index.js -> %cerror:', 'color: green', error)
    // Handles failure:
    
  })}
)



  function gitDevCard(data) {
// catch(error => {
//     console.log('color: red','Looks like we have a problem.  Data didn\t come through, hoss.', error)
  
// )}


  
  const devPicture = document.createElement("img");
  const devInfo = document.createElement("div");
  const devName = document.createElement("h3");
  const devUsername = document.createElement("p");
  const devLocation = document.createElement("p");
  const devProfile = document.createElement("p");
  const devPageLink = document.createElement("a");
  const devFollowers = document.createElement("p");
  const devFollowing = document.createElement("p");
  const devbio = document.createElement("p");
  
  // Setup structure of elementsreturn artBox;

  roloDex.appendChild(devCard);
  devCard.appendChild(devPicture);
  devCard.appendChild(devInfo);
  devInfo.appendChild(devName);
  devInfo.appendChild(devUsername);
  devInfo.appendChild(devLocation);
  devInfo.appendChild(devProfile);
  devProfile.appendChild(devPageLink);
  devProfile.appendChild(devFollowers);
  devProfile.appendChild(devFollowing);
  devProfile.appendChild(devbio);

  // set class names
  devCard.classList.add("card");

  devInfo.classList.add("card-info");
  devName.classList.add("name");
  devUsername.classList.add("username");
  
  ///// content /////


    devPicture.src = data.avatar_url,
   devName.textContent= data.name;
   devUsername.textContent= `User Name: ${data.login}`;
   devLocation.textContent= `Location: ${data.location}`;
    devProfile.textContent= 'Profile:'
   devPageLink.href = `Github Page: ${data.html_url}`;
   devFollowers.href = `Followers: ${data.followers_url}`;
   devFollowing.href =  `${data.following_url}`;
   devbio.href = `Bio: ${data.bio}`;
  return data;
  console.log('index.js -> %cdata:', 'color: red', data)

}
// 
  
// )}




/*<div class="card">
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

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
