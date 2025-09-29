function myasynfunction() {
  let p = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("hi there!");
    }, 3000);
  });
  return p;
}
async function main() {
  const value = await myasynfunction();
  console.log(value);
}
main();
