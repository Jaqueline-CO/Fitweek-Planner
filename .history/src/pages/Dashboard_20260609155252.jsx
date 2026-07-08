import { useState } from "react";
import { weeklyPlans } from "../data/weeklyPlans";
import { routines } from "../data/routines";

function Dashboard() {
  const [selectedPlanId, setSelectedPlanId] = useState("jaqueline");
  const [selectedDay, setSelectedDay] = useState("Lunes");

  const selectedPlan = weeklyPlans.find((plan) => plan.id === selectedPlanId);

  const selectedPlanDay = selectedPlan.days.find(
    (item) => item.day === selectedDay
  );

  const selectedRoutine = routines.find(
    (routine) => routine.id === selectedPlanDay.routineId
  );

  return (
    <div>
      <h1>FitWeek Planner</h1>

      <label>Selecciona un plan:</label>
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

      <h2>{selectedPlan.name}</h2>
      <p>{selectedPlan.description}</p>

      <div>
        {selectedPlan.days.map((item) => (
          <button
            key={item.day}
            onClick={() => setSelectedDay(item.day)}
          >
            {item.day}
          </button>
        ))}
      </div>

      <hr />

      <h2>{selectedRoutine.title}</h2>
      <p>{selectedRoutine.focus}</p>

      <ul>
        {selectedRoutine.exercises.map((exercise, index) => (
          <li key={index}>
            <strong>{exercise.name}</strong>
            <br />
            Series: {exercise.sets} | Reps: {exercise.reps} | RIR:{" "}
            {exercise.rir}
            {exercise.notes && (
              <>
                <br />
                Nota: {exercise.notes}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dashboard;