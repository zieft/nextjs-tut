import UserAnalytics from 'path/to/UserAnalytics'
import RevenueMatrics from 'path/to/RevenueMatrics'
import Notifications from 'path/to/Notifications'

export default function ComplexDashboardLayout({
                                                   children,
                                               }: { children: React.ReactNode }) {
    return (
        <>
            <div>{children}</div> {/*Content from page.jsx*/}
            <UserAnalytics /> {/*Content for user analytics*/}
            <RevenueMatrics /> {/*Content for Revenue meetrcs */}
            <Notifications /> {/*Content for notifications */}
        </>
    )
}