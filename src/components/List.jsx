import React from 'react';
import Video from './Video';
import Article from './Article';
import check from './check';

const VideoPopularOrNew = check(Video);
const ArticlePopularOrNew = check(Article);

export default function List(props) {
    return props.list.map(item => {
        switch (item.type) {
            case 'video':
                return (
                    <VideoPopularOrNew key={item.url} {...item} />
                    // <Video {...item} />
                );

            case 'article':
                return (
                    <ArticlePopularOrNew key={item.title} {...item} />
                );
        }
    });
};
