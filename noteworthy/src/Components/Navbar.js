export default function Navbar() {
return <nav className = "nav">
    <a href = "/" className= "site-title">NoteWorthy</a>
    <ul>
        <li>
            <a href = "/logout">Logout</a>
            </li>
            <li>
            <a href = "/user">User</a>
        </li>
    </ul>
</nav>

}