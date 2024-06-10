import React, { useState } from 'react';
import './video-conf-chat.css';

function Video_conf_chat() {
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() === '') return;
        const newMessage = {
            text: inputValue,
            sender: 'user',
        };
        setMessages([...messages, newMessage]);
        setInputValue('');
    };

    return (
        <div className='chat-conf-containter'>
            <div className='chat-containter'>
                <div className='users-img-container'>
                    <img className='user-img' id='' alt='user' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Anonymous_emblem.svg/800px-Anonymous_emblem.svg.png'></img>
                </div>
                <div className='chat-view'>
                    {messages.map((message, index) => (
                        <div
                            key={index}
                            className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}
                        >
                            {message.text}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleMessageSubmit} className="chat-text-form">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder="Введите ваше сообщение..."
                        className="input-message"
                    />
                    <button type="submit" className="send-button">Отправить</button>
                </form>
            </div>
        </div>
    );
}

export default Video_conf_chat;
