import React, { useState, useRef } from "react";
import { Form, InputNumber, Button, Card, Modal, Select, Tooltip  } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import ImportantMeasures from "./ImportantMeasures"; 
import { fetchPrediction } from "../fetch/api";


const { Option } = Select;

export default function PredictionPage() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const resultRef = useRef(null);


  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetchPrediction(values);
      setPrediction(res.loan_approval_prediction);

      setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }, 200);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const showModal = () =>{ setIsModalVisible(true)
  };
  const handleClose = () => setIsModalVisible(false);

  
  const importantMeasures = [
    "Loan approval is more likely for customers with high annual income.",
    "Highly educated and affluent customers are most receptive.",
    "Families with 2-4 members are more likely to accept loans.",
    "Customers holding a Certificate of Deposit (CD_Account) have higher acceptance probability."
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
            <h1 style={{ marginRight: "10px" }}>Personal Loan Prediction</h1>
            <Tooltip title="This page allows you to input customer details and predict if a personal loan is likely to be approved.">
                <InfoCircleOutlined 
                style={{ fontSize: "20px", cursor: "pointer", color: "#1890ff" }} 
                onClick={showModal} 
                />
            </Tooltip>
        </div>

      <Form layout="vertical" onFinish={onFinish}>
        {/* Age */}
        <Form.Item label="Age" name="Age" rules={[{ required: true }]}>
          <InputNumber min={18} max={100} style={{ width: "100%" }} placeholder="Enter your Age" />
        </Form.Item>

        {/* Experience */}
        <Form.Item label="No of Years Experience" name="Experience" rules={[{ required: true }]}>
          <InputNumber min={0} max={50} style={{ width: "100%" }} placeholder="Enter your Number of Years Experience"/>
        </Form.Item>

        {/* Income */}
        <Form.Item label="Income (Annual in $)" name="Income" rules={[{ required: true }]}>
          <InputNumber min={0} style={{ width: "100%" }} placeholder="Enter your Annual Income in $"/>
        </Form.Item>

        {/* Family */}
        <Form.Item label="No of Family Members" name="Family" rules={[{ required: true }]}>
          <InputNumber min={1} max={10} style={{ width: "100%" }} placeholder="Enter the Total No of Family Members"/>
        </Form.Item>

        {/* CCAvg */}
        <Form.Item label="Average Credit Card Spending per Month (CC_Avg)" name="CCAvg" rules={[{ required: true }]}>
          <InputNumber min={0} step={0.1} style={{ width: "100%" }} placeholder="Enter the Value" />
        </Form.Item>

        {/* Education */}
        <Form.Item label="Education Level" name="Education" rules={[{ required: true }]}>
          <Select placeholder="Select Education Level">
            <Option value={1}>Undergraduate</Option>
            <Option value={2}>Graduate</Option>
            <Option value={3}>Advanced/Professional</Option>
          </Select>
        </Form.Item>

        {/* Mortgage */}
        <Form.Item label="Mortgage ($)" name="Mortgage" rules={[{ required: true }]}>
          <InputNumber min={0} style={{ width: "100%" }}placeholder="Enter the Value" />
        </Form.Item>

        {/* Securities_Account */}
        <Form.Item label="Securities Account?" name="Securities_Account" rules={[{ required: true }]}>
          <Select placeholder="Select Securities Account">
            <Option value={1}>Yes</Option>
            <Option value={0}>No</Option>
          </Select>
        </Form.Item>

        {/* CD_Account */}
        <Form.Item label="Certificate of Deposit (CD Account)?" name="CD_Account" rules={[{ required: true }]}>
          <Select placeholder="Select Certificate of Deposit">
            <Option value={1}>Yes</Option>
            <Option value={0}>No</Option>
          </Select>
        </Form.Item>

        {/* Online */}
        <Form.Item label="Use Internet Banking?" name="Online" rules={[{ required: true }]}>
          <Select placeholder="Select Internet Banking">
            <Option value={1}>Yes</Option>
            <Option value={0}>No</Option>
          </Select>
        </Form.Item>

        {/* CreditCard */}
        <Form.Item label="Use Credit Card issued by other banks?" name="CreditCard" rules={[{ required: true }]}>
          <Select placeholder="Select">
            <Option value={1}>Yes</Option>
            <Option value={0}>No</Option>
          </Select>
        </Form.Item>

        <Button type="primary" htmlType="submit" loading={loading} style={{ width: "100%" }}>
          Predict
        </Button>
      </Form>

      {/* Prediction Result */}
      {prediction !== null && (
        <div ref={resultRef}>
          <Card
            style={{
              marginTop: "20px",
              backgroundColor: prediction === 1 ? "#b7eb8f" : "#ffa39e",
              textAlign: "center"
            }}
          >
            {prediction === 1 ? "Loan Likely Approved" : "Loan Likely Rejected"}
            <div style={{ marginTop: "10px" }}>
              <Button type="link" onClick={showModal}>
                Important Measures
              </Button>
            </div>
          </Card>
        </div>
      )}


      {/* Important Measures Modal */}
      <ImportantMeasures
        open={isModalVisible}
        onClose={handleClose}
        measures={importantMeasures}
        />
    </div>
  );
}
