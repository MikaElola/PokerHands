import React, { Component } from 'react';

class Analyst extends Component {
    constructor(props) {
        super(props)
        this.state= {
            hand1Results : [
                {
                    parit : 0                
                },
                {
                    vari: false
                },
                {
                    suora : false
                },
                {
                    korkein : 0                
                },
            ],
            hand2Results : [],
            hand3Results : [],
        };
    }

    readhand = () => {
        if(this.props.hand1.length === 0){
            return;
        }
        var anaHand = [];
        var vari = false;
        var parit = 0;
        var reds = 0;
        var blacks = 0;
        var j = 1;
        var suora = 0; //4 = suora
        anaHand = this.props.hand1;
        //pää while käydään jokanen käsi läpi
        while(j < 4){
            vari = false;
            suora = 0;
            parit = 0;
            reds = 0;
            blacks = 0;
            var highest = anaHand.sort(function(card, cardb){return card.number - cardb.number});
            anaHand.forEach(card => {
        
            let i = 0;
            let compCard = card
        //while jokaselle kortille kädessä näitä vois rikkoa omiks funktioiksi... 
        while(i < 5){
            //console.log(compCard.number + " " + card.color + " " + card.suit); 
            if (compCard === anaHand[i]){
                //console.log("break; " + i + compCard.number + compCard.suit + anaHand[i].number + anaHand[i].suit )
                    break;
                }else if(compCard.number === anaHand[i].number){
                    //console.log("pari..." + compCard.number + " " + anaHand[i].number) 
                    parit++;
                    }else if(compCard.number + 1 === anaHand[i].number || compCard.number - 1 === anaHand[i].number  ){
                        suora++;
                        //console.log("Seuraava numero löytyy kädestä")
                    }
            i++
        }
        if(card.color === 'Red' && card.color === anaHand[i].color){
            reds++;
            }else if(card.color === 'Black' && card.color === anaHand[i].color){
                blacks++;
            }
        });
        //asetetaan tulokset kuhunkin käteen ja siirrytään seuraavaan käteen
        if(anaHand == this.props.hand1){
            var result = {
                parit: 0,
                suora: false,
                vari: false,
                korkein: 0
            };
            if(reds == 5  || blacks == 5){
                result.vari = true;
            }if(parit > 0){
                result.parit = parit;
            }if(suora == 4){
                result.suora = true;
            }
            result.korkein = highest[4].number;
            this.setState({
                hand1Results : result
            });
            if(this.props.hand2.length === 0){
                return;
            }
            anaHand = this.props.hand2
        }else if(anaHand == this.props.hand2){
            var result = {
                parit: 0,
                suora: false,
                vari: false,
                korkein: 0
            };
            if(reds == 5  || blacks == 5){
                result.vari = true;
            }if(parit > 0){
                result.parit = parit;
            }if(suora == 4){
                result.suora = true;
            }
            result.korkein = highest[4].number;
            this.setState({
                hand2Results : result
            });
            if(this.props.hand3.length === 0){
                return;
            }
            anaHand = this.props.hand3
        }else if(anaHand == this.props.hand3){
            var result = {
                parit: 0,
                suora: false,
                vari: false,
                korkein: 0
            };
            if(reds == 5  || blacks == 5){
                result.vari = true;
            }if(parit > 0){
                result.parit = parit;
            }if(suora == 4){
                result.suora = true;
            }
            result.korkein = highest[4].number;
            this.setState({
                hand3Results : result
            });
        }
        j++;
        //console.log("Varit punasia:  " + reds + " Mustia: " + blacks + " Parit: " + parit + " Suora: " + suora + " Highest: " + highest[4].number) 
    }
};
//konditionaali render if not null results jne
    render(){

        return(
            <div>
                    <button className="analysoi" onClick={this.readhand}>Analysoi</button>
                    <div className="results-container">
                   <div>
                   <h3>Hand1 </h3>
                   <p>Pareja: {this.state.hand1Results.parit ? this.state.hand1Results.parit : ''}</p>
                   <p>Väri: {this.state.hand1Results.vari ? 'Löytyy' : ''}</p>
                   <p>Suora: {this.state.hand1Results.suora ? 'Löytyy' : ''}</p>
                   <p className="korkein">Korkein: {this.state.hand1Results.korkein ? this.state.hand1Results.korkein : ''}</p>
                   </div>
                   <div>
                   <h3>Hand2 </h3>
                   <p>Pareja: {this.state.hand2Results.parit ? this.state.hand2Results.parit : ''}</p>
                   <p>Väri: {this.state.hand2Results.vari ? 'Löytyy' : ''}</p>
                   <p>Suora: {this.state.hand2Results.suora ? 'Löytyy' : ''}</p>
                   <p>Korkein: {this.state.hand2Results.korkein ? this.state.hand2Results.korkein : ''}</p>
                   </div>
                    <div>
                   <h3>Hand3 </h3>
                   <p>Pareja: {this.state.hand3Results.parit ? this.state.hand3Results.parit : ''}</p>
                   <p>Väri: {this.state.hand3Results.vari ? 'Löytyy' : ''}</p>
                   <p>Suora: {this.state.hand3Results.suora ? 'Löytyy' : ''}</p>
                   <p>Korkein: {this.state.hand3Results.korkein ? this.state.hand3Results.korkein : ''}</p>
                   </div>
                </div>

            </div>
        );
    }
}

export default Analyst;