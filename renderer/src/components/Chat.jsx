import './../styles/style.css';
import './styles/chat.css';
import { FaPaperPlane } from "react-icons/fa";

function Chat() {
    return (
        <div className="chat-container">

            {/* Messages */}
            <div className="chat-messages no-scrollbar">

                {/* AI Message */}
                <div className="chat-msg received">
                    <span className="msg-tag nova">NOVA</span>
                    <span className="msg-text">
                        Hello. I’m online and ready to assist you.
                    </span>
                    <span className="msg-time">23:41 · 02 Feb</span>
                </div>

                {/* User Message */}
                <div className="chat-msg sent">
                    <span className="msg-tag you">YOU</span>
                    <span className="msg-text">
                        Open my notes and summarize them.
                    </span>
                    <span className="msg-time">23:42 · 02 Feb</span>
                </div>

            </div>

            {/* Input */}
            <div className="chat-input-area">
                <input
                    type="text"
                    className="chat-input"
                    placeholder="Issue a command or ask a question..."
                />
                <button className="chat-send-btn">
                    <FaPaperPlane />
                </button>
            </div>

        </div>
    );
}

export default Chat;
