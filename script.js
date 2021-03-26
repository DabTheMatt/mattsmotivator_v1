let entriesP = [];
let goalP = 20;

const targetP = (document.querySelector("#targetP").innerText = `${goalP} `);
const entriesWrapperP = document.querySelector("#entriesP");

function addEntry(newEntry) {
  entriesWrapperP.removeChild(entriesWrapperP.firstElementChild);

  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry);
  listItem.appendChild(listValue);
  entriesWrapperP.appendChild(listItem);
}

function reducer(p, c) {
  return p + c;
}

function calcTotal() {
  const totalPvalue = entriesP.reduce(reducer);
  document.querySelector("#totalP").innerText = totalPvalue;
  document.querySelector("#prograssTotalP").innerText = totalPvalue;
}

function calcAverage() {
  const averageP = entriesP.reduce(reducer);
  document.querySelector("#averageP").innerText = (
    averageP / entriesP.length
  ).toFixed(1);
}

function clacHigh() {
  const high = Math.max(...entriesP);
  document.querySelector("#highP").innerText = high;
}
function calcGoal() {
  const totalPvalue = entriesP.reduce(reducer);
  const completePercentP = totalPvalue / (goalP / 100);
  const progressCircleP = document.querySelector("#outerCircleP");
  if (progressCircleP > 100) completePercentP === 100;

  progressCircleP.style.background = `conic-gradient(#0ad9ff ${completePercentP}%, #2d3740 ${completePercentP}% 100%)`
}

function handleSubmitP(event) {
  event.preventDefault();
  const entryP = Number(document.querySelector("#entryP").value);
  if (!entryP) return;
  formP.reset();
  entriesP.push(entryP);
  addEntry(entryP);
  calcTotal();
  calcAverage();
  clacHigh();
  calcGoal();

}

const formP = document.querySelector("#formP");
formP.addEventListener("submit", handleSubmitP);





let entriesW = [];
let goalW = 20;

const targetW = (document.querySelector("#targetW").innerText = `${goalW} `);
const entriesWrapperW = document.querySelector("#entriesW");

function addEntryW(newEntry) {
  entriesWrapperW.removeChild(entriesWrapperW.firstElementChild);

  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry);
  listItem.appendChild(listValue);
  entriesWrapperW.appendChild(listItem);
}

function reducer(p, c) {
  return p + c;
}

function calcTotalW() {
  const totalWvalueW = entriesW.reduce(reducer);
  document.querySelector("#totalW").innerText = totalWvalueW;
  document.querySelector("#prograssTotalW").innerText = totalWvalueW;
}

function calcAverageW() {
  const averageW = entriesW.reduce(reducer);
  document.querySelector("#averageW").innerText = (
    averageW / entriesW.length
  ).toFixed(1);
}

function clacHighW() {
  const high = Math.max(...entriesW);
  document.querySelector("#highW").innerText = high;
}
function calcGoalW() {
  const totalWvalueW = entriesW.reduce(reducer);
  const completePercentW = totalWvalueW / (goalW / 100);
  const progressCircleW = document.querySelector("#outerCircleW");
  if (progressCircleW > 100) completePercentW === 100;

  progressCircleW.style.background = `conic-gradient(#0ad9ff ${completePercentW}%, #2d3740 ${completePercentW}% 100%)`
}

function handleSubmitW(event) {
  event.preventDefault();
  const entryW = Number(document.querySelector("#entryW").value);
  if (!entryW) return;
  formW.reset();
  entriesW.push(entryW);
  addEntryW(entryW);
  calcTotalW();
  calcAverageW();
  clacHighW();
  calcGoalW();


}

const formW = document.querySelector("#formW");
formW.addEventListener("submit", handleSubmitW);



let entriesL = [];
let goalL = 20;

const targetL = (document.querySelector("#targetL").innerText = `${goalL} `);
const entriesWrapperL = document.querySelector("#entriesL");

function addEntryL(newEntry) {
  entriesWrapperL.removeChild(entriesWrapperL.firstElementChild);

  const listItem = document.createElement("li");
  const listValue = document.createTextNode(newEntry);
  listItem.appendChild(listValue);
  entriesWrapperL.appendChild(listItem);
}

function reducer(p, c) {
  return p + c;
}

function calcTotalL() {
  const totalLvalueL = entriesL.reduce(reducer);
  document.querySelector("#totalL").innerText = totalLvalueL;
  document.querySelector("#prograssTotalL").innerText = totalLvalueL;
}

function calcAverageL() {
    console.log("bbb");
  const averageL = entriesL.reduce(reducer);
  document.querySelector("#averageL").innerText = (
    averageL / entriesL.length
  ).toFixed(1);
}

function clacHighL() {
  const high = Math.max(...entriesL);
  document.querySelector("#highL").innerText = high;
}
function calcGoalL() {
  const totalLvalueL = entriesL.reduce(reducer);
  const completePercentL = totalLvalueL / (goalL / 100);
  const progressCircleL = document.querySelector("#outerCircleL");
  if (progressCircleL > 100) completePercentL === 100;

  progressCircleL.style.background = `conic-gradient(#0ad9ff ${completePercentL}%, #2d3740 ${completePercentL}% 100%)`
}

function handleSubmitL(event) {
    console.log("aaa");
  event.preventDefault();
  const entryL = Number(document.querySelector("#entryL").value);
  if (!entryL) return;
  formL.reset();
  entriesL.push(entryL);
  addEntryL(entryL);
  calcTotalL();
  calcAverageL();
  clacHighL();
  calcGoalL();


}

const formL = document.querySelector("#formL");
formL.addEventListener("submit", handleSubmitL);
