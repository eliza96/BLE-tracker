import { useState } from "react";

export default function HealthcareMap() {
  const [filters, setFilters] = useState({
    rooms: true,
    patients: true,
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Healthcare Map</h1>
      <div className="flex gap-4 mb-6">
        <label>
          <input
            type="checkbox"
            checked={filters.rooms}
            onChange={(e) =>
              setFilters({ ...filters, rooms: e.target.checked })
            }
          />
          Show Rooms
        </label>
        <label>
          <input
            type="checkbox"
            checked={filters.patients}
            onChange={(e) =>
              setFilters({ ...filters, patients: e.target.checked })
            }
          />
          Show Patients
        </label>
      </div>
      <div className="border rounded p-4">
        <p>Interactive map will go here (use Three.js or Google Maps API).</p>
      </div>
    </div>
  );
}
