import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
    return (
        <Layout title={"About us"}>
            <div className="row contactus ">
                <div className="col-md-6 ">
                    <img
                        src="/images/about.jpeg"
                        alt="contactus"
                        style={{ width: "100%" }}
                    />
                </div>
                <div className="col-md-4">
                    <p className="text-justify mt-2">
                        At Fresh from Farms, we are passionate about connecting farmers and customers by delivering farm-fresh fruits and vegetables directly from the farmlands to your doorstep. We believe in the power of wholesome, locally sourced produce to nourish your body and support sustainable agriculture in India.<br />
                        From luscious seasonal fruits to vibrant, crisp vegetables, our diverse range of offerings caters to your every need. Our dedicated team meticulously selects and handpicks each item to ensure that only the finest and freshest produce reaches your table. We understand that your health and well-being are paramount, which is why we strive to deliver the very best nature has to offer, harvested at the peak of ripeness.<br />
                        Join us on this journey to support local farmers, embrace healthy living, and relish the unmatched taste of farm-fresh produce. Together, let's celebrate the bountiful flavors of India and make a positive impact on our environment and communities.<br />

                        Fresh from Farms – Connecting Farms and Families for a Healthier Future.

                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default About;
