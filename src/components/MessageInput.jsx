import { useState } from "react";
import "../styles/MessageInput.css";

function MessageInput() {
    const [message, setMessage] = useState("");

    const handleSend = () => {
        if (message.trim()) {
            console.log("Mensaje enviado:", message);
            setMessage("");
        }
    };

    return (
        <div className="message-input">
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Escribe un mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
}

export default MessageInput;
