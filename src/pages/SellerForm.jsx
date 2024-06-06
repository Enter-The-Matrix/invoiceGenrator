import { Button, Form, Input, InputNumber, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSellerDetails } from "../store/slice/invoiceSlice";
import TextArea from "antd/es/input/TextArea";
import AppHeader from "../components/AppHeader";

const SellerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Title } = Typography;

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    form.resetFields();
    localStorage.setItem("sellerDetails", JSON.stringify(values));
    dispatch(setSellerDetails(values));
    navigate("/billing");
  };

  return (
    <div>
      {" "}
      <AppHeader />
      <div className=" flex justify-center items-center overflow-auto p-4 ">
        <Form
          form={form}
          name="seller_form"
          className="w-full max-w-lg"
          onFinish={onFinish}
          layout="horizontal"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
        >
          <Title level={4}>Seller Details</Title>

          <Form.Item
            label="Seller's Name"
            name="sellerName"
            rules={[
              {
                required: true,
                message: "Please input Seller's Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Seller's Address"
            name="sellerAddress"
            rules={[
              {
                required: true,
                message: "Please input Seller's Address!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Seller's City"
            name="sellerCity"
            rules={[
              {
                required: true,
                message: "Please input Seller's City!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Seller's State"
            name="sellerState"
            rules={[
              {
                required: true,
                message: "Please input Seller's State!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Seller's Pincode"
            name="sellerPincode"
            rules={[
              {
                required: true,
                message: "Please input Seller's Pincode!",
              },
            ]}
          >
            <InputNumber min={0} style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Seller's Country"
            name="sellerCountry"
            rules={[
              {
                required: true,
                message: "Please input Seller's Country!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Seller's PAN Number"
            name="sellerPan"
            rules={[
              {
                required: true,
                message: "Please input Seller's PAN Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="GST Registration Number"
            name="sellerGST"
            rules={[
              {
                required: true,
                message: "Please input Seller's GST Registration Number!",
              },
            ]}
          >
            <Input style={{ width: "100%" }} />
          </Form.Item>
          <Form.Item
            label="Place of Supply"
            name="supplyPlace"
            rules={[
              {
                required: true,
                message: "Please input Seller's Place of Supply!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-2 ">
              <Button type="primary" htmlType="submit">
                Submit Seller Details
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SellerForm;
