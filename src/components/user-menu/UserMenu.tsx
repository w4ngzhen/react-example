import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";
import rootStore from "../../stores";

export const UserMenu = observer((props) => {
    let navigate = useNavigate();
    const menu = (
        <Menu>
            <Menu.Item key={'about'}>
                About
            </Menu.Item>
            <Menu.Item key={'quit'} onClick={() => {
                rootStore.userStore.clearUserInfo();
                navigate('/');
            }}>
                Quit
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                {rootStore.userStore.userDisplayName} <DownOutlined/>
            </a>
        </Dropdown>
    );
});
