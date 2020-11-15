import React from 'react'

const Sentiment = ({sentiment}) => {

    if (sentiment) {
        return <p>Sentiment: {sentiment}</p>
    } else {
        return null
    }
}

export default Sentiment