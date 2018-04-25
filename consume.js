const zookeeper = require("node-zookeeper-client");

console.log("Attempting to connect to localhost:2181");

const client = zookeeper.createClient("localhost:2181");
const path = process.argv[2];

setTimeout(() => {
  console.log("Timeout");
  process.exit();
}, 5000);

function listChildren(client, path) {
  client.getChildren(
    path,
    event => {
      console.log("Got watcher event: %s", event);
      listChildren(client, path);
    },
    (error, children, stat) => {
      if (error) {
        console.log("Failed to list children of %s due to: %s.", path, error);
        return;
      }

      console.log("Children of %s are: %j.", path, children);
    }
  );
}

client.on("state", state => {
  console.log(`Client state is changed to ${state}`);
});

client.once("connected", () => {
  console.log("Connected to ZooKeeper.");
  listChildren(client, path);
});

client.once("disconnected", () => {
  console.log("Disconnected...");
  process.exit();
});

client.connect();
