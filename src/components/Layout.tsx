import React from 'react';
import PostLayout from './PostLayout';
import TabLayout from './TabLayout';
import CardListLayout from './CardListLayout';
import ReactMarkdown from 'react-markdown';

const Layout: React.FC<{ id?: string, doc: any }> = ({ id, doc }) => {
    const layout = doc.attributes?.layout ?? 'none';

    if(layout === 'post') {
        return (
            <PostLayout id={ id } doc={ doc } />
        );
    } else if(layout === 'tab') {
        return (
            <TabLayout id={ id } doc={ doc } />
        );
    } else if(layout === 'card_list') {
        return (
            <CardListLayout id={ id } doc={ doc } />
        );
    } else {
        return (
            <ReactMarkdown source={ doc.body } />
        );
    }
};

export default Layout;