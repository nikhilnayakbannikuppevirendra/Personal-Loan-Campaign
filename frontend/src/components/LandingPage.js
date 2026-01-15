import React, { useEffect, useState } from "react";
import { Table, Spin } from "antd";
import { fetchLandingMessage } from "../fetch/api";

export default function LandingPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessage = async () => {
      // Check if cached in localStorage
      const cached = localStorage.getItem("landingMessage");

      if (cached) {
        const parsed = JSON.parse(cached);
        setData(parsed);
        setLoading(false);
        console.log("Loaded from localStorage");
      } else {
        // Fetch from API
        const res = await fetchLandingMessage();
        const lines = res.message.split("\n").map((line, idx) => ({
          key: idx,
          info: line
        }));
        setData(lines);
        setLoading(false);

        // Store in localStorage
        localStorage.setItem("landingMessage", JSON.stringify(lines));
        console.log("Fetched from API and cached");
      }
    };

    getMessage();
  }, []);

  const columns = [
    {
      title: "Info",
      dataIndex: "info",
      key: "info"
    }
  ];

  if (loading) return <Spin size="large" />;

  return (
    <div style={{ padding: "20px" }}>
      <h1>AllLife Bank Overview</h1>
      <Table
        dataSource={data}
        columns={columns}
        pagination={false}
        bordered
      />
    </div>
  );
}
