import React, { useState } from 'react';
import { Row, Col, List, Rate, Form, Input, Card,Button, Typography, message } from 'antd';

const { TextArea } = Input;
const { Title } = Typography;

const ReviewComponent = ({ initialReviews }) => {


  if (!initialReviews || initialReviews.length === 0) {
    return <p>No reviews available.</p>;
  }


  return (
    <Card  style={{ marginTop: '20px' }}>
    
      <Title level={3}>Product Feedback</Title>

      <Row gutter={[8, 8]} justify="space-around" align="middle" style={{ marginBottom: '20px' }}>
        {/* Left: Reviews */}
        <Col xs={24} md={14}>
          <Title level={4}>Customer Reviews</Title>
          <List
            itemLayout="vertical"
            dataSource={initialReviews}
            renderItem={(item) => (
              <List.Item key={item.id}>
                <List.Item.Meta
                  title={<strong>{item.reviewerName}</strong>}
                  description={<Rate disabled defaultValue={item.rating} />}
                />
                {console.log(item)}
                <p>{item.comment}</p>
                <small>{item.date}</small>
              </List.Item>
            )}
          />
        </Col>

        {/* Right: Leave a Review */}
        <Col xs={24} md={10}>
          <Title level={4}>Leave a Review</Title>
          <Form
           
            layout="vertical"
          
            initialValues={{ rating: 5 }}
          >
            <Form.Item
              name="reviewerName"
              label="Your Name"
              rules={[{ required: true, message: 'Please enter your name' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: 'Please rate the product' }]}
            >
              <Rate />
            </Form.Item>

            <Form.Item
              name="comment"
              label="Comment"
              rules={[{ required: true, message: 'Please write a comment' }]}
            >
              <TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                Submit Review
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </Card>
  );
};

export default ReviewComponent;
