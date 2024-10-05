function fetchFakeApi() {
  fetch("db.json")
    .then((Response) => {
      if (!Response.ok) {
        throw new Error("Network response was not ok");
      }
      return Response.json();
    })
    .then((data) => {
      displayImages(data);
    })
    .catch((error) => {
      console.log("Error fetching the fake API:", error);
    });
}

function displayImages(images)