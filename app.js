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
    multiplier: 1
  },
  {
    name: "Paid-the-ref",
    price: 500,
    quantity: 0,
    multiplier: 1
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


// SECTION Functions

function punch() {
  let punch = 0
  punch += totalPower
  punch += boss.worth
  totalPunches += punch
  updateTotalPunches()
}

function updateTotalPunches() {
  let totalElem = document.getElementById("total")
  totalElem.innerHTML = `<p>
  Total Punches: ${totalPunches}</p>
  `
}

function updateTotalPower() {
  let powerAdded = 0
  upgrades.forEach(u => totalPower += u.quantity * u.multiplier * u.power)

  console.log(powerAdded)
  let totalPowerElem = document.getElementById("power")
  totalPowerElem.innerHTML = `<p>
Power: ${totalPower}</p>
`
}

function updateTotalAutoPower() {
  let powerAdded = 0
  upgrades.forEach(u => totalAutoPower += u.quantity * u.multiplier * u.power)

  console.log(powerAdded)
  let totalPowerElem = document.getElementById("power")
  totalPowerElem.innerHTML = `<p>
Power: ${totalPower}</p>
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
    updateUpgrades(name)
    updateTotalPower()
    updateTotalPunches()
  }
}
