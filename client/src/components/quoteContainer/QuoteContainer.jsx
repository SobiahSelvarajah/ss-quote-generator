import React from 'react';
import QuoteText from '../quoteText/QuoteText';
import QuoteAuthor from '../quoteAuthor/QuoteAuthor';
import QuoteButtons from '../quoteButtons/QuoteButtons';
import './QuoteContainer.scss'

const QuoteContainer = () => {
  return (
    <section className="quoteContainer__container">
      <QuoteAuthor/>
      <QuoteText/>
      <QuoteButtons/>
    </section>
  )
}

export default QuoteContainer