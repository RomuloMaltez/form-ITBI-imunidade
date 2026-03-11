"use client";

import { useFormContext } from "react-hook-form";

export default function InformacoesAdicionais() {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <section className="mt-8">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-4">
        3. Informações Adicionais
      </h3>

      <div>
        <label className="block font-semibold mb-1">
          Descreva informações relevantes para a análise do pedido{" "}
          <span className="text-red-500">*</span>
        </label>

        <textarea
          {...register("informacoes")}
          rows={5}
          className={`w-full border rounded p-3 resize-none ${
            errors.informacoes ? "border-red-500" : "border-gray-400"
          }`}
          placeholder="Digite aqui informações adicionais que possam auxiliar na análise..."
        />

        {errors.informacoes && (
          <p className="text-red-500 text-sm mt-1">
            {errors.informacoes.message as string}
          </p>
        )}
      </div>
    </section>
  );
}
