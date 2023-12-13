import { Link, resolvePath, useMatch, useResolvedPath } from "react-router-dom" 
export default function NavBar(){
    return (
    <nav className="nav">

        <Link to="/" className="site-title">SiteName</Link>
        <ul>
            <CustomLink to="/project">Project</CustomLink>
            <CustomLink to="/contact">Contact</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props}){

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname , end: true})
    
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}> {children}</Link>
        </li>
    )
}