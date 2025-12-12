/*
Event handling is practiced on simple interactions such as submitting empty text fields or leaving text when filtering is not applicable
  ^^^ Have yet to integrate

interactive component for search page is searchbar
*/
interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search game"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        width: "60%",
        padding: "10px",
        borderRadius: "6px",
        border: "1px solid #ccc",
        fontSize: "16px",
        marginTop: "15px",
      }}
    />

    
  );
}
