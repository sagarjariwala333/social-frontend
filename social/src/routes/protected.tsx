import LoginPage from "@/pages/login";
import { useAppSelector } from "@/redux/hook";
import { ReactNode } from "react"
interface IProps {
    children: ReactNode;
}

const ProtectedRoute = ({ children } : IProps) => {
    const auth = useAppSelector(state => state.Auth)

    if (!auth.isAuthenticate) {
        return <LoginPage />
    }

    return children
}

export default ProtectedRoute