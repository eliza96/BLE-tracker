# 🛠️ Data Handler – MQTT Subscriber & Supabase Uploader

This module subscribes to incoming BLE signal data from edge devices (e.g., Raspberry Pi) via MQTT, processes the messages, and stores the parsed data in a Supabase database.

---

## 📡 Responsibilities

- Connects to the MQTT broker and listens to a specific topic
- Parses JSON payloads from BLE nodes (device ID, RSSI, timestamp, MAC address)
- Sends structured data to Supabase via REST or client SDK

---

## 🧱 Dependencies

Install required Python packages:

```bash
pip install -r requirements.txt
```

Common dependencies may include:

```
paho-mqtt
supabase
requests
python-dotenv
```

---

## ⚙️ Configuration

Create a `.env` file with the following content:

```
MQTT_BROKER=localhost
MQTT_PORT=1883
MQTT_TOPIC=ble/signals

SUPABASE_URL=https://your-project.supabase.co
SUPABASE_KEY=your_anon_or_service_role_key
SUPABASE_TABLE=positions
```

---

## 🚀 Run the Script

```bash
python main.py
```

The script will:
- Connect to the MQTT broker
- Print incoming messages to the console (optional)
- Push the cleaned data into Supabase

---

## 🔄 Example Input Payload

```json
{
  "device_id": "raspi-01",
  "timestamp": 1713603811,
  "mac_address": "C3:91:7A:4F:10:DD",
  "rssi": -71
}
```

---

## 🧪 Sample Output to Supabase

```json
{
  "device_id": "raspi-01",
  "location": "Living Room",
  "timestamp": 1713603811,
  "rssi": -71
}
```

_(Location may be estimated using AI module or predefined zones.)_

---

## 📂 File Structure

| File        | Description                                |
|-------------|--------------------------------------------|
| `main.py`   | MQTT subscriber and Supabase uploader      |
| `.env`      | Environment variables for config           |
| `utils.py`  | (optional) helper functions or parsers     |

---

## 🛠️ Notes

- Ensure the Supabase table (`positions`) exists with appropriate schema.
- Use `sudo` if needed for MQTT socket access.
- Add retry logic or buffering for intermittent network issues.
