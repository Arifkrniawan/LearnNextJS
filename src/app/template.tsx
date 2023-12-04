"use client";
import { useState } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(0);
  return (
    <>
      {/* <h1>Title {state}</h1>
      <button onClick={() => setState(state + 1)}>click me</button> */}
      <div>{children}</div>
    </>
  );
}
