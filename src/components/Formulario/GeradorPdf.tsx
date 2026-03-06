"use client";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";
import { FormData } from "@/app/page";

const styles = StyleSheet.create({
  page: {
    position: "relative",
    fontSize: 10,
    fontFamily: "Helvetica",
    paddingTop: 120,
    paddingBottom: 100,
    paddingHorizontal: 60,
  },

  headerImage: {
    position: "absolute",
    top: 0,
    left: -15,
    width: 595 * 1.05,
    height: 99 * 1.05,
  },

  footerImage: {
    position: "absolute",
    bottom: 0,
    left: -15,
    width: 595 * 1.05,
    height: 99 * 1.05,
  },

  content: {
    paddingHorizontal: 0,
  },

  header: {
    textAlign: "center",
    marginBottom: 15,
  },

  title: { fontSize: 14, fontWeight: "bold", marginBottom: 4 },
  subtitle: { fontSize: 11, marginBottom: 2 },
  subtext: { fontSize: 8, color: "#444" },

  sectionTitle: {
    backgroundColor: "#333",
    color: "#fff",
    padding: 5,
    marginTop: 12,
    marginBottom: 8,
    fontSize: 10,
    fontWeight: "bold",
  },

  fieldLine: { marginBottom: 4, flexDirection: "row", flexWrap: "wrap" },
  bold: { fontWeight: "bold" },

  textJustify: { textAlign: "justify", marginBottom: 8 },

  signatureArea: { marginTop: 30, alignItems: "center" },
  signatureLine: {
    borderTopWidth: 1,
    borderTopColor: "#000",
    width: 250,
  },

  footer: {
    marginTop: 20,
    fontSize: 8,
    borderTopWidth: 1,
    borderTopColor: "#333",
    paddingTop: 5,
  },
});

interface MyPdfDocumentData {
  data: FormData;
}

export const MyPdfDocument = ({ data }: MyPdfDocumentData) => {
  return (
    <Document>
      <Page size="A4" dpi={144} style={styles.page}>
        <Image
          src={{ uri: "/semec-timbrado-cabecalho.png" }}
          style={styles.headerImage}
          fixed
        />

        <Image
          src={{ uri: "/semec-timbrado-rodape.png" }}
          style={styles.footerImage}
          fixed
        />

        <View style={styles.content}>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <Text style={styles.title}>
              PREFEITURA DO MUNICÍPIO DE PORTO VELHO
            </Text>
            <Text style={styles.subtitle}>
              SECRETARIA MUNICIPAL DE ECONOMIA
            </Text>
            <Text style={styles.subtext}>
              REQUERIMENTO PARA NÃO INCIDÊNCIA DE ITBI
            </Text>
          </View>

          {/* Introdução */}
          <Text style={styles.textJustify}>
            Ilmo. Sr. (a) Secretário (a) da Receita Municipal, trata-se de:
          </Text>
          <Text style={styles.textJustify}>
            Tipo de Requerimento: Art. 156, § 2º, I, da CF88 -{" "}
            {data.tipo_requerimento}
          </Text>

          {/* Seção 1 - Identificação do Requerente */}
          <Text style={styles.sectionTitle}>
            1. Identificação do Sujeito Passivo/Requerente
          </Text>
          <View style={styles.fieldLine}>
            <Text style={styles.bold}>Nome/Razão Social: </Text>
            <Text>{data.nome}</Text>
          </View>
          <View style={styles.fieldLine}>
            <Text style={styles.bold}>CPF/CNPJ: </Text>
            <Text>{data.cpfCnpj}</Text>
            <Text style={{ marginLeft: 20, fontWeight: "bold" }}>
              Telefone/Celular:{" "}
            </Text>
            <Text>{data.telefone}</Text>
          </View>
          <View style={styles.fieldLine}>
            <Text style={styles.bold}>E-mail: </Text>
            <Text>{data.email}</Text>
          </View>
          <View style={styles.fieldLine}>
            <Text style={styles.bold}>Endereço: </Text>
            <Text>
              {data.endereco}, Nº {data.numero}, Bairro: {data.bairro}, CEP:{" "}
              {data.cep}
              {data.complemento ? `, Complemento: ${data.complemento}` : ""}
            </Text>
          </View>

          {/* Seção 2 - Identificação do Imóvel */}
          <View wrap={false}>
            <Text style={styles.sectionTitle}>2. Identificação do Imóvel</Text>
            <View style={styles.fieldLine}>
              <Text style={styles.bold}>Tipo de Imóvel: </Text>
              <Text>{data.tipo_imovel}</Text>
            </View>
            <View style={styles.fieldLine}>
              <Text style={styles.bold}>Inscrição: </Text>
              <Text>{data.inscricao}</Text>
            </View>
          </View>

          {/* Seção 3 - Informações Adicionais */}
          <View>
            <Text style={styles.sectionTitle}>3. Informações Adicionais</Text>
            <Text style={styles.textJustify}>{data.informacoes}</Text>
          </View>

          {/* Data e assinatura */}
          <View style={styles.signatureArea} wrap={false}>
            <Text style={{ marginBottom: 65 }}>
              Porto Velho - RO, {data.dataCompleta}
            </Text>
            <View style={styles.signatureLine} />
            <Text style={styles.bold}>{data.nomeAssinatura}</Text>
            <Text>CPF: {data.cpfAssinatura}</Text>
            <Text>Assinatura Digital</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};
