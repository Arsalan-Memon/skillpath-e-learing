import React, { useState } from "react";
import Title from "./Title";
import { faqItems } from "../data/data";
import { RiAddLine } from "@remixicon/react";

const Faqs = () => {
  const [openId, setOpenId] = useState(faqItems[0].id ?? null);
  const handleClick = (id) => {
    setOpenId(openId === id ? null : id);
  };
  return (
    <section className="section pb-22.5 lg:mb-40">
      <div className="container">
        <div className=" grid gap-10 p-5 lg:grid-cols-[0.7fr_1fr] items-center bg-white rounded-lg md:p-10">
          <Title
            title="Frequently Asked Questions"
            text="Still you have any questions? Contact our Team via support@skillbridge.com"
            link="See All FAQ’s"
          />
          <div className="border border-white-95 grid p-6">
            {faqItems.map((item) => (
              <div className="space-y-3.5" key={item.id}>
                <div className="flex items-center justify-between gap-12 border-b border-b-white-95 pb-3 md:px-5">
                  <h4 className="text-lg sm:text-xl">{item.title}</h4>
                  <button
                    onClick={() => handleClick(item.id)}
                    className="w-10 h-10 bg-orange-75 flex items-center justify-center aspect-square rounded-lg hover:bg-orange-75/80 transition-colors active:scale-95"
                  >
                    <RiAddLine
                      className={`${
                        openId === item.id ? "rotate-45 " : ""
                      } transition-all`}
                      size={30}
                    />
                  </button>
                </div>
                <div
                  className={`max-h-0 overflow-y-hidden duration-500 ease-in-out ${
                    openId === item.id ? "max-h-50" : ""
                  }`}
                >
                  <p className="px-5 pb-3">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
