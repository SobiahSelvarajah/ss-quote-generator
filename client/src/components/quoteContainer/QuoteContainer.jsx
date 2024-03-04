import React from 'react';
import QuoteText from '../quoteText/QuoteText';
import QuoteAuthor from '../quoteAuthor/QuoteAuthor';
import QuoteButtons from '../quoteButtons/QuoteButtons';

const QuoteContainer = () => {
  return (
    <section className="quoteContainer__container">
      <QuoteText/>
      <QuoteAuthor/>
      <QuoteButtons/>
    </section>
  )
}

export default QuoteContainer