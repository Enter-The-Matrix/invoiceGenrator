import numberToWords from "number-to-words";
import { capitalizeFirstAplha } from "../util/capitalizeFirstAplha";

const ItemDetails = ({ items, placeOfSupply, placeOfDelivery }) => {
  const isIGST = placeOfSupply !== placeOfDelivery;
  const spaces = "\u00A0\u00A0\u00A0";

  // Calculate the total amount for all items
  const totalOfAllItems = items.reduce((total, item) => {
    const discount = item.discount !== null ? item.discount : 0;
    const netAmount = item.unitPrice * item.quantity - discount;
    const taxRate = 18 / 100;
    const taxAmount = netAmount * taxRate;
    const cgst = isIGST ? 0 : taxAmount / 2;
    const sgst = isIGST ? 0 : taxAmount / 2;
    const igst = isIGST ? taxAmount : 0;
    const totalAmount = isIGST ? netAmount + igst : netAmount + cgst + sgst;
    return total + totalAmount;
  }, 0);

  const totalAmountInWords = numberToWords.toWords(totalOfAllItems);
  const captitalizedTotal = capitalizeFirstAplha(totalAmountInWords);

  return (
    <div className="my-4">
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Sl. No</th>
            <th className="border border-gray-300 px-4 py-2">Description</th>
            <th className="border border-gray-300 px-4 py-2">{'\u00A0'}Unit Price{'\u00A0'}</th>
            <th className="border border-gray-300 px-4 py-2">Qty</th>
            <th className="border border-gray-300 px-4 py-2">Discount</th>
            <th className="border border-gray-300 px-4 py-2">Net Amount</th>
            {isIGST ? (
              <th className="border border-gray-300 px-4 py-2">
                {spaces}IGST{spaces}
              </th>
            ) : (
              <>
                <th className="border border-gray-300 px-4 py-2">
                  {spaces}CGST{spaces}
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  {spaces}SGST{spaces}
                </th>
              </>
            )}
            <th className="border border-gray-300 px-4 py-2">Total Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => {
            const discount = item.discount !== null ? item.discount : 0;
            const netAmount = item.unitPrice * item.quantity - discount;
            const taxRate = 18 / 100;
            const taxAmount = netAmount * taxRate;
            const cgst = isIGST ? 0 : taxAmount / 2;
            const sgst = isIGST ? 0 : taxAmount / 2;
            const igst = isIGST ? taxAmount : 0;
            const totalAmount = isIGST
              ? netAmount + igst
              : netAmount + cgst + sgst;

            return (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">
                  {index + 1}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.itemDescription}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ₹ {item.unitPrice}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.quantity}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {discount}%
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ₹ {netAmount.toFixed(2)}
                </td>
                {isIGST ? (
                  <td className="border border-gray-300 px-4 py-2">
                    ₹ {igst.toFixed(2)}
                  </td>
                ) : (
                  <>
                    <td className="border border-gray-300 px-4 py-2">
                      ₹ {cgst.toFixed(2)}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      ₹ {sgst.toFixed(2)}
                    </td>
                  </>
                )}
                <td className="border border-gray-300 px-4 py-2">
                  ₹ {totalAmount.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan={isIGST ? 6 : 7}
              className="border border-gray-300 px-4 py-2 text-right font-bold"
            >
              Total:
            </td>
            <td
              colSpan={isIGST ? 2 : 3}
              className="border text-center border-gray-300 px-4 py-2"
            >
              ₹ {totalOfAllItems.toFixed(2)}
            </td>
          </tr>
          <tr>
            <td
              colSpan={isIGST ? 8 : 10}
              className="border border-gray-300 px-4 py-2 text-right font-bold"
            >
              Amount in Words: {captitalizedTotal}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ItemDetails;
