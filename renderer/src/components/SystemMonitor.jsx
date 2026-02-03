import {
    FaMicrochip,
    FaBatteryHalf,
    FaWifi,
    FaMicrophone,
    FaHdd,
    FaVolumeUp,
    FaThermometerHalf,
    FaClock,
    FaMemory
} from "react-icons/fa";

import "./styles/systemMonitor.css";

const stats = [
    { label: "CPU", value: "34%", icon: FaMicrochip, status: "info" },
    { label: "TEMP", value: "52°C", icon: FaThermometerHalf, status: "info" },
    { label: "RAM", value: "5.2 / 16 GB", icon: FaMemory, status: "info" },
    { label: "DISK", value: "120 / 512 GB", icon: FaHdd, status: "info" },
    { label: "BATTERY", value: "78%", icon: FaBatteryHalf, status: "info" },
    { label: "NETWORK", value: "ONLINE", icon: FaWifi, status: "info" },
    { label: "MIC", value: "ACTIVE", icon: FaMicrophone, status: "info" },
    { label: "VOICE", value: "ENABLED", icon: FaVolumeUp, status: "info" },
    { label: "UPTIME", value: "03:42:18", icon: FaClock, status: "info" },
    { label: "MODEL", value: "LLAMA 3", icon: FaMicrochip, status: "info" }
];

function SystemMonitor() {
    return (
        <div className="system-monitor-root">
            <div className="system-grid no-scrollbar">
                {stats.map((s, i) => {
                    const Icon = s.icon;
                    return (
                        <div key={i} className="system-item">
                            <Icon className={`system-icon ${s.status}`} />
                            <div className="system-text">
                                <span className="system-label">{s.label}</span>
                                <span className="system-value">{s.value}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SystemMonitor;
