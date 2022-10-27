let restaurant = {
    rName: "ABS",
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatLeft
    },
    seatParty: function (partySize) {
       if (this.checkAvailability(partySize)) {
        this.guestCount += partySize
        return 'Guests added'
       } else {
        return 'Not enough space'
       }
    },
    removeParty: function(partySize) {
        if (this.guestCount >= partySize) {
            this.guestCount -= partySize
            return 'Guests added'
        } else {
            return 'Guest cant be removed'
        }
    }
}

console.log(restaurant.checkAvailability(50))
restaurant.seatParty(50);
console.log(restaurant.checkAvailability(50))
restaurant.removeParty(30)
console.log(restaurant.checkAvailability(50))