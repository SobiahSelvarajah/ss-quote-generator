import React from 'react'
import TwitterButton from '../twitterButton/TwitterButton'
import NewQuoteButton from '../newQuoteButton/NewQuoteButton'
import './QuoteButtons.scss'

const QuoteButtons = () => {
  return (
    <div className="quoteButtons__container">
        <TwitterButton/>
        <NewQuoteButton/>
    </div>
  )
}

export default QuoteButtons