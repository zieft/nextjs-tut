export const Card = ({children}) => {
    // 卡片的样式定义
    const cardStyle = {
        padding: "100px",        // 内边距
        margin: "10px",          // 外边距
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)", // 阴影效果
        border: "1px solid #ddd", // 边框
        display: "flex",         // Flex布局
        justifyContent: "center", // 水平居中
        alignItems: "center",    // 垂直居中
    }

    // 返回带有样式的div，并渲染传入的children内容
    return <div style={cardStyle}>{children}</div>
}

/**
 * Card组件 - 一个简单的卡片容器
 * 接收children属性作为内容
 * @param {React.ReactNode} children - 卡片内部显示的内容
 * @returns {JSX.Element} - 返回一个带有样式的div容器
 */

/**
关于Card组件的名称，它不是规定死的。在React中，组件名称可以自由命名，只需遵循以下规则：
    组件名称必须以大写字母开头（如Card而不是card）
    遵循JavaScript命名规范，通常使用PascalCase（如CardComponent）
你可以将这个组件改名为任何符合规范的名称，如Container、Box或Panel等，只要在导入和使用时保持一致即可。

关于components文件夹的作用：
components文件夹是React项目中常见的目录结构，用于存放可重用的组件。它的主要作用是：
    组织代码结构：将所有UI组件集中在一个目录下，使项目结构更清晰
    提高可重用性：存放可在多个页面或功能中重复使用的组件
    遵循关注点分离原则：将UI组件与逻辑、数据等分开管理
    方便团队协作：不同开发人员可以更容易地找到和理解项目中的组件
这种结构有助于保持代码的可维护性和可扩展性，特别是在大型项目中。
*/