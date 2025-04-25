import { initMQTT } from "@/app/lib/mqttHandler";

export async function GET() {
  initMQTT(); // فقط اولین بار واقعاً وصل می‌شه
  return Response.json({ message: "MQTT listener active" });
}
