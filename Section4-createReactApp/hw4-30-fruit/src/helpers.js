// function choice(items) {
//   console.log(items);
// }

// function remove(items, item)  {
//   console.log(items);
// }

const choice = items => {
  console.log("function choice");
  return items[Math.floor(Math.random() * items.length)];
};

const remove = (items, item) => {
  const idx = items.indexOf(item);
  items.splice(idx, 1);
};

export { choice, remove };
