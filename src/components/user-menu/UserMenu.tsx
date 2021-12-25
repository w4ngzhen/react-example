import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {observer} from "mobx-react-lite";
import stores from "../../stores";
import {useNavigate} from "react-router-dom";


export const UserMenu = observer(() => {

    let navigate = useNavigate();
    const menu = (
        <Menu>
            <Menu.Item key={'about'}>
                About
            </Menu.Item>
            <Menu.Item key={'quit'} onClick={() => {
                console.log('click')
                stores.userStore.clearUserInfo();
                // navigate('/');
            }}>
                Quit
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {stores.userStore.userDisplayName} <DownOutlined/>
            </a>
        </Dropdown>
    );
});
