import React, {useContext} from 'react';
import {GlobalContext} from '../providers/GlobalProvider';
import {HorizontalFlex, MenuSmallTitles, SVGStyled, Tile} from '../../sc-css/atomic';
import {ThemeContext} from '../providers/ThemeProvider';
import {useState} from 'react';
import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import SmallArrow from '../multi-usage/SVGs/SmallArrow';

export default function PublicMenu() {
    const {darkMode} = useContext(ThemeContext);
    const {topics, subs} = useContext(GlobalContext);

    if (!topics) return;

    return (
        <>
            <MenuSmallTitles>TOPICS</MenuSmallTitles>
            {topics.map((topic) => {
                return <Topic topic={topic} darkMode={darkMode} subs={subs} key={topic.id} />;
            })}
        </>
    );
}

function Topic({topic, darkMode, subs}) {
    const navigate = useNavigate();
    const [display, setDisplay] = useState(false);
    const [topicSubs, setTopicSubs] = useState();
    const [rotate, setRotate] = useState();

    useEffect(() => {
        setTopicSubs(subs.filter((sub) => sub.data.topic === topic.id));
    }, []);

    useEffect(() => {
        if (display) setRotate('reverse');
        else setRotate();
    }, [display]);

    return (
        <div>
            <Tile
                style={{justifyContent: 'space-between'}}
                className={`${darkMode} public`}
                onClick={() => {
                    setDisplay(!display);
                }}
            >
                <HorizontalFlex>
                    <SVGStyled className={`${darkMode}`} style={{marginRight: '4px'}}>
                        {/* <path style={{ stroke: "none" }} clipRule="evenodd" d="M9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6V8.8L3.01391 15.1889C2.37306 15.7016 2 16.4777 2 17.2984C2 18.7905 3.20953 20 4.70156 20H19.2984C20.7905 20 22 18.7905 22 17.2984C22 16.4777 21.6269 15.7016 20.9861 15.1889L13 8.8V6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6V7C7 7.55228 7.44772 8 8 8C8.55228 8 9 7.55228 9 7V6ZM4.2633 16.7506L12 10.5612L19.7367 16.7506C19.9031 16.8837 20 17.0853 20 17.2984C20 17.6859 19.6859 18 19.2984 18H4.70156C4.3141 18 4 17.6859 4 17.2984C4 17.0853 4.09688 16.8837 4.2633 16.7506Z" fillRule="evenodd" /> */}
                    </SVGStyled>
                    <p style={{textTransform: 'capitalize', fontWeight: '500', margin: '0'}}>{topic.data.name}</p>
                </HorizontalFlex>

                <SmallArrow darkMode={darkMode} className={rotate} />
            </Tile>

            {display
                ? topicSubs.map((sub) => {
                      return (
                          <Tile
                              style={{marginLeft: '42px'}}
                              className={`${darkMode} public`}
                              key={sub.id}
                              onClick={() => navigate(`r/${sub.id}`)}
                          >
                              {sub.data.name}
                          </Tile>
                      );
                  })
                : null}
        </div>
    );
}
