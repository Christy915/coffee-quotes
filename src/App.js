import React from 'react';
import './App.css';

export class Quotes extends React.Component {
  coffeeQuotes(){
    alert(`It can help boost energy level.`)
  }
  render() {
    return (
      <div className='App'>
        <h1>Coffee is God!</h1>
        <div>
          <img
            src='https://cdn1.vectorstock.com/i/1000x1000/66/65/i-love-coffee-vector-2076665.jpg' 
            alt='coffeeimage1'
            width='200px'
            height='180px'
            onClick={this.coffeeQuotes}
          />
        </div>
      </div>
    )
  }
}

/*
function App() {
  const handleClick1 = () => {
    alert('It can help boost energy level.')
  }
  const handleClick2 = () => {
    alert('It supports heart health.')
  }
  const handleClick3 = () => {
    alert('It could protect against liver conditions.')
  }
  const handleClick4 = () => {
    alert('It is linked to a lower risk of depression.')
  }
  return (
    <div className="App">
     <h1>Coffee is God!</h1>
     <div>
         <img 
           src='https://cdn1.vectorstock.com/i/1000x1000/66/65/i-love-coffee-vector-2076665.jpg' 
           alt='coffeeimage1'
           width='200px'
           height='180px'
         />
         <button id="Click1" onClick={handleClick1}>why?</button>
     </div>
     <div>
         <img 
           src='http://cdn.shopify.com/s/files/1/0818/7575/articles/2017061310ReasonsIloveCoffee_1024x1024.jpg?v=1564963052' 
           alt='coffeeimage2'
           width='200px'
           height='180px' 
         />
         <button id="Click2" onClick={handleClick2}>why?</button>
     </div>
     <div>
         <img 
           src='https://thumbs.dreamstime.com/z/i-love-coffee-i-love-coffee-glass-cup-close-up-name-i-love-coffee-grey-grunge-background-lots-scattered-coffee-154296562.jpg' 
           alt='coffeeimage3'
           width='200px'
           height='180px' 
          />
          <button id="Click3" onClick={handleClick3}>why?</button>
     </div>
     <div>
         <img 
           src='https://i.etsystatic.com/22467704/r/il/945698/3004299322/il_fullxfull.3004299322_3azs.jpg' 
           alt='coffeeimage4'
           width='200px'
           height='180px' 
         />
         <button id="Click4" onClick={handleClick4}>why?</button>
     </div>

    </div>
  );
}

export default App;
*/
