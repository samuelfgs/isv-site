// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adjLdLRA7wsoKYbMFGbDTh
// Component: EjDwpL97hh

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

import { useScreenVariants as useScreenVariantsdu4QaJy8Zhmfq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Du4QaJY8zhmfq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_a_d.module.css"; // plasmic-import: adjLdLRA7wsoKYbMFGbDTh/projectcss
import sty from "./PlasmicResponsiveMenu.module.css"; // plasmic-import: EjDwpL97hh/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: MpVPVACJ4/icon
import CloseIcon from "./icons/PlasmicIcon__Close"; // plasmic-import: 9oEdsaHjf/icon

export type PlasmicResponsiveMenu__VariantMembers = {
  isOpen: "isOpen";
};
export type PlasmicResponsiveMenu__VariantsArgs = {
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
};
type VariantPropType = keyof PlasmicResponsiveMenu__VariantsArgs;
export const PlasmicResponsiveMenu__VariantProps = new Array<VariantPropType>(
  "isOpen"
);

export type PlasmicResponsiveMenu__ArgsType = {};
type ArgPropType = keyof PlasmicResponsiveMenu__ArgsType;
export const PlasmicResponsiveMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicResponsiveMenu__OverridesType = {
  root?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
  svg?: p.Flex<"svg">;
};

export interface DefaultResponsiveMenuProps {
  isOpen?: SingleBooleanChoiceArg<"isOpen">;
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

function PlasmicResponsiveMenu__RenderFunc(props: {
  variants: PlasmicResponsiveMenu__VariantsArgs;
  args: PlasmicResponsiveMenu__ArgsType;
  overrides: PlasmicResponsiveMenu__OverridesType;
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

  const stateSpecs = React.useMemo(
    () => [
      {
        path: "isOpen",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdu4QaJy8Zhmfq()
  });

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
        sty.root,
        { [sty.rootisOpen]: hasVariant($state, "isOpen", "isOpen") }
      )}
    >
      {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__dPp8K, {
            [sty.freeBoxisOpen__dPp8KjqrG1]: hasVariant(
              $state,
              "isOpen",
              "isOpen"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__uKGbc, {
              [sty.freeBoxisOpen__uKGbcjqrG1]: hasVariant(
                $state,
                "isOpen",
                "isOpen"
              )
            })}
          >
            {true ? (
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  sty.link___3Bxfm
                )}
                component={Link}
                href={`/`}
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  data-plasmic-name={"img"}
                  data-plasmic-override={overrides.img}
                  alt={""}
                  className={classNames(sty.img)}
                  displayHeight={"50px" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"50px" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/a_d/images/artboard1Png.png",
                    fullWidth: 30,
                    fullHeight: 30,
                    aspectRatio: undefined
                  }}
                />
              </p.PlasmicLink>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "desktop")
                ? true
                : hasVariant(globalVariants, "screen", "tablet")
                ? true
                : true
            ) ? (
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__rx398, {
                  [sty.freeBoxisOpen__rx398JqrG1]: hasVariant(
                    $state,
                    "isOpen",
                    "isOpen"
                  )
                })}
              >
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__o0Hop
                  )}
                  component={Link}
                  href={`/inscricao`}
                  platform={"nextjs"}
                >
                  {"Faça sua inscrição"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link__e7LZr
                  )}
                  component={Link}
                  href={`/palestrantes`}
                  platform={"nextjs"}
                >
                  {"Palestrantes"}
                </p.PlasmicLink>
                <p.PlasmicLink
                  className={classNames(
                    projectcss.all,
                    projectcss.a,
                    projectcss.__wab_text,
                    sty.link___8Goel
                  )}
                  component={Link}
                  href={`/fale-conosco`}
                  platform={"nextjs"}
                >
                  {"Fale conosco"}
                </p.PlasmicLink>
              </p.Stack>
            ) : null}
            {(
              hasVariant(globalVariants, "screen", "desktop")
                ? true
                : hasVariant(globalVariants, "screen", "tablet")
                ? true
                : true
            ) ? (
              <p.PlasmicIcon
                data-plasmic-name={"svg"}
                data-plasmic-override={overrides.svg}
                PlasmicIconType={
                  hasVariant($state, "isOpen", "isOpen") ? CloseIcon : MenuIcon
                }
                className={classNames(projectcss.all, sty.svg, {
                  [sty.svgisOpen]: hasVariant($state, "isOpen", "isOpen")
                })}
                onClick={async event => {
                  const $steps = {};
                  $steps["updateIsOpen"] = true
                    ? (() => {
                        const actionArgs = {
                          vgroup: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "0e9-Cd8Vm",
                              componentUuid: "EjDwpL97hh",
                              argName: "vgroup"
                            },
                            () => "isOpen"
                          ),
                          operation: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "0e9-Cd8Vm",
                              componentUuid: "EjDwpL97hh",
                              argName: "operation"
                            },
                            () => 2
                          ),
                          value: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "updateVariant",
                              interactionUuid: "0e9-Cd8Vm",
                              componentUuid: "EjDwpL97hh",
                              argName: "value"
                            },
                            () => "isOpen"
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "updateVariant",
                            interactionUuid: "0e9-Cd8Vm",
                            componentUuid: "EjDwpL97hh"
                          },
                          () =>
                            (({ vgroup, value }) => {
                              if (typeof value === "string") {
                                value = [value];
                              }

                              const oldValue = p.get($state, vgroup);
                              p.set($state, vgroup, !oldValue);
                              return !oldValue;
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["updateIsOpen"] === "object" &&
                    typeof $steps["updateIsOpen"].then === "function"
                  ) {
                    $steps["updateIsOpen"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "updateVariant",
                        interactionUuid: "0e9-Cd8Vm",
                        componentUuid: "EjDwpL97hh"
                      },
                      $steps["updateIsOpen"]
                    );
                  }
                }}
                role={"img"}
              />
            ) : null}
          </div>
          {(hasVariant($state, "isOpen", "isOpen") ? true : true) ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__g0AHs, {
                [sty.freeBoxisOpen__g0AHsjqrG1]: hasVariant(
                  $state,
                  "isOpen",
                  "isOpen"
                )
              })}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__l3KHc
                )}
                component={Link}
                href={`/inscricao`}
                platform={"nextjs"}
              >
                {"Faça sua inscrição"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__d3CDb
                )}
                component={Link}
                href={`/palestrantes`}
                platform={"nextjs"}
              >
                {"Participantes"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__ubmKc
                )}
                component={Link}
                href={`/fale-conosco`}
                platform={"nextjs"}
              >
                {"Fale conosco"}
              </p.PlasmicLink>
            </p.Stack>
          ) : null}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "img", "svg"],
  img: ["img"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  img: typeof p.PlasmicImg;
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicResponsiveMenu__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicResponsiveMenu__VariantsArgs;
    args?: PlasmicResponsiveMenu__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicResponsiveMenu__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicResponsiveMenu__ArgsType,
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
          internalArgPropNames: PlasmicResponsiveMenu__ArgProps,
          internalVariantPropNames: PlasmicResponsiveMenu__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicResponsiveMenu__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicResponsiveMenu";
  } else {
    func.displayName = `PlasmicResponsiveMenu.${nodeName}`;
  }
  return func;
}

export const PlasmicResponsiveMenu = Object.assign(
  // Top-level PlasmicResponsiveMenu renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    img: makeNodeComponent("img"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicResponsiveMenu
    internalVariantProps: PlasmicResponsiveMenu__VariantProps,
    internalArgProps: PlasmicResponsiveMenu__ArgProps
  }
);

export default PlasmicResponsiveMenu;
/* prettier-ignore-end */
