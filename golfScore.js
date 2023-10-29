var golf = [
  "Hole-in-one",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double bogey",
  "Triple bogey",
];
function golfScore(par, strokes) {
  if (strokes == 1) {
    return golf[0];
  } else if (strokes <= par - 2) {
    return golf[1];
  } else if (strokes == par - 1) {
    return golf[2];
  } else if (strokes == par) {
    return golf[3];
  } else if (strokes == par + 1) {
    return golf[4];
  } else if (strokes == par + 2) {
    return golf[5];
  } else if (strokes >= par + 3) {
    return golf[6];
  }
}

console.log(golfScore(5, 4));
