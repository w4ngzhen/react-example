import {Layout} from "antd";
import { Outlet } from "react-router-dom";

const {Header, Sider, Content} = Layout;

export default function HomeLayout() {
    return (
        <Layout style={{height: '100%'}}>
            <Header style={{height: '60px'}}>
                Header Info
            </Header>
            <Content style={{height: 'calc(100% - 60px)'}}>
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
}
