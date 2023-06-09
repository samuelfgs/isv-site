import { useInView } from "@react-spring/web";
import React from "react";
import styles from  "../plasmic/page.module.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, PlayState } from "my-react-gsap";
import { gsap } from "gsap";
import { Button } from "antd";
import { registerComponent, usePlasmicCanvasContext } from "@plasmicapp/react-web/lib/host";

const calcProgress = (currentProgress: number, left: number, right: number) =>
  currentProgress < left
    ? 0
    : currentProgress > right
    ? 1
    : (currentProgress - left) / (right - left);
  
function Image({name, id, progress, left}: any) {
  const ref = React.useRef();
  const title = React.useRef();
  const desc = React.useRef();

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
    <h1 ref={title} style={{color: "black"}}>{name}</h1>
    <img className="image" src={`/${name}.png`} style={{ width: 300, height: 300 }} ref={ref} />
    <p style={{padding: 20, color: "black" }} ref={desc}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
  </div>
}

function Voce({name, id, progress, left}: any) {
  const voce = React.useRef();
  const botao = React.useRef();

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
                    const names = ["Adhemar de Campos", "Asaph Borba", "Daniel Souza", "Jan Gottfridson", "Morada"];
                    const total = 0.9;
                    const part = 0.9/5;
                    for (let i = 0; i < 5; i++) {
                      const p = (i+1)*part;
                      if (progress < p) {
                        return <Image name={names[i]} progress={calcProgress(progress, p-part, p)} left={i%2?true:false}/>
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