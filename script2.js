const itemId = localStorage.getItem("id");

const addItemsToScreen = (data) => {

    

    const title = document.getElementById("title")
    title.innerHTML = data.name

    const price = document.getElementById("price")
    price.innerHTML = `Price: ${data.price} eur`

    const description = document.getElementById("description")
    description.innerHTML = data.description

    const location = document.getElementById("location")
    location.innerHTML = `Location: ${data.location}` 

   const itemPhoto = document.getElementById("image");
    itemPhoto.setAttribute("style", `background-image: url(${data.photo_url})`);

};


fetch(`https://642c60f2d7081590f938f986.mockapi.io/Mugs/${itemId}`)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addItemsToScreen(data);
  });

 const goBack = document.querySelector('button')

 goBack.addEventListener("click", () => {
  window.location.href = "index.html"
 })


const deleteItem = () => {
  fetch(`https://642c60f2d7081590f938f986.mockapi.io/Mugs/${itemId}`, {
    method: "DELETE",
  })
    .then((res) => {
  
        const successMessage = document.getElementById("success_message");
        successMessage.innerHTML = "Item deleted";

    });

  }

  const trashBin = document.getElementById("trash-button");

    trashBin.addEventListener("click", () => {
      deleteItem();
      });

