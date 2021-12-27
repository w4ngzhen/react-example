import './index.css';
import logo from '../../assets/img/logo.svg'
import {UserMenu} from "../user-menu/UserMenu";
import {Button, Drawer, Spin} from "antd";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useState} from "react";
import rootStore from "../../stores";
import {LoginDrawer} from "../login/LoginDrawer";
import User from "../../types/User";

// React集成mobx：
// 5. 使用observer包装使用了store的函数组件；使用useContext获取store；在合适的位置get或触发action
export const ExampleHeaderContent = observer(() => {

    let navigate = useNavigate();
    let [loginDrawerVisible, setLoginDrawerVisible] = useState(false);

    const loginButtonClick = () => {
        setLoginDrawerVisible(true);
    }

    const onLoginComplete = (err?: Error, user?: User) => {
        if (err) {
            setLoginDrawerVisible(false);
            return;
        }
        rootStore.userStore.setUserInfo(user);
        setLoginDrawerVisible(false);
    }

    return (
        <>
            <div className={'example-header-content'}>
                <div className={'example-header-content__image'}>
                    <img src={logo} alt={''}/>
                </div>
                <div className={'example-header-content__title'}>
                    <p onClick={() => {
                        navigate('/');
                    }}>
                        React Example
                    </p>
                </div>
                <div className={'example-header-content__blank'}>
                    {/* 这里是空白内容 */}
                </div>
                <div className={'example-header-content__user-menu'}>
                    {
                        rootStore.userStore.hasUserInfo
                            ? <UserMenu/>
                            : <Button type={'primary'} onClick={loginButtonClick}>登录</Button>
                    }
                </div>
            </div>
            <LoginDrawer visible={loginDrawerVisible}
                         onLoginComplete={
                             (err, user) => onLoginComplete(err, user)
                         }/>
        </>
    );
});
