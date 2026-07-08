import { useState } from "react";
import { weeklyPlans } from "../data/weeklyPlans";
import { routines } from "../data/routines";
import "../styles/Dashboard.css";

function Dashboard() {
  const [selectedPlanId, setSelectedPlanId] = useState("jaqueline");
  const [selectedDay, setSelectedDay] = useState("Lunes");

  const selectedPlan = weeklyPlans.find((plan) => plan.id === selectedPlanId);
  const selectedPlanDay = selectedPlan.days.find((item) => item.day === selectedDay);
  const selectedRoutine = routines.find((routine) => routine.id === selectedPlanDay.routineId);

  return (
    <main className="dashboard-page">
      <section className="dashboard-hero">
        <div>
          <span className="eyebrow">FitWeek Planner</span>
          <h1>Tu semana de entrenamiento</h1>
          <p>Consulta tus rutinas por día, enfoque muscular, series, repeticiones y RIR.</p>
        </div>

        <div className="plan-selector">
          <label>Plan activo</label>
          <select
            value={selectedPlanId}
            onChange={(e) => {
              setSelectedPlanId(e.target.value);
              setSelectedDay("Lunes");
            }}
          >
            {weeklyPlans.map((plan) => (
              <option key={plan.id} value={plan.id}>
                {plan.name}
              </option>
            ))}
          </select>
        </div>
      </section>

      <section className="plan-card">
        <div>
          <h2>{selectedPlan.name}</h2>
          <p>{selectedPlan.description}</p>
        </div>

        <div className="day-tabs">
          {selectedPlan.days.map((item) => (
            <button
              key={item.day}
              className={selectedDay === item.day ? "day-tab active" : "day-tab"}
              onClick={() => setSelectedDay(item.day)}
            >
              <span>{item.day}</span>
              <small>{item.label}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="routine-layout">
        <aside className="routine-summary">
          <span className="routine-category">{selectedRoutine.category}</span>
          <h2>{selectedRoutine.title}</h2>
          <p>{selectedRoutine.focus}</p>

          <div className="summary-stats">
            <div>
              <strong>{selectedRoutine.exercises.length}</strong>
              <span>Ejercicios</span>
            </div>
            <div>
              <strong>{selectedDay}</strong>
              <span>Día activo</span>
            </div>
          </div>
        </aside>

        <section className="exercise-list">
          {selectedRoutine.exercises.map((exercise, index) => (
            <article className="exercise-card" key={index}>
              <div className="exercise-number">{index + 1}</div>

              {exercise.video && (
                <div className="exercise-media">
                  <video
                    src={exercise.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              )}

              <div className="exercise-info">
                <h3>{exercise.name}</h3>

                <div className="exercise-tags">
                  <span>{exercise.sets} series</span>
                  <span>{exercise.reps} reps</span>
                  <span>RIR {exercise.rir}</span>
                </div>

                {exercise.notes && <p>{exercise.notes}</p>}
              </div>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

export default Dashboard;