let upgrades = [
  {
    name: "fancy-footwork",
    price: 50,
    quantity: 0,
    multiplier: 1
  },
  {
    name: "heavier-gloves",
    price: 20,
    quantity: 0,
    multiplier: 1
  }
]

let automaticUpgrades = [
  {
    name: "taunting",
    price: 100,
    quantity: 0,
    multiplier: 1
  }
]

let boss = {
  name: "king-hippo",
  worth: 1,
  health: 100
}

let totalPunches = 0

function punch() {
  let punch = 0
  punch += boss.worth
  totalPunches += punch
  updateTotal()
}

function updateTotal() {
  let totalElem = document.getElementById("total")
  totalElem.innerHTML = `<p>
  Total Punches: ${totalPunches}</p>
  `
}

function buyUpgrade() {

}