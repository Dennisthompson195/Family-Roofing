import type { SVGProps } from "react";
import type { IconName } from "@/lib/site-content";

type SiteIconProps = {
  name: IconName;
  className?: string;
};

function IconFrame({
  className,
  children,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
      viewBox="0 0 24 24"
      {...props}
    >
      {children}
    </svg>
  );
}

export function SiteIcon({ name, className }: SiteIconProps) {
  switch (name) {
    case "home":
      return (
        <IconFrame className={className}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M5.5 10.8V20h13V10.8" />
          <path d="M10 20v-5h4v5" />
        </IconFrame>
      );
    case "building":
      return (
        <IconFrame className={className}>
          <path d="M5 20V6.5L12 4l7 2.5V20" />
          <path d="M9 9h.01" />
          <path d="M15 9h.01" />
          <path d="M9 12.5h.01" />
          <path d="M15 12.5h.01" />
          <path d="M11 20v-4h2v4" />
        </IconFrame>
      );
    case "shield":
      return (
        <IconFrame className={className}>
          <path d="M12 3 5.5 5.7v5.4c0 4 2.4 7.6 6.5 9.9 4.1-2.3 6.5-5.9 6.5-9.9V5.7L12 3Z" />
          <path d="m9.4 12.1 1.9 1.9 3.7-4.1" />
        </IconFrame>
      );
    case "roof":
      return (
        <IconFrame className={className}>
          <path d="M3 11.5 12 4l9 7.5" />
          <path d="M6.5 12h11l-1 7.5h-9Z" />
          <path d="M10.5 15h3" />
        </IconFrame>
      );
    case "gutter":
      return (
        <IconFrame className={className}>
          <path d="M3 9h18" />
          <path d="M6.5 9v3.5a3.5 3.5 0 0 0 7 0V9" />
          <path d="M18 12.5c0 1.8-1.4 3.2-3.2 3.2H9.5" />
          <path d="M15.5 16.5 13 19l-2.5-2.5" />
        </IconFrame>
      );
    case "wrench":
      return (
        <IconFrame className={className}>
          <path d="m14.8 5.2 4 4" />
          <path d="m13.4 6.6 2.1-2.1a3.2 3.2 0 0 1 4.4 4.4l-2.1 2.1" />
          <path d="m12 8-7.6 7.6a1.8 1.8 0 0 0 0 2.5l1.5 1.5a1.8 1.8 0 0 0 2.5 0L16 12" />
        </IconFrame>
      );
    case "clipboard":
      return (
        <IconFrame className={className}>
          <path d="M9 4.5h6" />
          <path d="M9.5 3h5a1.5 1.5 0 0 1 1.5 1.5V6H8V4.5A1.5 1.5 0 0 1 9.5 3Z" />
          <path d="M7 6H5.5A1.5 1.5 0 0 0 4 7.5v11A1.5 1.5 0 0 0 5.5 20h13a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 18.5 6H17" />
          <path d="m8.5 13.2 2.2 2.1 4.8-4.8" />
        </IconFrame>
      );
    case "messages":
      return (
        <IconFrame className={className}>
          <path d="M5 6.5A2.5 2.5 0 0 1 7.5 4h9A2.5 2.5 0 0 1 19 6.5v6A2.5 2.5 0 0 1 16.5 15H12l-4 3v-3H7.5A2.5 2.5 0 0 1 5 12.5Z" />
          <path d="M8.5 8.5h7" />
          <path d="M8.5 11.5h5" />
        </IconFrame>
      );
    case "phone":
      return (
        <IconFrame className={className}>
          <path d="M7.1 4.5h3L11 8.3 8.8 9.5a15.6 15.6 0 0 0 5.7 5.7L15.7 13l3.8.8v3a1.5 1.5 0 0 1-1.7 1.5A17.8 17.8 0 0 1 5.6 6.2 1.5 1.5 0 0 1 7.1 4.5Z" />
        </IconFrame>
      );
    case "map":
      return (
        <IconFrame className={className}>
          <path d="M12 20s5.5-5.2 5.5-10a5.5 5.5 0 1 0-11 0c0 4.8 5.5 10 5.5 10Z" />
          <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
        </IconFrame>
      );
    case "spark":
      return (
        <IconFrame className={className}>
          <path d="M12 3.5v4" />
          <path d="M12 16.5v4" />
          <path d="M4.5 12h4" />
          <path d="M15.5 12h4" />
          <path d="m6.8 6.8 2.9 2.9" />
          <path d="m14.3 14.3 2.9 2.9" />
          <path d="m17.2 6.8-2.9 2.9" />
          <path d="m9.7 14.3-2.9 2.9" />
          <circle cx="12" cy="12" r="2.4" />
        </IconFrame>
      );
    case "check":
      return (
        <IconFrame className={className}>
          <path d="m5.5 12.5 4 4 9-9" />
        </IconFrame>
      );
  }
}
