import { PropsWithChildren } from 'react';
import { useExperienceOrchestration } from '@/hooks/useExperienceOrchestration';

const ExperienceProvider = ({ children }: PropsWithChildren) => {
  useExperienceOrchestration({ enableLenis: true, enableTypography: true });
  return <>{children}</>;
};

export default ExperienceProvider;
