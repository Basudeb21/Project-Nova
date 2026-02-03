import './../styles/style.css';
import './styles/contextPanel.css';

const contextItems = [
    { label: "ACTIVE FILE", value: "notes_project.txt" },
    { label: "WEB SOURCE", value: "techcrunch.com" },
    { label: "MEMORY", value: "User prefers concise summaries" },
    { label: "LAST ACTION", value: "Summarized notes" }
];

function ContextPanel() {
    return (
        <div className="app-card context-panel">

            <div className="context-header">
                CONTEXT WINDOW
            </div>

            <div className="context-list">
                {contextItems.map((item, i) => (
                    <div key={i} className="context-item">
                        <span className="context-label">{item.label}</span>
                        <span className="context-value">{item.value}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default ContextPanel;
