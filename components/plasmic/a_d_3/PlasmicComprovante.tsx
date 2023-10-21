// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ugFFj82Q2N1H3o8TBWt2M5
// Component: u2RfaeKZwHdY

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  usePlasmicDataConfig,
  executePlasmicDataOp,
  usePlasmicDataOp
} from "@plasmicapp/react-web/lib/data-sources";

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
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: 7GMXgnERt-hcm/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: ugrBbUdM5cVqy9hjKxE3Z9/projectcss
import plasmic_antd_5_hostless_2_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: tRwRXcaJGaij9RuE9jQowa/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_8/plasmic_imported_dep_8.module.css"; // plasmic-import: kEs6HGEd6eEHXTXYJv3dXn/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: 4Vuf7Faviq4HnBF9hV4YyE/projectcss
import projectcss from "./plasmic_a_d_3.module.css"; // plasmic-import: ugFFj82Q2N1H3o8TBWt2M5/projectcss
import sty from "../a_d_5/PlasmicIngresso.module.css"; // plasmic-import: u2RfaeKZwHdY/css

import CloseIcon from "../a_d_5/icons/PlasmicIcon__Close"; // plasmic-import: 9oEdsaHjf/icon
import ChecksvgIcon from "../a_d_5/icons/PlasmicIcon__Checksvg"; // plasmic-import: DFUukaBqwOq/icon
import IconIcon from "../a_d_5/icons/PlasmicIcon__Icon"; // plasmic-import: fpqx2Qlomeq/icon

createPlasmicElementProxy;

export type PlasmicComprovante__VariantMembers = {};
export type PlasmicComprovante__VariantsArgs = {};
type VariantPropType = keyof PlasmicComprovante__VariantsArgs;
export const PlasmicComprovante__VariantProps = new Array<VariantPropType>();

export type PlasmicComprovante__ArgsType = {};
type ArgPropType = keyof PlasmicComprovante__ArgsType;
export const PlasmicComprovante__ArgProps = new Array<ArgPropType>();

export type PlasmicComprovante__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  button?: p.Flex<typeof Button>;
};

export interface DefaultComprovanteProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicComprovante__RenderFunc(props: {
  variants: PlasmicComprovante__VariantsArgs;
  args: PlasmicComprovante__ArgsType;
  overrides: PlasmicComprovante__OverridesType;
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

  const [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    inscricao: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "du8jW5s7JnVfk4bHYp38RF",
            opId: "30229dd8-44cf-40bc-835e-3576095a3349",
            userArgs: {
              filters: [$ctx.params.id]
            },
            cacheKey: "plasmic.$..$..$.30229dd8-44cf-40bc-835e-3576095a3349.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    ),
    payment: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "du8jW5s7JnVfk4bHYp38RF",
            opId: "f9bfb522-e9f4-414c-a98f-c35c9eb26e3b",
            userArgs: {
              filters: [$ctx.params.id]
            },
            cacheKey: "plasmic.$..$..$.f9bfb522-e9f4-414c-a98f-c35c9eb26e3b.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }

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
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__kbOrY)}
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__mf9Ac
              )}
            >
              {"Inscri\u00e7\u00e3o"}
            </div>
            {(
              (() => {
                try {
                  return $queries.payment.data;
                } catch (e) {
                  if (
                    e instanceof TypeError ||
                    e?.plasmicType === "PlasmicUndefinedDataError"
                  ) {
                    return [];
                  }
                  throw e;
                }
              })() ?? []
            ).map((__plasmic_item_0, __plasmic_idx_0) => {
              const payment = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <div
                  className={classNames(projectcss.all, sty.freeBox__chFNj)}
                  key={currentIndex}
                >
                  {(
                    (() => {
                      try {
                        return $queries.inscricao.data;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })() ?? []
                  ).map((__plasmic_item_1, __plasmic_idx_1) => {
                    const inscricao = __plasmic_item_1;
                    const currentIndex = __plasmic_idx_1;
                    return (
                      <p.Stack
                        as={"div"}
                        hasGap={true}
                        className={classNames(
                          projectcss.all,
                          sty.freeBox__jwgwc
                        )}
                        key={currentIndex}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__yaSDh
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return inscricao.id;
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
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__tRm68
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return inscricao.name;
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
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__wmNk
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return inscricao.cpf;
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
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__kdKbp
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return inscricao.birthdate;
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
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__bjsm2
                          )}
                        >
                          <React.Fragment>
                            {(() => {
                              try {
                                return payment.paid ? "PAGO" : "NÃO PAGO";
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
                        <p.Stack
                          as={"div"}
                          hasGap={true}
                          className={classNames(
                            projectcss.all,
                            sty.freeBox__urAwU
                          )}
                        >
                          <CloseIcon
                            data-plasmic-name={"svg"}
                            data-plasmic-override={overrides.svg}
                            className={classNames(projectcss.all, sty.svg)}
                            role={"img"}
                          />

                          <div
                            className={classNames(
                              projectcss.all,
                              projectcss.__wab_text,
                              sty.text__zzUn0
                            )}
                          >
                            {"Check-In"}
                          </div>
                        </p.Stack>
                        <Button
                          data-plasmic-name={"button"}
                          data-plasmic-override={overrides.button}
                          className={classNames("__wab_instance", sty.button)}
                        >
                          {"CONFIRMAR CHECK-IN"}
                        </Button>
                      </p.Stack>
                    );
                  })}
                </div>
              );
            })}
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg", "button"],
  svg: ["svg"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicComprovante__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicComprovante__VariantsArgs;
    args?: PlasmicComprovante__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicComprovante__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicComprovante__ArgsType,
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
          internalArgPropNames: PlasmicComprovante__ArgProps,
          internalVariantPropNames: PlasmicComprovante__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicComprovante__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicComprovante";
  } else {
    func.displayName = `PlasmicComprovante.${nodeName}`;
  }
  return func;
}

export const PlasmicComprovante = Object.assign(
  // Top-level PlasmicComprovante renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicComprovante
    internalVariantProps: PlasmicComprovante__VariantProps,
    internalArgProps: PlasmicComprovante__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicComprovante;
/* prettier-ignore-end */
