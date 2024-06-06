import { Button, Form, InputNumber, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setItemDetails } from "../store/slice/invoiceSlice";
import TextArea from "antd/es/input/TextArea";
import AppHeader from "../components/AppHeader";

function ItemForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Title } = Typography;

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    form.resetFields();

    // Retrieve existing items from localStorage
    const existingItems = JSON.parse(localStorage.getItem("itemDetails")) || [];
    const updatedItems = [...existingItems, values];

    // Save updated items to localStorage
    localStorage.setItem("itemDetails", JSON.stringify(updatedItems));

    // Update Redux store
    dispatch(setItemDetails(updatedItems));
    navigate("/gen-invoice");
  };

  return (
    <div>
      <AppHeader />

      <div className="flex justify-center items-center overflow-auto p-4">
        <Form
          form={form}
          name="item_form"
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
          <Title level={4}>Items Details</Title>

          <Form.Item
            label="Item's Description"
            name="itemDescription"
            rules={[
              {
                required: true,
                message: "Please input Item's Description!",
              },
            ]}
          >
            <TextArea />
          </Form.Item>

          <Form.Item
            label="Unit Price"
            name="unitPrice"
            rules={[
              {
                required: true,
                message: "Please input Unit Price!",
              },
            ]}
          >
            <InputNumber min={0} prefix={<div>₹</div>} />
          </Form.Item>
          <Form.Item
            label="Item Quantity"
            name="quantity"
            rules={[
              {
                required: true,
                message: "Please input Item Quantity!",
              },
            ]}
          >
            <InputNumber min={0} />
          </Form.Item>

          <Form.Item
            label="Discount"
            name="discount"
            rules={[
              {
                required: true,
                message: "Please input Discount!",
              },
            ]}
          >
            <InputNumber
              min={0}
              prefix={<div>%</div>}
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item>
            <div className="flex justify-end gap-2">
              <Button type="primary" htmlType="submit">
                Submit Shipping Details
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default ItemForm;
