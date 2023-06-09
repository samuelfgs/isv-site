import { useInView } from "@react-spring/web";
import React from "react";
import styles from  "../components/plasmic/page.module.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, PlayState } from "my-react-gsap";
import { gsap } from "gsap";

function Image({color, id}: any) {
  return <div className={styles.image} style={{backgroundColor: color}}>
    Image {id}
  </div>
}

export default function Page() {
  const ref = React.useRef();
  const totalDuration = 4*globalThis.innerWidth;
  const [tween, setTween] = React.useState<any>();
  const [tween2, setTween2] = React.useState<any>();
  const [progress, setProgress] = React.useState(0)
  const handleProgressChange = (e) => {
    const p = +e.target.value;
    setProgress(p);
    if (p < 0.4) {
      tween.progress(p/0.4);
    } else if (p > 0.8) {
      tween2.progress((p-0.8)/0.2);
    }
  }

  console.log("dale", progress);
  React.useLayoutEffect(() => {
    const tween2 = gsap.fromTo(".btn", { x: 0 }, {x: 100, immediateRender: false});
    tween2.pause(0);
    setTween2(tween2);
    const tween = gsap.fromTo(".btn", { x: 100 }, {x: 0});
    tween.pause(0.01);
    setTween(tween);
  }, [])
  return <div style={{padding: 20, display: "flex", gap: 80, flexDirection: "column"}}>
    <div style={{display: "flex", justifyContent: "center"}}>
      <input type="range" min="0" max="1" step="0.01" value={progress} onChange={handleProgressChange} />
    </div>
    <div style={{display: "flex", justifyContent: "center"}}>
      <button style={{ padding: 50, backgroundColor: "pink"}} className="btn">
        Hover me
      </button>
    </div>
  </div>
}