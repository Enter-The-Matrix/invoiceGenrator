import { Button, DatePicker, Form, Input, Select, Typography } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setInvoiceDetails } from "../store/slice/invoiceSlice";
import AppHeader from "../components/AppHeader";

function InvoiceForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Title } = Typography;

  const onFinish = (values) => {
    // console.log("Received values of form: ", values);
    const invoiceDetails = {
      ...values,
      invoiceDate: values.invoiceDate.format("DD-MM-YYYY"),
    };
    form.resetFields();
    localStorage.setItem("invoiceDetails", JSON.stringify(invoiceDetails));
    dispatch(setInvoiceDetails(invoiceDetails));
    navigate("/item");
  };

  return (
    <div>
      <AppHeader />
      <div className="flex justify-center items-center overflow-auto p-4">
        <Form
          form={form}
          name="invoice_form"
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
          <Title level={4}>Invoice Details</Title>

          <Form.Item
            label="Invoice Number"
            name="invoiceNumber"
            rules={[
              {
                required: true,
                message: "Please input Invoice Number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Invoice Details"
            name="invoiceDetail"
            rules={[
              {
                required: true,
                message: "Please input Invoice Details!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Invoice Date"
            name="invoiceDate"
            rules={[
              {
                required: true,
                message: "Please input Invoice Date!",
              },
            ]}
          >
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>

          <Form.Item label="Reverse Charge" name="reverseCharge">
            <Select>
              <Select.Option value="yes">Yes</Select.Option>
              <Select.Option value="no">No</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <div className="flex justify-end gap-2 ">
              <Button type="primary" htmlType="submit">
                Submit Invoice Details
              </Button>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default InvoiceForm;
