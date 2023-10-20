// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4F6Va19MyMHcyNpURbn1mE
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

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: 49wF7zG85s5BmUvuzSq52Y/projectcss
import plasmic_antd_5_hostless_2_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: cyCPZA1r7cMAVZTG2fBKop/projectcss
import plasmic_antd_5_hostless_3_css from "../imported_dep_8/plasmic_imported_dep_8.module.css"; // plasmic-import: h6N5thS3BWDmJSDYSW7aei/projectcss
import plasmic_antd_5_hostless_4_css from "../imported_dep_11/plasmic_imported_dep_11.module.css"; // plasmic-import: 2xrkvoGMeCr8HmCJeU43qJ/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: hPAx2Po3YSE2fzFsJw5Trv/projectcss
import projectcss from "./plasmic_a_d_5.module.css"; // plasmic-import: 4F6Va19MyMHcyNpURbn1mE/projectcss
import sty from "./PlasmicResponsiveMenu.module.css"; // plasmic-import: EjDwpL97hh/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: MpVPVACJ4/icon
import CloseIcon from "./icons/PlasmicIcon__Close"; // plasmic-import: 9oEdsaHjf/icon

createPlasmicElementProxy;

export type PlasmicResponsiveMenu__VariantMembers = {
  isOpen2: "isOpen2";
};
export type PlasmicResponsiveMenu__VariantsArgs = {
  isOpen2?: SingleBooleanChoiceArg<"isOpen2">;
};
type VariantPropType = keyof PlasmicResponsiveMenu__VariantsArgs;
export const PlasmicResponsiveMenu__VariantProps = new Array<VariantPropType>(
  "isOpen2"
);

export type PlasmicResponsiveMenu__ArgsType = {};
type ArgPropType = keyof PlasmicResponsiveMenu__ArgsType;
export const PlasmicResponsiveMenu__ArgProps = new Array<ArgPropType>();

export type PlasmicResponsiveMenu__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultResponsiveMenuProps {
  isOpen2?: SingleBooleanChoiceArg<"isOpen2">;
  className?: string;
}

