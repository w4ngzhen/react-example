import './index.css';
import {Button} from "antd";
export default function PortalPage() {
    return (
        <div className={'portal-page'}>
            <p style={{fontSize: '64px'}}>
                This is an example
            </p>
           <Button type={'primary'} style={{width: '200px'}}>
               Go To Workbench
           </Button>
        </div>
    );
}
