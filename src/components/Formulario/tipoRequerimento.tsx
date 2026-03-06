"use client";

import { useFormContext } from "react-hook-form";

export default function TipoRequerimento() {
  const {
    register,
    watch,
    formState: { errors },
  } = useFormContext();

  const valorSelecionado = watch("tipo_requerimento"); // 👈 agora vem do form

  const tipos = [
    {
      value: "extincao_pj",
      label: "Quando Decorrente da Extinção de Pessoa Jurídica",
    },
    {
      value: "incorporacao_fusao_estrangeira",
      label:
        "Quando Decorrente da Incorporação, Fusão, Cisão ou Extinção de Pessoa Jurídica Estrangeira",
    },
    {
      value: "desincorporacao_patrimonio",
      label:
        "Quando Efetuada para sua Desincorporação do Patrimônio de Pessoa Jurídica a que Foram Conferidos",
    },
    {
      value: "incorporacao_fusao_nacional",
      label:
        "Quando Decorrente da Incorporação, Fusão, Cisão ou Extinção de Pessoa Jurídica Nacional",
    },
    {
      value: "incorporacao_capital",
      label:
        "Quando Efetuada para sua Incorporação ao Patrimônio de Pessoa Jurídica em Pagamento de Capital Subscrito",
    },
  ];

  const tipoEncontrado = tipos.find((item) => item.label === valorSelecionado);
  const chaveTecnica = tipoEncontrado?.value;

  const documentacaoPorTipo: Record<string, string[]> = {
    extincao_pj: [
      "Requerimento específico, assinado pelo representante legal com e-mail/telefone, obrigatório",
      "Procuração e documentos de identificação do representante, quando aplicável",
      "CNPJ e comprovante de inscrição e situação cadastral da(s) pessoa(s) jurídica(s) envolvida(s)",
      "Contrato/Estatuto Social consolidado e últimas alterações arquivadas na Junta Comercial/Cartório (todas as partes envolvidas)",
      "Certidão de inteiro teor da matrícula atualizada do imóvel, com ônus e ações do Cartório de Registro de Imóveis",
      "Certidão negativa de tributos imobiliários (imóvel urbano)",
      "Declaração do ITR (imóvel rural)",
      "Laudo de avaliação do imóvel, emitido por profissional habilitado",
      "Balanço patrimonial demonstrando o imóvel incorporado, ainda que parcial",
      "Livro Diário, ou os Balancetes Diários, e o Livro Razão (se houver), que demonstre o lançamento específico da incorporação",
      "Distrato social/ata de liquidação, com relação dos bens partilhados e critérios de avaliação e prova de arquivamento/registro do encerramento na Junta/Cartório",
      "Nomeação do liquidante e relatórios de liquidação (se houver)",
      "Balanços e DRE, ECD/ECF/DEFIS, razão analítica ou relatório gerencial que separe receitas imobiliárias (compra e venda de imóveis, locação, arrendamento mercantil) das demais (De 2 anos anteriores e 2 anos posteriores à aquisição)",
      "Quando se tratar de PJ que iniciar suas atividades após a aquisição do imóvel, ou menos de 2 anos antes dela, trazer documentos contábeis dos três primeiros anos",
      "Termo de compromisso de apresentar, demonstrações dos 2 exercícios subsequentes ao fato gerador para aferição da preponderância",
      "Tarifa de abertura de processo",
    ],

    incorporacao_fusao_estrangeira: [
      "Requerimento específico devidamente preenchido",
      "Atos Constitutivos, contrato ou estatuto e última alteração, registrados no órgão competente ou lei quando se tratar de órgão público",
      "CNPJ",
      "RG e CPF do subscritor do requerimento, com poderes de representação da sociedade, conforme atos constitutivos, ou portaria, ou decreto, quando se tratar de órgão público",
      "Certidão de incorporação, fusão, cisão, registrada na junta ou no cartório, conforme o caso, descrevendo a sucessão patrimonial decorrente da operação",
      "Protocolo e ata de assembleia geral de aprovação e autorização de operação e nomeação de 03 peritos ou empresa especializada para avaliação de patrimônios líquidos",
      "Declaração de Informações Econômico-Fiscais de PJ – DIPJ e Declaração de Débitos e Créditos de Tributos Federais – DCTF e Declaração de IR fonte – DIRF",
      "Certidão Simplificada da JUCER, registrada em cartório",
      "Certidão de Propriedade das matrículas cujos imóveis ou direitos reais sejam transmitidos, lavrada pelo registro de imobiliário competente",
      "Certidão Negativa Federal, Estadual e Municipal",
      "Procuração do Representante no Brasil, com poderes expressos para receber citação em ações propostas contra a outorgante, notificações e avisos de lançamento de tributos e multas e intimações, do local onde situados os bens transmitidos, em português ou traduzido por tradutor oficial",
      "Inteiro Teor do contrato ou estatuto e prova de achar-se a organização constituída conforme a lei de seu país, em português ou traduzido por tradutor oficial",
      "Alterações contratuais pertinentes à transação, nas quais figurem os registros das operações junto ao registro civil ou comercial, conforme o caso",
      "Tarifa de abertura de processo",
    ],

    desincorporacao_patrimonio: [
      "Requerimento específico, assinado pelo representante legal com e-mail/telefone, obrigatório",
      "Procuração e documentos de identificação do representante, quando aplicável",
      "CNPJ e comprovante de inscrição e situação cadastral da(s) pessoa(s) jurídica(s) envolvida(s)",
      "Contrato/Estatuto Social consolidado e últimas alterações arquivadas na Junta Comercial/Cartório (todas as partes envolvidas)",
      "Certidão de inteiro teor da matrícula atualizada do imóvel, com ônus e ações do Cartório de Registro de Imóveis",
      "Certidão negativa de tributos imobiliários, no caso de imóvel urbano",
      "Declaração do ITR, no caso de imóvel rural",
      "Laudo de avaliação do imóvel, emitido por profissional habilitado",
      "Balanço patrimonial que demonstre o imóvel já incorporado, ainda que parcial",
      "Livro Diário, ou os Balancetes Diários, e o Livro Razão (se houver), que demonstre o lançamento específico da incorporação",
      "Protocolo e justificação de desincorporação, atas de aprovação nas sociedades envolvidas e comprovação de arquivamento",
      "Balanços e DRE, ECD/ECF/DEFIS, razão analítica ou relatório gerencial que separe receitas imobiliárias (compra e venda de imóveis, locação, arrendamento mercantil) das demais (De 2 anos anteriores e 2 anos posteriores à aquisição)",
      "Quando se tratar de PJ que iniciar suas atividades após a aquisição do imóvel, ou menos de 2 anos antes dela, trazer documentos contábeis dos três primeiros anos",
      "Termo de compromisso de apresentar, demonstrações dos 2 exercícios subsequentes ao fato gerador para aferição da preponderância",
      "Tarifa de abertura de processo",
    ],

    incorporacao_fusao_nacional: [
      "Requerimento específico, assinado pelo representante legal com e-mail/telefone, obrigatório",
      "Procuração e documentos de identificação do representante, quando aplicável",
      "CNPJ e comprovante de inscrição e situação cadastral da(s) pessoa(s) jurídica(s) envolvida(s)",
      "Contrato/Estatuto Social consolidado e últimas alterações arquivadas na Junta Comercial/Cartório (todas as partes envolvidas)",
      "Certidão de inteiro teor da matrícula atualizada do imóvel, com ônus e ações do Cartório de Registro de Imóveis",
      "Certidão negativa de tributos imobiliários, no caso de imóvel urbano",
      "Declaração do ITR, no caso de imóvel rural",
      "Laudo de avaliação do imóvel, emitido por profissional habilitado",
      "Balanço patrimonial que demonstre o imóvel já incorporado, ainda que parcial",
      "Livro Diário, ou os Balancetes Diários, e o Livro Razão (se houver), que demonstre o lançamento específico da incorporação",
      "Protocolo e justificação de fusão, incorporação ou cisão, Atas de aprovação nas sociedades envolvidas e comprovação de arquivamento",
      "Balanços e DRE, ECD/ECF/DEFIS, razão analítica ou relatório gerencial que separe receitas imobiliárias (compra e venda de imóveis, locação, arrendamento mercantil) das demais (De 2 anos anteriores e 2 anos posteriores à aquisição)",
      "Quando se tratar de PJ que iniciar suas atividades após a aquisição do imóvel, ou menos de 2 anos antes dela, trazer documentos contábeis dos três primeiros anos",
      "Termo de compromisso de apresentar, demonstrações dos 2 exercícios subsequentes ao fato gerador para aferição da preponderância",
      "Tarifa de abertura de processo",
    ],

    incorporacao_capital: [
      "Requerimento específico, assinado pelo representante legal com e-mail/telefone",
      "Procuração e documentos de identificação do representante, quando feito por terceiros",
      "CNPJ e comprovante de inscrição e situação cadastral da(s) pessoa(s) jurídica(s) envolvida(s)",
      "Contrato/Estatuto Social consolidado e últimas alterações arquivadas na Junta Comercial/Cartório (todas as partes envolvidas)",
      "Prova do arquivamento/registro dos atos societários pertinentes à operação (protocolo ou certidão simplificada/inteiro teor)",
      "Certidão de inteiro teor da matrícula atualizada do imóvel, com ônus e ações do Cartório de Registro de Imóveis",
      "Certidão negativa de tributos imobiliários, no caso de imóvel urbano",
      "Declaração do ITR, no caso de imóvel rural",
      "Laudo de avaliação do imóvel, emitido por profissional engenheiro habilitado",
      "Balanço patrimonial que demonstre o imóvel já incorporado, ainda que parcial",
      "Livro Diário, ou os Balancetes Diários, e o Livro Razão (se houver), que demonstre o lançamento específico da incorporação",
      "Tarifa de abertura de processo",
    ],
  };

  return (
    <div className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
      <h3 className="bg-gray-100 px-4 py-3 font-semibold text-[#2c3e50]">
        Tipo de Requerimento <span className="text-red-500">*</span>
      </h3>

      <div className="p-6">
        <select
          {...register("tipo_requerimento")}
          className={`w-full rounded-md border-2 p-3 transition ${
            errors.tipo_requerimento
              ? "border-red-500 bg-red-50"
              : "border-gray-300 focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20"
          }`}
        >
          <option value="">Selecione o tipo de requerimento</option>

          {tipos.map((item) => (
            <option key={item.value} value={item.label}>
              {item.label}
            </option>
          ))}
        </select>

        {errors.tipo_requerimento && (
          <p className="text-red-500 text-sm mt-2 font-medium">
            {errors.tipo_requerimento.message as string}
          </p>
        )}
      </div>

      {/* DOCUMENTAÇÃO DINÂMICA */}
      {chaveTecnica && documentacaoPorTipo[chaveTecnica] && (
        <div className="bg-yellow-50 border-t border-yellow-300 p-6">
          <h4 className="text-lg font-semibold text-yellow-800 mb-4">
            📋 Documentação Necessária
          </h4>

          <div className="bg-blue-50 border border-blue-200 p-4 rounded-md text-sm text-blue-700 mb-4">
            <strong>Importante:</strong> A documentação deve estar em PDF
            legível para a abertura do processo pelo DTEL. Caso o DTEL esteja
            indisponível, envie um <span className="font-bold">EMAIL</span>{" "}
            para:{" "}
            <span className="font-semibold underline">
              protocolo.semfaz@portovelho.ro.gov.br
            </span>
          </div>

          <ul className="space-y-2">
            {documentacaoPorTipo[chaveTecnica].map((doc, index) => (
              <li
                key={index}
                className="bg-white p-3 rounded-md border-l-4 border-yellow-500 shadow-sm text-sm"
              >
                📄 {doc}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
