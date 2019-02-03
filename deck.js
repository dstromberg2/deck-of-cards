// Usage
// var deck = new Deck();
// var cards = deck.getCards(2);

function Deck() {
    this.cards = [];
    this.shuffle = function() {
        var j, x, i;
        for (i = this.cards.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.cards[i];
            this.cards[i] = this.cards[j];
            this.cards[j] = x;
        }
    }
    for (suit = 4; suit > 0; suit--) {
        for (rank = 13; rank > 0; rank--) {
            this.cards.push({
                suit: suit,
                rank: rank
            });
        }
    }
    this.getCards = function(number) {
        if (typeof number === 'undefined') number = 1;
        var returnCards = [];
        for (var i = number; i > 0; i--) {
            returnCards.push(this.cards.pop());
        }
        return returnCards;
    }
    this.getCard = function() {
        return this.getCards(1);
    }
    this.shuffle();
}
