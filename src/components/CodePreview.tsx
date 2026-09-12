"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, text: "const workflow = defineAutomation({", color: "text-primary" },
  { indent: 1, text: "trigger: 'new-lead',", color: "text-blue-300" },
  { indent: 1, text: "actions: [aiQualify, sendWhatsApp],", color: "text-blue-300" },
  { indent: 1, text: "sync: 'crm.deals',", color: "text-blue-300" },
  { indent: 0, text: "});", color: "text-primary" },
  { indent: 0, text: "await workflow.run(); // 200 OK", color: "text-amber-300" },
];

const metrics = [
  { label: "Uptime", value: 62 },
  { label: "Throughput", value: 84 },
  { label: "Automations", value: 48 },
  { label: "Response", value: 92 },
];

export default function CodePreview() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) {
      const reset = setTimeout(() => setVisibleLines(0), 2200);
      return () => clearTimeout(reset);
    }
    const t = setTimeout(() => setVisibleLines((n) => n + 1), 500);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="relative rounded-3xl glass-dark bg-grid-dark p-6 md:p-8 shadow-2xl overflow-hidden">
      <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-primary/30 blur-3xl glow-pulse" />

      <div className="relative grid md:grid-cols-5 gap-6">
        <div className="md:col-span-3 rounded-2xl bg-[#171d15] border border-white/10 overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
            <span className="ml-3 text-[11px] text-white/40 font-mono">automation.ts</span>
          </div>
          <div className="p-4 font-mono text-[13px] leading-relaxed min-h-[190px]">
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <div key={i} style={{ paddingLeft: `${line.indent * 16}px` }} className={line.color}>
                {line.text}
                {i === visibleLines - 1 && (
                  <span className="inline-block w-[7px] h-[14px] bg-primary/80 ml-0.5 align-middle animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 rounded-2xl bg-[#171d15] border border-white/10 p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-white/40 mb-4">
            Live System Metrics
          </p>
          <div className="space-y-4">
            {metrics.map((m, i) => (
              <div key={m.label}>
                <div className="flex justify-between text-[11px] text-white/60 mb-1.5">
                  <span>{m.label}</span>
                  <span className="font-mono">{m.value}%</span>
                </div>
                <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${m.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] text-white/50">All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
}
