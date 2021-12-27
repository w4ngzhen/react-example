import './index.css';
import {Button} from "antd";
import {observer} from "mobx-react-lite";

export const PortalPage = observer(() => {

    const goToWorkbench = () => {

    }

    return (
        <div className={'portal-page'}>
            <p style={{fontSize: '64px'}}>
                This is an example
            </p>
            <Button type={'primary'}
                    style={{width: '200px'}}
                    onClick={() => {
                    }}
            >
                Go To Workbench
            </Button>
        </div>
    );
});
