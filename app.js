const slip = [
    {
        id: 1,
        advice: "Code is like humor. When you have to explain it, it’s bad."
      },
      {
        id: 2,
        advice: "The best error message is the one that never shows up."
      },
      {
        id: 3,
        advice: "The only way to do great work is to love what you do."
      },
      {
        id: 4,
        advice: "Coding is not just about fixing bugs; it's about understanding problems."
      },
      {
        id: 5,
        advice: "Good code is its own best documentation."
      },
      {
        id: 6,
        advice: "Programming is thinking, not typing."
      },
      {
        id: 7,
        advice: "The more you code, the more you learn; the more you learn, the better you code."
      },
      {
        id: 8,
        advice: "Write code as if the next person who maintains it is a psychopath who knows where you live."
      },
      {
        id: 9,
        advice: "The best way to predict the future is to create it."
      },
      {
        id: 10,
        advice: "In coding, the hard part isn't solving problems, but deciding what problems to solve."
      },];

const btn = document.querySelector(".btn");
const advice = document.querySelector(".advice-p");
const title = document.querySelector(".title");

// Run the showQuote function when the page is loaded
// window.onload = showQuotes;

btn.addEventListener("click", () => {
  showQuotes();
  console.log("clicked");
});

function showQuotes(){
  const apiUrl = "https://api.adviceslip.com/advice";

console.log(apiUrl);
fetch(apiUrl)
     .then(Response => Response.json())
     .then((data) => data.slip)
     .then((data) => {
        advice.textContent = `"${data.advice}"`;
        title.textContent = `Advice #${data.id}`;
     });
//      .catch((error) => {
//       alert(`Error ${error}`);
//      });
 }

// btn.addEventListener("click", () => {

//     let adviceId = "Advice #";
//     let idNo = slip[getRandomNo()].id;
//     adviceId += idNo;

//     title.textContent = adviceId;
//     advice.textContent = slip[idNo].advice;
// });
// const getRandomNo = () => Math.floor(Math.random() * (slip.length - 1));

