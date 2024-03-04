import React from 'react';
import QuoteText from '../quoteText/QuoteText';
import QuoteAuthor from '../quoteAuthor/QuoteAuthor';
import TwitterButton from '../twitterButton/TwitterButton';

const QuoteContainer = () => {
  return (
    <section className="quoteContainer__container">
      <QuoteText/>
      <QuoteAuthor/>
      <TwitterButton/>
    </section>
  )
}

export default QuoteContainer