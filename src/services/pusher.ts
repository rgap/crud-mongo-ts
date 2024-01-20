import Pusher from "pusher";

const pusher = new Pusher({
  appId: "1743716",
  key: "7342041bffe1805c0d77",
  secret: "19e3e51e83b0cadb61ec",
  cluster: "us2",
  useTLS: true,
});

export default pusher;
