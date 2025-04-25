import mqtt from "mqtt";
import { supabase } from "@/app/lib/supabase-server";

const receiverTableMap: Record<string, string> = {
  "dc:a6:32:79:a2:73": "data_pi_1",
  "e4:5f:01:84:42:9b": "data_pi_2",
  "e4:5f:01:aa:ef:08": "data_pi_3",
  "d8:3a:dd:1d:b9:f2": "data_pi_4",
};

let mqttClient: mqtt.MqttClient | null = null;

export function initMQTT() {
  if (mqttClient) {
    console.log("📡 MQTT client already initialized");
    return mqttClient;
  }

  mqttClient = mqtt.connect("mqtt://test.mosquitto.org");

  mqttClient.on("connect", () => {
    console.log("🔌 Connected to MQTT broker");
    mqttClient!.subscribe("raspberrypi/ibeacons");
  });

  mqttClient.on("message", async (_topic, message) => {
    try {
      const decoded = message.toString();
      const data = JSON.parse(decoded);
      const table = receiverTableMap[data.receiver_id];

      if (!table) {
        console.warn(`⚠️ Unknown receiver_id: ${data.receiver_id}`);
        return;
      }

      const record = {
        mac_address: data.mac_address,
        name: data.name.replace(/\u0000/g, "").trim(),
        rssi: data.rssi,
        receiver_id: data.receiver_id,
        sensor_timestamp: new Date(data.timestamp * 1000).toISOString(),
      };

      const { error } = await supabase.from(table).insert([record]);
      if (error) {
        console.error("❌ Supabase error:", error.message);
      } else {
        console.log(`✅ Saved to ${table}`);
      }
    } catch (err) {
      console.error("🚨 Error processing message:", err);
    }
  });

  return mqttClient;
}
