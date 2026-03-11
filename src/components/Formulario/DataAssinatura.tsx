"use client";

import { useFormContext } from "react-hook-form";
import { useEffect } from "react";

export default function DataAssinatura() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  // Auto preencher data
  useEffect(() => {
    const hoje = new Date();
    const dia = String(hoje.getDate()).padStart(2, "0");
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const ano = hoje.getFullYear();
    setValue("dataCompleta", `${dia}/${mes}/${ano}`);
  }, [setValue]);

  function formatCpf(value: string) {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    return numbers
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  }

  return (
    <section className="mt-10 border-t pt-6">
      <div className="mb-6">
        <label className="block font-semibold mb-1">Data do Requerimento</label>

        <input
          {...register("dataCompleta")}
          readOnly
          className="border border-gray-300 bg-gray-100 rounded p-2 font-semibold"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Nome Assinatura */}
        <div>
          <label className="block font-semibold mb-1">
            Nome do Contribuinte ou Representante Legal{" "}
            <span className="text-red-500">*</span>
          </label>

          <input
            {...register("nomeAssinatura")}
            className={`w-full border rounded p-2 ${
              errors.nomeAssinatura ? "border-red-500" : "border-gray-400"
            }`}
          />

          {errors.nomeAssinatura && (
            <p className="text-red-500 text-sm">
              {errors.nomeAssinatura.message as string}
            </p>
          )}
        </div>

        {/* CPF Assinatura */}
        <div>
          <label className="block font-semibold mb-1">
            CPF <span className="text-red-500">*</span>
          </label>

          <input
            {...register("cpfAssinatura")}
            onChange={(e) =>
              setValue("cpfAssinatura", formatCpf(e.target.value), {
                shouldValidate: true,
              })
            }
            placeholder="000.000.000-00"
            className={`w-full border rounded p-2 ${
              errors.cpfAssinatura ? "border-red-500" : "border-gray-400"
            }`}
          />

          {errors.cpfAssinatura && (
            <p className="text-red-500 text-sm">
              {errors.cpfAssinatura.message as string}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
