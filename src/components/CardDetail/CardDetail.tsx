import React from 'react'

import './CardDetail.scss'

interface CardDetailProps {
    cardDetailHeader: string,
    cardDetailContent: string|undefined,
    isLink: boolean,
    cardDetailLink?: string
}

const CardDetail = ({cardDetailHeader, cardDetailContent, isLink, cardDetailLink}:CardDetailProps) => {
  return (
    <div className='card-detail'>
        <p className='card-detail__header'>{cardDetailHeader}</p>
          {isLink ?
              <a className='card-detail__content' target="_blank" href={cardDetailLink} rel="noreferrer">{cardDetailContent}</a> :
              <p className='card-detail__content'>{cardDetailContent}</p>}
    </div>
  )
}

export default CardDetail