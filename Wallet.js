class Wallet {
    constructor(money) {
        let _money = money;

        //pobieranie info o portfelu
        this.getWalletValue = () => _money;

        //sprawdzanie czy użytkownik może grać

        this.checkCanPlay = value => {
            if (_money >= value) return true
            return false
        }

        //  zmiana ilości pieniędzy w portfelu

        this.changeWallet = (value, type = '+') => {
            if (typeof value === 'number' && !isNaN(value)) {
                if (type === '+') {
                    return _money += value
                }
                else if (type === '-') {
                    return _money -= value
                }
                else {
                    throw new Error('nieprawidowy typ działania')
                }
            }
            else {
                console.log(typeof value);
                throw new Error('nieprawidłowa liczba')
            }
        }
    }
}

