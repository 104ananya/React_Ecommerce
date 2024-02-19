import React from "react";
import { PiAirplaneTakeoffLight } from "react-icons/pi";
import { CiCreditCard1 } from "react-icons/ci";
import { IoShieldCheckmarkSharp } from "react-icons/io5";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaBoltLightning, FaTruckFast} from "react-icons/fa6";


const Services = () => {
  return (
    <main className="grid grid-cols-6 gap-4 p-8">
      {/* Content for each grid */}
      <div className="service-grid">
        <PiAirplaneTakeoffLight size={48} className="text-dark-blue mb-2" />
        <p className="font-semibold">Free Shipping</p>
      </div>

      <div className="service-grid">
        <CiCreditCard1 size={48} className="text-dark-blue mb-2" />
        <p className="font-semibold">Money Guarantee</p>
      </div>

      <div className="service-grid">
        <IoShieldCheckmarkSharp size={48} className="text-dark-blue mb-2" />
        <p className="font-semibold">Secure Payment</p>
      </div>

      <div className="service-grid">
        <TfiHeadphoneAlt size={48} className="text-dark-blue mb-2" />
        <p className="font-semibold">24/7 Support</p>
      </div>

      <div className="service-grid">
        <FaBoltLightning size={48} className="text-dark-blue mb-2" />
        <p className="font-semibold">Fast Delivery</p>
      </div>

      <div className="service-grid">
        <FaTruckFast size={48} className="text-dark-blue mb-2" />
        <p className="font-semibold">Non-Contact Shipping</p>
      </div>
    </main>
  );
};

export default Services;
