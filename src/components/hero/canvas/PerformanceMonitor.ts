
export class PerformanceMonitor {
  private frameRate: number = 60;
  private lastTime: number = 0;
  private frameCount: number = 0;
  private isLowPerformance: boolean = false;
  
  constructor() {
    this.detectDeviceCapabilities();
  }
  
  private detectDeviceCapabilities() {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl');
    
    if (!gl) {
      this.isLowPerformance = true;
      return;
    }
    
    // Detect mobile devices
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Check memory
    const memory = (navigator as any).deviceMemory;
    if (memory && memory < 4) {
      this.isLowPerformance = true;
    }
    
    if (isMobile) {
      this.frameRate = 30;
      this.isLowPerformance = true;
    }
  }
  
  shouldReduceParticles(): boolean {
    return this.isLowPerformance;
  }
  
  getOptimalParticleCount(): number {
    if (this.isLowPerformance) {
      return Math.min(20, Math.floor(window.innerWidth / 40));
    }
    return Math.min(60, Math.floor(window.innerWidth / 15));
  }
  
  getOptimalConnectionDensity(): number {
    return this.isLowPerformance ? 0.85 : 0.7;
  }
  
  startMonitoring() {
    this.lastTime = performance.now();
    this.monitorFrame();
  }
  
  private monitorFrame() {
    const currentTime = performance.now();
    this.frameCount++;
    
    if (currentTime - this.lastTime >= 1000) {
      const fps = Math.round((this.frameCount * 1000) / (currentTime - this.lastTime));
      
      if (fps < 30 && !this.isLowPerformance) {
        this.isLowPerformance = true;
        // Trigger performance optimization
        window.dispatchEvent(new CustomEvent('performance-warning', { detail: { fps } }));
      }
      
      this.frameCount = 0;
      this.lastTime = currentTime;
    }
    
    requestAnimationFrame(() => this.monitorFrame());
  }
}
