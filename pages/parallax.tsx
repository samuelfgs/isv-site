import styles from "../components/plasmic/a_d/PlasmicHomepage.module.css";
import * as React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import Image from "next/image";
import PlasmicHomepage from "@/components/plasmic/a_d/PlasmicHomepage";

export default function App() {  
  const [targetElement, setTarget] = React.useState();
  const targetRef = React.useRef();
  React.useEffect(() => {
    setTarget(targetRef.current);
  }, [targetRef]);
  return (
    <PlasmicHomepage>
      <h1>Hello</h1>
      <div ref={targetRef as any}>
        <h2>Asdf</h2>
      </div>
      {targetElement && <Parallax translateY={["-50%","50%"]} style={{backgroundColor: "pink"}} targetElement={targetElement}>
        <div style={{width: "300px", height: "300px"}}>
          <img src="/plasmic/a_d/images/beatles.png" style={{ width: "100%", height: "100%"}}/>
        </div>
      </Parallax>}
      <Parallax translateX={["-50%","100%"]} style={{backgroundColor: "cyan"}}>
        <h3>Hello</h3>
      </Parallax>
    </PlasmicHomepage>
  )
}
