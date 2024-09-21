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
  let prompt = `make sure will pick one brazilian poem about ${userwordInput}`;
  let context = "show me a good brazilian poem";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("genepoem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-gene");
poemFormElement.addEventListener("submit", genepoem);
