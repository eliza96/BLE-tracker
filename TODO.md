# 📝 BLE-tracker TODO List

## ✅ 1. Documentation & Repo Structure
- [x] Organize folders clearly
- [ ] Add README files inside `ai-engine/`, `data-handler/`, `raspberry-nodes/`
- [ ] Add a simple system architecture diagram to `project-docs/`

## 🟡 2. Backend & MQTT
- [x] Configure MQTT on Raspberry Pi nodes
- [x] Send RSSI data from ESP32 to MQTT broker
- [ ] Store MQTT messages into Supabase via `data-handler/`
- [ ] Test real-time flow from ESP32 → MQTT → Supabase

## 🟡 3. AI Engine
- [x] Initial files `model.py` and `data-vis.py` created
- [ ] Define the localization algorithm
- [ ] Train model with actual data
- [ ] Test prediction of location from RSSI values
- [ ] Prepare API endpoint or function for frontend integration

## 🟠 4. Frontend (Next.js)
- [x] Set up Next.js and TypeScript project structure
- [ ] Design simple dashboard page
- [ ] Connect to Supabase for live data
- [ ] Display user location visually (e.g., room map)
- [ ] Add simple, user-friendly UI for caregivers or family

## 🔵 5. Final Touches
- [ ] Write complete documentation for setup, run, and testing
- [ ] Perform full end-to-end testing
- [ ] Prepare screenshots or demo video for presentation or defense