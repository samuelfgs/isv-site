import { DataProvider, registerComponent } from "@plasmicapp/react-web/lib/host";
import React from "react";
import { Form } from "antd";
interface FormProviderProps {
  children: React.ReactNode;
}
export function FormProvider(props: FormProviderProps) {
  const form = Form.useFormInstance();
  const [form2] = Form.useForm();
  console.log("dale", form, form2?.getFieldsValue());
  return <DataProvider data={{ form }} name={"formProvider"}>
    {props.children}
  </DataProvider>
}

export function registerFormProvider() {
  registerComponent(FormProvider, {
    name: "Form Provider",
    props: {
      children: "slot"
    },
    importPath: "./components/code-components/FormProvider",
    importName: "FormProvider"
  });
}