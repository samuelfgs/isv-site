// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: adjLdLRA7wsoKYbMFGbDTh
// Component: ScHFxlsSTX8

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
import ResponsiveMenu from "../../ResponsiveMenu"; // plasmic-import: EjDwpL97hh/component
import { FormWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: TgJFzUZpvQ/codeComponent
import { FormProvider } from "../../code-components/FormProvider"; // plasmic-import: gzu14pntqz/codeComponent
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/registerForm"; // plasmic-import: EYHwZh9ILg/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: nehhorfRRWX/component
import { AntdTextArea } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: pTzGlMptTxd/codeComponent
import { inputHelpers as AntdTextArea_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput"; // plasmic-import: pTzGlMptTxd/codeComponentHelper
import Button from "../../Button"; // plasmic-import: 7rzM78mJWkH/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources"; // plasmic-import: 7GMXgnERt-hcm/codeComponent

import { useScreenVariants as useScreenVariantsdu4QaJy8Zhmfq } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: Du4QaJY8zhmfq/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_copy_of_plasmic_kit_q_4_color_tokens_css from "../copy_of_plasmic_kit_q_4_color_tokens/plasmic_copy_of_plasmic_kit_q_4_color_tokens.module.css"; // plasmic-import: r6wqTHP8pUBDqvkAaarh3E/projectcss
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_kit_q_4_color_tokens_css from "../plasmic_kit_color_tokens/plasmic_plasmic_kit_color_tokens.module.css"; // plasmic-import: 95xp9cYcv7HrNWpFWWhbcv/projectcss
import projectcss from "./plasmic_a_d.module.css"; // plasmic-import: adjLdLRA7wsoKYbMFGbDTh/projectcss
import sty from "./PlasmicFaleConosco.module.css"; // plasmic-import: ScHFxlsSTX8/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: rlqzA49ld7A/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: DFUukaBqwOq/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: fpqx2Qlomeq/icon

export type PlasmicFaleConosco__VariantMembers = {};
export type PlasmicFaleConosco__VariantsArgs = {};
type VariantPropType = keyof PlasmicFaleConosco__VariantsArgs;
export const PlasmicFaleConosco__VariantProps = new Array<VariantPropType>();

export type PlasmicFaleConosco__ArgsType = {
  inscritosx?: any;
};
type ArgPropType = keyof PlasmicFaleConosco__ArgsType;
export const PlasmicFaleConosco__ArgProps = new Array<ArgPropType>(
  "inscritosx"
);

export type PlasmicFaleConosco__OverridesType = {
  root?: p.Flex<"div">;
  responsiveMenu?: p.Flex<typeof ResponsiveMenu>;
  form?: p.Flex<typeof FormWrapper>;
  formProvider?: p.Flex<typeof FormProvider>;
  input?: p.Flex<typeof TextInput>;
  input2?: p.Flex<typeof TextInput>;
  input4?: p.Flex<typeof TextInput>;
  textArea?: p.Flex<typeof AntdTextArea>;
  button?: p.Flex<typeof Button>;
};

export interface DefaultFaleConoscoProps {}

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

function PlasmicFaleConosco__RenderFunc(props: {
  variants: PlasmicFaleConosco__VariantsArgs;
  args: PlasmicFaleConosco__ArgsType;
  overrides: PlasmicFaleConosco__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          inscritosx: [
            {
              name: "Samuel Ferreira",
              birthdate: "24/06/1996",
              address: "adasdafds",
              cpf: "43529367826",
              telefone: "13997424001",
              email: "fgs.samuel@gmail.com"
            },
            {
              name: "Samuel Ferreira",
              birthdate: "24/06/1996",
              address: "adasdafds",
              cpf: "43529367826",
              telefone: "13997424001",
              email: "fgs.samuel@gmail.com"
            }
          ]
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
        path: "form.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      },
      {
        path: "input.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "input2.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
      {
        path: "input4.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "" as const
      },
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
      },
      {
        path: "textArea.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsdu4QaJy8Zhmfq()
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

          {true ? (
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__eEbrP)}
            >
              {true ? (
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__kFlPp)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__toIlc
                    )}
                  >
                    {"Fale conosco"}
                  </div>
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__mKdxd
                    )}
                  >
                    {
                      "Ficou com alguma dúvida? \nEnvie uma mensagem e retornaremos assim que possível"
                    }
                  </div>
                  {(() => {
                    try {
                      return $state.inForm;
                    } catch (e) {
                      if (
                        e instanceof TypeError ||
                        e?.plasmicType === "PlasmicUndefinedDataError"
                      ) {
                        return true;
                      }
                      throw e;
                    }
                  })() ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__kormY)}
                    >
                      <FormWrapper
                        data-plasmic-name={"form"}
                        data-plasmic-override={overrides.form}
                        className={classNames("__wab_instance", sty.form)}
                        colon={false}
                        extendedOnValuesChange={p.generateStateOnChangeProp(
                          $state,
                          ["form", "value"]
                        )}
                        formItems={[
                          { label: "Name", name: "name", inputType: "Text" },
                          {
                            label: "Message",
                            name: "message",
                            inputType: "Text Area"
                          }
                        ]}
                        initialValues={(() => {
                          try {
                            return $state.selectedIndex !== undefined
                              ? $state.inscritos[$state.selectedIndex]
                              : $state.inscritos.length > 0
                              ? { address: $state.inscritos[0].address }
                              : {};
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()}
                        labelCol={(() => {
                          const __composite = {
                            span: null,
                            horizontalOnly: true
                          };
                          __composite["span"] = 6;
                          return __composite;
                        })()}
                        layout={
                          hasVariant(globalVariants, "screen", "desktop")
                            ? ("inline" as const)
                            : ("vertical" as const)
                        }
                        mode={undefined}
                        onFinish={async values => {
                          const $steps = {};
                          $steps["updateInscritos2"] = true
                            ? (() => {
                                const actionArgs = {
                                  customFunction: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "customFunction",
                                      interactionUuid: "hsNwT_HoAnp",
                                      componentUuid: "ScHFxlsSTX8",
                                      argName: "customFunction"
                                    },
                                    () => () => {
                                      if ($state.selectedIndex === undefined) {
                                        return $state.inscritos.push(
                                          $state.form.value
                                        );
                                      } else {
                                        return ($state.inscritos[
                                          $state.selectedIndex
                                        ] = $state.form.value);
                                      }
                                    }
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "customFunction",
                                    interactionUuid: "hsNwT_HoAnp",
                                    componentUuid: "ScHFxlsSTX8"
                                  },
                                  () =>
                                    (({ customFunction }) => {
                                      return customFunction();
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["updateInscritos2"] === "object" &&
                            typeof $steps["updateInscritos2"].then ===
                              "function"
                          ) {
                            $steps["updateInscritos2"] =
                              await __wrapUserPromise(
                                {
                                  type: "InteractionLoc",
                                  actionName: "customFunction",
                                  interactionUuid: "hsNwT_HoAnp",
                                  componentUuid: "ScHFxlsSTX8"
                                },
                                $steps["updateInscritos2"]
                              );
                          }
                          $steps["updateInForm"] = true
                            ? (() => {
                                const actionArgs = {
                                  variable: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "updateVariable",
                                      interactionUuid: "IzSF1Mn_FxZ",
                                      componentUuid: "ScHFxlsSTX8",
                                      argName: "variable"
                                    },
                                    () => ({
                                      objRoot: $state,
                                      variablePath: ["inForm"]
                                    })
                                  ),
                                  operation: __wrapUserFunction(
                                    {
                                      type: "InteractionArgLoc",
                                      actionName: "updateVariable",
                                      interactionUuid: "IzSF1Mn_FxZ",
                                      componentUuid: "ScHFxlsSTX8",
                                      argName: "operation"
                                    },
                                    () => 4
                                  )
                                };
                                return __wrapUserFunction(
                                  {
                                    type: "InteractionLoc",
                                    actionName: "updateVariable",
                                    interactionUuid: "IzSF1Mn_FxZ",
                                    componentUuid: "ScHFxlsSTX8"
                                  },
                                  () =>
                                    (({
                                      variable,
                                      value,
                                      startIndex,
                                      deleteCount
                                    }) => {
                                      if (!variable) {
                                        return;
                                      }
                                      const { objRoot, variablePath } =
                                        variable;

                                      const oldValue = p.get(
                                        objRoot,
                                        variablePath
                                      );
                                      p.set(objRoot, variablePath, !oldValue);
                                      return !oldValue;
                                    })?.apply(null, [actionArgs]),
                                  actionArgs
                                );
                              })()
                            : undefined;
                          if (
                            typeof $steps["updateInForm"] === "object" &&
                            typeof $steps["updateInForm"].then === "function"
                          ) {
                            $steps["updateInForm"] = await __wrapUserPromise(
                              {
                                type: "InteractionLoc",
                                actionName: "updateVariable",
                                interactionUuid: "IzSF1Mn_FxZ",
                                componentUuid: "ScHFxlsSTX8"
                              },
                              $steps["updateInForm"]
                            );
                          }
                        }}
                        submitSlot={null}
                        wrapperCol={(() => {
                          const __composite = {
                            span: null,
                            horizontalOnly: true
                          };
                          __composite["span"] = 18;
                          return __composite;
                        })()}
                      >
                        <FormProvider
                          data-plasmic-name={"formProvider"}
                          data-plasmic-override={overrides.formProvider}
                          className={classNames(
                            "__wab_instance",
                            sty.formProvider
                          )}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.freeBox__fIu
                            )}
                          >
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__j5Ntn
                              )}
                            >
                              <FormItemWrapper
                                className={classNames(
                                  "__wab_instance",
                                  sty.formField__kfyDv
                                )}
                                label={
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__vnLq
                                    )}
                                  >
                                    {"Nome"}
                                  </div>
                                }
                                name={"name" as const}
                              >
                                <TextInput
                                  data-plasmic-name={"input"}
                                  data-plasmic-override={overrides.input}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.input
                                  )}
                                  onChange={(...eventArgs) => {
                                    p.generateStateOnChangeProp($state, [
                                      "input",
                                      "value"
                                    ])(
                                      (e => e.target?.value).apply(
                                        null,
                                        eventArgs
                                      )
                                    );
                                  }}
                                  value={
                                    p.generateStateValueProp($state, [
                                      "input",
                                      "value"
                                    ]) ?? ""
                                  }
                                />
                              </FormItemWrapper>
                              <FormItemWrapper
                                className={classNames(
                                  "__wab_instance",
                                  sty.formField___04F9
                                )}
                                label={
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__jQzP
                                    )}
                                  >
                                    {"Telefone"}
                                  </div>
                                }
                                name={"birthdate" as const}
                              >
                                <TextInput
                                  data-plasmic-name={"input2"}
                                  data-plasmic-override={overrides.input2}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.input2
                                  )}
                                  onChange={(...eventArgs) => {
                                    p.generateStateOnChangeProp($state, [
                                      "input2",
                                      "value"
                                    ])(
                                      (e => e.target?.value).apply(
                                        null,
                                        eventArgs
                                      )
                                    );
                                  }}
                                  value={
                                    p.generateStateValueProp($state, [
                                      "input2",
                                      "value"
                                    ]) ?? ""
                                  }
                                />
                              </FormItemWrapper>
                              <FormItemWrapper
                                className={classNames(
                                  "__wab_instance",
                                  sty.formField__jKpZ
                                )}
                                label={
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text__nXyt
                                    )}
                                  >
                                    {"Email"}
                                  </div>
                                }
                                name={"cpf" as const}
                              >
                                <TextInput
                                  data-plasmic-name={"input4"}
                                  data-plasmic-override={overrides.input4}
                                  className={classNames(
                                    "__wab_instance",
                                    sty.input4
                                  )}
                                  onChange={(...eventArgs) => {
                                    p.generateStateOnChangeProp($state, [
                                      "input4",
                                      "value"
                                    ])(
                                      (e => e.target?.value).apply(
                                        null,
                                        eventArgs
                                      )
                                    );
                                  }}
                                  value={
                                    p.generateStateValueProp($state, [
                                      "input4",
                                      "value"
                                    ]) ?? ""
                                  }
                                />
                              </FormItemWrapper>
                              <FormItemWrapper
                                className={classNames(
                                  "__wab_instance",
                                  sty.formField__zjUay
                                )}
                                label={
                                  <div
                                    className={classNames(
                                      projectcss.all,
                                      projectcss.__wab_text,
                                      sty.text___0LD21
                                    )}
                                  >
                                    {"Mensagem"}
                                  </div>
                                }
                                name={"email" as const}
                              >
                                {(() => {
                                  const child$Props = {
                                    bordered: true,
                                    className: classNames(
                                      "__wab_instance",
                                      sty.textArea
                                    ),
                                    onChange:
                                      p.generateStateOnChangePropForCodeComponents(
                                        $state,
                                        "value",
                                        ["textArea", "value"],
                                        AntdTextArea_Helpers
                                      ),
                                    value: p.generateStateValueProp($state, [
                                      "textArea",
                                      "value"
                                    ])
                                  };
                                  p.initializeCodeComponentStates(
                                    $state,
                                    [
                                      {
                                        name: "value",
                                        plasmicStateName: "textArea.value"
                                      }
                                    ],
                                    [],
                                    AntdTextArea_Helpers ?? {},
                                    child$Props
                                  );

                                  return (
                                    <AntdTextArea
                                      data-plasmic-name={"textArea"}
                                      data-plasmic-override={overrides.textArea}
                                      {...child$Props}
                                    />
                                  );
                                })()}
                              </FormItemWrapper>
                              <Button
                                data-plasmic-name={"button"}
                                data-plasmic-override={overrides.button}
                                className={classNames(
                                  "__wab_instance",
                                  sty.button
                                )}
                                submitsForm={true}
                              >
                                {"Enviar"}
                              </Button>
                            </p.Stack>
                          </div>
                        </FormProvider>
                      </FormWrapper>
                    </div>
                  ) : null}
                </p.Stack>
              ) : null}
            </p.Stack>
          ) : null}
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "responsiveMenu",
    "form",
    "formProvider",
    "input",
    "input2",
    "input4",
    "textArea",
    "button"
  ],
  responsiveMenu: ["responsiveMenu"],
  form: [
    "form",
    "formProvider",
    "input",
    "input2",
    "input4",
    "textArea",
    "button"
  ],
  formProvider: [
    "formProvider",
    "input",
    "input2",
    "input4",
    "textArea",
    "button"
  ],
  input: ["input"],
  input2: ["input2"],
  input4: ["input4"],
  textArea: ["textArea"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  responsiveMenu: typeof ResponsiveMenu;
  form: typeof FormWrapper;
  formProvider: typeof FormProvider;
  input: typeof TextInput;
  input2: typeof TextInput;
  input4: typeof TextInput;
  textArea: typeof AntdTextArea;
  button: typeof Button;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFaleConosco__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFaleConosco__VariantsArgs;
    args?: PlasmicFaleConosco__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFaleConosco__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFaleConosco__ArgsType,
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
          internalArgPropNames: PlasmicFaleConosco__ArgProps,
          internalVariantPropNames: PlasmicFaleConosco__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFaleConosco__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFaleConosco";
  } else {
    func.displayName = `PlasmicFaleConosco.${nodeName}`;
  }
  return func;
}

export const PlasmicFaleConosco = Object.assign(
  // Top-level PlasmicFaleConosco renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    responsiveMenu: makeNodeComponent("responsiveMenu"),
    form: makeNodeComponent("form"),
    formProvider: makeNodeComponent("formProvider"),
    input: makeNodeComponent("input"),
    input2: makeNodeComponent("input2"),
    input4: makeNodeComponent("input4"),
    textArea: makeNodeComponent("textArea"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFaleConosco
    internalVariantProps: PlasmicFaleConosco__VariantProps,
    internalArgProps: PlasmicFaleConosco__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicFaleConosco;
/* prettier-ignore-end */
