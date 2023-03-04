import React, { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import { Tile } from '../../sc-css/DropDownStyle'
import { ThemeContext } from '../providers/ThemeProvider'
import { StyledMenu } from '../../sc-css/StyledMenu'

export default function PublicMenu() {

    const {darkMode} = useContext(ThemeContext)
    const {subs} = useContext(GlobalContext)  
  
  return (
    <StyledMenu className={`${darkMode}`}>
      hello
      <Tile>Gaming</Tile>
    </StyledMenu>
  )
}
