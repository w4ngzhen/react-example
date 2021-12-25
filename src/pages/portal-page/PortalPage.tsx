import './index.css';
import {Button} from "antd";
import {observer} from "mobx-react-lite";
import stores from "../../stores";

export const PortalPage = observer(() => {
    return (
        <div className={'portal-page'}>
            <p style={{fontSize: '64px'}}>
                This is an example
            </p>
            <Button type={'primary'} style={{width: '200px'}} onClick={() => stores.userStore.clearUserInfo()}>
                Go To Workbench
            </Button>
        </div>
    );
});
