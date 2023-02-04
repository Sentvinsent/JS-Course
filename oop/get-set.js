const data = {
    locations: [],
    get location () {
        return this._location
    },
    set location (value) {
        this._location = value.trim();
        this.locations.push(this._location);
    }
}

//code that usees data object

data.location = '    Spain      '
data.location = '    Italy      '
console.log(data.location)
console.log(data.locations)