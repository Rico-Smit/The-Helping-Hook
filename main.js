function autoGeneratePattern() {
  const numMagicRing = parseInt(document.getElementById("numMagicRing").value);
  const numRounds = parseInt(document.getElementById("numRounds").value);
  var rndNum = 1;
  var numOfStitches = 1;

  var getUl = document.getElementById("generatePaternOutput");
  getUl.textContent = "";

  if (numMagicRing < 1 || numRounds < 1 || Number.isNaN(numMagicRing)) {
    return alert("Please enter a value higher than 1 round or magic ring");
    exit;
  } else {
    const rnd1 = `Rnd 1: Magic ring ${numMagicRing} [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd1;
    getUl.appendChild(creatingLiItem);

    rndNum++;

    const rnd2 = `Rnd 2: Inc around [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd2;
    getUl.appendChild(creatingLiItem);

    rndNum++;
  }

  if (rndNum >= 2) {
    for (let i = 3; i <= numRounds; i++) {
      const appendRound = `Rnd ${rndNum}: ${numOfStitches} Sc, Inc. Repeat x${numMagicRing} [${
        numMagicRing * rndNum
      }]`;
      var creatingLiItem = document.createElement("li");
      creatingLiItem.textContent = appendRound;
      getUl.appendChild(creatingLiItem);
      rndNum++;
      numOfStitches++;
    }
  }
  return [rndNum, numMagicRing];
}

function manualGeneratePattern() {
  var rndNum = autoGeneratePattern();

  var getMultiLineUl = document.getElementById("generatePaternOutput");
  var endRound = parseInt(document.getElementById("multiLineAdding").value);

  var creatingLiItem = document.createElement("li");
  creatingLiItem.textContent = `Rnd ${rndNum[0]} - ${
    rndNum[0] + (endRound - 1)
  }: Sc Around [${rndNum[1] * (rndNum[0] - 1)}]`;
  getMultiLineUl.appendChild(creatingLiItem);
  rndNum++;
}

function addingDec() {
  let rndNum = autoGeneratePattern();
}