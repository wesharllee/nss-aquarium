import { getFish } from "./database.js"

export const FishList = () => {
    const fishes = getFish()
    
    let htmlString = '<article class="FishList">'
    
    htmlString += `<section class="inventoryHeader">Exotic Fish</section>`
    for (const fish of fishes) {
        htmlString += `<section class="fish card">
        <div><img class="fish__image image--card" src="${fish.image}" /></div>
        <div class="species">Species: ${fish.species}</div>
        <div class="location">Harvest Location: ${fish.harvestLocation}</div>
        <div class="length">Length: ${fish.length}in</div>
        <div class="food">Recommended Food: ${fish.food}</div>
    </section>`
        
        
    }
    htmlString += `</article>`
   return htmlString 
}

