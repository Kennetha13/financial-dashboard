"use client";

import { useEffect, useState } from "react";

export default function HealthClient() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((r) => r.json())
      .then((d) => setStatus(d.status))
      .catch((e) => setStatus("error: " + e.message));
  }, []);

  return <p className="p-8">Client-side status: {status}</p>;
}
