// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adjLdLRA7wsoKYbMFGbDTh
// Component: IvQGOVPg-N

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
import Button from "../../Button"; // plasmic-import: 7rzM78mJWkH/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_a_d.module.css"; // plasmic-import: adjLdLRA7wsoKYbMFGbDTh/projectcss
import sty from "./PlasmicLastParallax.module.css"; // plasmic-import: IvQGOVPg-N/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: DFUukaBqwOq/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: fpqx2Qlomeq/icon

export type PlasmicLastParallax__VariantMembers = {};
export type PlasmicLastParallax__VariantsArgs = {};
type VariantPropType = keyof PlasmicLastParallax__VariantsArgs;
export const PlasmicLastParallax__VariantProps = new Array<VariantPropType>();

export type PlasmicLastParallax__ArgsType = {};
type ArgPropType = keyof PlasmicLastParallax__ArgsType;
export const PlasmicLastParallax__ArgProps = new Array<ArgPropType>();

export type PlasmicLastParallax__OverridesType = {
  root?: p.Flex<"div">;
  voce?: p.Flex<"div">;
  botao?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultLastParallaxProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicLastParallax__RenderFunc(props: {
  variants: PlasmicLastParallax__VariantsArgs;
  args: PlasmicLastParallax__ArgsType;
  overrides: PlasmicLastParallax__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
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
      <div
        data-plasmic-name={"voce"}
        data-plasmic-override={overrides.voce}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.voce)}
      >
        {"E VOCÊ..."}
      </div>
      <Button
        data-plasmic-name={"botao"}
        data-plasmic-override={overrides.botao}
        className={classNames("__wab_instance", sty.botao)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"FAÇA SUA INSCRIÇÃO"}
        </div>
      </Button>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "voce", "botao", "text"],
  voce: ["voce"],
  botao: ["botao", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  voce: "div";
  botao: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicLastParallax__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicLastParallax__VariantsArgs;
    args?: PlasmicLastParallax__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicLastParallax__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicLastParallax__ArgsType,
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
          internalArgPropNames: PlasmicLastParallax__ArgProps,
          internalVariantPropNames: PlasmicLastParallax__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicLastParallax__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicLastParallax";
  } else {
    func.displayName = `PlasmicLastParallax.${nodeName}`;
  }
  return func;
}

export const PlasmicLastParallax = Object.assign(
  // Top-level PlasmicLastParallax renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    voce: makeNodeComponent("voce"),
    botao: makeNodeComponent("botao"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicLastParallax
    internalVariantProps: PlasmicLastParallax__VariantProps,
    internalArgProps: PlasmicLastParallax__ArgProps
  }
);

export default PlasmicLastParallax;
/* prettier-ignore-end */
