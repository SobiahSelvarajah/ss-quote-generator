import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import './QuoteText.scss'

const QuoteText = () => {
  return (
    <h2 className="quoteText__text">
      <RiDoubleQuotesL className='quoteText__quote'/>
        Peace begins with a smile.
      <RiDoubleQuotesR className='quoteText__quote'/>
    </h2>    
  )
}

export default QuoteText