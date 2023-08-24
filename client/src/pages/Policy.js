import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <p>At Fresh from Farms, we value your privacy and are committed to protecting your personal information. When you engage with our services to order and receive farm-fresh fruits and vegetables, we may collect certain data such as your name, contact details, delivery address, and purchase history. Rest assured that this information is solely used to fulfill your orders, improve our services, and provide you with a personalized experience. We adhere to strict data security measures and do not share your personal information with any third parties for marketing purposes. We may, however, share relevant information with our trusted partners who assist us in delivering your orders. By using our services, you consent to the collection, storage, and use of your personal information as outlined in this privacy policy. We are committed to transparency and will promptly notify you of any updates or changes to our privacy practices. Should you have any concerns or queries regarding your privacy, please feel free to contact our customer support team, and we will be happy to assist you.</p>

        </div>
      </div>
    </Layout>
  );
};

export default Policy;
