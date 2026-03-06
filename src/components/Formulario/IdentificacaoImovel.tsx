"use client";

import { useFormContext } from "react-hook-form";

export default function IdentificacaoImovel() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="mt-4 mb-8">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-4">
        2. Identificação do Imóvel
      </h3>
      Imóvel Urbano
      {/* Tipo do Imóvel */}
      <div className="mb-4">
        <p className="block font-semibold mb-2">Tipo de Imóvel</p>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              defaultChecked
              type="radio"
              value="Urbano"
              {...register("tipo_imovel")}
            />
            Imóvel Urbano
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="radio" value="Rural" {...register("tipo_imovel")} />
            Imóvel Rural
          </label>
        </div>
      </div>
      {/* Inscrição do Imóvel */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">
          Inscrição do Imóvel <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          placeholder="número da inscrição"
          className={`w-full border rounded-md p-3 focus:outline-none transition-colors ${
            errors.inscricao
              ? "border-red-500 bg-red-50"
              : "border-gray-300 focus:border-[#3498db]"
          }`}
          {...register("inscricao")}
        />
        {errors.inscricao && (
          <p className="text-red-500 text-sm mt-1 font-medium">
            {errors.inscricao.message as string}
          </p>
        )}
      </div>
    </div>
  );
}
