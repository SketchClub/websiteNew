import loadingAni from "../public/assets/lottie/caterpLoad.json";
import Lottie from "lottie-react";
export default function Loading() {
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
      <h1 style={{ fontSize: "xx-large" }}>Loading... Please wait...</h1>
      <Lottie
        style={{ height: "50vh" }}
        animationData={loadingAni}
        autoPlay
        loop
      ></Lottie>
    </div>
  );
}
