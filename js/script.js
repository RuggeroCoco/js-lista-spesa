const shopItems = ["pepe", "formaggio", "uova", "pasta", "guanciale"];
console.log(shopItems);

const items = document.getElementById("shop-items");
console.log(items);

let i = 0;
while (i < shopItems.length) {
  const listItem = `<li>${shopItems[i]}</li>`;
  console.log(listItem);
  items.innerHTML += listItem;
  i++;
}
