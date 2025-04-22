import React from "react";
import RoomLayout from "./RoomLayout";
import { AlertCircle, User } from "lucide-react";

interface Elder {
  id: string;
  name: string;
  status: "Inside" | "Outside";
}

const MapView = ({ elders }: { elders: Elder[] }) => {
  return (
    <div className="map-view">
      {elders.map((elder) => (
        <RoomLayout
          key={elder.id}
          className={`marker ${elder.status.toLowerCase()}`}
        >
          {elder.status === "Inside" ? (
            <User className="text-green-600 w-4 h-4" />
          ) : (
            <AlertCircle className="text-yellow-500 w-4 h-4" />
          )}

          <span>&nbsp;{elder.name}</span>
        </RoomLayout>
      ))}
    </div>
  );
};

export default MapView;
