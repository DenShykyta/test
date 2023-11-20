import React from 'react';
import { Wrapper, Reset, Select } from './Filter.styled';

function Filter({ categories, onChange, onClick }) {
  return (
    <Wrapper>
      <Reset type="button" onClick={onClick}>
        ReSeT
      </Reset>
      <Select onChange={e => onChange(e.target.value)}>
        <option value="">Choose a category</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default Filter;
