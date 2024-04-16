import React, { useState } from "react";
import { Knob } from "primereact/knob";

export default function ChartContainer() {
  const [value, setValue] = useState(40);

  return (
    <div className="card flex justify-content-center">
      <Knob
        value={value}
        onChange={(e) => setValue(e.value)}
        valueTemplate={"{value}%"}
        valueColor="#3498DB"
        rangeColor="darkblue"
        size={120}
      />
    </div>
  );
}
