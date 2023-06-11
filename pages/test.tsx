// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/react-web/lib/host";
import GlobalContextsProvider from "../components/plasmic/a_d/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/a_d/PlasmicGlobalVariant__Screen";
import { PlasmicTest } from "../components/plasmic/a_d/PlasmicTest";
import { useRouter } from "next/router";
import DatePicker2 from 'rc-calendar';

import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

function Test() {
  // Use PlasmicTest to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicTest are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicTest is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicTest
          input={{
            render: (props: any, C: any) => <DatePicker
              format="dd/MM/yyyy"
              value={selectedDate}
              onChange={(date) => setSelectedDate(date as any)}
          />
          }}
        />
      </ph.PageParamsProvider>
    </GlobalContextsProvider>
  );
}

export default Test;