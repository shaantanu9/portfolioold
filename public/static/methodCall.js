function productContructor(name, price, description, image) {
  this.name = name;
  this.price = price;
  this.description = description;
  this.image = image;
}

let obj = {
  name: "shantanu",
  age: "21",
  address: "pune",
  fun: function () {
    console.log("hello", this.name);
  },
};

let obj2 = {
  name: "om",
  age: "12",
  address: "pune",
};

obj.fun.call(obj2);
