import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { HorizontalFlex } from "../../sc-css/atomic";
import UserAvatar from "../multi-usage/UserAvatar";
import { GlobalContext } from "../providers/GlobalProvider";
import styled from "styled-components";

export default function UserSideContent() {

    const location = useLocation().pathname.split('/')
    const { users, user, subs } = useContext(GlobalContext)
    const [userData, setUserData] = useState()

    useEffect(() => {
        document.querySelector('#div-styled-query').style.width = '690px';
        return () => document.querySelector('#div-styled-query').style.width = '100%';
    }, [])

    useEffect(() => {
        if (users) { setUserData(users.filter(user => user.id === location[2])[0]) }
    }, [users, location])

    if (userData === undefined || user === undefined || subs === undefined) return null

    return (
        <div>
            <HorizontalFlex style={{ margin: "auto", height: "auto", width: "calc(100% - 100px)" }}>
                <UserAvatar user={userData} />
            </HorizontalFlex>

            <div style={{ textAlign: "center" }}>
                <h1 style={{ margin: "8px 0", fontSize: "22px", fontWeight: "400" }}>{userData.data.userName}</h1>
                <p style={{ fontSize: "12px", fontWeight: "500", color: '#7c7c7c', margin: "4px 0" }}>u/{userData.data.userName} &middot; </p>
            </div>

            <HorizontalFlex>
                <div style={{ width: "50%" }}>
                    <h5 style={{ fontSize: "14px", fontWeight: "700", margin: "0" }}>Cake day</h5>
                    <p style={{ marginTop: "2px", fontSize: "12px", fontWeight: "500", color: '#7c7c7c' }}>{userData.data.dateCreation.toDate().toDateString()}</p>
                </div>
                <div style={{ width: "50%" }}>
                    {userData.data.status ? <p>Status: {userData.data.status}</p> : null}
                </div>
            </HorizontalFlex>

            {
                user.id === location[2] ?
                    <p>based</p>
                    :
                    <p>oups</p>
            }

            {
                subs.map(sub => {
                    return sub.data.creator === userData.id ?
                        <p key={sub.id}>Creator of {sub.data.name}</p>
                        : null
                })
            }
        </div>
    )
}

const StyledDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    justify-content:center;
`
