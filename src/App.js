import {useState, useEffect} from 'react'

function App() {

  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  useEffect(() => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then((quote) => {
      setQuote(quote.content)
      setAuthor(quote.author)

    })
  }, [] );

  const changeQuotes = () => {
    fetch('https://api.quotable.io/random')
    .then(res => res.json())
    .then((quote) => {
      setQuote(quote.content)
      setAuthor(quote.author)
     } )
    }
      

  return (
    <div className="app">
      <div className='container'>
      <div className='quote-container'>
        <h2>{quote}</h2>
      <p>- {author}</p>
      </div>
      </div>
      
      <div className='btn-container'>
         <button onClick={changeQuotes}>Generate</button>
      </div>
      
      
    </div>
  );
}

export default App;
