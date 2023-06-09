import { useInView } from "@react-spring/web";
import React from "react";
import styles from  "../components/plasmic/page.module.css";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline, PlayState } from "my-react-gsap";
import { gsap } from "gsap";
import { Button } from "antd";
import { Participantes } from "@/components/code-components/Parallax";

  
export default function Page() {
  return <div>
    <div className={styles.block}>
      Block
    </div>
    <div className={styles.block2}>
      Block2
    </div>

    <br />
    <Participantes />
    <br />
    <br />
    <br />
  </div>
}