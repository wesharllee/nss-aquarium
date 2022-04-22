import { getFish } from "./database.js";

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}

import { FishList } from "./fish.js"

const parentHTMLElement = document.querySelector(".list")

parentHTMLElement.innerHTML = FishList()

import { locationList } from "./locations.js";

const parentHTMLElement2 = document.querySelector(".listLocation")

parentHTMLElement2.innerHTML = locationList()

import { tipsToClean } from "./tips.js";

const parentHTMLElement3 = document.querySelector(".list2")

parentHTMLElement3.innerHTML = tipsToClean()
