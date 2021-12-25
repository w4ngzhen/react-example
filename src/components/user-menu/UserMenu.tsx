import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';

const menu = (
    <Menu>
        <Menu.Item key={'about'}>
            About
        </Menu.Item>
        <Menu.Item key={'quit'}>
            Quit
        </Menu.Item>
    </Menu>
);

export default function UserMenu() {
    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                UserName/UserId <DownOutlined/>
            </a>
        </Dropdown>
    );
}
