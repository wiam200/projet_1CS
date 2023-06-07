import Title from "@/components/UI/Title";
import React from "react";
import ApprovedDemandes from "./ApprovedList";

function Payment() {
  return (
    <section className=" w-full h-screen  py-10 pt-14 space-y-10">
      <Title title="Approved quantum leap requests " />
      <ApprovedDemandes />
    </section>
  );
}

export default Payment;
