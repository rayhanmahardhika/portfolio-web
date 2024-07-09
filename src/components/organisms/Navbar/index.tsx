import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
    return (
        <section>
            <nav className="px-4 py-4 bg-green-700">
                <div>
                    <ul className="flex justify-end">
                        <NavbarMenu />
                        <NavbarMenu />
                        <NavbarMenu />
                        <NavbarMenu />
                    </ul>
                </div>
            </nav>
        </section>
    )
}