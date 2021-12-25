import './index.css';
import logo from '../../assets/img/logo.svg'
import UserMenu from "../user-menu/UserMenu";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";

let isLogin = true;

export default function ExampleHeaderContent() {
    let navigate = useNavigate();
    return (
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
                    isLogin ? <UserMenu/>: <Button type={'primary'}>登录</Button>
                }
            </div>
        </div>
    );
}
