import "./styles/workHistory.css";

function WorkHistory() {
    const historyData = [
        { time: "09:15 AM", action: "Opened Task Planner" },
        { time: "09:25 AM", action: "Added a new task: 'Optimize render loop'" },
        { time: "09:40 AM", action: "Opened Command Center" },
        { time: "10:00 AM", action: "Ran custom command: 'play_music'" },
        { time: "10:30 AM", action: "Closed Media Control" },
        { time: "11:00 AM", action: "Checked Session Memory" },
    ];

    return (
        <>
            <div className="wh-sub">
                Recent activities on Nova
            </div>

            <div className="wh-list no-scrollbar">
                {historyData.map((item, idx) => (
                    <div className="wh-item" key={idx}>
                        <span className="wh-time">{item.time}</span>
                        <span className="wh-action">{item.action}</span>
                    </div>
                ))}
            </div>
        </>
    );
}

export default WorkHistory;
