let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  document.getElementById("main-title").innerHTML = "DOM Toretto Homepage";

  // Part 2

  document.body.style.backgroundColor = "lightpink";

  // Part 3
 
  removeFromList();
  // Part 4
  let elements = document.querySelectorAll(".special-title");
  for(let i=0; i<elements.length; i++) {
    elements[i].style.fontSize = "2rem";
  }


  // Part 5

  removeFromPastRaces();

  // Part 6

  const ul = document.querySelector("#past-races");
  const li = document.createElement('li');
  const text = document.createTextNode("Name of a city");
  li.appendChild(text);
  ul.appendChild(li);
  

  // Part 7

  let div = document.createElement('div');
  let mainDiv = document.querySelector('.main');
  div.classList.add('blog-post');
  div.classList.add('purple');
  mainDiv.appendChild(div);

  let newheading = document.createElement('h2');
  newheading.innerHTML = li.innerHTML = 'Paris';
  newheading.style.color = '#FFF';
  newheading.style.fontSize = '2em';
  div.appendChild(newheading);

  let para = document.createElement('p');
  para.innerHTML = 'Paris is very beautiful city';
  div.appendChild(para);
  
  // Part 8

  let quote = document.getElementById('quote-title');
  quote.addEventListener('click', function() {
    randomQuote();
  });

  // Part 9
    
    let blog = document.querySelectorAll('.blog-post');
    for(let i of blog){
      i.addEventListener('mouseout',function (){
        i.classList.toggle('purple');
        //i.classList.toggle('red');
      });
      i.addEventListener('mouseenter',function (){
        //i.classList.toggle('purple');
        i.classList.toggle('red');
      });
    }

});

function removeFromList(){
  let a = document.getElementById("favorite-things");
  a.removeChild(a.childNodes[11]);
}

function removeFromPastRaces(){
  let a = document.getElementById("past-races");
  a.removeChild(a.childNodes[7]);
}

const randomQuote = function() {
  document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
};