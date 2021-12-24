import {Layout} from "antd";
import { Outlet } from "react-router-dom";

const {Header, Footer, Content} = Layout;

export default function PortalLayout() {
    let headerHeight = '64px';
    let footerHeight = '64px';
    return (
        <Layout style={{height: '100%'}}>
            <Header style={{height: headerHeight}}>
                Header Info
            </Header>
            <Content style={{height: `calc(100% - ${headerHeight} - ${footerHeight})`}}>
                <Outlet/>
            </Content>
            <Footer style={{height: footerHeight}}>
                Footer Info
            </Footer>
        </Layout>
    );
}
