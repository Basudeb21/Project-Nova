import "./styles/sessionMemory.css";

function SessionMemory() {
    const sessionData = [
        { id: 1, module: "Task Planner", description: "Added task 'Optimize render loop'", time: "09:25 AM" },
        { id: 2, module: "Command Center", description: "Executed custom command 'play_music'", time: "10:00 AM" },
        { id: 3, module: "Media Control", description: "Paused 'Chill Beats'", time: "10:15 AM" },
        { id: 4, module: "File Explorer", description: "Opened /Documents/ProjectX", time: "10:40 AM" },
        { id: 5, module: "Task Planner", description: "Marked task 'Design command parser' as done", time: "11:00 AM" },
    ];

    return (
        <div className="glass-card session-memory">
            <div className="sm-header">
                <span className="sm-title">SESSION MEMORY</span>
            </div>

            <div className="sm-sub">
                Tracks actions during this session
            </div>

            <div className="sm-list no-scrollbar">
                {sessionData.map(item => (
                    <div className="sm-item" key={item.id}>
                        <span className="sm-time">{item.time}</span>
                        <span className="sm-module">{item.module}</span>
                        <span className="sm-desc">{item.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SessionMemory;
