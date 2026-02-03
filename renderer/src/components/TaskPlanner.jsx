import "./styles/taskPlanner.css";

function TaskPlanner({ setActiveModule }) {
    return (
        <div className="glass-card task-planner">

            {/* Header */}
            <div className="tp-header">
                <span className="tp-title">TASK PLANNER</span>
                <button
                    className="tp-add-btn"
                    onClick={() => setActiveModule("taskAdd")}
                >
                    +
                </button>
            </div>

            <div className="tp-sub">
                Active · Pending · Done
            </div>

            {/* Task List */}
            <div className="tp-list no-scrollbar">
                <div className="tp-item high">
                    <span className="tp-dot" />
                    <span className="tp-text">Optimize render loop</span>
                    <span className="tp-due">Today</span>
                </div>

                <div className="tp-item medium">
                    <span className="tp-dot" />
                    <span className="tp-text">Design command parser</span>
                    <span className="tp-due">Tomorrow</span>
                </div>

                <div className="tp-item low">
                    <span className="tp-dot" />
                    <span className="tp-text">Refactor UI spacing</span>
                    <span className="tp-due">—</span>
                </div>

                <div className="tp-item done">
                    <span className="tp-check">✓</span>
                    <span className="tp-text done-text">
                        Fix layout overflow
                    </span>
                </div>
            </div>

        </div>
    );
}

export default TaskPlanner;
