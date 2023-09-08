import React, { useContext} from 'react'
import { Menu } from '../../storybook/Foundation/Icons/Icons'
import { AppContext } from '../../utilities/context/AppContext'
import getClassNames from '../../utilities/getClassnames'
import Button from '../Button/Button'
import './AppBar.css'
export interface AppBarI {
  connectLeft?: React.ReactNode
  connectRight?: React.ReactNode
  stickyTop?: boolean
  customClass?: string
}

const AppBar = ({ connectLeft, connectRight, stickyTop = true, customClass = "" }: AppBarI) => {

  const context = useContext(AppContext)
  const toggleSideBar = () => {
    context.sideBar[1](!context.sideBar[0])
  }

  return (
    <header
      className={getClassNames({
        'inte-appBar--container': true,
        'inte-appBar--stickyTop': stickyTop,
        [customClass]: customClass
      })}
    >
      {
        <div className='inte-appBar__connectLeft'>
          <div className='inte-appBar__toggleButton'>
            <Button accessibilityLabel='toggle-button' icon={<Menu size={20} />} type={'outlined'} onClick={toggleSideBar} />
          </div>
          {
            connectLeft ?? null
          }
        </div>
      }
      {
        connectRight && <div className='inte-appBar__connectRight'>
          {
            connectRight
          }
        </div>
      }
    </header>
  )
}

export default AppBar