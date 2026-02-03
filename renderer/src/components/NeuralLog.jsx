import { useEffect, useRef, useState } from "react";
import { FaBrain } from "react-icons/fa";
import "./styles/neuralLog.css";

const LOG_LINES = [
    "Initializing neural pathways...",
    "Synchronizing voice matrix",
    "Signal lock acquired",
    "Decrypting semantic layer",
    "Audio stream stabilized",
    "Memory cache refreshed",
    "Context window expanded",
    "Latency optimized",
    "Predictive model engaged",
    "Listening for wake command",
];

function NeuralLog() {
    const [logs, setLogs] = useState([]);
    const logRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setLogs(prev => {
                const next = [...prev, LOG_LINES[Math.floor(Math.random() * LOG_LINES.length)]];
                return next.slice(-25);
            });
        }, 900);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        logRef.current?.scrollTo({
            top: logRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, [logs]);

    return (
        <div className="neural-log-root">
            <div className="neural-log-body no-scrollbar" ref={logRef}>
                {logs.map((line, i) => (
                    <div key={i} className="neural-log-line">
                        <span className="prefix">▸</span>
                        <span className="text">{line}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NeuralLog;
