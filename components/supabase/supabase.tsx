import { DataProvider, registerComponent } from "@plasmicapp/react-web/lib/host";
import { usePlasmicQueryData } from "@plasmicapp/query";
import { createClient } from "@supabase/supabase-js";
import { FilterOperator } from "./types"
import React from "react";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
)

export interface Filter {
  column: string,
  operator: FilterOperator,
  value: any
}

interface SupabaseProps {
  key?: string;
  table: string;
  filters: Filter[];
  children: React.ReactNode;
  name?: string;
  order?: string;
  ascending: boolean;
}

export function SupabaseFetcher(props: SupabaseProps) {
  const { key, name, table, filters, children, order, ascending } = props;
  const { data, error } = usePlasmicQueryData(() => table ? JSON.stringify([
    table, filters, order, ascending
  ]) : null, async () => {
    let query = supabase.from(table).select();
    if (Array.isArray(filters)) {
      for (const filter of filters) {
        query = query.filter(filter.column, filter.operator, filter.value)
      }
    }
    if (order) {
      query = query.order(order, { ascending })
    }
    const { data, error } = await query;
    if (error !== null) {
      throw new Error(error.message);
    }
    return data;
  });

  if (error) {
    return <div>{error.message}</div>
  }
  return <DataProvider data={data} name={name ?? key ?? "supabase"}>
    {children}
  </DataProvider>
}

export function PreQueries(props: {
  query: "fullProducts",
  children: React.ReactNode;
}) {
  const { query, children } = props;
  let data: any = {};
  if (query === "fullProducts") {
    const { data: queryData, error, isLoading } = usePlasmicQueryData(query, async () => {
      const { data: products, error: err1 } = await supabase.from("product").select();
      const { data: productVariants, error: err2 } = await supabase.from("productvariant").select();
      console.log("dale", products, productVariants, err1, err2);
      if (err1 || err2) {
        throw err1 || err2;
      }
      const finalData: any[] = [];
      for (const product of products) {
        finalData.push({
          id: product.id,
          name: product.name,
          created_at: product.created_at,
          variants: productVariants
            .filter(pv => pv.productid === product.id)
        })
      }
      return finalData;
    });
    data = queryData
    console.log("dale", query, data, error, isLoading);
  }
  return <DataProvider data={data} name={"supabase"}>
    {children}
  </DataProvider>
}



export function SupabaseMutation(props: {
  children: React.ReactNode;
}) {
  const { children } = props;

  const data = React.useMemo(() => {
    return {
      update: async ({table, values, key}:{table: string, values: any, key: any}) => {
        return await supabase
          .from(table)
          .update(values)
          .eq(key.name, key.value);
      },
      create: async ({table, insertValues}: any) => {
        return await supabase
          .from(table)
          .upsert(insertValues)
          .select();
      },
      upsert: async ({table, upsertValues}: any) => {
        return await supabase
          .from(table)
          .upsert(upsertValues)
          .select();
      }
    }
  }, [])
  return <DataProvider data={data} name={"supabaseMutation"}>
    {children}
  </DataProvider>
}

export function registerSupabase() {
  registerComponent(SupabaseFetcher, {
    name: "SupabaseFetcher",
    providesData: true,
    props: {
      table: "string",
      filters: "object",
      children: "slot",
      name: "string",
      key: "string",
      order: "string",
      ascending: "boolean",
    },
    importName: "SupabaseFetcher",
    importPath: "./components/supabase/supabase"
  });

  registerComponent(PreQueries, {
    name: "Supabase PreQueries",
    providesData: true,
    props: {
      query: {
        type: "choice",
        options: [
          "fullProducts"
        ]
      },
      children: "slot"
    },
    importPath: "./components/supabase/supabase",
    importName: "PreQueries"
  });

  registerComponent(SupabaseMutation, {
    name: "Supabase Mutation",
    providesData: true,
    props: {
      children: "slot"
    },
    importPath: "./components/supabase/supabase",
    importName: "SupabaseMutation"
  });
}