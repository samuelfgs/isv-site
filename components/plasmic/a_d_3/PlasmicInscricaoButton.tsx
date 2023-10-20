// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ugFFj82Q2N1H3o8TBWt2M5
// Component: VrYzW9MhJk

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

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: ugrBbUdM5cVqy9hjKxE3Z9/projectcss
import plasmic_antd_5_hostless_2_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: tRwRXcaJGaij9RuE9jQowa/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_8/plasmic_imported_dep_8.module.css"; // plasmic-import: kEs6HGEd6eEHXTXYJv3dXn/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: 4Vuf7Faviq4HnBF9hV4YyE/projectcss
import projectcss from "./plasmic_a_d_3.module.css"; // plasmic-import: ugFFj82Q2N1H3o8TBWt2M5/projectcss
import sty from "../a_d_5/PlasmicInscricaoButton.module.css"; // plasmic-import: VrYzW9MhJk/css

import ChecksvgIcon from "../a_d_5/icons/PlasmicIcon__Checksvg"; // plasmic-import: DFUukaBqwOq/icon
import IconIcon from "../a_d_5/icons/PlasmicIcon__Icon"; // plasmic-import: fpqx2Qlomeq/icon

createPlasmicElementProxy;

export type PlasmicInscricaoButton__VariantMembers = {};
export type PlasmicInscricaoButton__VariantsArgs = {};
type VariantPropType = keyof PlasmicInscricaoButton__VariantsArgs;
export const PlasmicInscricaoButton__VariantProps =
  new Array<VariantPropType>();

export type PlasmicInscricaoButton__ArgsType = {};
type ArgPropType = keyof PlasmicInscricaoButton__ArgsType;
export const PlasmicInscricaoButton__ArgProps = new Array<ArgPropType>();

export type PlasmicInscricaoButton__OverridesType = {
  root?: p.Flex<typeof Button>;
  text?: p.Flex<"div">;
};

export interface DefaultInscricaoButtonProps {
  className?: string;
}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicInscricaoButton__RenderFunc(props: {
  variants: PlasmicInscricaoButton__VariantsArgs;
  args: PlasmicInscricaoButton__ArgsType;
  overrides: PlasmicInscricaoButton__OverridesType;
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
    <Button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames("__wab_instance", sty.root)}
      link={`/inscricao`}
    >
      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        {"FA\u00c7A SUA INSCRI\u00c7\u00c3O"}
      </div>
    </Button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: typeof Button;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicInscricaoButton__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicInscricaoButton__VariantsArgs;
    args?: PlasmicInscricaoButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicInscricaoButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicInscricaoButton__ArgsType,
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
          internalArgPropNames: PlasmicInscricaoButton__ArgProps,
          internalVariantPropNames: PlasmicInscricaoButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicInscricaoButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicInscricaoButton";
  } else {
    func.displayName = `PlasmicInscricaoButton.${nodeName}`;
  }
  return func;
}

export const PlasmicInscricaoButton = Object.assign(
  // Top-level PlasmicInscricaoButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicInscricaoButton
    internalVariantProps: PlasmicInscricaoButton__VariantProps,
    internalArgProps: PlasmicInscricaoButton__ArgProps
  }
);

export default PlasmicInscricaoButton;
/* prettier-ignore-end */
