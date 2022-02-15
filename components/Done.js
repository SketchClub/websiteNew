import okAni from "../public/assets/lottie/astro_ok.json";
import Lottie from "lottie-react";
export default function Done() {
  return (
    <div
      id="error"
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "xx-large" }}>Done! :D</h1>
      <Lottie
        style={{ height: "50vh" }}
        animationData={okAni}
        autoPlay
        loop
      ></Lottie>
    </div>
  );
}
