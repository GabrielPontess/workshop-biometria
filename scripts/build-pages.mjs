import { createRequire } from "node:module";
import { spawnSync } from "node:child_process";

const require = createRequire(import.meta.url);
const result = spawnSync(process.execPath, [require.resolve("next/dist/bin/next"), "build"], {
  stdio: "inherit",
  env: {
    ...process.env,
    STATIC_EXPORT: "true",
    NEXT_PUBLIC_BASE_PATH: process.env.NEXT_PUBLIC_BASE_PATH ?? "/workshop-biometria",
  },
});

if (result.error) throw result.error;
process.exit(result.status ?? 1);
