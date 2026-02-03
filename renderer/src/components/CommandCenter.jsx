import { useState, useEffect, useRef } from "react";
import "./styles/commandCenter.css";

function CommandCenter() {
    const [command, setCommand] = useState("");
    const [log, setLog] = useState([]);
    const [customCommands] = useState([
        "open_notes",
        "play_music",
        "show_stats"
    ]);

    const inputRef = useRef(null);
    const logRef = useRef(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    useEffect(() => {
        if (logRef.current) {
            logRef.current.scrollTop = logRef.current.scrollHeight;
        }
    }, [log]);

    const executeCommand = (cmd) => {
        if (!cmd) return;

        setLog(prev => [
            ...prev,
            { cmd, time: new Date().toLocaleTimeString() }
        ]);

        setCommand("");
    };

    return (
        <div className="cc-root">

            {/* TERMINAL LOG */}
            <div className="cc-terminal-log-wrapper no-scrollbar" ref={logRef}>
                {log.map((item, i) => (
                    <div key={i} className="cc-log-item">
                        <span className="cc-log-time">[{item.time}]</span>
                        <span className="cc-log-cmd">&gt; {item.cmd}</span>
                    </div>
                ))}
            </div>

            {/* INPUT */}
            <div className="cc-terminal-input">
                <span className="cc-prompt-symbol">&gt;</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) =>
                        e.key === "Enter" && executeCommand(command)
                    }
                    className="cc-input-terminal"
                    placeholder="type command…"
                />
            </div>

            {/* QUICK COMMANDS */}
            <div className="cc-custom-commands-terminal">
                {customCommands.map((c, i) => (
                    <button
                        key={i}
                        className="cc-custom-btn-terminal"
                        onClick={() => executeCommand(c)}
                    >
                        {c}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default CommandCenter;
