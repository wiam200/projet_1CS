import Demandes from "@/components/Admin/admin-demandes/Demandes";
import Title from "@/components/UI/Title";
import React from "react";

function demandes() {
  return (
    <section className=" w-full h-screen  py-10 pt-14 space-y-10">
      <Title title="All Quantum leap requests" />
      <Demandes />
    </section>
  );
}

export default demandes;
