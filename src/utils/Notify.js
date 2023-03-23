const Notify = (text) => {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    new Notification(text);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("welcome");
      }
    });
  }
};
export default Notify;
