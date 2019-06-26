import React from "react"
import Logo from "./logo"
import Search from "./search"
import Nav from "./nav"
import Login from "./login"

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