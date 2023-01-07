// Global Declarations
var numMagicRing = 0;
var numRounds = 0;
var rndNum = 0;
var numOfStitches = 0;
var getUl = "";
var finalAmoutEndOfRnd = 0;

// En Of Global Declarations

function emptyInputFieldsTest() {
  if (numMagicRing > 100) {
    document.getElementById("numMagicRing").focus();
    alert("Please enter a value lower than a 100 Magic Ring");
    return true;
  } else if (numMagicRing < 1 || Number.isNaN(numMagicRing)) {
    document.getElementById("numMagicRing").focus();
    alert("Please enter a value higher than 1 Magic Ring");
    return true;
  }

  if (numRounds > 250) {
    document.getElementById("numRounds").focus();
    alert("Please enter a value lower than 250 round");
    return true;
  } else if (numRounds < 1 || Number.isNaN(numRounds)) {
    document.getElementById("numRounds").focus();
    alert("Please enter a value higher or equal to 1 round");
    return true;
  }
}

function autoGeneratePattern() {
  numMagicRing = parseInt(document.getElementById("numMagicRing").value);
  numRounds = parseInt(document.getElementById("numRounds").value);
  rndNum = 1;
  numOfStitches = 1;

  getUl = document.getElementById("generatePaternOutput");
  getUl.textContent = "";

  if (emptyInputFieldsTest()) {
    return;
  }

  if (numRounds == 1) {
    const rnd1 = `Rnd 1: Magic ring ${numMagicRing} [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd1;
    getUl.appendChild(creatingLiItem);

    rndNum++;
  } else if (numRounds === 2) {
    const rnd1 = `Rnd 1: Magic ring ${numMagicRing} [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd1;
    getUl.appendChild(creatingLiItem);

    rndNum++;
    const rnd2 = `Rnd 2: Inc around [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd2;
    2;
    getUl.appendChild(creatingLiItem);

    rndNum++;
  } else {
    const rnd1 = `Rnd 1: Magic ring ${numMagicRing} [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd1;
    getUl.appendChild(creatingLiItem);

    rndNum++;

    const rnd2 = `Rnd 2: Inc around [${numMagicRing * rndNum}]`;

    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = rnd2;
    2;
    getUl.appendChild(creatingLiItem);

    rndNum++;

    for (let i = 3; i <= numRounds; i++) {
      const appendRound = `Rnd ${rndNum}: ${numOfStitches} Sc, Inc. Repeat x${numMagicRing} [${numMagicRing * rndNum
        }]`;

      var creatingLiItem = document.createElement("li");
      creatingLiItem.textContent = appendRound;
      getUl.appendChild(creatingLiItem);

      rndNum++;
      numOfStitches++;
    }
  }
}

function generateMultipleLines() {
  getUl = document.getElementById("generatePaternOutput");
  var endRound = parseInt(document.getElementById("multiLineAdding").value);
  finalAmoutEndOfRnd = (rndNum - 1) * numMagicRing;

  if (emptyInputFieldsTest()) {
    return;
  }

  if (endRound >= 2) {
    var creatingLiItem = document.createElement("li");
    creatingLiItem.textContent = `Rnd ${rndNum} - ${rndNum + (endRound - 1)
      }: Sc Around [${finalAmoutEndOfRnd}]`;
    getUl.appendChild(creatingLiItem);
  } else {
    document.getElementById("multiLineAdding").focus();
    return alert("Please enter a value of 2 or higher");
  }

  rndNum = rndNum + (endRound - 1);
}

function decreaseToEnd() {
  if (emptyInputFieldsTest()) {
    return;
  }

  if (finalAmoutEndOfRnd > 0) {
    getUl = document.getElementById("generatePaternOutput");
    var decStitches = finalAmoutEndOfRnd - numMagicRing;
    for (let i = numMagicRing; i <= decStitches + 1; i++) {
      const appendRound = `Rnd ${rndNum + 1}: ${numOfStitches - 1
        } Sc, Dec. Repeat x${numMagicRing} [${decStitches}]`;

      var creatingLiItem = document.createElement("li");
      creatingLiItem.textContent = appendRound;
      getUl.appendChild(creatingLiItem);

      rndNum++;
      numOfStitches--;
      decStitches -= numMagicRing;
    }
  }

  const appendRound = `Rnd ${rndNum + 1
    }: Dec Around. Repeat x${numMagicRing} [${decStitches}]`;
  var creatingLiItem = document.createElement("li");
  creatingLiItem.textContent = appendRound;
  getUl.appendChild(creatingLiItem);
}
