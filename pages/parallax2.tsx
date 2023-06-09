import PlasmicHomepage from "@/components/plasmic/a_d/PlasmicHomepage";
import PlasmicSlider from "@/components/plasmic/a_d/PlasmicSlider";
import React from "react";
import { useInView } from 'react-hook-inview'

export default function Page() {
  const [isIntersecting, setIsIntersecting] = React.useState(false);
  const [translateXAmount, setTranslateXAmount] = React.useState(0);
  const scrollDivRef = React.useRef<HTMLDivElement>();
  const [ref, isVisible] = useInView({
    threshold: 0.1,
  })

  React.useEffect(() => {
    function handleScroll() {
      const scrollAmount = window.scrollY;
      // const newTranslateXAmount = scrollAmount * -0.5; // Adjust this value to change the speed of the movement
      setTranslateXAmount(-window.scrollY);
      console.log("dale3", scrollAmount, scrollDivRef.current?.getBoundingClientRect().top, isVisible);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  React.useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("dale2", entry)
        setIsIntersecting(entry.isIntersecting);
      });
    }, options);

    const scrollDiv = scrollDivRef.current;

    if (scrollDiv) {
      observer.observe(scrollDiv);
    }

    return () => {
      if (scrollDiv) {
        observer.unobserve(scrollDiv);
      }
    };
  }, [scrollDivRef]);

  console.log("dale", isIntersecting, translateXAmount, isVisible);
  return (
    <PlasmicHomepage>
      <div
        className="scroll-div"
        ref={ref2 => {
          if (ref2) {
            ref(ref2);
            scrollDivRef.current = ref2;
          }
        }}
        style={{
          transform: translateXAmount < 0 ? `translateX(${translateXAmount}px) translateY(${-translateXAmount-200}px)` : undefined,
          width: "100%",
          height: "100%"
        }}
      >
        <PlasmicSlider />
      </div>
    </PlasmicHomepage>
  );
}