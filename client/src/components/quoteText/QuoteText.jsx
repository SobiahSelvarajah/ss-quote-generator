import React from 'react'
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

const QuoteText = () => {
  return (
    <h2 className="quoteText__text">
      <RiDoubleQuotesL/>
        Peace begins with a smile.
      <RiDoubleQuotesR/>
    </h2>    
  )
}

export default QuoteText