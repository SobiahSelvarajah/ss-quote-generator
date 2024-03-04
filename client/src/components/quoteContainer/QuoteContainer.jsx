import React from 'react';
import QuoteText from '../quoteText/QuoteText';
import QuoteAuthor from '../quoteAuthor/QuoteAuthor';

const QuoteContainer = () => {
  return (
    <section className="quoteContainer__container">
      <QuoteText/>
      <QuoteAuthor/>
    </section>
  )
}

export default QuoteContainer