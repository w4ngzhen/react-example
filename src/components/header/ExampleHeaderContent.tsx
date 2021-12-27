import './index.css';
import logo from '../../assets/img/logo.svg'
import {UserMenu} from "../user-menu/UserMenu";
import {Button, Drawer, Spin} from "antd";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {useContext, useState} from "react";
import {doLogin} from "../../api/api-login";
import {RootStoreContext} from "../../stores";

export const ExampleHeaderContent = observer(() => {

    let rootStore = useContext(RootStoreContext);
    let navigate = useNavigate();
    let [loginDrawerVisible, setLoginDrawerVisible] = useState(false);

    const login = () => {
        // 1 show drawer
        setLoginDrawerVisible(true);
        // 2 invoke login API
        doLogin().then(user => {
            rootStore.userStore.setUserInfo(user)
            setLoginDrawerVisible(false);
        }).catch(err => {
            console.log(err);
        })
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
                            : <Button type={'primary'} onClick={login}>登录</Button>
                    }
                </div>
            </div>
            <Drawer title="Login..."
                    placement="right"
                    onClose={() => {
                    }}
                    visible={loginDrawerVisible}>
                <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Spin tip={'login...'}/>
                </div>
            </Drawer>
        </>
    );
});
