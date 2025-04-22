# 🍓 Raspberry Nodes – BLE Scanner & MQTT Publisher

This module is responsible for scanning nearby Bluetooth Low Energy (BLE) beacons using Raspberry Pi devices and publishing the signal data (e.g., RSSI, device ID) to an MQTT broker for further processing.

---

## 📡 Functionality

- Scans BLE advertisements in real time
- Filters beacons based on MAC address or UUID (optional)
- Publishes signal strength (RSSI), timestamp, and device info to a configured MQTT topic

---

## 🛠️ Requirements

- Raspberry Pi (any model with BLE support)
- Python 3
- [BlueZ](http://www.bluez.org/) (BLE tools for Linux)
- `hcitool`, `hcidump`, or compatible scanner libs
- MQTT Broker (e.g. Mosquitto)

---

## 📦 Dependencies

Install Python packages:

```bash
pip install -r requirements.txt
```

Typical packages used:

```
paho-mqtt
bluepy  # or bleak, depending on your implementation
```

---

## ⚙️ Configuration

Create a `.env` file in this folder:

```
MQTT_BROKER=192.168.1.100
MQTT_PORT=1883
MQTT_TOPIC=ble/signals
DEVICE_ID=raspi-01
```

---

## 🚀 Run the Scanner

```bash
python ble_scanner.py
```

Make sure the Pi's Bluetooth interface is enabled and not blocked:

```bash
sudo rfkill unblock bluetooth
```

---

## 🧪 Example Output

```json
{
  "device_id": "raspi-01",
  "timestamp": 1713603811,
  "mac_address": "C3:91:7A:4F:10:DD",
  "rssi": -72
}
```

---

## 🛠️ Troubleshooting

- Use `hcitool dev` or `bluetoothctl` to verify that your Bluetooth adapter is recognized
- Restart BLE service if needed:  
  ```bash
  sudo systemctl restart bluetooth
  ```

- Run script with `sudo` if permission errors occur

---

## 📤 Next Step

The published data is consumed by the data-handler module and stored in Supabase for further use (dashboard + AI).
