import { inspect } from "@xstate/inspect";

if (typeof window !== "undefined") {
   if (process.env.NEXT_PUBLIC_XSTATE_VIZ === "enabled") {
      inspect({ iframe: false, url: "https://stately.ai/viz?inspect" });
   }
}
