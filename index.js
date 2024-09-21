function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function genepoem(event) {
  event.preventDefault();

  let userwordInput = document.querySelector("#user-word");
  let apiKey = "3t4aaf46b1o5b1534f3e944eb00eb10d";
  let prompt = `User instructions: Generate a Brazilian poem about ${userwordInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 4 line poem and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'Marley AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("genepoem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-gene");
poemFormElement.addEventListener("submit", genepoem);
