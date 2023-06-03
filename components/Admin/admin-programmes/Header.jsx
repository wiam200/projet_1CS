import ActionButton from "@/components/UI/ActionButton";
import Title from "@/components/UI/Title";
import React from "react";

function Header() {
  return (
    <header className=" center justify-between">
      <Title title={"All quantum leap programmes"} />
      <ActionButton value={"add program"} />
    </header>
  );
}

export default Header;
