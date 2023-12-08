import { AstroIntegration } from "astro";

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
});

const logServerMessage = (message) => {
  const date = dateTimeFormat.format(new Date());
  console.log(`${date} ${message}`);
};

// 👀 Introduce a default export function that returns the Astro
// integration object.
export default function helloIntegration() {
  return {
    name: "astro-hello",
    hooks: {
      "astro:config:setup": (options) => {
        options.injectScript(
          "page",
          `import '/src/scripts/plugins/globalLog.js'`,
        );
        logServerMessage("Injected script");
      },
    },
  };
}
