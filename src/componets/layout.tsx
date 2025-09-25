import { Link, Outlet } from "react-router-dom";

export function Layout(){
    return(
        <>
        <div className="min-h-screen bg-gray-100">
            <nav className="bg-white mb-6 shadow">
                <Link to="/" className="text-blue-600 hover:underline font-bold">Home</Link>
                <Link to="/add" className="text-blue-600 hover:underline font-bold " >Nova sessão</Link>
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