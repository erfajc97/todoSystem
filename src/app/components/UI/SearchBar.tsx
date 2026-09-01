import { TextField, Input } from '@heroui/react';
import { SearchIcon } from '@/assets/svg/SearchIcon';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  onSubmit?: () => void;
  maxLength?: number;
  variant?: 'pill' | 'underline';
}

export function SearchBar({
  value,
  onChange,
  placeholder,
  onSubmit,
  maxLength = 80,
  variant = 'pill',
}: SearchBarProps) {
  return (
    <form
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
    >
      <TextField className="w-full" value={value} onChange={onChange} aria-label={placeholder}>
        <div className="relative">
          <span className={`pointer-events-none absolute top-1/2 z-10 -translate-y-1/2 text-text-muted ${variant === 'underline' ? 'left-0' : 'left-3.5'}`}>
            <SearchIcon width={18} height={18} />
          </span>
          <Input
            placeholder={placeholder}
            maxLength={maxLength}
            autoComplete="off"
            aria-label={placeholder}
            className={
              variant === 'underline'
                ? 'box-border w-full max-w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-2.5 pl-8 text-sm text-text outline-none placeholder:text-text-subtle focus:ring-0'
                : 'box-border w-full max-w-full rounded-full border border-border bg-surface px-4 py-3 pl-11 text-text outline-none placeholder:text-text-subtle focus:ring-2 focus:ring-inset focus:ring-brand'
            }
          />
        </div>
      </TextField>
    </form>
  );
}
