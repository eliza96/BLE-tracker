# BLE Tracker – Indoor Elderly Monitoring System

A modular indoor tracking system using BLE (Bluetooth Low Energy) technology to monitor the location of elderly individuals at home. This project leverages ESP32 devices, Raspberry 
Pis, a central database, and an AI-based engine to deliver privacy-respecting, real-time localization without the need for cameras.

## 📁 Project Structure

The project is organized into modular components:

```
.
├── client/             # Frontend application (e.g. React or Next.js)
├── data-handler/       # Laptop-side scripts for collecting and saving data
├── raspberry-nodes/    # Raspberry Pi scripts (BLE scanner, MQTT publisher)
├── ai-engine/          # Machine learning models: training and inference
├── project-docs/       # Diagrams, architecture explanation, notes
└── README.md           # Main project documentation
```

Each module is designed to work independently while communicating via shared protocols and data flows.

## 🚀 Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Git  
- Node.js (for the client)  
- Python 3 (for data-handler, Raspberry Pi scripts, and AI modules)  
- pip or pipenv  
- MQTT broker (e.g. Mosquitto)  
- Supabase project (or any database of your choice)  

---

### Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/ble-tracker.git
cd ble-tracker
```

Install dependencies for each module (more details inside each folder):

```bash
# Frontend
cd client
npm install

# Data Handler
cd ../data-handler
pip install -r requirements.txt

# Raspberry Pi Scripts
cd ../raspberry-nodes
pip install -r requirements.txt

# AI Engine
cd ../ai-engine
pip install -r requirements.txt
```

---

Each module contains its own README with specific run instructions.

