import {Layout} from "antd";
import {Outlet} from "react-router-dom";
import {ExampleHeaderContent} from "../header/ExampleHeaderContent";

const {Header, Footer, Content} = Layout;

export const PortalLayout = () => {
    let headerHeight = '64px';
    let footerHeight = '64px';
    return (
        <Layout style={{height: '100%'}}>
            <Header style={{height: headerHeight, backgroundColor: 'white'}}>
                <ExampleHeaderContent/>
            </Header>
            <Content style={{height: `calc(100% - ${headerHeight} - ${footerHeight})`}}>
                <Outlet/>
            </Content>
            <Footer style={{height: footerHeight, backgroundColor: 'white'}}>
                Footer Info
            </Footer>
        </Layout>
    );
};
