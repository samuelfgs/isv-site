// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4e8xJRxm6TCFH21WJFauki
// Component: qPb5MDxDszRV

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { SideEffect } from "@plasmicpkgs/plasmic-basic-components"; // plasmic-import: K-mWGqrHefEp/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: gaUgJw14zgC2h2RkxhZpNV/projectcss
import plasmic_antd_5_hostless_2_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: sJ7Q2xHXjtdMNANtYDfUU4/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_8/plasmic_imported_dep_8.module.css"; // plasmic-import: ouSbC2XoeRJw8hN6QJ1aQq/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: 2FYXZ1NU3BnbJ2Q5KYH4Tr/projectcss
import projectcss from "./plasmic_a_d_4.module.css"; // plasmic-import: 4e8xJRxm6TCFH21WJFauki/projectcss
import sty from "../a_d_5/PlasmicCortesia.module.css"; // plasmic-import: qPb5MDxDszRV/css

createPlasmicElementProxy;

export type PlasmicNewPage2__VariantMembers = {};
export type PlasmicNewPage2__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewPage2__VariantsArgs;
export const PlasmicNewPage2__VariantProps = new Array<VariantPropType>();

export type PlasmicNewPage2__ArgsType = {};
type ArgPropType = keyof PlasmicNewPage2__ArgsType;
export const PlasmicNewPage2__ArgProps = new Array<ArgPropType>();

export type PlasmicNewPage2__OverridesType = {
  root?: p.Flex<"div">;
  sideEffect?: p.Flex<typeof SideEffect>;
};

export interface DefaultNewPage2Props {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicNewPage2__RenderFunc(props: {
  variants: PlasmicNewPage2__VariantsArgs;
  args: PlasmicNewPage2__ArgsType;
  overrides: PlasmicNewPage2__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_copy_of_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            plasmic_antd_5_hostless_2_css.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          <SideEffect
            data-plasmic-name={"sideEffect"}
            data-plasmic-override={overrides.sideEffect}
            className={classNames("__wab_instance", sty.sideEffect)}
            onMount={async () => {
              const $steps = {};

              $steps["goToHomepage"] = true
                ? (() => {
                    const actionArgs = { destination: `/` };
                    return (({ destination }) => {
                      __nextRouter?.push(destination);
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                typeof $steps["goToHomepage"] === "object" &&
                typeof $steps["goToHomepage"].then === "function"
              ) {
                $steps["goToHomepage"] = await $steps["goToHomepage"];
              }
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "sideEffect"],
  sideEffect: ["sideEffect"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  sideEffect: typeof SideEffect;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNewPage2__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewPage2__VariantsArgs;
    args?: PlasmicNewPage2__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNewPage2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNewPage2__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNewPage2__ArgProps,
          internalVariantPropNames: PlasmicNewPage2__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNewPage2__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewPage2";
  } else {
    func.displayName = `PlasmicNewPage2.${nodeName}`;
  }
  return func;
}

export const PlasmicNewPage2 = Object.assign(
  // Top-level PlasmicNewPage2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    sideEffect: makeNodeComponent("sideEffect"),

    // Metadata about props expected for PlasmicNewPage2
    internalVariantProps: PlasmicNewPage2__VariantProps,
    internalArgProps: PlasmicNewPage2__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicNewPage2;
/* prettier-ignore-end */
