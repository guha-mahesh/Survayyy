interface Props {
  reason: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, reason: string) => void;
}

const InputBox = ({ reason, placeholder, onChange, value }: Props) => {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className={`input-box input-box-` + reason}
        onChange={(e) => onChange(e, reason)}
        value={value}
      />
    </div>
  );
};

export default InputBox;
