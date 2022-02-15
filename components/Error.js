import errorAni from "../public/assets/lottie/astro_err.json";
import Lottie from "lottie-react";
export default function Error() {
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
      <h1 style={{ fontSize: "xx-large" }}>Error! :(</h1>
      <Lottie
        style={{ height: "50vh" }}
        animationData={errorAni}
        autoPlay
        loop
      ></Lottie>
    </div>
  );
}
