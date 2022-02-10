/*
 * Complete the 'sewers' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER_ARRAY h
 *  4. INTEGER_ARRAY v
 */

function sewers(n, m, h, v) {
  // Write your code here

  // two store of information needed.
  // 1. an object which stores the number of squares area/combined area of the squares
  const areaStore = {};
  const numberOfSquares = (n + 1) * (m + 1);
  for (let i = 1; i <= numberOfSquares; i++) {
    areaStore[i] = [];
  }
  // console.log(areaStore)
  // 2. an array with the indexes of the squares.
  let temp = 1;

  // =============
  const sett = Array(n);
  for (let i = 0; i < n + 1; i++) {
    sett[i] = new Array(m);
    for (let j = 0; j < m + 1; j++) {
      areaStore[temp].push([i, j]);
      sett[i][j] = temp++;
    }
  }
  // console.log(sett);
  // console.log(areaStore)
  // =============

  // Two things must be done
  // 1. update 'sett' array with the position of the squares and change them accordingly as they are 'combined'
  // 2. update areaStore with the updated index positions of the squares as they get combined

  // Loop through the array of vertical pipes (loop through n as vertical pipes rmeoved will combine horizontal squares)
  for (let i = 0; i < v.length; i++) {
    let left = v[i] - 1; // the left index of the pipe
    let right = v[i]; // the right index of the pipe
    for (let j = 0; j < n + 1; j++) {
      const area1 = sett[j][left]; // the id of the area
      const area2 = sett[j][right]; // the id of the area
      for (const pos of areaStore[area2]) {
        sett[pos[0]][pos[1]] = area1; // union left and right sets. the id of right side is now id of left side
      }
      areaStore[area1] = [...areaStore[area1], ...areaStore[area2]];
      areaStore[area2] = [];
    }
  }
  console.log(sett);
  console.log(areaStore);

  // Loop through the array of horiontal pipes
  for (let i = 0; i < h.length; i++) {
    let above = h[i] - 1; // the top index of the pipe
    let below = h[i]; // the bottom index of the pipe
    for (let j = 0; j < m + 1; j++) {
      const area1 = sett[above][j]; // the position id of the area
      console.log("AREA 1", area1);
      const area2 = sett[below][j]; // the position id of the area
      console.log("AREA 2", area2);
      for (const pos of areaStore[area2]) {
        sett[pos[0]][pos[1]] = area1; // union above and below sets. the id of bottom is now id of top side
      }

      if (area1 !== area2) { // once sett has combined area ids, we only want to combine if they are haven't already been combined. if area ids are the same, don't do anything
        areaStore[area1] = [...areaStore[area1], ...areaStore[area2]];
        areaStore[area2] = [];
      }
    }
  }
  console.log(sett);
  console.log(areaStore);

  // loop through and find the length of each array which corresponds to the total area

  let max = 0;
  for (const areaIndexes of Object.values(sett)) {
      if (areaIndexes.length > max) {
          max = areaIndexes.length
      }
  }

  return max;
}

console.log(sewers(3, 3, [2], [2]));
