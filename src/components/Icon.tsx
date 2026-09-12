const paths: Record<string, string> = {
  code: "M9 18l-6-6 6-6M15 6l6 6-6 6",
  crm: "M3 10h18M3 6h18M5 14h5M5 18h3M17 14h2M17 18h2M4 4h16a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1z",
  automation: "M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83M12 8a4 4 0 100 8 4 4 0 000-8z",
  chat: "M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z",
  plug: "M9 2v6M15 2v6M6 8h12l-1 5a5 5 0 01-10 0L6 8zM12 19v3",
  users: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75",
  cart: "M6 6h15l-1.5 9h-12L6 6zM6 6L5 2H2M9 21a1 1 0 100-2 1 1 0 000 2zM19 21a1 1 0 100-2 1 1 0 000 2z",
  chart: "M3 3v18h18M7 15v3M12 10v8M17 6v12",
  dashboard: "M4 4h7v7H4V4zM13 4h7v4h-7V4zM13 11h7v9h-7v-9zM4 14h7v6H4v-6z",
  workflow: "M4 4h5v5H4V4zM15 4h5v5h-5V4zM15 15h5v5h-5v-5zM4 15h5v5H4v-5zM9 6.5H15M6.5 9v6M17.5 9v6M9 17.5H15",
  link: "M10 13a5 5 0 007.07 0l2.83-2.83a5 5 0 10-7.07-7.07L11.5 4.5M14 11a5 5 0 00-7.07 0L4.1 13.83a5 5 0 107.07 7.07L12.5 19.5",
  wrench: "M14.7 6.3a4 4 0 10-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 005.4-5.4l-2.83 2.83-2.83-.7-.7-2.83L14.7 6.3z",
  build: "M3 21l6-6M14 4l6 6-8.5 8.5-6-6L14 4zM14 4l3 3",
  improve: "M3 17l6-6 4 4 8-8M21 7v6M21 7h-6",
  target: "M12 2a10 10 0 100 20 10 10 0 000-20zM12 6a6 6 0 100 12 6 6 0 000-12zM12 10a2 2 0 100 4 2 2 0 000-4z",
  scale: "M12 3v18M5 8l-3 6a4 4 0 008 0l-3-6H5zM19 8l-3 6a4 4 0 008 0l-3-6h-2zM5 8h14M9 3h6",
  layers: "M12 2l9 5-9 5-9-5 9-5zM3 12l9 5 9-5M3 17l9 5 9-5",
  support: "M12 22a10 10 0 100-20 10 10 0 000 20zM9 9a3 3 0 116 0c0 2-3 2-3 5M12 17h.01",
  mail: "M4 4h16v16H4V4zM4 6l8 7 8-7",
  pin: "M12 21s7-6.5 7-11.5A7 7 0 105 9.5C5 14.5 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 22a10 10 0 100-20 10 10 0 000 20zM12 6v6l4 2",
  arrowRight: "M5 12h14M13 6l6 6-6 6",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  check: "M20 6L9 17l-5-5",
};

export default function Icon({
  name,
  className = "h-6 w-6",
  strokeWidth = 1.8,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const d = paths[name] ?? paths.code;
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
