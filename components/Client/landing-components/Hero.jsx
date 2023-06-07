import Nav from "./Nav";

export default function Hero() {
  return (
    <div>
      <Nav />

      <div className=" container mx-auto flex flex-col lg:flex-row justify-end lg:justify-between py-32 sm:py-48 lg:py-20">
        <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium space-y-10 w-8/12 ">
          <h1 className="text-5xl font-semibold tracking-tight text-[#023047] sm:text-5xl">
            Site Des Oeuvres Social De L'école Superieure D’informatique Sidi
            Bel-Abbes
          </h1>
          <div className=" flex items-center justify-left gap-x-6">
            <a
              href="/programs"
              className="rounded-2xl bg-[#023047] px-3.5 py-2.5 text-sm font-semibold text-white
            border border-[#023047] hover:text-[#023047] hover:bg-white"
            >
              Get started
            </a>
            <a
              href="/demands"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Consult your demands<span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="w-3/12">
          <img src="/images/logo.png" alt="LOGO" />
        </div>
      </div>
    </div>
  );
}
