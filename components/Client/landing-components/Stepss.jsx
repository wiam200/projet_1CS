import Image from "next/image";

const Stepss = () => {
  return (
    <section className="container mx-auto flex flex-col lg:flex-row bg-white border border-solid border-2 border-[#023047] rounded-xl px-[80px] py-[100px]">
      <div className="h-full lg:w-11/12 space-y-16">
        <h2 className="text-4xl relative w-fit">
          Work process
          <span className="h-[4px] w-8/12 absolute -bottom-5 left-0 bg-black"></span>
        </h2>
        <div className=" w-[350px] h-[326px]">
          <Image
            src="/images/stepss.png"
            width={660}
            height={560}
            alt="Picture"
          />
        </div>
      </div>
      <div className="h-[326px] lg:w-6/12 flex flex-col lg:justify-between">
        <div className="flex gap-8 items-center">
          <div className="h-[50px] w-[50px] bg-[#023047] rotate-45 flex justify-center items-center">
            <p className="-rotate-45 mb-0 text-3xl text-white">1</p>
          </div>
          <h3 className="text-base">Choose your program</h3>
        </div>
        <div className="w-[1px] h-[100px] bg-black ml-[25px]"></div>

        <div>
          <div className="flex gap-8 items-center">
            <div className="h-[50px] w-[50px] bg-[#026596] rotate-45 flex justify-center items-center">
              <p className="-rotate-45 mb-0 text-3xl text-white">2</p>
            </div>
            <h3 className="text-base">Fill your informations</h3>
          </div>

          <div className="w-[1px] h-[100px] bg-black ml-[25px]"></div>

          <div>
            <div className="flex gap-8 items-center">
              <div className="h-[50px] w-[50px] bg-[#007FBF] rotate-45 flex justify-center items-center">
                <p className="-rotate-45 mb-0 text-3xl text-white">3</p>
              </div>
              <h3 className="text-base">Submit</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Stepss;
