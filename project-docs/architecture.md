# 📐 System Architecture – BLE Tracker

This document provides an overview of how the BLE Tracker system is structured and how data flows between its components.

---

## 📊 High-Level Diagram

```
        ┌────────────┐
        │ BLE Beacon │
        └────┬───────┘
             │
     (Bluetooth Signal)
             │
     ┌───────▼────────┐
     │ Raspberry Node │  ← raspberry-nodes/
     │  (BLE + MQTT)  │
     └────┬───────▲───┘
          │       │
     (RSSI Data)  │
          │       │
    ┌─────▼────┐  │
    │ MQTT Broker │
    └─────┬────┘
          │
    (JSON messages)
          │
   ┌──────▼─────────┐
   │ Data Handler   │  ← data-handler/
   │ (MQTT + Supabase) │
   └──────┬─────────┘
          │
   (Structured Data)
          │
   ┌──────▼────────┐
   │ Supabase DB   │
   └──────┬────────┘
          │
   (Optional Query)
          │
   ┌──────▼──────────┐
   │ AI Engine       │  ← ai-engine/
   │ (Train & Predict) │
   └──────┬──────────┘
          │
   ┌──────▼────────────┐
   │ Client Dashboard  │  ← client/
   │ (Live View & UI)  │
   └───────────────────┘
```

---

## 🔄 Module Flow Description

1. **BLE Beacons** transmit signals every few milliseconds.
2. **Raspberry Pi nodes** scan for those BLE signals and extract RSSI + MAC address, then publish data via MQTT.
3. **MQTT Broker** (e.g., Mosquitto) routes messages under a defined topic (`ble/signals`).
4. **Data Handler** subscribes to the MQTT topic, parses the messages, and uploads them to Supabase.
5. **Supabase** acts as a central cloud database to store all incoming BLE data.
6. **AI Engine** can optionally read the data from Supabase, process it, and estimate indoor location using trained models.
7. **Client Frontend** displays real-time updates using Supabase listeners or polling APIs — creating a dashboard for monitoring.

---

## 🧩 Technologies in Use

- **BLE (Bluetooth Low Energy)**
- **MQTT (Lightweight Pub/Sub Protocol)**
- **Supabase (PostgreSQL + Realtime API)**
- **Python (for edge, data, AI logic)**
- **Next.js / React (for frontend)**

---

## 🗂 Future Enhancements

- Add end-to-end encryption over MQTT
- Add a location heatmap or timeline in the dashboard
- Improve AI model accuracy with more data and labeling

