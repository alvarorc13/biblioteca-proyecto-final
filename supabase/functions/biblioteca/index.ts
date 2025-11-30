import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_ANON_KEY")!
);

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;
  const parts = pathname.split("/");
  const id = parts[parts.length - 1];
  const isNumericId = /^\d+$/.test(id);

  if (req.method === "OPTIONS") {
    return new Response("ok", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method === "POST") {
    const nuevoLibro = await req.json();

    const { data, error } = await supabase
      .from("libros")
      .insert([nuevoLibro])
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 500,
      });
    }

    return new Response(JSON.stringify(data[0]), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      status: 201,
    });
  }

  if (req.method === "GET") {
    let query = supabase.from("libros").select("*");

    if (isNumericId) {
      query = query.eq("id", Number(id));
    } else {
      const titulo = url.searchParams.get("titulo");
      const autor = url.searchParams.get("autor");
      const genero = url.searchParams.get("genero");
      const anio = url.searchParams.get("anio");
      const favorito = url.searchParams.get("favorito");

      if (titulo) query = query.ilike("titulo", `%${titulo}%`);
      if (autor) query = query.ilike("autor", `%${autor}%`);
      if (genero) query = query.ilike("genero", `%${genero}%`);
      if (anio) query = query.ilike("anio", `%${anio}%`);
      if (favorito) query = query.eq("favorito", favorito === "true");
    }

    const { data, error } = await query;

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        status: 500,
      });
    }

    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  if (req.method === "DELETE") {
    const id = url.searchParams.get("id");
    if (!id) {
      return new Response(JSON.stringify({ error: "Falta el parámetro id" }), {
        status: 400,
      });
    }

    const { error } = await supabase
      .from("libros")
      .delete()
      .eq("id", Number(id));
    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: `Libro ${id} eliminado` }), {
      status: 200,
    });
  }

  if (req.method === "PATCH") {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");
    const cambios = await req.json();

    if (!id) {
      return new Response(JSON.stringify({ error: "Falta el parámetro id" }), {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    const { data, error } = await supabase
      .from("libros")
      .update(cambios)
      .eq("id", Number(id))
      .select();

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    return new Response(JSON.stringify(data[0]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  }

  return new Response("Método no permitido", { status: 405 });
});
