class Game {
    constructor(start) {
        this.stats = new Statistics();
        this.wallet = new Wallet(start)
        document.getElementById('start').addEventListener('click', this.startGame.bind(this))
        this.spanWallet = document.querySelector('.wallet')
        this.boards = document.querySelectorAll('.color')
        this.inputBid = document.getElementById('bid')
        this.spanResult = document.querySelector('.result')
        this.spanGames = document.querySelector('.number')
        this.spanWins = document.querySelector('.win')
        this.spanLosses = document.querySelector('.loss')
        this.render();

    }

    render(colors = ['gray', 'gray', 'gray'], money = this.wallet.getWalletValue(), result = '', stats = [0, 0, 0], bid = 0, wonMoney = 0) {
        this.boards.forEach((board, i) => {
            board.style.backgroundColor = colors[i]
        })
        if (result) {
            result = `Wygrałeś ${wonMoney}`
        }
        else if (!result && result !== '') {
            result = `Przegrałeś ${bid}`
        }
        this.spanResult.textContent = result;
        this.spanWallet.textContent = money;
        this.spanGames.textContent = stats[0]
        this.spanWins.textContent = stats[1]
        this.spanLosses.textContent = stats[2]

        this.inputBid.value = ''

    }

    startGame() {
        if (this.inputBid.value < 1) return alert('Kwota, którą chcesz grać jest za mała!')
        const bid = Math.floor(this.inputBid.value);
        if (!this.wallet.checkCanPlay(bid)) {
            return alert('masz za mało kasy lub podałeś nieprawidłową wartość')
        }
        this.wallet.changeWallet(bid, '-')
        this.draw = new Draw();
        const colors = this.draw.drawResult();
        const win = Result.checkWin(colors);
        const moneyWon = Result.moneyWon(win, bid)
        this.wallet.changeWallet(moneyWon)
        this.stats.addGameToStatistics(win, bid)

        this.render(colors, this.wallet.getWalletValue(), win, this.stats.showGameStatistics(), bid, moneyWon)

    }
}

