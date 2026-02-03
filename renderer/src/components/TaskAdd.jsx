import "./styles/taskAdd.css";

function TaskAdd({ setActiveModule }) {
    return (
        <div className="tp-modal-overlay">
            <div className="tp-modal glass-card">

                <div className="tp-modal-header">
                    <span>NEW TASK</span>
                    <button onClick={() => setActiveModule("task")}>×</button>
                </div>

                <div className="tp-modal-body">

                    <label>Task Name</label>
                    <input type="text" placeholder="e.g. Build command parser" />

                    <label>Priority</label>
                    <div className="tp-priority">
                        <button className="high">HIGH</button>
                        <button className="medium">MED</button>
                        <button className="low">LOW</button>
                    </div>

                    <label>Due</label>
                    <input type="date" />

                </div>

                <div className="tp-modal-footer">
                    <button className="cancel" onClick={() => setActiveModule("task")}>
                        CANCEL
                    </button>
                    <button className="add">ADD TASK</button>
                </div>

            </div>
        </div>
    );
}

export default TaskAdd;
