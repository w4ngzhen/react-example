import './index.css';
import {Button} from "antd";
import {observer} from "mobx-react-lite";
import rootStore from "../../stores";
import {useNavigate} from "react-router-dom";

export const PortalPage = observer(() => {

    const navigate = useNavigate();
    const goToWorkbench = () => {
        navigate('/workbench');
    }

    return (
        <div className={'portal-page'}>
            <p style={{fontSize: '64px'}}>
                This is an example
            </p>
            {
                rootStore.userStore.hasUserInfo
                    ?
                    (<Button type={'primary'}
                             style={{width: '200px'}}
                             onClick={goToWorkbench}>
                        Go To Workbench
                    </Button>)
                    : <></>
            }
        </div>
    );
});
