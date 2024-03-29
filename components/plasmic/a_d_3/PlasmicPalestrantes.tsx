// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ugFFj82Q2N1H3o8TBWt2M5
// Component: NaYBT353Ya_

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
import Dots from "../../Dots"; // plasmic-import: QgqknROGa4/component
import PalestrantesData from "../../PalestrantesData"; // plasmic-import: PXPe8ME1DQ/component
import Slider from "react-slick"; // plasmic-import: HOQUyOpClJ/codeComponent
import Palestrante from "../../Palestrante"; // plasmic-import: 5UuQ-pHvfY/component

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../imported_dep_5/plasmic_imported_dep_5.module.css"; // plasmic-import: ugrBbUdM5cVqy9hjKxE3Z9/projectcss
import plasmic_antd_5_hostless_2_css from "../imported_dep_2/plasmic_imported_dep_2.module.css"; // plasmic-import: tRwRXcaJGaij9RuE9jQowa/projectcss
import plasmic_antd_5_hostless_css from "../imported_dep_8/plasmic_imported_dep_8.module.css"; // plasmic-import: kEs6HGEd6eEHXTXYJv3dXn/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../imported_dep_4/plasmic_imported_dep_4.module.css"; // plasmic-import: 4Vuf7Faviq4HnBF9hV4YyE/projectcss
import projectcss from "./plasmic_a_d_3.module.css"; // plasmic-import: ugFFj82Q2N1H3o8TBWt2M5/projectcss
import sty from "../a_d_5/PlasmicPalestrantes.module.css"; // plasmic-import: NaYBT353Ya_/css

createPlasmicElementProxy;

export type PlasmicPalestrantes__VariantMembers = {};
export type PlasmicPalestrantes__VariantsArgs = {};
type VariantPropType = keyof PlasmicPalestrantes__VariantsArgs;
export const PlasmicPalestrantes__VariantProps = new Array<VariantPropType>();

export type PlasmicPalestrantes__ArgsType = {
  onDotClick?: (slide: number) => void;
  activeSlide?: number;
};
type ArgPropType = keyof PlasmicPalestrantes__ArgsType;
export const PlasmicPalestrantes__ArgProps = new Array<ArgPropType>(
  "onDotClick",
  "activeSlide"
);

