import {Button, Drawer, Spin} from "antd";
import User from "../../types/User";
import {doLogin} from "../../api/api-login";
import {useState} from "react";

interface LoginDrawerProps {
    visible: boolean,
    onLoginComplete: (error?: Error, user?: User) => void
}


export function LoginDrawer(props: LoginDrawerProps) {

    let {visible, onLoginComplete} = props;
    let [loading, setLoading] = useState(false);

    const loginButtonClick = () => {
        setLoading(true);
        doLogin().then(user => {
            setLoading(true);
            onLoginComplete(undefined, user);
        }).catch((err: Error) => {
            setLoading(true);
            onLoginComplete(err);
        })
    }

    return (
        <Drawer title="Login..."
                placement="right"
                onClose={() => {
                }}
                visible={visible}>
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                {
                    loading
                        ? <Spin tip={'login...'}/>
                        : <Button type={'primary'} onClick={() => loginButtonClick()}>Login</Button>
                }
            </div>
        </Drawer>
    );
}
