import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/Chat.css";
import React from "react";
import API from "../services/api";
import Message from "../components/Message";

const ChatPage = () => {
    const { id } = useParams(); // Obtiene el canal desde la URL

    // Estado de mensajes
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    // Cargar mensajes al cargar el componente
    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await API.get(`/mensajes/${id}`);
                setMessages(response.data);
            } catch (error) {
                console.error("❌ Error al obtener los mensajes:", error);
            }
        };

        fetchMessages();
    }, [id]);

    // Función para enviar mensaje
    const handleSendMessage = async () => {
        if (newMessage.trim() === "") return;
    
        try {
            const usuario = "UsuarioPrueba"; // Simulando usuario autenticado
            const mensajeData = { canal: id, usuario, texto: newMessage };

            console.log("📨 Enviando mensaje:", mensajeData);

            const response = await API.post("/mensajes", mensajeData, {
                headers: { "Content-Type": "application/json" }
            });

            setMessages((prevMessages) => [...prevMessages, response.data]);
            setNewMessage("");
        } catch (error) {
            console.error("❌ Error al enviar el mensaje:", error);
        }
    };
    
    return (
        <div className="chat-container">
            <div className="chat-header">
                <h2>Canal: #{id}</h2>
            </div>
            <div className="chat-messages">
                {messages.length === 0 ? (
                    <p className="no-messages">No hay mensajes en este canal.</p>
                ) : (
                    messages.map((msg, index) => (
                        <Message
                            key={index}
                            user={msg.usuario}
                            content={msg.texto}
                            timestamp={new Date(msg.timestamp).toLocaleTimeString()}
                        />
                    ))
                )}
            </div>
            <div className="chat-input-container">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Escribe un mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button className="chat-send-btn" onClick={handleSendMessage}>
                    Enviar
                </button>
            </div>
        </div>
    );
};

export default ChatPage;
