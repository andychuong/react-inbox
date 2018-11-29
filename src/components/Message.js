import React from 'react'
import Label from './Label'

const Message = ( {message} ) => {
  let read = message.read ? "read" : "unread";
  let selected = message.selected ? "selected" : "unselected";
  let starred = message.starred ? "fa-star" : "fa-star-o";

  return (
    <div class={`row message ${read} ${selected} textLeft`}>
      <div class="col-xs-1">
        <div class="row">
          <div class="col-xs-2">
            <input type="checkbox" checked="checked" />
          </div>
          <div class="col-xs-2">
            <i class={`star fa ${starred}`}></i>
          </div>
        </div>
      </div>
      <div class="col-xs-11">
      {/* Labels */}
      <Label labels={message.labels}/>
        <a href="#">
          {message.subject}
    </a>
      </div>
    </div>
  )
}

export default Message