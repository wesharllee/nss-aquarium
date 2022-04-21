const database = {
    fish: [
        {
            name: "Bart",
            harvestLocation: "Springfield", 
            food: "Crustaceans",
            size: 3
        },
        {
            name: "Angelfish",
            harvestLocation: "Amazon River", 
            food: "Aqueon Tropical Flakes",
            size: 6
        },
        {
            name: "Dragonfish",
            harvestLocation: "Indian Ocean", 
            food: "Unprocessed Beef, Raw Veg",
            size: 5.5
        },
        {
            name: "Mandarin Fish",
            harvestLocation: "Australian Coast", 
            food: "Live Brine Shrimp, Mysis Shrimp",
            size: 3
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}