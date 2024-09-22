import React from "react";

export default function ChatModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <style>
        {`
          .chat-modal-backdrop {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1050; // Ensure it is above other content
          }

         

          .chat-modal-header {
            
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 20px;
          }

          .chat-modal-title {
            font-size: 1.25rem;
            font-weight: bold;
          }

          .chat-close-btn {
            font-size: 1.25rem;
            background: none;
            border: none;
            cursor: pointer;
          }

          .chat-message, .chat-response {
            background: #f1f1f1;
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
          }

          .chat-input-container {
            display: flex;
            margin-top:50%;
          }

          .chat-input {
            flex-grow: 1;
            border: 1px solid #ccc;
            padding: 10px;
            border-radius: 5px 0 0 5px;
          }

          .chat-send-btn {
            background: #007BFF;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            border-radius: 0 5px 5px 0;
          }
        `}
      </style>
          <div className="chat-modal-header">
            <h2 className="chat-modal-title">Chat with JP EDU TECH</h2>
            <button onClick={onClose} className="chat-close-btn">✖️</button>
          </div>
          <div className="chat-messages">
            <div className="chat-message">
              <p>Hi there, I have a question about immigration.</p>
            </div>
            <div className="chat-response">
              <p>Great! I can help you with that. 👍</p>
            </div>
          </div>
          <div className="chat-input-container">
            <input type="text" className="chat-input" placeholder="Type your message here..." />
            <button className="chat-send-btn">Send</button>
          </div>
    </>
  );
}
