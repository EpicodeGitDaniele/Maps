import React from "react";
import BingMapsReact from "bingmaps-react";



export default function BingMap(props) {
  const pushPins=[];
  console.log(props.coordinate[2]);

  return (
    <BingMapsReact
      bingMapsKey="AhIA-N-yU5aYqLKb_ngjF3udL0OT9SDZnH4MO9qDIYBclwZjOa9lKVpxBCM8SYq3 "
      height="500px"
      pushPins={props.coordinate[2]}
      mapOptions={{
        navigationBarMode: "square",
      }}
      width="500px"
      viewOptions={{
        center: { latitude: props.coordinate[0], longitude: props.coordinate[1]},
        mapTypeId: "grayscale",
      }}
    />
  );
}