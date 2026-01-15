import { Card, Row, Col, Typography, Divider, Tag, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

export default function About() {
  return (
    <div style={{ padding: "24px" }}>
      <Title level={2}>About This Application</Title>
      <Divider />

      <Row gutter={[16, 16]}>
        {/* Developer Card */}
        <Col xs={24} md={8}>
          <Card title="Developer" bordered>
            <Paragraph>
              <strong>Name:</strong> Nikhil
            </Paragraph>
            <Paragraph>
              <strong>Role:</strong> Full Stack & AI/ML Engineer
            </Paragraph>
          </Card>
        </Col>

        {/* Experience & Education */}
        <Col xs={24} md={8}>
          <Card title="Experience & Education" bordered>
            <Paragraph>
              <strong>Experience:</strong> 1 Year in Full Stack Development (FSD)
            </Paragraph>
            <Paragraph>
              <strong>Education:</strong>  
              <br />
              Currently pursuing <Text strong>PGP in AI & ML</Text> from  
              <br />
              <Text type="secondary">University of Texas at Austin</Text>
            </Paragraph>
          </Card>
        </Col>

        {/* Model Info */}
        <Col xs={24} md={8}>
          <Card title="Model Overview" bordered>
            <Paragraph>
              <strong>Model:</strong> Decision Tree (Post-Pruned)
            </Paragraph>
            <Paragraph>
              This Decision Tree model, after post-pruning (<Text code>dtree3</Text>),
              provides AllLife Bank with a highly accurate, fast, and transparent
              solution for targeted personal loan marketing.
            </Paragraph>
          </Card>
        </Col>
      </Row>

      <Divider />

      {/* Model Performance */}
      <Card title="Model Performance" bordered>
        <Paragraph>
          The model achieved excellent generalization performance on unseen data:
        </Paragraph>

        <Paragraph>
          <Tag color="green">Accuracy: 0.991</Tag>
          <Tag color="blue">Precision: 0.948</Tag>
          <Tag color="gold">F1-Score: 0.95</Tag>
        </Paragraph>

        <Paragraph>
          These metrics ensure that the bank can maximize the return on its
          marketing investment while minimizing incorrect loan targeting.
        </Paragraph>

        <Paragraph>
    The Personal Loan Prediction model was built using a structured Decision Tree
    modeling approach to ensure accuracy, interpretability, and business value.
  </Paragraph>

  <Paragraph>
    The following modeling stages were explored and evaluated:
  </Paragraph>

  <ul>
    <li>
      <strong>Normal Decision Tree:</strong> Initial baseline model built without
      pruning to understand raw feature splits.
    </li>
    <li>
      <strong>Pre-Pruned Decision Tree:</strong> Controlled model complexity by
      limiting depth, minimum samples per split, and leaf size.
    </li>
    <li>
      <strong>Post-Pruned Decision Tree:</strong> Final optimized model (dtree3)
      using cost-complexity pruning, achieving the best generalization performance.
    </li>
  </ul>

  <Paragraph>
    For a detailed end-to-end model-building process, evaluation, and business
    insights, please refer to the complete project notebook.
  </Paragraph>

  <Button
    type="primary"
    icon={<GithubOutlined />}
    href="https://github.com/nikhilnayakbannikuppevirendra/Personal-Loan-Campaign/blob/main/M02_Project_Personal_Loan_Campaign_Nikhil_Nayak_B_V.html"
    target="_blank"
  >
    View Complete Model Build on GitHub
  </Button>
      </Card>

      <Divider />

      {/* Important Features */}
      <Card title="Most Important Features for Prediction" bordered>
        <Paragraph>
          The following features play a crucial role in personal loan approval:
        </Paragraph>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <Tag color="purple">Income</Tag>
          <Tag color="purple">Education</Tag>
          <Tag color="purple">Family Size</Tag>
          <Tag color="purple">CC Average Spending</Tag>
          <Tag color="purple">CD Account</Tag>
          <Tag color="purple">Online Transactions</Tag>
          <Tag color="purple">Age</Tag>
        </div>
      </Card>
    </div>
  );
}
