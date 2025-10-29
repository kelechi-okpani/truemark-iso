"use client"
// import { NextRequest, NextResponse } from "next/server";
//
// export async function OPTIONS() {
//   return new NextResponse(null, {
//     headers: {
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Methods": "GET, OPTIONS",
//       "Access-Control-Allow-Headers": "Content-Type, Authorization",
//     },
//   });
// }
//
// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const fileUrl = searchParams.get("url");
//
//   if (!fileUrl) {
//     return NextResponse.json({ error: "Missing 'url' query param" }, { status: 400 });
//   }
//
//   try {
//     // Fetch the remote file (do not forward its headers)
//     const upstream = await fetch(fileUrl, { cache: "no-store" });
//     if (!upstream.ok) {
//       return NextResponse.json(
//         { error: `Upstream returned ${upstream.status}` },
//         { status: upstream.status }
//       );
//     }
//
//     // Use the upstream content-type if available
//     const contentType = upstream.headers.get("content-type") || "application/octet-stream";
//
//     // Stream the upstream body back to the client
//     const body = upstream.body; // ReadableStream
//     if (!body) {
//       // fallback to arrayBuffer if streaming not available
//       const buffer = await upstream.arrayBuffer();
//       return new NextResponse(buffer, {
//         headers: {
//           "Content-Type": contentType,
//           "Access-Control-Allow-Origin": "*",
//           "Cross-Origin-Resource-Policy": "cross-origin",
//           "Cache-Control": "public, max-age=3600",
//         },
//       });
//     }
//
//     // Return a new response with safe headers (do NOT forward CSP/X-Frame-Options)
//     return new NextResponse(body, {
//       headers: {
//         "Content-Type": contentType,
//         "Access-Control-Allow-Origin": "*",
//         "Access-Control-Allow-Methods": "GET, OPTIONS",
//         "Access-Control-Allow-Headers": "Content-Type, Authorization",
//         // Relax embed policy so browser can render in an <embed>/<iframe>
//         "Cross-Origin-Embedder-Policy": "unsafe-none",
//         "Cross-Origin-Resource-Policy": "cross-origin",
//         "Cache-Control": "public, max-age=3600",
//       },
//     });
//   } catch (err: any) {
//     return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const url = req.nextUrl.searchParams.get("url");
  if (!url) {
    return NextResponse.json({ error: "Missing file URL" }, { status: 400 });
  }

  try {
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error(`Fetch failed: ${res.statusText}`);

    const contentType = res.headers.get("content-type") ?? "application/octet-stream";
    const data = await res.arrayBuffer();

    return new NextResponse(data, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600",
        // Make Chrome treat it as same-origin
        "Cross-Origin-Resource-Policy": "cross-origin",
        "Cross-Origin-Embedder-Policy": "unsafe-none",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (err) {
    console.error("Proxy error:", err);
    return NextResponse.json({ error: "File fetch failed" }, { status: 500 });
  }
}
