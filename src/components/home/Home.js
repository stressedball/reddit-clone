import {GlobalContext} from '../providers/GlobalProvider';
import React, {useContext, useEffect, useState} from 'react';
import PostPreview from '../post-preview/PostPreview';
import {ThemeContext} from '../providers/ThemeProvider';
import CreatePostShortcut from '../create-post-shortcut/CreatePostShortcut';
import {ListDiv, MainOutlet} from '../../sc-css/atomic';
import SideContent from './SideContent';

export default function Home() {
    const {subs, posts, subscribedSubs, user} = useContext(GlobalContext);
    const {darkMode} = useContext(ThemeContext);
    const [homePosts, setHomePosts] = useState();
    const [display, setDisplay] = useState('');

    useEffect(() => {
        if (posts && subscribedSubs && subs) {
            setHomePosts(posts.filter((post) => subscribedSubs.includes(post.data.parent)));
        }
    }, [posts, subscribedSubs, subs]);

    useEffect(() => {
        if (user) setDisplay('private');
    }, [user]);

    if (!homePosts && !posts) return <div>Loading home page</div>;

    // make logic to select "random" posts

    // make logic to get user's subscribed subs and display content
    return (
        <MainOutlet>
            <ListDiv className={display}>
                {user ? (
                    <>
                        <CreatePostShortcut />
                        {homePosts ? (
                            homePosts
                                .sort(
                                    (a, b) =>
                                        Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate())
                                )
                                .map((post) => <PostPreview key={post.id} post={post} darkMode={darkMode} />)
                        ) : (
                            <p>Loading content</p>
                        )}
                    </>
                ) : posts ? (
                    posts
                        .sort((a, b) => Date.parse(b.data.timeStamp.toDate()) - Date.parse(a.data.timeStamp.toDate()))
                        .map((post) => <PostPreview key={post.id} post={post} darkMode={darkMode} />)
                ) : (
                    <p>Loading posts</p>
                )}
            </ListDiv>

            <SideContent />
        </MainOutlet>
    );
}
