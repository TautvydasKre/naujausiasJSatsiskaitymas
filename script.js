let skaiciai = [];
for (let i = 0; i < 10; i++) {
  skaiciai.push(Math.floor(Math.random() * 100));
}
console.log("Pradinis masyvas:", skaiciai);
skaiciai.sort((a, b) => b - a);
console.log("Surikiuotas masyvas:", skaiciai);
let unikalusMasyvas = Array.from(new Set(skaiciai));
console.log("Unikalios reikšmės masyvas:", unikalusMasyvas);
