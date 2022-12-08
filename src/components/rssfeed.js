import React from 'react'

export default function RSSFeed(props){

    const feed = props.feed;

    const items = feed.items;

    const listItems = items.map((item) => {
        return (
            <li key={item._id}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p>{item.link}</p>
                <p>{item.pubDate}</p>
            </li>)
    })

    return (
        <div>
            <h1>{feed.title}</h1>
            <h2>{feed.description}</h2>
            <p>{feed.link}</p>
            <ul>{listItems}</ul>
        </div>
    )
}