import './../styles/style.css';
import './styles/intentAction.css';
import {
    FaBrain,
    FaCheckCircle,
    FaSpinner,
    FaExclamationTriangle
} from "react-icons/fa";

function IntentAction() {

    // Mock state (later from backend)
    const intent = "Summarize my notes";
    const confidence = 92;

    const steps = [
        { text: "Locate notes file", status: "done" },
        { text: "Read content", status: "done" },
        { text: "Extract key points", status: "running" },
        { text: "Generate summary", status: "pending" },
    ];

    return (
        <div className="app-card intent-panel">

            {/* Header */}
            <div className="intent-header">
                <FaBrain />
                <span>INTENT & ACTION</span>
            </div>

            {/* Intent */}
            <div className="intent-block">
                <span className="intent-label">Detected Intent</span>
                <span className="intent-text">{intent}</span>
            </div>

            {/* Confidence */}
            <div className="confidence-block">
                <span>Confidence</span>
                <div className="confidence-bar">
                    <div
                        className="confidence-fill"
                        style={{ width: `${confidence}%` }}
                    />
                </div>
                <span className="confidence-value">{confidence}%</span>
            </div>

            {/* Action Steps */}
            <div className="action-steps">
                <span className="steps-title">Execution Plan</span>

                {steps.map((step, i) => (
                    <div key={i} className={`step ${step.status}`}>
                        <span className="step-icon">
                            {step.status === "done" && <FaCheckCircle />}
                            {step.status === "running" && <FaSpinner className="spin" />}
                            {step.status === "pending" && <FaExclamationTriangle />}
                        </span>
                        <span className="step-text">{step.text}</span>
                    </div>
                ))}
            </div>

        </div>
    );
}

export default IntentAction;
