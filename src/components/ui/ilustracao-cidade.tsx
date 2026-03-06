import Image from "next/image";

export default function IlustracaoCidade() {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-visible">
      <div className="relative w-full max-w-7xl">
        <Image
          src="/PortoVelhoPintura.svg"
          alt="Ilustração linear destacando pontos turísticos de Porto Velho"
          width={3200}
          height={1000}
          priority
          className="h-47.5 w-full object-cover"
        />
      </div>
    </div>
  );
}
