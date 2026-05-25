import * as React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OptimizedIndex from "./pages/OptimizedIndex";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RuntimeDebug from "./pages/RuntimeDebug";
import ExperienceProvider from "./components/ExperienceProvider";
import AmbienceAudioToggle from "./components/AmbienceAudioToggle";
import { saveRuntimeEvent } from "./utils/runtimeTelemetry";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: (failureCount) => failureCount < 2,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
    mutations: { retry: 1 },
  },
});

class AppErrorBoundary extends React.Component<React.PropsWithChildren, { hasError: boolean }> {
  constructor(props: React.PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.error("App runtime error:", error);
    saveRuntimeEvent({
      type: "boundary",
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      path: window.location.pathname,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-aix-black text-white flex items-center justify-center p-6 text-center">
          <div>
            <h1 className="text-4xl font-bold mb-4 gold-text-gradient">AIX8C</h1>
            <p className="text-white/85 mb-6">Houve uma falha de renderização. Recarregue a página para restaurar a experiência.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-aix-gold to-yellow-400 text-black font-semibold"
            >
              Recarregar Agora
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppErrorBoundary>
        <ExperienceProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/optimized" element={<OptimizedIndex />} />
              <Route path="/debug-runtime" element={<RuntimeDebug />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <AmbienceAudioToggle />
            <Toaster />
            <Sonner position="top-right" />
          </BrowserRouter>
        </ExperienceProvider>
      </AppErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
