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

const PDFPage = ({person, svg, isKid }: any) => {
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
              <Text>{person.doc && person.doc.length > 6 
                ? person.doc.slice(0,3) + "*******" + person.doc.slice(-2)
                : person.doc
              }</Text>
            </View> 
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
  inscritos: {
    name: string,
    email: string,
    doc: string,
    isKid: boolean;
  }[],
  svgs: any[];
}
export const Comprovante = (props: ComprovanteProps) => {
  const { inscritos, svgs } = props;
  return <Document>
    {inscritos.map((inscrito, idx) => 
      <PDFPage 
        person={inscrito}
        svg={svgs[idx]}
        isKid={inscrito.isKid}
      />
    )}
  </Document>
};
