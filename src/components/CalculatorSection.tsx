
import React, { ReactNode } from 'react';
import { Switch } from '@/components/ui/switch';

interface CalculatorSectionProps {
  title: string;
  description: string;
  enabled: boolean;
  onToggle: (enabled: boolean) => void;
  children: ReactNode;
}

const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  title,
  description,
  enabled,
  onToggle,
  children
}) => {
  return (
    <div className={`calculator-section transition-all duration-300 ${
      enabled 
        ? 'ring-2 ring-primary/10 shadow-md' 
        : 'opacity-90 hover:opacity-100'
    }`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="section-title text-lg font-semibold tracking-tight">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>
        <Switch
          checked={enabled}
          onCheckedChange={onToggle}
          className="data-[state=checked]:bg-primary"
        />
      </div>
      
      <div className={`transition-all duration-300 ${
        enabled 
          ? 'opacity-100' 
          : 'opacity-40 pointer-events-none'
      }`}>
        {children}
      </div>
    </div>
  );
};

export default CalculatorSection;
