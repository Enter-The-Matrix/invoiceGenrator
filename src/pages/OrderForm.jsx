import { Button, DatePicker, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setOrderDetails } from "../store/slice/invoiceSlice";
import AppHeader from "../components/AppHeader";
// import { useState } from "react";

const OrderForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Title } = Typography;

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    const orderDetails = {
      ...values,
      orderDate: values.orderDate.format("DD-MM-YYYY"),
    };
    form.resetFields();
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    dispatch(setOrderDetails(orderDetails));
    navigate("/invoice");
  };

  return (
    <div>
      <AppHeader />

      <div className=" flex justify-center items-center overflow-auto p-4 ">
        <Form
          form={form}
          name="order_form"
          className="w-full max-w-lg"
          onFinish={onFinish}
          layout="vertical"
        >
          <Title level={4}>Order Details</Title>

          <Form.Item
            label="Order Number"
            name="orderNumber"
            rules={[
              {
                required: true,
                message: "Please input Order Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Order Date"
            name="orderDate"
            rules={[
              {
                required: true,
                message: "Please input Order Date!",
              },
            ]}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-2">
              <Button type="primary" htmlType="submit">
                Submit Order Details
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default OrderForm;
