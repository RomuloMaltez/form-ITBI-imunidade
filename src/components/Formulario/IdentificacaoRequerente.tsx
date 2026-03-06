"use client";

import { useFormContext } from "react-hook-form";

export default function IdentificacaoRequerente() {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  function formatCpfCnpj(value: string) {
    const numbers = value.replace(/\D/g, "");

    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, "$1setValue.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    }

    return numbers
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
      .replace(/\.(\d{3})(\d)/, ".$1/$2")
      .replace(/(\d{4})(\d)/, "$1-$2");
  }

  function formatTelefone(value: string) {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  }

  function formatCep(value: string) {
    const numbers = value.replace(/\D/g, "");
    return numbers.replace(/(\d{5})(\d{3})/, "$1-$2");
  }

  return (
    <section className="form-section">
      <h3 className="text-[#2c3e50] font-semibold text-lg border-b-2 border-[#3498db] pb-2 mb-4">
        1. Identificação do Sujeito Passivo/Requerente
      </h3>

      <div className="space-y-4">
        {/* Nome + CPF */}
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-62.5">
            <label className="block font-semibold mb-1">
              Nome/Razão Social <span className="text-red-500">*</span>
            </label>
            <input
              {...register("nome")}
              className={`w-full border-2 rounded p-2 ${
                errors.nome ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.nome && (
              <p className="text-red-500 text-sm">
                {errors.nome.message as string}
              </p>
            )}
          </div>

          <div className="w-62.5">
            <label className="block font-semibold mb-1">
              CPF/CNPJ <span className="text-red-500">*</span>
            </label>
            <input
              {...register("cpfCnpj")}
              onChange={(e) => {
                const formated = formatCpfCnpj(e.target.value);
                setValue("cpfCnpj", formated, { shouldValidate: true });
              }}
              className={`w-full border-2 rounded p-2 ${
                errors.cpfCnpj ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="000.000.000-00 ou 00.000.000/0000-00"
            />
            {errors.cpfCnpj && (
              <p className="text-red-500 text-sm">
                {errors.cpfCnpj.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Telefone + Email */}
        <div className="flex gap-4 flex-wrap">
          <div className="w-62.5">
            <label className="block font-semibold mb-1">
              Telefone/Celular <span className="text-red-500">*</span>
            </label>
            <input
              {...register("telefone")}
              className={`w-full border-2 rounded p-2 ${
                errors.telefone ? "border-red-500" : "border-gray-400"
              }`}
              onChange={(e) => {
                const formatted = formatTelefone(e.target.value);
                setValue("telefone", formatted, { shouldValidate: true });
              }}
              placeholder="(00) 00000-0000"
            />
            {errors.telefone && (
              <p className="text-red-500 text-sm">
                {errors.telefone.message as string}
              </p>
            )}
          </div>

          <div className="flex-1 min-w-62.5">
            <label className="block font-semibold mb-1">
              logradouro E-mail <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              {...register("email")}
              className={`w-full border-2 rounded p-2 ${
                errors.email ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message as string}
              </p>
            )}
          </div>
        </div>

        {/* Endereço */}
        <div>
          <label className="block font-semibold mb-1">
            Endereço de Correspondência <span className="text-red-500">*</span>
          </label>
          <input
            {...register("endereco")}
            className={`w-full border-2 rounded p-2 ${
              errors.endereco ? "border-red-500" : "border-gray-400"
            }`}
          />
          {errors.endereco && (
            <p className="text-red-500 text-sm">
              {errors.endereco.message as string}
            </p>
          )}
        </div>

        {/* Número + Bairro */}
        <div className="flex gap-4 flex-wrap">
          <div className="w-30s">
            <label className="block font-semibold mb-1">
              Nº <span className="text-red-500">*</span>
            </label>
            <input
              {...register("numero")}
              className={`w-full border-2 rounded p-2  ${
                errors.numero ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.numero && (
              <p className="text-red-500 text-sm">
                {errors.numero.message as string}
              </p>
            )}
          </div>

          <div className="flex-1 min-w-50">
            <label className="block font-semibold mb-1">
              Bairro <span className="text-red-500">*</span>
            </label>
            <input
              {...register("bairro")}
              className={`w-full border-2 rounded p-2 ${
                errors.bairro ? "border-red-500" : "border-gray-400"
              }`}
            />
            {errors.bairro && (
              <p className="text-red-500 text-sm">
                {errors.bairro.message as string}
              </p>
            )}
          </div>
        </div>

        {/* CEP + Complemento */}
        <div className="flex gap-4 flex-wrap">
          <div className="w-37.5">
            <label className="block font-semibold mb-1">
              CEP <span className="text-red-500">*</span>
            </label>
            <input
              {...register("cep")}
              onChange={(e) => {
                const formated = formatCep(e.target.value);
                setValue("cep", formated, { shouldValidate: true });
              }}
              className={`w-full border-2 rounded p-2 ${
                errors.cep ? "border-red-500" : "border-gray-400"
              }`}
              placeholder="00000-000"
            />
            {errors.cep && (
              <p className="text-red-500 text-sm">
                {errors.cep.message as string}
              </p>
            )}
          </div>

          <div className="flex-1">
            <label className="block font-semibold mb-1">Complemento</label>
            <input
              {...register("complemento")}
              className="w-full border-2 rounded p-2 border-gray-400"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
