import { DataProvider, registerComponent } from "@plasmicapp/react-web/lib/host";
import React from "react";
import { Form } from "antd";
import { useFormInstanceMaybe } from "@plasmicpkgs/antd5/skinny/registerForm";
import { toast, ToastContainer } from "react-toastify";

import 'react-toastify/dist/ReactToastify.css';

export function FormProvider(props: React.PropsWithChildren<{}>) {
  const form = useFormInstanceMaybe();
  
  const cep = Form.useWatch(['address','cep'], form);
  const value = cep?.replace?.(/\D/g, "");
  if (cep && value !== cep) {
    form?.setFieldValue(["address", "cep"], value);
  }

  return <DataProvider data={form} name={"formProvider"}>
    {props.children}
  </DataProvider>
}

export function ToastProvider(props: React.PropsWithChildren<{}>) {
  return <DataProvider data={toast} name={"toastFn"}>
    {props.children}
    <ToastContainer />
  </DataProvider>
}

export function registerProviders() {
  registerComponent(FormProvider, {
    name: "Form Provider",
    providesData: true,
    props: {
      children: "slot"
    },
    importPath: "./components/code-components/Providers",
    importName: "FormProvider"
  });
  registerComponent(ToastProvider, {
    name: "Toast Provider",
    providesData: true,
    isAttachment: true,
    props: {
      children: "slot"
    },
    importPath: "./components/code-components/Providers",
    importName: "ToastProvider"
  });
}