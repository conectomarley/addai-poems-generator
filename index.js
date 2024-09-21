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
  let prompt = `Summarize a famous Brazilian poem that contains the word ${userwordInput.value} in exactly 6 lines.`;
  let context =
    "You are an expert on Brazilian poetry. Your task is to find a well-known Brazilian poem that contains the word ${userwordInput.value}, and provide a 6-line summary of that poem. Each new sentence that starts with a capital letter should be on a new line. Use <br /> to separate the lines. Be concise, poetic, and ensure each line is short. Do not include a title to the poem. Sign the poem with 'Marley AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating Brazilian poem about ${userwordInput.value} for you...`;

  console.log("genepoem");

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-gene");
poemFormElement.addEventListener("submit", genepoem);
