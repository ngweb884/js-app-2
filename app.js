const data = [
    {
      id: 1,
      name: "Calculus",
      img: "./images/book1.jpg",
      price: 19,
      cat: "book",
    },
    {
      id: 2,
      name: "Algebra",
      img: "./images/book2.jpg",
      price: 29,
      cat: "book",
    },
    {
      id: 3,
      name: "Basic Math",
      img: "./images/book3.jpg",
      price: 29,
      cat: "book",
    },
    {
      id: 4,
      name: "Running Shoe",
      img: "./images/shoe1.jpg",
      price: 99,
      cat: "sport",
    },
    {
      id: 5,
      name: "Marathon Shoe",
      img: "./images/shoe2.jpg",
      price: 149,
      cat: "sport",
    },
    {
      id: 6,
      name: "Adventure Shoe",
      img: "./images/shoe3.jpg",
      price: 199,
      cat: "sport",
    },
    {
        id: 7,
        name: "Smart Watch",
        img: "./images/watch1.jpg",
        price: 399,
        cat: "watch",
      },
      {
        id: 8,
        name: "Sport Watch",
        img: "./images/watch2.jpg",
        price: 299,
        cat: "watch",
      },
    
  ];
  
  const productsContainer = document.querySelector(".products");
  const searchInput = document.querySelector(".search");
  const categoriesContainer = document.querySelector(".cats");
  const priceRange = document.querySelector(".priceRange");
  const priceValue = document.querySelector(".priceValue");
  
  const displayProducts = (filteredProducts) => {
    productsContainer.innerHTML = filteredProducts
      .map(
        (product) =>
          `
         <div class="product">
            <img
            src=${product.img}
            alt=""
            />
            <span class="name">${product.name}</span>
            <span class="priceText">$${product.price}</span>
          </div>
      `
      )
      .join("");
  };
  
  displayProducts(data);
  
  searchInput.addEventListener("keyup", (e) => {
    const value = e.target.value.toLowerCase();
  
    if (value) {
      displayProducts(
        data.filter((item) => item.name.toLowerCase().indexOf(value) !== -1)
      );
    } else {
      displayProducts(data);
    }
  });
  
  const setCategories = () => {
    const allCats = data.map((item) => item.cat);
    const categories = [
      "All",
      ...allCats.filter((item, i) => {
        return allCats.indexOf(item) === i;
      }),
    ];
  
    categoriesContainer.innerHTML = categories
      .map(
        (cat) =>
          `
        <span class="cat">${cat}</span>
      `
      )
      .join("");
  
    categoriesContainer.addEventListener("click", (e) => {
      const selectedCat = e.target.textContent;
  
      selectedCat === "All"
        ? displayProducts(data)
        : displayProducts(data.filter((item) => item.cat === selectedCat));
    });
  };
  
  const setPrices = () => {
    const priceList = data.map((item) => item.price);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
  
    priceRange.min = minPrice;
    priceRange.max = maxPrice;
    priceRange.value = maxPrice;
    priceValue.textContent = "$" + maxPrice;
  
    priceRange.addEventListener("input", (e) => {
      priceValue.textContent = "$" + e.target.value;
      displayProducts(data.filter((item) => item.price <= e.target.value));
    });
  };
  
  setCategories();
  setPrices()