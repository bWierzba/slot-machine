class Statistics {
    constructor() {
        this.gameResults = [];
    }

    // dodaj gre do tabeli rozegranych gier (potrebne do liczenia statystyk)
    addGameToStatistics(win, bid) {
        let gameResult = {
            win,
            bid
        }
        this.gameResults.push(gameResult)
    }

    //zwróć ilość rozergranych / wygranych / przegranych
    showGameStatistics() {
        let games = this.gameResults.length
        let wins = this.gameResults.filter(result => result.win).length
        let losses = games - wins
        return [games, wins, losses]
    }
}

