'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  { number: 1240, label: 'Tools', suffix: '+' },
  { number: 87400, label: 'Monthly Users', suffix: '' },
  { number: 68, label: 'Workspaces', suffix: '+' },
  { number: 99.9, label: 'Uptime', suffix: '%' },
];

export default function HeroStats() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 border-t border-zinc-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-5xl md:text-6xl font-semibold text-white tracking-tighter mb-2">
              <CountUp
                end={stat.number}
                duration={2}
                suffix={stat.suffix}
                decimals={stat.number % 1 !== 0 ? 1 : 0}
              />
            </div>
            <div className="text-zinc-400 text-lg font-medium">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-zinc-500">
          Trusted at scale by developers from
          <span className="text-lime-400 mx-1"> Vercel</span>,
          <span className="text-lime-400 mx-1"> Linear</span>, and
          <span className="text-lime-400 mx-1"> GitHub</span>
        </p>
      </div>
    </div>
  );
}