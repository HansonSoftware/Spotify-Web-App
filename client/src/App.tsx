import { useEffect, useState } from 'react'
import React from 'react'
import LoginPage from './pages/LoginPage'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'

export default function App() {
    const [token, setToken] = useState("")

    useEffect(() => {
        const hash = window.location.hash
        let token: string | null = window.localStorage.getItem("token")
    
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
        window.location.assign("/")
    }
    
    return (
        token ? 
        <div>
            <Navbar />
            <Dashboard token={token} />
            <div className="flex flex-col items-center pt-4">
                <button className="btn btn-error" onClick={logout}>Logout</button>
            </div>
        </div>
        : 
        <div>
            <LoginPage />
        </div>)
}
