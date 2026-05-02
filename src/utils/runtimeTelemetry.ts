export interface RuntimeEvent {
  type: 'error' | 'unhandledrejection' | 'boundary';
  message: string;
  stack?: string;
  timestamp: string;
  path: string;
}

const KEY = 'aix8c_runtime_events';

export const saveRuntimeEvent = (event: RuntimeEvent) => {
  try {
    const list = JSON.parse(localStorage.getItem(KEY) || '[]') as RuntimeEvent[];
    list.unshift(event);
    localStorage.setItem(KEY, JSON.stringify(list.slice(0, 30)));
  } catch {
    // ignore telemetry write failures
  }
};

export const registerGlobalRuntimeTelemetry = () => {
  window.addEventListener('error', (e) => {
    saveRuntimeEvent({
      type: 'error',
      message: e.message || 'Unknown runtime error',
      stack: e.error?.stack,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
    });
  });

  window.addEventListener('unhandledrejection', (e) => {
    const reason = e.reason as Error | string;
    saveRuntimeEvent({
      type: 'unhandledrejection',
      message: typeof reason === 'string' ? reason : reason?.message || 'Unhandled rejection',
      stack: typeof reason === 'string' ? undefined : reason?.stack,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
    });
  });
};
