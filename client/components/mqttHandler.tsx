import mqtt from "mqtt";

const client = mqtt.connect("mqtt://broker.hivemq.com"); // Replace with your MQTT broker

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

export default client;
