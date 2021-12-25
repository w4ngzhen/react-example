import {Layout} from "antd";
import { Outlet } from "react-router-dom";
import {ExampleHeaderContent} from "../header/ExampleHeaderContent";
import {observer} from "mobx-react-lite";

const {Header, Sider, Content} = Layout;

export const WorkbenchLayout = observer(() => {
    let headerHeight = '64px';
    return (
        <Layout style={{height: '100%'}}>
            <Header style={{height: headerHeight, backgroundColor: 'white'}}>
                <ExampleHeaderContent/>
            </Header>
            <Content style={{height: `calc(100% - ${headerHeight})`}}>
                <Layout style={{height: '100%', width: '100%'}}>
                    <Sider width={'180px'} style={{height: '100%'}}>
                        Side
                    </Sider>
                    <Content style={{height: '100%'}}>
                        <Outlet/>
                    </Content>
                </Layout>
            </Content>
        </Layout>
    );
});
