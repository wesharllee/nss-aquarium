import { getLocation } from "./database.js";

export const locationList = () => {
    const locations = getLocation()

    let htmlString = '<article class="listLocation">'

    htmlString += `<article class="locationHeader">Harvesting Locations</article>`

    for (const location of locations) {
        htmlString += `<section class="location  card">
        <div class="quote">${location.quote}</div>
        <div class="harvestingLocation">${location.location}</div>
    </section>`

    }
    htmlString += `</article>`
   return htmlString 
}