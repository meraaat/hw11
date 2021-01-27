const first_name = "MohammadAli";
const last_name = "Akbari";

function fullName(f, l, cb) {
  let result = f + " " + l;
  cb(result);
}

fullName(first_name, last_name, function (r) {
  return console.log(r);
});
