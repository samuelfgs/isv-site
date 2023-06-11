import { DataProvider, registerGlobalContext } from "@plasmicapp/react-web/lib/host"

export const data  = [
  {
    name: "Adhemar de Campos",
    longDesc: `Autor de aproximadamente 1000 canções, Pr. Adhemar de Campos é um dos mais notórios ministros de louvor e adoração no Brasil, dedicando sua vida a compor canções que ajudam muitos a experimentarem a presença de Deus de um modo profundo. Em 1985 gravou seu primeiro LP e em 1987, num pioneirismo ímpar, realizou a primeira gravação ao vivo de músicas cristãs. Sua história confunde-se com a da música gospel no Brasil, tanto que na década de 80 era um dos poucos produtores de cânticos cristãos com grande projeção. Seu ministério influenciou gerações com composições atemporais que até hoje nos tocam, oferecendo valores de uma vida cristã verdadeira. São mais de 45 anos de caminhada com Cristo, claramente perceptíveis no conjunto de sua obra.`,
    shortDesc: `Autor de aproximadamente 1000 canções, Pr. Adhemar de Campos é um dos mais notórios ministros de louvor e adoração no Brasil, dedicando sua vida a compor canções que ajudam muitos a experimentarem a presença de Deus de um modo profundo.`
  },
  {
    name: "Asaph Borba",
    longDesc: `Asaph Borba é um músico e ministro de adoração brasileiro que por muitos anos tem ministrado por todo o Brasil e outros países em encontros de louvor e em igrejas das mais diferentes denominações, gravando os cânticos que lhe foram dados por Deus, que se tornaram parte da hinologia cristã nacional, entre eles, Jesus em Tua Presença, Minh’alma Engrandece, Alto Preço, O meu Louvor é Fruto, Infinitamente Mais, Nós Somos o Povo a quem Deus Libertou, Superabundante Graça, Jesus, Deus é Amor, A Cada Manhã, Deus é Fiel, Rastros de Amor, Eu Escolhi Jesus, O Centro de Todas as Coisas, Profetiza, e muitos outros gravados por vários ministérios nacionais e internacionais. Asaph também é o um dos pais da iSV (Igreja em São Vicente) e faz parte da nossa história desde a sua fundação nos anos 90.`,
    shortDesc: `Músico e ministro de adoração brasileiro que por muitos anos tem ministrado sevido a Igreja brasileira e internacional. Asaph também é o um dos pais da iSV (Igreja em São Vicente) e faz parte da nossa história desde a sua fundação nos anos 90.`
  },
  {
    name: "Daniel Souza",
    longDesc: `Autor de aproximadamente 1000 canções, Pr. Adhemar de Campos é um dos mais notórios ministros de louvor e adoração no Brasil, dedicando sua vida a compor canções que ajudam muitos a experimentarem a presença de Deus de um modo profundo. Em 1985 gravou seu primeiro LP e em 1987, num pioneirismo ímpar, realizou a primeira gravação ao vivo de músicas cristãs. Sua história confunde-se com a da música gospel no Brasil, tanto que na década de 80 era um dos poucos produtores de cânticos cristãos com grande projeção. Seu ministério influenciou gerações com composições atemporais que até hoje nos tocam, oferecendo valores de uma vida cristã verdadeira. São mais de 45 anos de caminhada com Cristo, claramente perceptíveis no conjunto de sua obra.`,
    shortDesc: `Ministro de louvor que tem servido a Igreja desde o início dos anos 90. Juntamente com a sua esposa Selma, fundou a iSV sendo discipulado por Jan Gottfridsson e Asaph Borba e trabalhando com ênfase na formação de discípulos para o Senhor Jesus, na cidade de São Vicente.`
  },
  {
    name: "Jan Gottfridson",
    desc: "",
    shortDesc: "Jan, como é chamado pelos íntimos, é um dos pastores da Igreja em Porto Alegre e um dos pais da iSV, junto com Asaph Borba. São mais de 30 anos de pastoreio e cuidado."
  },
  {
    name: "Morada",
    longDesc: `Banda que tem por anseio “gritar nos telhados o que Deus tem sussurrado em seus ouvidos”. Com pouco mais de 10 anos de estrada, o ministério tem alcançado cada vez mais um público diversificado desde crianças aos mais velhos, proporcionando assim, momentos intensos e alegres entre as famílias por onde tem passado. Isso se deve à diversidade musical que a banda possui e o cuidado que tem de sempre fazer um som que tocou a todos.`,
    shortDesc: `Banda que tem por anseio “gritar nos telhados o que Deus tem sussurrado em seus ouvidos”. São mais de 10 anos de estrada servindo e amando a Igreja.`
  },
]

export function ParticipantesData(props: any) {
  return <DataProvider data={"abc"} name={"participantes"}>
    {props.any}
  </DataProvider>
}

export function registerParticipantes() {
  registerGlobalContext(ParticipantesData, {
    name: "ParticipantesData",
    props: {},
    importPath: "./components/code-components/Participantes",
    importName: "ParticipantesData"
  });
}