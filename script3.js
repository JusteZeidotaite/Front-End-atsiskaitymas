const button = document.getElementById("addItem")

const addNewItem = (newItem) => {

    fetch(`https://642c60f2d7081590f938f986.mockapi.io/Mugs`, { 
     method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })

   .then((data) => {
      return data.json();
    })
    .then((data) => {
      const successMessage = document.getElementById("success-message");
      successMessage.innerHTML = "New item added";

    
    });
};


button.addEventListener("click", () => {
    const name = document.getElementById("name").value
    const price = document.getElementById("price").value
    const description = document.getElementById("description").value
    const photo_url = document.getElementById("photo_url").value
    const location = document.getElementById("location").value

    const newItem = {
        name: name,
        price: price,
        description: description,
        photo_url: photo_url,
        location: location
    };

    addNewItem(newItem);
});

const goBack = document.getElementById('go-back-button')

 goBack.addEventListener("click", () => {
  window.location.href = "index.html"
 })