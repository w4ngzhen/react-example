import {Menu} from "antd";

export const ExampleAsideContent = () => {
    return (
        <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['2']}
            mode="inline"
            theme="dark"
            style={{height: '100%'}}
        >
            <Menu.Item key="1">
                Option 1
            </Menu.Item>
            <Menu.Item key="2">
                Option 2
            </Menu.Item>
            <Menu.Item key="3">
                Option 3
            </Menu.Item>
        </Menu>
    );
}
