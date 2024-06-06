import { Button, Form, Input, InputNumber, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBillingDetails } from "../store/slice/invoiceSlice";
import TextArea from "antd/es/input/TextArea";
import AppHeader from "../components/AppHeader";

function BillingForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Title } = Typography;

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    form.resetFields();
    localStorage.setItem("billingDetails", JSON.stringify(values));
    dispatch(setBillingDetails(values));
    navigate("/shipping");
  };

  return (
    <div>
      <AppHeader />
      <div className="flex justify-center items-center overflow-auto p-4">
        <Form
          form={form}
          name="billing_form"
          className=" w-full max-w-lg "
          onFinish={onFinish}
          layout="horizontal"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Title level={4}>Billing Details</Title>

          <Form.Item
            label="Buyer's Name"
            name="buyerName"
            rules={[
              {
                required: true,
                message: "Please input Buyer's Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Buyer's Address"
            name="buyerAddress"
            rules={[
              {
                required: true,
                message: "Please input Buyer's Address!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Buyer's City"
            name="buyerCity"
            rules={[
              {
                required: true,
                message: "Please input Buyer's City!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Buyer's State"
            name="buyerState"
            rules={[
              {
                required: true,
                message: "Please input Buyer's State!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="State/UT Code"
            name="stateUTcode"
            rules={[
              {
                required: true,
                message: "Please input State/UT Code!",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item
            label="Buyer's Pincode"
            name="buyerPincode"
            rules={[
              {
                required: true,
                message: "Please input Buyer's Pincode!",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Buyer's Country"
            name="buyerCountry"
            rules={[
              {
                required: true,
                message: "Please input Buyer's Country!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-2">
              <Button type="primary" htmlType="submit">
                Submit Billing Details
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default BillingForm;
