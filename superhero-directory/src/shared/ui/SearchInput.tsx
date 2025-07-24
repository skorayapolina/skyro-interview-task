import { InputHTMLAttributes } from 'react';

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>;

export function SearchInput({
  onChange,
  value,
  placeholder,
  ...rest
}: SearchInputProps) {
  return (
    <input
      type="search"
      placeholder={placeholder}
      className="w-120 max-w-[85vw] rounded-full border-2 border-green-400 bg-green-100 px-4 py-2 outline-green-700 focus-visible:outline-2"
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
}
