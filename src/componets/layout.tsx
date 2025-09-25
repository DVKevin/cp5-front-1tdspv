import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/add">Nova sessão</Link>
            </nav>
        </div>
        <main>
            <section>
                <Outlet/>
            </section>
        </main>
        </>
    )
}