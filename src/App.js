import './App.css';

function App() {
  const handleClick1 = () => {
    alert('It can lead to addiction.')
  }
  const handleClick2 = () => {
    alert('It can disrupt sleep.')
  }
  const handleClick3 = () => {
    alert('It has bloodpressure-raising effects.')
  }
  const handleClick4 = () => {
    alert('It can lead to anxiety.')
  }
  return (
    <div className="App">
     <h1>Coffee is Bad!</h1>
     <div>
         <img 
           src='https://media.makeameme.org/created/i-hate-coffee-ab3dd0c43f.jpg' 
           alt='coffeeimage1'
           width='200px'
           height='180px'
         />
         <button id="Click1" onClick={handleClick1}>why?</button>
     </div>
     <div>
         <img 
           src='https://www.bulletproof.com/wp-content/uploads/2014/02/bad-coffee.jpg' 
           alt='coffeeimage2'
           width='200px'
           height='180px' 
         />
         <button id="Click2" onClick={handleClick2}>why?</button>
     </div>
     <div>
         <img 
           src='https://img.livestrong.com/375/media-storage/contentlab-data/7/1/17f7761e1d3c473b91fc1528b9772db3.jpg' 
           alt='coffeeimage3'
           width='200px'
           height='180px' 
          />
          <button id="Click3" onClick={handleClick3}>why?</button>
     </div>
     <div>
         <img 
           src='https://previews.123rf.com/images/red33/red331209/red33120900034/15481763-%E5%8E%84%E4%BB%8B%E3%81%AA%E5%B9%B3%E5%9D%87%E6%82%AA%E3%81%84%E3%82%B3%E3%83%BC%E3%83%92%E3%83%BC-%E3%82%AB%E3%83%83%E3%83%97-%E3%83%99%E3%82%AF%E3%83%88%E3%83%AB-%E3%82%A4%E3%83%A9%E3%82%B9%E3%83%88-%E3%82%A2%E3%83%BC%E3%83%88.jpg' 
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
