"use client";

import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { FormData } from "@/app/page";

const PDF_COLORS = {
  primaryBlue: "#1e3a5f",
  accentGreen: "#70b643",
  textDark: "#374151",
  textMedium: "#6b7280",
  borderLight: "#e5e7eb",
  backgroundSection: "#f5f5f5",
  white: "#ffffff",
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 40,
    paddingBottom: 90, // Aumentado para acomodar o rodapé maior
    paddingHorizontal: 40,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: PDF_COLORS.textDark,
  },
  headerInstitucional: {
    backgroundColor: PDF_COLORS.backgroundSection,
    borderBottomWidth: 2,
    borderBottomColor: PDF_COLORS.accentGreen,
    paddingVertical: 10,
    marginBottom: 12,
    textAlign: "center",
  },
  headerTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: PDF_COLORS.primaryBlue,
  },
  headerSubtitle: { fontSize: 10, color: PDF_COLORS.primaryBlue },
  headerCaption: { fontSize: 8, color: PDF_COLORS.textMedium },

  docTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: PDF_COLORS.accentGreen,
    textAlign: "center",
    marginVertical: 10,
  },

  // --- Blocos de Seção Dinâmicos ---
  sectionContainer: {
    marginBottom: 10,
    width: "100%",
  },
  sectionHeader: {
    backgroundColor: PDF_COLORS.primaryBlue,
    paddingVertical: 5,
    paddingHorizontal: 8,
  },
  sectionTitle: { fontSize: 9, fontWeight: "bold", color: PDF_COLORS.white },
  sectionBody: {
    borderWidth: 1,
    borderColor: PDF_COLORS.borderLight,
    borderTopWidth: 0,
    padding: 8,
    // Removido qualquer 'height' para permitir crescimento dinâmico
    minHeight: 20,
  },

  fieldRow: {
    flexDirection: "row",
    marginBottom: 4,
    flexWrap: "wrap", // Garante que se o texto for muito longo, ele quebre para a linha de baixo
  },
  fieldLabel: {
    fontWeight: "bold",
    color: PDF_COLORS.primaryBlue,
    marginRight: 4,
  },
  fieldValue: { flex: 1 },

  signatureArea: { marginTop: 20, alignItems: "center" },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    width: 250,
    marginTop: 60,
  },

  // --- Novo Rodapé Centralizado ---
  footer: {
    position: "absolute",
    bottom: 30,
    left: 40,
    right: 40,
    textAlign: "center",
  },
  footerDivider: {
    borderTopWidth: 0.5,
    borderTopColor: PDF_COLORS.borderLight,
    marginBottom: 6,
  },
  footerTopRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  footerTextSide: { fontSize: 7, color: PDF_COLORS.textMedium },
  footerCenterGroup: {
    alignItems: "center",
    marginTop: 2,
  },
  footerNoteCentral: {
    fontSize: 7,
    color: PDF_COLORS.textMedium,
    fontStyle: "italic",
    lineHeight: 1.4,
  },
});

const Section = ({ title, children }: any) => (
  <View style={styles.sectionContainer}>
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
    <View style={styles.sectionBody}>{children}</View>
  </View>
);

export const MyPdfDocument = ({ data }: { data: FormData }) => {
  const dataGeracao = new Date().toLocaleDateString("pt-BR");

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.headerInstitucional}>
          <Text style={styles.headerTitle}>
            PREFEITURA MUNICIPAL DE PORTO VELHO
          </Text>
          <Text style={styles.headerSubtitle}>
            SECRETARIA MUNICIPAL DE FAZENDA
          </Text>
          <Text style={styles.headerCaption}>
            Subsecretaria da Receita Municipal
          </Text>
        </View>

        <View style={{ flexDirection: "column" }}>
          <Text style={styles.docTitle}>
            REQUERIMENTO PARA NÃO INCIDÊNCIA DE ITBI
          </Text>

          <Text style={{ fontSize: 10, marginBottom: 12 }}>
            Ilmo. (a) Sr. (a) Secretário (a) Municipal de Fazenda, requeremos o
            acesso ao seguinte sistema:
            {"\n"}
            Tipo de Requerimento: Art. 156, § 2º, I, da CF88 -{" "}
            {data.tipo_requerimento}
          </Text>

          <Section title="1. IDENTIFICAÇÃO DO SUJEITO PASSIVO/REQUERENTE">
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Nome/Razão Social:</Text>
              <Text style={styles.fieldValue}>{data.nome}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>CPF/CNPJ:</Text>
              <Text style={{ width: "150pt" }}>{data.cpfCnpj}</Text>
              <Text style={styles.fieldLabel}>Telefone:</Text>
              <Text>{data.telefone}</Text>
            </View>
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Endereço:</Text>
              <Text style={styles.fieldValue}>
                {data.endereco}, Nº {data.numero}, Bairro: {data.bairro}
              </Text>
            </View>
          </Section>

          {/* Seção 2 configurada para crescer dinamicamente conforme o conteúdo */}
          <Section title="2. IDENTIFICAÇÃO DO IMÓVEL">
            <View style={styles.fieldRow}>
              <Text style={styles.fieldLabel}>Tipo de Imóvel:</Text>
              <Text style={{ width: "150pt" }}>{data.tipo_imovel}</Text>
              <Text style={styles.fieldLabel}>Inscrição:</Text>
              <Text style={styles.fieldValue}>{data.inscricao}</Text>
            </View>
          </Section>

          <Section title="3. INFORMAÇÕES ADICIONAIS">
            <Text style={{ textAlign: "justify", lineHeight: 1 }}>
              {data.informacoes}
            </Text>
          </Section>

          <View style={styles.signatureArea} wrap={false}>
            <Text>Porto Velho - RO, {data.dataCompleta}</Text>
            <View style={styles.signatureLine} />
            <Text style={{ fontWeight: "bold", marginTop: 4 }}>
              {data.nomeAssinatura}
            </Text>
            <Text>CPF: {data.cpfAssinatura}</Text>
          </View>
        </View>

        {/* Rodapé Centralizado seguindo a imagem do PDF */}
        <View style={styles.footer} fixed>
          <View style={styles.footerDivider} />

          <View style={styles.footerTopRow}>
            <Text style={styles.footerTextSide}>
              Anexo I – Requerimento de Uso de Sistema
            </Text>
            <Text
              style={styles.footerTextSide}
              render={({ pageNumber, totalPages }) =>
                `Pág. ${pageNumber} / ${totalPages}`
              }
            />
          </View>

          <View style={styles.footerCenterGroup}>
            <Text style={styles.footerNoteCentral}>
              Instrução Normativa n.º 002/2024/GAB/SEMFAZ
            </Text>
            <Text style={styles.footerNoteCentral}>
              Documento gerado eletronicamente em {dataGeracao}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
