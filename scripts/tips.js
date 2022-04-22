import { getTips } from "./database.js";

export const tipsToClean = () => {
    const tips = getTips()

    let htmlString = `<article class="asideHeader">Aquarium Upkeep</article>`

    
        htmlString += `<section class="tip card">

        <div class="asideBody">${tips}</div>
       </section>`

   
   return htmlString 
}