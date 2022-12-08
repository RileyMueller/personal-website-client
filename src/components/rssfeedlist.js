import React from 'react'
import RSSFeed from './rssfeed'

export default function RSSFeedList({rssfeeds}){
    
    const feeds = !Array.isArray(rssfeeds) ? rssfeeds : rssfeeds.map((feed, index)=>{
        return (
            <div key={feed._id}>
                <RSSFeed feed={feed}/>
            </div>
        )
    });

    return (
        <div>
            {feeds}
        </div>
    )
}