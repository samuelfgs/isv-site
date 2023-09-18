// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eJV4HbfxnEVLnqrd4EbnFE
// Component: Ho523Dzl8-y

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
import ResponsiveMenu from "../../ResponsiveMenu"; // plasmic-import: EjDwpL97hh/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: vPxRt8CsCVSueVGGfSnXej/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: hd3DE2FDcofgfAhm4cao6V/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: ssURyHgRtXzJKQ8DzunbQH/projectcss
import projectcss from "./plasmic_a_d_2.module.css"; // plasmic-import: eJV4HbfxnEVLnqrd4EbnFE/projectcss
import sty from "./PlasmicConcluido.module.css"; // plasmic-import: Ho523Dzl8-y/css

createPlasmicElementProxy;

export type PlasmicConcluido__VariantMembers = {};
export type PlasmicConcluido__VariantsArgs = {};
type VariantPropType = keyof PlasmicConcluido__VariantsArgs;
export const PlasmicConcluido__VariantProps = new Array<VariantPropType>();

export type PlasmicConcluido__ArgsType = {
  onDotClick?: (slide: number) => void;
  activeSlide?: number;
};
type ArgPropType = keyof PlasmicConcluido__ArgsType;
export const PlasmicConcluido__ArgProps = new Array<ArgPropType>(
  "onDotClick",
  "activeSlide"
);

export type PlasmicConcluido__OverridesType = {
  root?: p.Flex<"div">;
  responsiveMenu?: p.Flex<typeof ResponsiveMenu>;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultConcluidoProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicConcluido__RenderFunc(props: {
  variants: PlasmicConcluido__VariantsArgs;
  args: PlasmicConcluido__ArgsType;
  overrides: PlasmicConcluido__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          activeSlide: 0
        },
        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "inscritos",
        type: "private",
        variableType: "array",
        initFunc: ({ $props, $state, $queries, $ctx }) => []
      },
      {
        path: "inForm",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => true
      },
      {
        path: "selectedIndex",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "isLoading",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = p.useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

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
            plasmic_antd_5_hostless_css.plasmic_tokens,
            plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
            sty.root
          )}
        >
          <ResponsiveMenu
            data-plasmic-name={"responsiveMenu"}
            data-plasmic-override={overrides.responsiveMenu}
            className={classNames("__wab_instance", sty.responsiveMenu)}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__gEiAl
            )}
          >
            {"Inscri\u00e7\u00e3o efetuada"}
          </div>
          <p.Stack
            as={"div"}
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xsDpC
              )}
            >
              {
                "Parab\u00e9ns! Sua inscri\u00e7\u00e3o para o Adora\u00e7\u00e3o e Discipulado 20 Anos foi realizada com sucesso!\n\nEm breve, entraremos em contato, via e-mail, com todas as informa\u00e7\u00f5es sobre seu check-in para o evento.\n\nAt\u00e9 l\u00e1!"
              }
            </div>
          </p.Stack>
          <p.PlasmicImg
            data-plasmic-name={"img"}
            data-plasmic-override={overrides.img}
            alt={""}
            className={classNames(sty.img)}
            displayHeight={"auto"}
            displayMaxHeight={"none"}
            displayMaxWidth={"300px"}
            displayMinHeight={"0"}
            displayMinWidth={"0"}
            displayWidth={"auto"}
            loading={"lazy"}
            src={{
              src: "/plasmic/a_d_2/images/isv.png",
              fullWidth: 1080,
              fullHeight: 1080,
              aspectRatio: undefined
            }}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "responsiveMenu", "freeBox", "img"],
  responsiveMenu: ["responsiveMenu"],
  freeBox: ["freeBox"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  responsiveMenu: typeof ResponsiveMenu;
  freeBox: "div";
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicConcluido__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicConcluido__VariantsArgs;
    args?: PlasmicConcluido__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicConcluido__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicConcluido__ArgsType,
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
          internalArgPropNames: PlasmicConcluido__ArgProps,
          internalVariantPropNames: PlasmicConcluido__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicConcluido__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConcluido";
  } else {
    func.displayName = `PlasmicConcluido.${nodeName}`;
  }
  return func;
}

export const PlasmicConcluido = Object.assign(
  // Top-level PlasmicConcluido renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    responsiveMenu: makeNodeComponent("responsiveMenu"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicConcluido
    internalVariantProps: PlasmicConcluido__VariantProps,
    internalArgProps: PlasmicConcluido__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicConcluido;
/* prettier-ignore-end */
