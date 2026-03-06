"use client";

import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { pdf } from "@react-pdf/renderer";
import { MyPdfDocument } from "@/components/Formulario/GeradorPdf";

import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import ItbiHeader from "@/components/Formulario/ItbiHeader";
import TipoRequerimento from "@/components/Formulario/tipoRequerimento";
import IdentificacaoRequerente from "@/components/Formulario/IdentificacaoRequerente";
import IdentificacaoImovel from "@/components/Formulario/IdentificacaoImovel";
import InformacoesAdicionais from "@/components/Formulario/InformacoesAdicionais";
import DataAssinatura from "@/components/Formulario/DataAssinatura";

const schema = z.object({
  nome: z.string().min(3, "Nome obrigatório"),
  cpfCnpj: z.string().refine((value) => {
    const numbers = value.replace(/\D/g, "");

    return numbers.length === 11 || numbers.length === 14;
  }, "Digite um CPF ou CNPJ completo"),
  telefone: z.string().refine((value) => {
    const numbers = value.replace(/\D/g, "");

    return numbers.length === 10 || numbers.length === 11;
  }, "Digite corretamente o telefone"),
  email: z.string().email("E-mail inválido"),
  endereco: z.string().min(3, "Endereço obrigatório"),
  numero: z.string().min(1, "Número obrigatório"),
  bairro: z.string().min(2, "Bairro obrigatório"),
  cep: z.string().min(9, "CEP inválido"),
  complemento: z.string().optional(),
  inscricao: z.string().min(1, "Inscrição do imóvel é obrigatória"),
  informacoes: z.string().min(10, "Descreva pelo menos 10 caracteres"),
  dataCompleta: z.string(),
  nomeAssinatura: z.string().min(3, "Nome obrigatório"),
  cpfAssinatura: z.string().min(14, "CPF inválido").max(14, "CPF inválido"),
  tipo_imovel: z
    .string()
    .min(1, "Selecione o tipo do imóvel")
    .refine((val) => ["Urbano", "Rural"].includes(val), {
      message: "Tipo de imóvel inválido",
    }),
  tipo_requerimento: z.string().min(1, "Selecione o tipo de requerimento"),
});

export type FormData = z.infer<typeof schema>;

export default function Home() {
  const methods = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onSubmit",
  });

  async function onSubmit(data: FormData) {
    try {
      // 1. Gera o arquivo
      const doc = <MyPdfDocument data={data} />;
      const asBlob = await pdf(doc).toBlob();

      // 2. Faz o download
      const url = URL.createObjectURL(asBlob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `Declaracao_ISSQN_${data.nome.replace(/\s+/g, "_")}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Declaração gerada com sucesso!");
    } catch (error) {
      console.error("Erro ao gerar PDF:", error);
    }
  }

  return (
    <div className="min-h-screen bg-pv-gray-100 font-poppins">
      <Header />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 border border-gray-200">
          <ItbiHeader />

          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <TipoRequerimento />
              <IdentificacaoRequerente />
              <IdentificacaoImovel />
              <InformacoesAdicionais />
              <DataAssinatura />

              <div className="mt-8 text-center">
                <button
                  type="submit"
                  className="bg-[#70B643] text-white px-6 py-3 rounded-md hover:bg-[#2980b9] transition"
                >
                  Gerar PDF
                </button>
              </div>
            </form>
          </FormProvider>
        </div>
      </main>

      <Footer />
    </div>
  );
}
