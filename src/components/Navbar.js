import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

const Navbar = ({selectedSub, handleMenuChange, handleRefreshClick}) => (
    <div style={{ margin: '1rem' }}>
        <Menu pointing secondary>
            <Menu.Item name='javascript' active={selectedSub === 'javascript'} onClick={handleMenuChange} />
            <Menu.Item name='open source' active={selectedSub === 'opensource'} onClick={handleMenuChange} />
            <Menu.Item name='programming' active={selectedSub === 'programming'} onClick={handleMenuChange} />
            <Menu.Menu position='right'>
                <Menu.Item href="http://github.com/ashwinsingh2007/" target="_blank"><Icon name='github' size="large" /></Menu.Item>
            </Menu.Menu>
        </Menu>
    </div>
)

export default Navbar