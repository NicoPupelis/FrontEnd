import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/Sidebar.css";

function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const [channels] = useState(["general", "social", "tareas", "random"]);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Botón para abrir/cerrar sidebar en móviles */}
            <button className="menu-button" onClick={toggleSidebar}>☰</button>

            <aside className={`sidebar ${isOpen ? "show" : ""}`}>
                <h2>Mis Canales</h2>
                <nav>
                    {channels.map((channel) => (
                        <Link key={channel} to={`/chat/${channel}`} className="channel">
                            #{channel}
                        </Link>
                    ))}
                </nav>
                <button className="add-channel">+ Añadir Canal</button>
            </aside>
        </>
    );
}

export default Sidebar;
