import React from "react";
import { useInView } from "@react-spring/web";
import styles from  "../plasmic/page.module.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, PlayState } from "my-react-gsap";
import { gsap } from "gsap";
import { Button } from "antd";
import { registerComponent, usePlasmicCanvasContext } from "@plasmicapp/react-web/lib/host";
import { data as palestrantes } from "./Participantes";
import LastParallax from "../LastParallax";
import PlasmicLastParallax from "../plasmic/a_d/PlasmicLastParallax";

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
    <h1 ref={title} style={{color: "black", textAlign: "center"}}>{palest.name}</h1>
    <img className="image" src={`/${palest.name}.png`} style={{ width: 250, height: 250 }} ref={ref} />
    <p style={{padding: 20, color: "black", textAlign: "center" }} ref={desc}>{palest.shortDesc}</p>
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
  return <PlasmicLastParallax
    voce={{
      ref: voce
    }}
    botao={{
      ref: botao
    }}
  />
}

export function Participantes() {
  const inEditor = !!usePlasmicCanvasContext();
  if (inEditor) {
    return <div style={{height: "1000"}}>
      Participantes
      <img src="/Daniel Souza.png" />
    </div>
  }
  const totalDuration = 15*globalThis.innerHeight;
  const totalDuration2 = 14*globalThis.innerHeight;
  return (
  <Controller>
  <div 
    style={{
        position: "relative",
        height: `${totalDuration}px`,
    }}
  >
    <Scene duration={totalDuration} triggerHook={"onEnter"}>
      {(progress: number) => {
        return <div>
          <Scene duration={totalDuration2} pin triggerHook={"onLeave"}>
              <div className={styles.sceneContainer} style={{height: "100vh"}}>
                {/* <div className={styles.participantes} style={{color: "orange"}}>
                  Participantes
                </div> */}
                <div style={{height: 90}}></div>
                <div style={{display: "flex", alignItems: "center", flexDirection: "column", justifyContent: "center", height: "100%"}}>
                  {(() => {
                    const total = 0.9;
                    const first = 0.1;
                    const part = (total-first)/5;
                    let left = 0;
                    for (let i = 0; i < palestrantes.length; i++) {
                      const right = left + part + (i === 0 ? first : 0);
                      if (progress < right) {
                        return <Image palest={palestrantes[i]} progress={calcProgress(progress, left, right)} left={i%2?true:false}/>
                      }
                      left = right;
                    }
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