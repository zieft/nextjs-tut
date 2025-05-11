/**
 * 复杂仪表盘布局组件
 * 根据用户登录状态展示不同的内容
 */
export default function ComplexDashboardLayout({
                                                   children,
                                                   users,
                                                   revenue,
                                                   notifications,
                                                   login
                                               }: {
    children: React.ReactNode // 主要内容区域
    users: React.ReactNode // 用户信息区域
    revenue: React.ReactNode // 收入信息区域
    notifications: React.ReactNode // 通知信息区域
    login: React.ReactNode // 登录页面内容
}) {
    // 用户登录状态标志
    const isLoggedIn = false
    
    // 根据登录状态返回不同的布局
    return isLoggedIn ? (
        <div>
            {/* 主要内容区域 */}
            <div>{children}</div>
            <div style={{display: "flex"}}>
                {/* 左侧栏，包含用户和收入信息 */}
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                {/* 右侧通知区域 */}
                <div style={{display: "flex", flex: 1}}>{notifications}</div>
            </div>
        </div>
    ) : (
        // 未登录状态显示登录页面
        login
    )
}