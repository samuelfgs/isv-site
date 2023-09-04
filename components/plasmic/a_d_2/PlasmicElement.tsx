// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: eJV4HbfxnEVLnqrd4EbnFE
// Component: tRoNuHKGyd

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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: vPxRt8CsCVSueVGGfSnXej/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: hd3DE2FDcofgfAhm4cao6V/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: ssURyHgRtXzJKQ8DzunbQH/projectcss
import projectcss from "./plasmic_a_d_2.module.css"; // plasmic-import: eJV4HbfxnEVLnqrd4EbnFE/projectcss
import sty from "./PlasmicElement.module.css"; // plasmic-import: tRoNuHKGyd/css

createPlasmicElementProxy;

export type PlasmicElement__VariantMembers = {};
export type PlasmicElement__VariantsArgs = {};
type VariantPropType = keyof PlasmicElement__VariantsArgs;
export const PlasmicElement__VariantProps = new Array<VariantPropType>();

export type PlasmicElement__ArgsType = {
  color?: string;
  name?: string;
};
type ArgPropType = keyof PlasmicElement__ArgsType;
export const PlasmicElement__ArgProps = new Array<ArgPropType>("color", "name");

export type PlasmicElement__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
};

export interface DefaultElementProps {
  color?: string;
  name?: string;
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

function PlasmicElement__RenderFunc(props: {
  variants: PlasmicElement__VariantsArgs;
  args: PlasmicElement__ArgsType;
  overrides: PlasmicElement__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {
          color: "red" as const,
          name: "Daniel Souza" as const
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

  return (
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
      <p.PlasmicImg
        data-plasmic-name={"img"}
        data-plasmic-override={overrides.img}
        alt={""}
        className={classNames(sty.img)}
        displayHeight={"auto" as const}
        displayMaxHeight={"none" as const}
        displayMaxWidth={"100%" as const}
        displayMinHeight={"0" as const}
        displayMinWidth={"0" as const}
        displayWidth={"400px" as const}
        loading={"lazy" as const}
        src={{
          src: "/plasmic/a_d_2/images/beatles.png",
          fullWidth: 8268,
          fullHeight: 4724,
          aspectRatio: undefined
        }}
      />

      <div
        data-plasmic-name={"text"}
        data-plasmic-override={overrides.text}
        className={classNames(projectcss.all, projectcss.__wab_text, sty.text)}
      >
        <React.Fragment>
          {(() => {
            try {
              return $props.name;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return "";
              }
              throw e;
            }
          })()}
        </React.Fragment>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "text"],
  img: ["img"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicElement__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicElement__VariantsArgs;
    args?: PlasmicElement__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicElement__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicElement__ArgsType,
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
          internalArgPropNames: PlasmicElement__ArgProps,
          internalVariantPropNames: PlasmicElement__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicElement__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicElement";
  } else {
    func.displayName = `PlasmicElement.${nodeName}`;
  }
  return func;
}

export const PlasmicElement = Object.assign(
  // Top-level PlasmicElement renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicElement
    internalVariantProps: PlasmicElement__VariantProps,
    internalArgProps: PlasmicElement__ArgProps
  }
);

export default PlasmicElement;
/* prettier-ignore-end */
