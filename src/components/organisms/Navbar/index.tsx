import NavbarMenu from "./NavbarMenu";

export default function Navbar() {
    return (
        <section>
            <nav>
                <div>
                    <ul>
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