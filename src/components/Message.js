import React from 'react'

const Message = ( {message} ) => {
  return (
    <div className="row message read">
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" />
          </div>
          <div className="col-xs-2">
            <i className="star fa fa-star"></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11 message-sub">
        <a href="index.html">
          {message.subject}
        </a>
      </div>
    </div>
  )
}

export default Message