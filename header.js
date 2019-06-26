import React from "react"
import Logo from "./components/logo"
import Search from "./components/search"
import Nav from "./components/nav"
import Login from "./components/login"

function Header() {
    return (
        <div>
            <logo />
            <search />
            <nav />
            <login />
        </div>
    )
}

export default Header