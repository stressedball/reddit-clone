import React, { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import { Tile } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider'
import { StyledMenu } from '../../sc-css/StyledMenu'

export default function PublicMenu() {

  const { darkMode } = useContext(ThemeContext)
  const { subs } = useContext(GlobalContext)

  return (
    <>
      <Tile>Gaming</Tile>
      <Tile>Watches</Tile>
      <Tile>Programming</Tile>
    </>
  )
}