const $$ = {};

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

  const stateSpecs: Parameters<typeof p.useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "isOpen2",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.isOpen2
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
        plasmic_antd_5_hostless_2_css.plasmic_tokens,
        plasmic_antd_5_hostless_3_css.plasmic_tokens,
        plasmic_antd_5_hostless_4_css.plasmic_tokens,
        plasmic_plasmic_kit_q_4_color_tokens_css.plasmic_tokens,
        sty.root,
        { [sty.rootisOpen2]: hasVariant($state, "isOpen2", "isOpen2") }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__dPp8K, {
          [sty.freeBoxisOpen2__dPp8KjqrG1]: hasVariant(
            $state,
            "isOpen2",
            "isOpen2"
          )
        })}
      >
        <div
          className={classNames(projectcss.all, sty.freeBox__uKGbc, {
            [sty.freeBoxisOpen2__uKGbcjqrG1]: hasVariant(
              $state,
              "isOpen2",
              "isOpen2"
            )
          })}
        >
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
              alt={""}
              className={classNames(sty.img__wk6PY)}
              displayHeight={"50px"}
              displayMaxHeight={"none"}
              displayMaxWidth={"100%"}
              displayMinHeight={"0"}
              displayMinWidth={"0"}
              displayWidth={"50px"}
              loading={"lazy"}
              src={{
                src: "/plasmic/a_d_5/images/ad20AnosIcon21Png.png",
                fullWidth: 3666,
                fullHeight: 2547,
                aspectRatio: undefined
              }}
            />
          </p.PlasmicLink>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__rx398, {
              [sty.freeBoxisOpen2__rx398JqrG1]: hasVariant(
                $state,
                "isOpen2",
                "isOpen2"
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
              {"Fa\u00e7a sua inscri\u00e7\u00e3o"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__rUs2N
              )}
              component={Link}
              href={`/conferencia`}
              platform={"nextjs"}
            >
              {"Confer\u00eancia"}
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
          <p.PlasmicIcon
            PlasmicIconType={
              hasVariant($state, "isOpen2", "isOpen2") ? CloseIcon : MenuIcon
            }
            className={classNames(projectcss.all, sty.svg__zmS8F, {
              [sty.svgisOpen2__zmS8FjqrG1]: hasVariant(
                $state,
                "isOpen2",
                "isOpen2"
              )
            })}
            onClick={async event => {
              const $steps = {};

              $steps["updateIsOpen"] = true
                ? (() => {
                    const actionArgs = {
                      vgroup: "isOpen2",
                      operation: 2,
                      value: "isOpen2"
                    };
                    return (({ vgroup, value }) => {
                      if (typeof value === "string") {
                        value = [value];
                      }

                      const oldValue = p.get($state, vgroup);
                      p.set($state, vgroup, !oldValue);
                      return !oldValue;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                typeof $steps["updateIsOpen"] === "object" &&
                typeof $steps["updateIsOpen"].then === "function"
              ) {
                $steps["updateIsOpen"] = await $steps["updateIsOpen"];
              }
            }}
            role={"img"}
          />
        </div>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__g0AHs, {
            [sty.freeBoxisOpen2__g0AHsjqrG1]: hasVariant(
              $state,
              "isOpen2",
              "isOpen2"
            )
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__bMU3, {
              [sty.freeBoxisOpen2__bMU3JqrG1]: hasVariant(
                $state,
                "isOpen2",
                "isOpen2"
              )
            })}
          >
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                sty.link__f7Jkj
              )}
              component={Link}
              href={`/`}
              platform={"nextjs"}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__d2Hc2)}
                displayHeight={"50px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"50px"}
                loading={"lazy"}
                src={{
                  src: "/plasmic/a_d_5/images/artboard1Png.png",
                  fullWidth: 30,
                  fullHeight: 30,
                  aspectRatio: undefined
                }}
              />
            </p.PlasmicLink>
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__fDf9X, {
                [sty.freeBoxisOpen2__fDf9XjqrG1]: hasVariant(
                  $state,
                  "isOpen2",
                  "isOpen2"
                )
              })}
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__zZooK
                )}
                component={Link}
                href={`/inscricao`}
                platform={"nextjs"}
              >
                {"Fa\u00e7a sua inscri\u00e7\u00e3o"}
              </p.PlasmicLink>
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link___6Rxgz
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
                  sty.link__jnM4A
                )}
                component={Link}
                href={`/fale-conosco`}
                platform={"nextjs"}
              >
                {"Fale conosco"}
              </p.PlasmicLink>
            </p.Stack>
            <p.PlasmicIcon
              PlasmicIconType={
                hasVariant($state, "isOpen2", "isOpen2") ? CloseIcon : MenuIcon
              }
              className={classNames(projectcss.all, sty.svg__hpC8Y, {
                [sty.svgisOpen2__hpC8YjqrG1]: hasVariant(
                  $state,
                  "isOpen2",
                  "isOpen2"
                )
              })}
              onClick={async event => {
                const $steps = {};

                $steps["updateIsOpen"] = true
                  ? (() => {
                      const actionArgs = {
                        vgroup: "isOpen2",
                        operation: 2,
                        value: "isOpen2"
                      };
                      return (({ vgroup, value }) => {
                        if (typeof value === "string") {
                          value = [value];
                        }

                        const oldValue = p.get($state, vgroup);
                        p.set($state, vgroup, !oldValue);
                        return !oldValue;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
                if (
                  typeof $steps["updateIsOpen"] === "object" &&
                  typeof $steps["updateIsOpen"].then === "function"
                ) {
                  $steps["updateIsOpen"] = await $steps["updateIsOpen"];
                }
              }}
              role={"img"}
            />
          </div>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jjSxP, {
              [sty.freeBoxisOpen2__jjSxPjqrG1]: hasVariant(
                $state,
                "isOpen2",
                "isOpen2"
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
              {"Fa\u00e7a sua inscri\u00e7\u00e3o"}
            </p.PlasmicLink>
            <p.PlasmicLink
              className={classNames(
                projectcss.all,
                projectcss.a,
                projectcss.__wab_text,
                sty.link__s2Xj8,
                {
                  [sty.linkisOpen2__s2Xj8JqrG1]: hasVariant(
                    $state,
                    "isOpen2",
                    "isOpen2"
                  )
                }
              )}
              component={Link}
              href={`/conferencia`}
              platform={"nextjs"}
            >
              {"Confer\u00eancia"}
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
              {"Palestrantes"}
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
        </p.Stack>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
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

    // Metadata about props expected for PlasmicResponsiveMenu
    internalVariantProps: PlasmicResponsiveMenu__VariantProps,
    internalArgProps: PlasmicResponsiveMenu__ArgProps
  }
);

export default PlasmicResponsiveMenu;
/* prettier-ignore-end */
