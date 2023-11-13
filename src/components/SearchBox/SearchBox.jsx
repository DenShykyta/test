import { Wrapper, Input, Icon } from "./SearchBox.styled";

function SearchBox({ value, onChange }) {
  return (
    <Wrapper>
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Input search text"
      />
    </Wrapper>
  );
}

export default SearchBox;
