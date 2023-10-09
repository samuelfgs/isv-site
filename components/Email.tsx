import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

import ReactPDF, { Document, Page, Text, View, StyleSheet, PDFViewer, Svg, Path, Image } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontSize: "16px",
    fontWeight: "light"
  },
  section: {
    margin: 20,
    padding: 20,
    flexGrow: 1,
    textAlign: "center",
    gap: 30
  },
  nameSection: {
    textAlign: "left",
    display: "flex",
    flexDirection: "row"
  },
  nameLabel: {
    fontWeight: "extrabold",
  },  
  qrCodeSection: {
    fontWeight: "extrabold",
  }
});

const PDFPage = ({person, svg, isKid, isFirst, ticketType}: any) => {
  const idx = person.email.indexOf("@");
  return <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text render={({ pageNumber, totalPages }) => {
          return `Comprovante de Inscrição ${pageNumber} de ${totalPages}`
        }} />
        <View style={{
          display:"flex",
          gap: 30
        }}>
          <View style={{
            display: "flex",
            gap: 5,
            alignItems: "flex-start"
          }}>
            <Text>ADORAÇÃO E DISCIPULADO 20</Text>
            <Text style={{ color: "#8d8d8d"}}>Igreja em SV</Text>
          </View>
          {isKid ? <View style={{
            display: "flex",
            gap: 5,
            alignItems: "flex-start"
          }}>
            <Text>Ingresso Kids (5 - 10 anos)</Text>
          </View> : null}
          {ticketType !== "full" ? <View style={{
            display: "flex",
            gap: 5,
            alignItems: "flex-start"
          }}>
            <Text>Ingresso válido apenas para {ticketType === "saturday" ? "Sábado" : "Domingo"}</Text>
          </View> : null}
          <View style={{
            display: "flex",
            gap: 20
          }}>
            <View style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10
            }}>
              <Image source={"https://construcao.igrejasv.com/calendar.png"} style={{ width: 30, height: 30 }} />
              <View style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.5
              }}>
                <Text>Começo: 21/10/2023 - 09:00</Text>
                <Text>Término: 22/10/2023 - 22:00</Text>
              </View>
            </View>
            <View style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10
            }}>
              <Image source={"https://construcao.igrejasv.com/marker.png"} style={{ width: 30, height: 30 }} />
              <View style={{
                display: "flex",
                flexDirection: "column",
                lineHeight: 1.5
              }}>
                <Text>Rua Jardel França 18</Text>
                <Text>São Vicente</Text>
              </View>
            </View>
          </View>
          <View style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 10
          }}>
            {isFirst ? 
              <>
            <View style={{ display: "flex", lineHeight: 1.5}}>
              <Text style={{ color: "#8d8d8d" }}>Participante</Text>
              <Text>{person.name}</Text>
            </View>
            <View style={{ display: "flex", lineHeight: 1.5}}>
              <Text style={{ color: "#8d8d8d" }}>E-mail</Text>
              <Text>{person.email.slice(0, 3) + "******" + person.email.slice(idx-1)}</Text>
            </View>
            <View style={{ display: "flex", lineHeight: 1.5}}>
              <Text style={{ color: "#8d8d8d" }}>Documento</Text>
              <Text>{person.doc.slice(0,3) + "*******" + person.doc.slice(-2)}</Text>
            </View> 
            </> : null}
            <View style={{ display: "flex", alignItems: "center"}}>
              <Image source={svg} style={{ width: 150, height: 150 }} />
            </View>
          </View>
        </View>
        <View style={{ display: "flex", alignItems: "center"}}>
          <Image source="https://ad20.igrejasv.com/plasmic/a_d_2/images/isv.png" style={{ width: 100, height: 100}}/>
        </View>
      </View>
    </Page>
}

interface ComprovanteProps {
  name: string,
  email: string,
  cpf: string,
  kids: number,
  adultos: number,
  svgs: any[];
  price: string;
  ticketType: string;
}

export const Comprovante = (props: ComprovanteProps) => {
  const { name, email, cpf, kids, adultos, svgs, ticketType } = props;
  const inscricoes = [
    ...([...(new Array(adultos).keys() as any)].map((x:any) => "adulto")),
    ...([...(new Array(kids).keys() as any)].map((x:any) => "kid")),
  ];
  return <Document>
    {inscricoes.map((inscType, idx) => 
      <PDFPage
        ticketType={ticketType}
        person={{
          doc: cpf,
          email,
          name,
        }}
        isKid={inscType === "kid"}
        isFirst={idx === 0}
        svg={svgs[idx]}
      />
    )}
  </Document>
};
