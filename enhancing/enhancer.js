module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const { enhancement } = item;
  if (enhancement < 20) {
    item.enhancement += 1;
  }
  return { ...item };
}
