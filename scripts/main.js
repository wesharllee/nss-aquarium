import { getFish } from "./database";

const allFish = getFish()

for (const fish of allFish) {
    console.log(fish)
}