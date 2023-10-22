// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/a_d_5/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/a_d_5/PlasmicGlobalVariant__Screen";
import { PlasmicCheckIn } from "../components/plasmic/a_d_5/PlasmicCheckIn";
import { useRouter } from "next/router";

function CheckIn() {
  // Use PlasmicCheckIn to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicCheckIn are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicCheckIn is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [show, setShow] = React.useState(false);
  const [isLogged, setIsLogged] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
    setIsLogged(!!localStorage.getItem("isLogged"));
  }, []);
  return show ? (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicCheckIn
          skipLogin={isLogged}
          password={process.env.NEXT_PUBLIC_ADMIN_PASSWORD}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  ) : null;
}

export default CheckIn;
