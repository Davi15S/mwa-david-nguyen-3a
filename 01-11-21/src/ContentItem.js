import React from 'react'

export const ContentItem = (props) => {
    return (
        <div>
            <p>Content item</p>
            <p>{props.text}</p>
        </div>
    )
}

export default ContentItem;
