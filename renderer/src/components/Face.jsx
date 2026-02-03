import './../styles/style.css';
import './styles/face.css';
import { FaCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

function Face() {
    const [state] = useState("idle");
    const [now, setNow] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setNow(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const stateMap = {
        idle: { label: "NOVA Idle", color: "#00ffae" },
        listening: { label: "Listening...", color: "#00e5ff" },
        thinking: { label: "Processing", color: "#ffaa00" },
        speaking: { label: "Responding", color: "#00ff9c" }
    };

    const current = stateMap[state];

    const date = now.toLocaleDateString(undefined, {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });

    const time = now.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    return (
        <div className={`app-card face-panel ${state}`}>

            {/* Glowing Pulse Background */}
            <div className="face-bg-pulse"></div>

            {/* Centered Face */}
            <div className="face-content">
                <img src="/face.gif" alt="AI Face" className="face-gif" />
            </div>

            {/* Status Bar */}
            <div className="face-status">
                <span className="face-date">{date}</span>
                <span className="face-center">
                    <FaCircle className="online-icon" style={{ color: current.color }} />
                    {current.label}
                </span>
                <span className="face-time">{time}</span>
            </div>
        </div>
    );
}

export default Face;
