const Header = ({ logoUrl }) => {
    // console.log(logoUrl);
  return (
    <div className="flex justify-between items-center mb-4">
      <img src={logoUrl} alt="Company Logo" className="h-16" />
      <div className="flex flex-col text-end">
      <h1 className="text-2xl font-bold">Tax Invoice/Bill of Supply/Cash Memo</h1>
      <h1 className="text-xl font-semiBold">(Original for Recipient)</h1>

      </div>
    </div>
  );
};

export default Header;