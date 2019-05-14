var quotes = [
  'You did not come this far and work this hard to give up now -Yasmin Abdulhadi',
  'To Whom Much is Given Much is Expected',
  'It is better to fail in originality than to succeed in imitation.',
  'The road to success and the road to failure are almost exactly the same.',
  'Success usually comes to those who are too busy to be looking for it.'
]
function newQuote() {
  var randomNumber= Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
