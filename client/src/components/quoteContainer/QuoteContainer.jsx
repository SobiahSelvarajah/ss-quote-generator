import React from 'react';
import QuoteText from '../quoteText/QuoteText';
import QuoteAuthor from '../quoteAuthor/QuoteAuthor';
import TwitterButton from '../twitterButton/TwitterButton';
import NewQuoteButton from '../newQuoteButton/NewQuoteButton';

const QuoteContainer = () => {
  return (
    <section className="quoteContainer__container">
      <QuoteText/>
      <QuoteAuthor/>
      <TwitterButton/>
      <NewQuoteButton/>
    </section>
  )
}

export default QuoteContainer