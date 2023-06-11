import React from "react";
import { useInView } from "@react-spring/web";
import styles from  "../plasmic/page.module.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, PlayState } from "my-react-gsap";
import { gsap } from "gsap";
import { Button } from "antd";
import { registerComponent, usePlasmicCanvasContext } from "@plasmicapp/react-web/lib/host";

const palestrantes = [
  {
    name: "Adhemar de Campos",
    desc: `Autor de aproximadamente 1000 canções, Pr. Adhemar de Campos é um dos mais notórios ministros de louvor e adoração no Brasil, dedicando sua vida a compor canções que ajudam muitos a experimentarem a presença de Deus de um modo profundo.`
  },
  {
    name: "Asaph Borba",
    desc: `Asaph Borba é um músico e ministro de adoração brasileiro que por muitos anos tem ministrado sevido a Igreja brasileira e internacional. Asaph também é o um dos pais da iSV (Igreja em São Vicente) e faz parte da nossa história desde a sua fundação nos anos 90.`
  },
  {
    name: "Daniel Souza",
    desc: `Daniel Souza é um ministro de louvor que tem servido a Igreja desde o início dos anos 90. Juntamente com a sua esposa Selma, fundou a iSV sendo discipulado por Jan Gottfridsson e Asaph Borba e trabalhando com ênfase na formação de discípulos para o Senhor Jesus, na cidade de São Vicente.`
  },
  {
    name: "Jan Gottfridson",
    desc: "Jan, como é chamado pelos íntimos, é um dos pastores da Igreja em Porto Alegre e um dos pais da iSV, junto com Asaph Borba. São mais de 30 anos de pastoreio e cuidado."
  },
  {
    name: "Morada",
    desc: `O Morada é uma banda que tem por anseio “gritar nos telhados o que Deus tem sussurrado em seus ouvidos”. São mais de 10 anos de estrada servindo e amando a Igreja.`
  },
]
const calcProgress = (currentProgress: number, left: number, right: number) =>
  currentProgress < left
    ? 0
    : currentProgress > right
    ? 1
    : (currentProgress - left) / (right - left);
  
function Image({palest, id, progress, left}: any) {
  const ref = React.useRef<any>();
  const title = React.useRef<any>();
  const desc = React.useRef<any>();

  React.useLayoutEffect(() => {
    if (!ref.current || !title.current || !desc.current) return ;
    let t2 = gsap.fromTo(ref.current, { xPercent: 0, opacity: 1 }, { xPercent: left ? -100 : 100, opacity: 0, paused: true});
    let t1 = gsap.fromTo(ref.current, { xPercent: left ? -100 : 100, opacity: 0 }, { xPercent: 0, opacity: 1, paused: true});
    if (progress < 0.4) {
      t1.progress(calcProgress(progress, 0, 0.4))
    } else if (progress > 0.8) {
      t2.progress(calcProgress(progress, 0.8, 1))
    } else {
      t1.progress(1)
    }
    const t4 = gsap.fromTo(title.current, { opacity: 1 }, { opacity: 0, paused: true});
    const t3 = gsap.fromTo(title.current, { opacity: 0 }, { opacity: 1, paused: true});
    if (progress < 0.3) {
      t3.progress(calcProgress(progress, 0, 0.3))
    } else if (progress > 0.7) {
      t4.progress(calcProgress(progress, 0.7, 1))
    } else {
      t3.progress(1)
    }
    const t6 = gsap.fromTo(desc.current, { scale: 1 }, { scale: 0, paused: true});
    const t5 = gsap.fromTo(desc.current, { scale: 0 }, { scale: 1, paused: true});
    if (progress < 0.3) {
      t5.progress(calcProgress(progress, 0, 0.3))
    } else if (progress > 0.7) {
      t6.progress(calcProgress(progress, 0.7, 1))
    } else {
      t5.progress(1)
    }
  }, [ref, progress]);
  return <div style={{display: "flex", alignItems: "center", flexDirection:  "column"}}>
    <h1 ref={title} style={{color: "black"}}>{palest.name}</h1>
    <img className="image" src={`/${palest.name}.png`} style={{ width: 300, height: 300 }} ref={ref} />
    <p style={{padding: 20, color: "black", textAlign: "center" }} ref={desc}>{palest.desc}</p>
  </div>
}

function Voce({name, id, progress, left}: any) {
  const voce = React.useRef<any>();
  const botao = React.useRef<any>();

  React.useLayoutEffect(() => {
    if (!voce.current || !botao.current) return ;
    const t1 = gsap.fromTo(voce.current, { opacity: 0 }, { opacity: 1, paused: true});
    if (progress < 0.4) {
      t1.progress(calcProgress(progress, 0, 0.4))
    } else {
      t1.progress(1)
    }
    const t2 = gsap.fromTo(botao.current, { opacity: 0 }, { opacity: 1, paused: true, immediateRender: false});
    if (progress > 0.2 && progress < 0.6) {
      t2.progress(calcProgress(progress, 0.2, 0.6))
    } else if (progress > 0.4) {
      t2.progress(1)
    } else {
      t2.progress(0);
    }
    () => {
      t1.kill();
      t2.kill();
    }
  }, [voce, botao, progress]);
  console.log("dale3", progress);
  return <div style={{display: "flex", alignItems: "center", flexDirection:  "column", gap: 30}}>
    <h1 ref={voce} style={{fontSize: 60}}>E você...</h1>
    <div ref={botao}>
      <Button  type={"primary"} shape={"round"} size={"large"}>Faça sua inscrição</Button>
    </div>
  </div>
}

export function Participantes() {
  const inEditor = !!usePlasmicCanvasContext();
  if (inEditor) {
    return <div style={{height: "1000"}}>
      Participantes
      <img src="/Daniel Souza.png" />
    </div>
  }
  const totalDuration = 7*globalThis.innerHeight;
  return (
  <Controller>
  <div 
    style={{
        position: "relative",
        height: `${totalDuration+100}px`,
    }}
  >
    <Scene duration={totalDuration} triggerHook={"onEnter"}>
      {(progress: number) => {
        console.log("dale", progress);
        return <div>
          <Scene duration={6*globalThis.innerHeight} pin triggerHook={"onLeave"}>
              <div className={styles.sceneContainer} style={{height: "100vh"}}>
                <div className={styles.participantes} style={{color: "orange"}}>
                  Participantes
                </div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100%"}}>
                  {(() => {
                    const total = 0.9;
                    const part = 0.9/5;
                    for (let i = 0; i < palestrantes.length; i++) {
                      const p = (i+1)*part;
                      if (progress < p) {
                        return <Image palest={palestrantes[i]} progress={calcProgress(progress, p-part, p)} left={i%2?true:false}/>
                      }
                    }
                    console.log("dale2", progress);
                    return <Voce progress={calcProgress(progress, total, 1)} />
                  })()}
                </div>
              </div>
          </Scene>
        </div>
      }}
    </Scene>
  </div>
</Controller>
  )
}

export function registerParallax() {
  registerComponent(Participantes, {
    name: "Participantes",
    props: { },
    importPath: "./components/code-components/Parallax",
    importName: "Participantes"
  })
}