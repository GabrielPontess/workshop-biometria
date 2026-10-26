import type { SVGProps } from "react";

const paths = {
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 5h2m4 0h2" /></>,
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  video: <><rect x="3" y="6" width="12" height="12" rx="3" /><path d="m15 10 6-3v10l-6-3" /></>,
  hourglass: <><path d="M6 3h12M6 21h12M7 3v4c0 3 10 7 10 10v4M17 3v4c0 3-10 7-10 10v4" /></>,
  fingerprint: <><path d="M8 4a9 9 0 0 1 13 8M3 12a9 9 0 0 1 2-5m1 10c1-2 1-3 1-5a5 5 0 0 1 10 0c0 4-1 7-3 10M3 17c0-2 0-3 0-5m7 8c1-3 1-5 1-8a1 1 0 0 1 2 0c0 2 0 4-1 6m5 2c2-3 3-5 3-8M7 21l1-2" /></>,
  layers: <><path d="m12 3 10 6-10 6L2 9l10-6Zm-9 11 9 5 9-5M3 18l9 5 9-5" /></>,
  shield: <><path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3Z" /><path d="m8 12 3 3 5-6" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m3 7 9 6 9-6" /></>,
  play: <><circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  external: <><path d="M14 3h7v7m0-7L10 14M10 3H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-4" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21v-2a8 8 0 0 1 16 0v2H4Z" /></>,
  check: <path d="m5 12 4 4L19 6" />,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>,
  moon: <path d="M20.5 13A8.5 8.5 0 0 1 11 3.5 8.5 8.5 0 1 0 20.5 13Z" />,
};

export function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: keyof typeof paths }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
      {paths[name]}
    </svg>
  );
}
