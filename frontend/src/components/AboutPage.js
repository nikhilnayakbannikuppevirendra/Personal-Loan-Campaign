import React from "react";
import { Card, Row, Col, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  const developer = {
    name: "Nikhil",
    role: "Developer"
  };

  const modelInfo = {
    name: "Decision Tree (DT)",
    description: "Post Pruning applied"
  };

  const features = [
    "ID: Customer ID",
    "Age: Customer’s age in completed years",
    "Experience: # years of professional experience",
    "Income: Annual income of the customer (in thousand dollars)",
    "ZIP Code: Home Address ZIP code",
    "Family: The family size of the customer",
    "CCAvg: Average spending on credit cards per month (in thousand dollars)",
    "Education: Education Level. 1: Undergrad; 2: Graduate; 3: Advanced/Professional",
    "Mortgage: Value of house mortgage if any (in thousand dollars)",
    "Personal_Loan: Did this customer accept the personal loan offered in the last campaign?",
    "Securities_Account: Does the customer have a securities account with the bank?",
    "CD_Account: Does the customer have a certificate of deposit (CD) account with the bank?",
    "Online: Do customers use Internet banking facilities?",
    "CreditCard: Does the customer use a credit card issued by any other Bank (excluding All Life Bank)?"
  ];

  return (
    <div style={{ padding: "20px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "40px" }}>
        About This App
      </Title>

      <Row gutter={[16, 16]}>
        {/* Left Column: Developer + Model stacked */}
        <Col xs={24} md={12} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <Card title="Developer" bordered>
            <Paragraph>
              <strong>Name:</strong> {developer.name}
            </Paragraph>
            <Paragraph>
              <strong>Role:</strong> {developer.role}
            </Paragraph>
          </Card>

          <Card title="Model" bordered>
            <Paragraph>
              <strong>Name:</strong> {modelInfo.name}
            </Paragraph>
            <Paragraph>
              <strong>Description:</strong> {modelInfo.description}
            </Paragraph>
          </Card>
        </Col>

        {/* Right Column: Features */}
        <Col xs={24} md={12}>
          <Card title="Features" bordered style={{ maxHeight: "500px", overflowY: "auto" }}>
            <ul style={{ paddingLeft: "20px" }}>
              {features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
