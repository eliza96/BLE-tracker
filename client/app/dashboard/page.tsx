"use client";
import { useEffect, useState } from "react";
import MapView from "@/components/MapView";
import TableView from "@/components/TabelView";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { supabase } from "../lib/supabase";

interface Elder {
  id: string;
  name: string;
  status: "Inside" | "Outside";
  updated_at: string;
}

export default function Dashboard() {
  const [view, setView] = useState<"map" | "table">("map");
  const [elders, setElders] = useState<Elder[]>([]);

  // Fetch data initially and enable real-time updates
  useEffect(() => {
    const fetchElders = async () => {
      console.log("Fetching data from Supabase...");
      const { data, error } = await supabase.from("elderly_status").select("*");

      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        console.log("Fetched data:", data);
        setElders(data as Elder[]);
      }
    };

    fetchElders();

    // Listen for real-time updates
    const subscription = supabase
      .channel("realtime:elderly_status")
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "elderly_status" },
        (payload) => {
          console.log("Realtime update:", payload.new);
          setElders((currentElders) =>
            currentElders.map((elder) =>
              elder.id === (payload.new as Elder).id
                ? (payload.new as Elder)
                : elder
            )
          );
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, []);

  // Automatically update elderly status every 5 seconds (Simulating movement)
  useEffect(() => {
    const interval = setInterval(async () => {
      console.log("Triggering automatic status update...");
      await fetch("/api/updateStatus"); // Call API to update statuses
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="about-page layout-design">
      <main className="layout-design_main">
        <Header />
        <section className="dashboard">
          <Button
            label={
              view === "map" ? "Switch to Table View" : "Switch to Map View"
            }
            onClick={() => setView(view === "map" ? "table" : "map")}
            variant="primary"
          />
          {view === "map" ? (
            <MapView elders={elders} />
          ) : (
            <TableView elders={elders} />
          )}
        </section>
      </main>
    </div>
  );
}
