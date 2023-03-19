import React from "react";
import SidebarsMainA from "./SidebarsMainA";
import SidebarsMainB from "./SidebarsMainB";
import SidebarsMainC from "./SidebarsMainC";
import SidebarsMainD from "./SidebarsMainD";
import SidebarsMainE from "./SidebarsMainE";

const SidebarsMain = () => {
  return (
    <main className="d-flex flex-nowrap">
      <h1 className="visually-hidden">Sidebars examples</h1>

      <SidebarsMainA />

      <div className="b-example-divider b-example-vr"></div>

      <SidebarsMainB />

      <div className="b-example-divider b-example-vr"></div>

      <SidebarsMainC />

      <div className="b-example-divider b-example-vr"></div>

      <SidebarsMainD />

      <div className="b-example-divider b-example-vr"></div>

      <SidebarsMainE />

      <div className="b-example-divider b-example-vr"></div>
    </main>
  );
};

export default SidebarsMain;