export type PlasmicPalestrantes__OverridesType = {
  root?: p.Flex<"div">;
  responsiveMenu?: p.Flex<typeof ResponsiveMenu>;
  text?: p.Flex<"div">;
  dots?: p.Flex<typeof Dots>;
  palestrantesData?: p.Flex<typeof PalestrantesData>;
  slider?: p.Flex<typeof Slider>;
  palestrante?: p.Flex<typeof Palestrante>;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultPalestrantesProps {}

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicPalestrantes__RenderFunc(props: {
  variants: PlasmicPalestrantes__VariantsArgs;
  args: PlasmicPalestrantes__ArgsType;
  overrides: PlasmicPalestrantes__OverridesType;
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
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicPalestrantes.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicPalestrantes.pageMetadata.title}
        />

        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicPalestrantes.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicPalestrantes.pageMetadata.ogImageSrc}
        />

        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicPalestrantes.pageMetadata.ogImageSrc}
        />
      </Head>

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
          <ResponsiveMenu
            data-plasmic-name={"responsiveMenu"}
            data-plasmic-override={overrides.responsiveMenu}
            className={classNames("__wab_instance", sty.responsiveMenu)}
          />

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__jaBbe)}
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
              {
                "Nesta edi\u00e7\u00e3o do Adora\u00e7\u00e3o e Discipulado 20, contaremos com participa\u00e7\u00f5es especiais."
              }
            </div>
          </p.Stack>
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hjp0S)}
          >
            {(
              (() => {
                try {
                  return [0, 1, 2, 3, 4];
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
              const currentItem = __plasmic_item_0;
              const currentIndex = __plasmic_idx_0;
              return (
                <div
                  className={classNames(projectcss.all, sty.freeBox___1V5J5)}
                  key={currentIndex}
                  onClick={async event => {
                    const $steps = {};
                    $steps["runOnDotClick"] = true
                      ? (() => {
                          const actionArgs = {
                            eventRef: $props["onDotClick"],
                            args: [
                              (() => {
                                try {
                                  return currentIndex;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return undefined;
                                  }
                                  throw e;
                                }
                              })()
                            ]
                          };
                          return (({ eventRef, args }) => {
                            return eventRef?.(...(args ?? []));
                          })?.apply(null, [actionArgs]);
                        })()
                      : undefined;
                    if (
                      typeof $steps["runOnDotClick"] === "object" &&
                      typeof $steps["runOnDotClick"].then === "function"
                    ) {
                      $steps["runOnDotClick"] = await $steps["runOnDotClick"];
                    }
                  }}
                >
                  <Dots
                    data-plasmic-name={"dots"}
                    data-plasmic-override={overrides.dots}
                    className={classNames("__wab_instance", sty.dots)}
                    isActive={(() => {
                      try {
                        return $props.activeSlide === currentItem;
                      } catch (e) {
                        if (
                          e instanceof TypeError ||
                          e?.plasmicType === "PlasmicUndefinedDataError"
                        ) {
                          return [];
                        }
                        throw e;
                      }
                    })()}
                  />
                </div>
              );
            })}
          </p.Stack>
          <div className={classNames(projectcss.all, sty.freeBox__crFvz)}>
            <PalestrantesData
              data-plasmic-name={"palestrantesData"}
              data-plasmic-override={overrides.palestrantesData}
              className={classNames("__wab_instance", sty.palestrantesData)}
            >
              <ph.DataCtxReader>
                {$ctx => (
                  <Slider
                    data-plasmic-name={"slider"}
                    data-plasmic-override={overrides.slider}
                    arrows={false}
                    className={classNames("__wab_instance", sty.slider)}
                  >
                    {(
                      (() => {
                        try {
                          return $ctx.palestrantes;
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
                      const currentItem = __plasmic_item_0;
                      const currentIndex = __plasmic_idx_0;
                      return (
                        <Palestrante
                          data-plasmic-name={"palestrante"}
                          data-plasmic-override={overrides.palestrante}
                          className={classNames(
                            "__wab_instance",
                            sty.palestrante
                          )}
                          key={currentIndex}
                          slot={
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.name;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "Adhemar de Campos";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          }
                          slot2={
                            <React.Fragment>
                              {(() => {
                                try {
                                  return currentItem.longDesc;
                                } catch (e) {
                                  if (
                                    e instanceof TypeError ||
                                    e?.plasmicType ===
                                      "PlasmicUndefinedDataError"
                                  ) {
                                    return "Autor de aproximadamente 1000 canções, Pr. Adhemar de Campos é um dos mais notórios ministros de louvor e adoração no Brasil, dedicando sua vida a compor canções que ajudam muitos a experimentarem a presença de Deus de um modo profundo. Em 1985 gravou seu primeiro LP e em 1987, num pioneirismo ímpar, realizou a primeira gravação ao vivo de músicas cristãs. Sua história confunde-se com a da música gospel no Brasil, tanto que na década de 80 era um dos poucos produtores de cânticos cristãos com grande projeção. Seu ministério influenciou gerações com composições atemporais que até hoje nos tocam, oferecendo valores de uma vida cristã verdadeira. São mais de 45 anos de caminhada com Cristo, claramente perceptíveis no conjunto de sua obra.";
                                  }
                                  throw e;
                                }
                              })()}
                            </React.Fragment>
                          }
                        >
                          <p.PlasmicImg
                            data-plasmic-name={"img"}
                            data-plasmic-override={overrides.img}
                            alt={""}
                            className={classNames(sty.img)}
                            displayHeight={"100%"}
                            displayMaxHeight={"none"}
                            displayMaxWidth={"100%"}
                            displayMinHeight={"0"}
                            displayMinWidth={"0"}
                            displayWidth={"200px"}
                            loading={"lazy"}
                            src={(() => {
                              try {
                                return `/${currentItem.name}.png`;
                              } catch (e) {
                                if (
                                  e instanceof TypeError ||
                                  e?.plasmicType === "PlasmicUndefinedDataError"
                                ) {
                                  return "https://site-assets.plasmic.app/6e4631f76206fbc89126315336d4e59c.png";
                                }
                                throw e;
                              }
                            })()}
                          />
                        </Palestrante>
                      );
                    })}
                  </Slider>
                )}
              </ph.DataCtxReader>
            </PalestrantesData>
          </div>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "responsiveMenu",
    "text",
    "dots",
    "palestrantesData",
    "slider",
    "palestrante",
    "img"
  ],

  responsiveMenu: ["responsiveMenu"],
  text: ["text"],
  dots: ["dots"],
  palestrantesData: ["palestrantesData", "slider", "palestrante", "img"],
  slider: ["slider", "palestrante", "img"],
  palestrante: ["palestrante", "img"],
  img: ["img"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  responsiveMenu: typeof ResponsiveMenu;
  text: "div";
  dots: typeof Dots;
  palestrantesData: typeof PalestrantesData;
  slider: typeof Slider;
  palestrante: typeof Palestrante;
  img: typeof p.PlasmicImg;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPalestrantes__OverridesType,
  DescendantsType<T>
>;

type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicPalestrantes__VariantsArgs;
    args?: PlasmicPalestrantes__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicPalestrantes__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicPalestrantes__ArgsType,
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
          internalArgPropNames: PlasmicPalestrantes__ArgProps,
          internalVariantPropNames: PlasmicPalestrantes__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicPalestrantes__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPalestrantes";
  } else {
    func.displayName = `PlasmicPalestrantes.${nodeName}`;
  }
  return func;
}

export const PlasmicPalestrantes = Object.assign(
  // Top-level PlasmicPalestrantes renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    responsiveMenu: makeNodeComponent("responsiveMenu"),
    text: makeNodeComponent("text"),
    dots: makeNodeComponent("dots"),
    palestrantesData: makeNodeComponent("palestrantesData"),
    slider: makeNodeComponent("slider"),
    palestrante: makeNodeComponent("palestrante"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicPalestrantes
    internalVariantProps: PlasmicPalestrantes__VariantProps,
    internalArgProps: PlasmicPalestrantes__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "AD20 - Palestrantes",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/82149cfdbb4813cc0398b4e443013c4b.png",
      canonical: ""
    }
  }
);

export default PlasmicPalestrantes;
/* prettier-ignore-end */
