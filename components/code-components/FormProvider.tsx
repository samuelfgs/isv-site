import { DataProvider, registerComponent } from "@plasmicapp/react-web/lib/host";
import React from "react";
import { Form } from "antd";
import { useFormInstanceMaybe } from "@plasmicpkgs/antd5/skinny/registerForm";

interface FormProviderProps {
  children: React.ReactNode;
}
export function FormProvider(props: FormProviderProps) {
  const form = useFormInstanceMaybe();
  console.log("dale", form, form?.getFieldsValue());
  return <DataProvider data={form} name={"formProvider"}>
    {props.children}
  </DataProvider>
}

export function registerFormProvider() {
  registerComponent(FormProvider, {
    name: "Form Provider",
    providesData: true,
    props: {
      children: "slot"
    },
    importPath: "./components/code-components/FormProvider",
    importName: "FormProvider"
  });
}