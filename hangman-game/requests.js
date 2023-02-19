const getPuzzle = async (wordCount) => {
    const response = await fetch(`https://puzzle.mead.io/puzzle?wordCount=${wordCount}`);
    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle
    } else {
        throw new Error('Enable to get puzzle')
    }
}

const getCountry = async (contryCode) => {
    const response = await fetch('http://api.countrylayer.com/v2/all?access_key=8614f1b6080c90a9d438972c2caf4bc6')
    if (response.status === 200) {
        const data = await response.json();
        return data.find(country => country.alpha2Code === contryCode);
    } else {
        throw new Error('Some stupid error during country data fetch')
    }
}

const getCurrentLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=9481eca80b8ad6')
    if (response.status === 200) {
        const data = await response.json();
        return data
    } else {
        throw new Error('Some stupid fetch error challenge')
    }

}

const getCurrentCountry = async () => {
    const location = await getCurrentLocation();
    return getCountry(location.country);
}