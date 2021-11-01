import { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
          {
            id: 1,
            img:'',
            status: false
          },
          {
            id: 2,
            img:'',
            status: false
          },
          {
            id: 3,
            img:'',
            status: false
          },
          {
            id: 4,
            img:'',
            status: false
          },
          {
            id: 5,
            img:'',
            status: false
          },
          {
            id: 6,
            img:'',
            status: false
          }
        ],
      cardOrderData: [
          {
            id: 1,
            status: false
          },
          {
            id: 2,
            status: false
          },
          {
            id: 3,
            status: false
          },
          {
            id: 4,
            status: false
          },
          {
            id: 5,
            status: false
          },
          {
            id: 6,
            status: false
          }
        ]
    }
  }

  doActiveCard = (index) => {
    let listCard = [...this.state.cardData];
    listCard.map((l, i) => {
      if(i !== index) {
        l.status = false
      }
      return l
    })
    listCard[index]['status'] = !listCard[index]['status'];
    this.setState({cardData: listCard})
  }

  randomNumber () {
    let rand = Math.random() * (100) + 100;
    let string = rand.toString()
    let result = string.substring(0,3)
    return result
  }

  populateImage = () => {
    let listCard = [...this.state.cardData];
    listCard.map((l) => {
      let num = this.randomNumber()
      l.img = `http://placekitten.com/${num}/${num}`;
      return l
    })
    this.setState({cardData: listCard})
  }

  addMoreCard () {
    const id = this.state.cardData.length + 1
    this.setState({
      cardData: [...this.state.cardData, {
        id,
        img:'',
        status: false}]
    })
  }

  render() {
    console.log('img', this.state.cardData)
    return (
      <div>
      <div className='card-display-grid'>
        {this.state.cardData.map((card, index) => 
          <div>
            {card.status ? (
              <div
                key={card.id}
                className='card-status-active'
                onClick={() => this.doActiveCard(index)}
                >
                {card.img !== '' &&
                  <img
                  className='card-image'
                  src={card.img}
                  />
                }
                {card.id}
                <div className='card-order-display-grid'>
                  {this.state.cardOrderData.map((card) => 
                    <div
                    key={card.id}
                    className='card-order'
                    onClick={() => this.doActiveCard(index)}
                    >
                      {card.id}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div
                key={card.id}
                className='card-status-inactive'
                onClick={() => this.doActiveCard(index)}
                >
                {card.id}
              </div>
            )}
          </div>
        )}
      </div>
        <button
          className='populate-button'
          onClick={() => this.populateImage()}>Populate</button>
        <button
          className='addcard-button'
          onClick={() => this.addMoreCard()}>Add More Card</button>
      </div>
    )
  }
}
export default (Main);