const sydney = {
    name: 'Sydney',
    population: 5_121_000,
    state: 'NSW',
    founded: '26 January 1788',
    timezone: 'Australia/Sydney'
}

const paris = {
    name: 'Paris',
    population: 11_208_000,
    sregion: 'Île-de-France',
    founded: '?',
    timezone: 'Central European Time (CET)'
}

function cityInfo(chosenCity) {
    for (let key in chosenCity) {
        console.log(`${key}: ${chosenCity[key]}`);
    }
}

cityInfo(sydney)
cityInfo(paris)
