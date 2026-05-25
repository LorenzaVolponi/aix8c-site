import { useEffect, useMemo, useRef, useState } from 'react';

const STORAGE_KEY = 'aix8c-ambience-enabled';

const AmbienceAudioToggle = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    setEnabled(saved === '1');
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');

    const audio = audioRef.current;
    if (!audio) return;

    if (enabled) {
      void audio.play().catch(() => setEnabled(false));
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  }, [enabled]);

  const label = useMemo(() => (enabled ? 'Atmosfera ativa' : 'Ativar atmosfera'), [enabled]);

  return (
    <>
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/15/audio_f2c79f32a8.mp3" loop preload="none" />
      <button
        type="button"
        onClick={() => setEnabled((value) => !value)}
        className="fixed bottom-4 right-4 z-[70] rounded-full border border-aix-gold/60 bg-aix-black/85 px-4 py-2 text-xs font-semibold text-aix-gold backdrop-blur-sm transition hover:bg-aix-gold hover:text-aix-black"
      >
        {label}
      </button>
    </>
  );
};

export default AmbienceAudioToggle;
