import React, { useState } from 'react';
import { RuntimeEvent } from '@/utils/runtimeTelemetry';

const KEY = 'aix8c_runtime_events';

const RuntimeDebug = () => {
  const [tick, setTick] = useState(0);

  const events = (() => {
    try {
      return (JSON.parse(localStorage.getItem(KEY) || '[]') as RuntimeEvent[]) || [];
    } catch {
      return [];
    }
  })();

  return (
    <div className="min-h-screen bg-aix-black text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-3 gold-text-gradient">Runtime Debug</h1>
        <p className="text-white/75 mb-8">Visão local dos últimos erros capturados no cliente (localStorage).</p>

        <div className="flex gap-3 mb-6">
          <button className="px-4 py-2 rounded-lg bg-aix-cyan text-black font-semibold" onClick={() => setTick((v) => v + 1)}>Atualizar</button>
          <button className="px-4 py-2 rounded-lg bg-aix-gold text-black font-semibold" onClick={() => { localStorage.removeItem(KEY); setTick((v) => v + 1); }}>Limpar</button>
        </div>

        <div className="space-y-4">
          {events.length === 0 && <div className="glass-card p-6">Nenhum evento de runtime registrado.</div>}
          {events.map((event, index) => (
            <div key={`${event.timestamp}-${index}`} className="glass-card p-6 border border-aix-purple/30">
              <div className="flex flex-wrap gap-3 text-sm mb-2">
                <span className="px-2 py-1 rounded bg-aix-purple/30">{event.type}</span>
                <span className="text-white/70">{event.timestamp}</span>
                <span className="text-aix-cyan">{event.path}</span>
              </div>
              <p className="font-semibold mb-2">{event.message}</p>
              {event.stack && <pre className="text-xs text-white/70 whitespace-pre-wrap overflow-x-auto">{event.stack}</pre>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RuntimeDebug;
