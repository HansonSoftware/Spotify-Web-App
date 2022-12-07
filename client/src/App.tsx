import { useEffect, useState } from 'react'
import LoginPage from './components/LoginPage'
import Dashboard from './components/Dashboard'

export default function App() {
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
    
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
    
            window.localStorage.setItem("token", token)
            window.history.pushState({}, null, '/')
        }
    
        setToken(token)
    
    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
        window.location = "/"
    }
    
    return (
        token ? 
        <div>
            <Dashboard token={token} />
            <div className="flex flex-col items-center pt-4">
                <button className="btn btn-primary" onClick={logout}>Logout</button>
            </div>
        </div>
        : 
        <div>
            <LoginPage />
        </div>)
}
