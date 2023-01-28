alert("lets play game of war! here the rules there are two players.The player with the highest card values wins the game. Remember the game is play in the console log!!!!!!!")


///here is my suit and card values  variables 
const suits = ["ace", "heart", "diamond", "spade"]                                                                           
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]                                                  
////////here are variables to help with player and player2 to help with score/////
let user1score = 26;                                                                                        
let user2score = 26;                                                                                        
//////here is my deck class that holds a good portion properties for my deck///
class Deck{                                                                                                  
    constructor(cards = createFreshDeck()){                                                                  
    this.cards = cards
    }

    get numberOfCards(){                                                                                     
        return this.cards.length
    }


  //////this is my shuffle method which shuffle the deck and return random cards to  player & player2 using  a for loop and a array for the cards.
    shuffle(){                                                                                               
        for(let i = this.numberOfCards -2; i > 0; i--){                                                      
            const newIndex = Math.floor(Math.random() * (i + 1))                                             
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}
////////////the card class holds all the card what need for the cards.The class holds(suit, value properites)
class Card{                                                                                                  
    constructor(suit, value){                                                                                
        this.suit = suit
        this.value = value
    }
}
///////////// the fresh deck function takes both arrays and goes through them and combine them to make 52 cards////
function createFreshDeck(){                                                                                  
    return suits.flatMap(suit =>{                                                                            
        return values.map(value =>{                                                                          
            return new Card(suit, value)
        })
    })
    
}////////creates a const variable for the new deck/////than plays the shuffle function on the a fresh deck of cards////than print it to the console.
const deck = new Deck()                                                                                      
deck.shuffle()                                                                                              
console.log(deck);                                                                                           
////////this is the game class that holds what needed to start the game////////
class StartGame{                                                                                            
    constructor(playerDeck, playerCard, playerdeck2, playerCard2){
    this.playerDeck = playerDeck
    this.playerCard = playerCard
    this.playerdeck2 = playerdeck2
    this.playerCard2 = playerCard2
    }

////////////// this is the start game method. This runs when the start method is called .Than begins to shuffle the deck////
    startGame(){                                                                                            
        const deck = new Deck()                                                                              
        deck.shuffle()                                                                                      
        
        ///////////this creates deck for player&player2 deck//// takes deck and splits it in half 
        const deckMidpoint = Math.ceil(deck.numberOfCards / 2)                                              
        this.playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))                                       
        this.playerdeck2 = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))                     
        
        /////this is player&player2 deck and return the end of the deck/////
        this.playerCard = new Deck(deck.cards.pop())                                                      
        this.playerCard2 = new Deck(deck.cards.pop())                                                       
        ///////////this loops through all the players decks and console.log cards/////
        for(let i = 0; i < 26; i++){                                                                        
            console.log("#", i,"PlayerCard", this.playerDeck.cards[i].value)                                 
            console.log("#", i,"playerCard2", this.playerdeck2.cards[i].value)                             
            this.score(this.playerDeck.cards[i].value,this.playerdeck2.cards[i].value)                      
        }///////////////display user1score& user2score//////////
        console.log("Player  Score:",user1score);                                                           
        console.log("player2 Score:", user2score);                                                          
        this.winner(user1score,user2score)                                                                  
    }                                                                                                             
    
    
/////////////this is the score method console log  player and player 2 cards//////
    score(playerCard ,playerCard2){                                                                                              
        console.log(playerCard, playerCard2)                                                                
        if(playerCard > playerCard2){                                                                       
            user1score++;                                                                                   
            user2score--;                                                                                    
            console.log("Player Wins game!","Player Score:", user1score, "player2 Score:", user2score);        
            
        }else if(playerCard2 > playerCard){                                                                 
                user2score++;                                                                                
                user1score--;                                                                                
                console.log("player2 Wins!","Player Score:", user1score, "player2 Score:", user2score);   
        }else{console.log("DRAW!","Player Score:", user1score, "player2 Score:", user2score);}             
    }   /////////////this if else statement increase and decrease player & player2 score ///// console.log to show if user is winner loser or draw!                                                                                                     
        
   winner(user1score,user2score){                                                                            
    if(user1score > user2score){                                                                             
    console.log("Player  has Won the War!")                                                                 
    }else if(user1score === user2score){                                                                     
        console.log("This Game was a Draw!")                                                                 
    }else {console.log("player2 has Won the War!")}                                                        
   }////////////////////////////////this is the winner method gives final score for player and player2 and console log the winner
}

let Game = new StartGame();                                                                           
Game.startGame()                                                                                             
console.log(Game);                      
/////////////creates a variable from game to start game which prints out the entire game to console.



////////for unit testing still working/////
function allCards(suits,values){                                                                                              
    if(suits != suits){                                                                                      
        throw new Error("Suit must be " + 'ace', 'diamond' ,'heart' ,'spade')
    }  
    return suits + values;

}


