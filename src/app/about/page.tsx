import rsudimg from "@/assets/rsud.png";


export default function About() {
  return (
    <div className="pt-32">
      <section
        className=" relative bg-center w-full h-[200px] bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${rsudimg.src})` }}
      >
        <div className="absolute inset-0 bg-white opacity-40"></div>
        <div className="pl-6 relative">
          <h1 className="text-4xl text-primary font-extrabold max-w-3xl py-10">
            Tentang Kami
          </h1>
        </div>
      </section>
    </div>
  );
}
