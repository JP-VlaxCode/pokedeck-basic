function main() {
  fetch("static/data/stores.json")
    .then((data) => {
      data.json().then((elements) => {
        sessionStorage.setItem("stores", JSON.stringify(elements));

      });
    })
    .catch(console.log);
}

main();
