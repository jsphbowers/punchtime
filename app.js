let upgrades = [
  {
    name: "fancy-footwork",
    price: 50,
    quantity: 0,
    multiplier: 1,
    power: 10
  },
  {
    name: "heavier-gloves",
    price: 20,
    quantity: 0,
    multiplier: 1,
    power: 5
  }
]

let automaticUpgrades = [
  {
    name: "taunting",
    price: 100,
    quantity: 0,
    multiplier: 1,
    power: 10
  },
  {
    name: "Paid-the-ref",
    price: 500,
    quantity: 0,
    multiplier: 1,
    power: 50
  }
]

let boss = {
  name: "king-hippo",
  worth: 1,
  health: 100
}

// SECTION Variables and such

let totalPunches = 0
let totalPower = 0
let totalAutoPower = 0
let allTimePunches = 0


// SECTION Functions

function punch() {
  let punch = 0
  punch += totalPower
  punch += boss.worth
  totalPunches += punch
  allTimePunches += punch
  updateTotalPunches()
}

function autoPunch() {
  let punch = 0
}

function updateTotalPunches() {
  if (totalPunches > 10000) {
    window.alert("KNOCKOUT!!! YOU WIN")
  }
  let totalElem = document.getElementById("total")
  totalElem.innerHTML = `<p>
  Total Punches: ${totalPunches}</p>
  `
  let grandTotalElem = document.getElementById("all-time")
  grandTotalElem.innerHTML = `<p>
  All Time Punches: ${allTimePunches}</p>
  `
}

function updateTotalPower() {
  totalPower = 0
  upgrades.forEach(u => totalPower += u.quantity * u.multiplier * u.power)

  console.log(totalPower)
  let totalPowerElem = document.getElementById("power")
  totalPowerElem.innerHTML = `<p>
Power: ${totalPower + 1}</p>
`
}

function updateTotalAutoPower() {
  totalAutoPower = 0
  automaticUpgrades.forEach(u => totalAutoPower += u.quantity * u.power)

  let totalPowerElem = document.getElementById("autopower")
  totalPowerElem.innerHTML = `<p>
Auto Power: ${totalAutoPower}</p>
`
}

function updateUpgrades(name) {
  let increaseUpgradeQuantity = upgrades.find(u => u.name == name)
  let upgradesElem = document.getElementById(name + 'upgrade')
  upgradesElem.innerText = `${increaseUpgradeQuantity.quantity}`
  console.log(increaseUpgradeQuantity)
  let costElem = document.getElementById(name + 'cost')
  costElem.innerText = `${increaseUpgradeQuantity.price}`
}

function updateAutoUpgrades(name) {
  let increaseUpgradeQuantity = automaticUpgrades.find(u => u.name == name)
  let upgradesElem = document.getElementById(name + 'upgrade')
  upgradesElem.innerText = `${increaseUpgradeQuantity.quantity}`
  console.log(increaseUpgradeQuantity)
  let costElem = document.getElementById(name + 'cost')
  costElem.innerText = `${increaseUpgradeQuantity.price}`
}

function buyUpgrade(name) {
  let increaseUpgrade = upgrades.find(u => u.name == name)
  if (totalPunches >= increaseUpgrade.price) {
    increaseUpgrade.quantity++
    totalPunches -= increaseUpgrade.price
    increaseUpgrade.price = increaseUpgrade.price * 2
    updateUpgrades(name)
    updateTotalPower()
    updateTotalPunches()
  }

  console.log(increaseUpgrade)
}

function buyAutoUpgrade(name) {
  let increaseAutoUpgrade = automaticUpgrades.find(u => u.name == name)
  if (totalPunches >= increaseAutoUpgrade.price) {
    increaseAutoUpgrade.quantity++
    totalPunches -= increaseAutoUpgrade.price
    increaseAutoUpgrade.price = increaseAutoUpgrade.price * 2
    updateAutoUpgrades(name)
    updateTotalAutoPower()
    updateTotalPunches()
  }

}

let autoUpgradeInterval = setInterval(() => {
  let totalPunch = 0;
  automaticUpgrades.forEach(au => {
    totalPunch += au.power * au.quantity
  })
  console.log('Automatic punches be like', totalPunch);
  totalPunches += totalPunch;
  updateTotalPunches()

}, 3000)


// function checkTaunting(name) {
//   let runTaunting = automaticUpgrades.find(au => au.name == name)

//   if (runTaunting.quantity >= 1) {
//     setInterval(taunting, 3000)
//   }
// }

// function taunting() {
//   let tauntingTotal = automaticUpgrades.find(au => au.name == "taunting")
//   totalPunches += tauntingTotal.power * tauntingTotal.quantity
//   updateTotalPunches()
// }

// function paidTheRef() {
//   totalPunches += 50
//   updateTotalPunches
// }