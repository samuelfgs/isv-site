// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adjLdLRA7wsoKYbMFGbDTh
// Component: pFpBRd8Rc1x

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

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_a_d.module.css"; // plasmic-import: adjLdLRA7wsoKYbMFGbDTh/projectcss
import sty from "./PlasmicConferencia.module.css"; // plasmic-import: pFpBRd8Rc1x/css

export type PlasmicConferencia__VariantMembers = {};
export type PlasmicConferencia__VariantsArgs = {};
type VariantPropType = keyof PlasmicConferencia__VariantsArgs;
export const PlasmicConferencia__VariantProps = new Array<VariantPropType>();

export type PlasmicConferencia__ArgsType = {
  onDotClick?: (slide: number) => void;
  activeSlide?: number;
};
type ArgPropType = keyof PlasmicConferencia__ArgsType;
export const PlasmicConferencia__ArgProps = new Array<ArgPropType>(
  "onDotClick",
  "activeSlide"
);

export type PlasmicConferencia__OverridesType = {
  root?: p.Flex<"div">;
  responsiveMenu?: p.Flex<typeof ResponsiveMenu>;
  freeBox?: p.Flex<"div">;
  img?: p.Flex<typeof p.PlasmicImg>;
};

export interface DefaultConferenciaProps {}

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

function PlasmicConferencia__RenderFunc(props: {
  variants: PlasmicConferencia__VariantsArgs;
  args: PlasmicConferencia__ArgsType;
  overrides: PlasmicConferencia__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          activeSlide: 0 as const
        },
        props.args
      ),
    [props.args]
  );
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
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicConferencia.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicConferencia.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicConferencia.pageMetadata.title}
        />

        <meta
          key="og:image"
          property="og:image"
          content={PlasmicConferencia.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicConferencia.pageMetadata.ogImageSrc}
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
              sty.text__elHpj
            )}
          >
            {"Sobre o Adoração e Discipulado"}
          </div>
          {true ? (
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
                  sty.text__hpDsv
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "Desde o ano 2000, o Adoração e Discipulado tem sido um marco na vida da Igreja em São Vicente e de milhares de pessoas espalhadas pelo Brasil. \n\nO nome da conferência foi escolhido pelo fato de a Igreja local, ao longo das últimas décadas, entender que o discipulado é muito mais que uma atividade, sendo um estilo de vida que deve transbordar em tudo o que somos e fazemos.\n\nNeste ano, celebramos a 20ª edição deste marcante evento de nossa história.\n\n"
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Igreja em São Vicente"}
                  </span>
                </React.Fragment>
              </div>
            </p.Stack>
          ) : null}
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
            displayWidth={"auto" as const}
            loading={"lazy" as const}
            src={{
              src: "/plasmic/a_d/images/isv.png",
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
  PlasmicConferencia__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicConferencia__VariantsArgs;
    args?: PlasmicConferencia__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicConferencia__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicConferencia__ArgsType,
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
          internalArgPropNames: PlasmicConferencia__ArgProps,
          internalVariantPropNames: PlasmicConferencia__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicConferencia__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicConferencia";
  } else {
    func.displayName = `PlasmicConferencia.${nodeName}`;
  }
  return func;
}

export const PlasmicConferencia = Object.assign(
  // Top-level PlasmicConferencia renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    responsiveMenu: makeNodeComponent("responsiveMenu"),
    freeBox: makeNodeComponent("freeBox"),
    img: makeNodeComponent("img"),

    // Metadata about props expected for PlasmicConferencia
    internalVariantProps: PlasmicConferencia__VariantProps,
    internalArgProps: PlasmicConferencia__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "AD20 - Conferência",
      description: "",
      ogImageSrc:
        "https://site-assets.plasmic.app/82149cfdbb4813cc0398b4e443013c4b.png",
      canonical: ""
    }
  }
);

export default PlasmicConferencia;
/* prettier-ignore-end */
