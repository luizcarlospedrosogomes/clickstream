import normalizeFPS from "./normalizeFPS.js";

const trackClickstream = () => {
  const data = [];

  const pushEventData = ({ pageX, pageY, type }) => {
    console.log("pushEventData")
    data.push({
      date: Date.now(),
      x: pageX,
      y: pageY,
      event:type,
    });
  };
  
  document.addEventListener("mousemove",normalizeFPS(pushEventData));
  document.addEventListener("click", pushEventData);
  console.log(data)
  return data;
};

export default trackClickstream;
