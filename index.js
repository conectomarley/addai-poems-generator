function genepoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "La poemita la la la",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let poemFormElement = document.querySelector("#poem-gene");
poemFormElement.addEventListener("submit", genepoem);
