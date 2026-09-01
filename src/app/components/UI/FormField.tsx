import { TextField, Label, Input } from '@heroui/react';

interface FormFieldProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  maxLength?: number;
  startContent?: React.ReactNode;
  ariaLabel?: string;
  autoComplete?: string;
}

export function FormField({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  maxLength,
  startContent,
  ariaLabel,
  autoComplete = 'off',
}: FormFieldProps) {
  return (
    <TextField className="w-full" value={value} onChange={onChange} aria-label={ariaLabel ?? label}>
      {label ? <Label className="!text-text mb-1.5 text-sm font-medium">{label}</Label> : null}
      <div className="relative">
        {startContent ? (
          <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-text-muted">
            {startContent}
          </span>
        ) : null}
        <Input
          placeholder={placeholder}
          type={type}
          maxLength={maxLength}
          autoComplete={autoComplete}
          aria-label={ariaLabel ?? label}
          className={`box-border w-full max-w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-text outline-none placeholder:text-text-subtle focus:ring-2 focus:ring-inset focus:ring-brand ${startContent ? 'pl-10' : ''}`}
        />
      </div>
    </TextField>
  );
}
