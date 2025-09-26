import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
        <div className="flex bg-black p-4 text-white items-center justify-center border">
            <nav className="flex flex-row gap-x-10 text-lg">
                <Link to="/" className="hover:text-blue-500">Home</Link>
                <Link to="/add" className="hover:text-blue-500 " >Nova sessão</Link>
            </nav>
        </div>
        <main className="flex flex-col justify-center items-center px-4 w-full">
            <section>
                <Outlet/>
            </section>
        </main>
        </>
    )
}