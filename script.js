const itemWrapper = document.getElementById("main")

const createItem = (item) => {

    
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "wrapper")

    const image = document.createElement("img");
    image.setAttribute("src", item.photo_url);

    const titleWrapper = document.createElement("div");
    titleWrapper.setAttribute("class", "title-wrapper");

    const title = document.createElement("span");
    title.setAttribute("class", "title");

    const price = document.createElement("span");
    price.setAttribute("class", "price");

    const link = document.createElement("a");
    link.setAttribute("class", "item-link");
    link.href = "./index2.html";

    link.addEventListener("click", () => {
        localStorage.setItem("id", item.id);
    });

    title.innerHTML = `Name: ${item.name}`;
    price.innerText = `Price: ${item.price} eur`;

    titleWrapper.append(title);

    titleWrapper.append(price);

    wrapper.append(image);
    wrapper.append(titleWrapper);

    link.append(wrapper);

    itemWrapper.append(link);

    
};

fetch("https://642c60f2d7081590f938f986.mockapi.io/Mugs")

    .then ((res) => {
        return res.json();
    })

    .then ((data) => { 
        data
            .sort((a,b) => (a.price - b.price))
            .forEach((item) => { 
                createItem(item);
    });

});

