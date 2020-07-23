import React from 'react'
import { Menu } from 'antd'
import { NAV_ROUTES } from '../../routes'
import { Link } from 'react-router-dom';
import './Sidebar.scss'

const Sidebar: React.FC = () => {
    // const currentLocation = useLocation();
    const { SubMenu } = Menu;
    const menuLinks = NAV_ROUTES.map((element) => {
        return (
            <SubMenu title={
                <Link to={element.route}>{element.category}</Link>
            }
                key={element.category}>
                {element.examples?.map((example) => {
                    return (
                        <Menu.Item key={example.path}>
                            <Link to={`${element.route}${example.path}`}>{example.title}</Link>
                        </Menu.Item>
                    );
                })}
            </SubMenu>
        );
    });
    return (
        <div className='sidebar'>
            <Menu
                mode="inline"
                style={{ width: 256 }}
            >
                {menuLinks}
            </Menu>
        </div>
    )
}
export default Sidebar