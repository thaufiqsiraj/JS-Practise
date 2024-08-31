function apple(fame) {
  return this.name;
}

const a = {
  name: "Thaufiq",
  apple,
};

console.log(a.apple());
