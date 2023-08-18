fetch('./chinesebreeds.json')
   .then(response => response.json())
   .then(chinesebreeds => {
     // Do something with the JSON data
     const contentContainer = document.getElementById("contentContainer");
     chinesebreeds.forEach(breed => {
       const breedInfo = `
         Breed: ${breed.breed}
         Category: ${breed.category}
         Life Span: ${breed.lifeSpan} years
         Height: ${breed.height} inches
         Weight: ${breed.weight} pounds
       `;

       // Log breed info to console
       console.log(breedInfo);

       // Display breed info on the webpage
       contentContainer.innerHTML += `
         <h4>${breed.breed}</h4>
         <ul>
           <li>Category: ${breed.category}</li>
           <li>Life Span: ${breed.lifeSpan} years</li>
           <li>Height: ${breed.height} inches</li>
           <li>Weight: ${breed.weight} pounds</li>
         </ul>
       `;
     });
   })
   .catch(error => {
     // Handle any errors that occur while fetching the file
     console.error(error);
   });

function greeting() {
   console.log('Welcome to the Wonderful World of Dogs!');
}
greeting();

function dogs() {
   return "Dog breeds included are: Chow Chow, Shih Tzu, Pekingese, Shar Pei, Pug, and Chinese Crested.";
}
console.log(dogs());

function types() {
   return 'These dog breeds include only non-sporting and toy breeds.';
}
console.log(types());

const html = `
  <h1>Welcome to the Wonderful World of Dogs!</h1>
  <p>Dating back to 206 B.C, the time of the Han Dynasty, we can trace evidence of Chinese dog breeds. We will take a look at 6 breeds originating in China.</p>
  <div id="contentContainer"></div>
`;

document.addEventListener('DOMContentLoaded', () => {
   document.body.innerHTML = html;
});