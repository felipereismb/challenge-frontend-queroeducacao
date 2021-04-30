import React, { useState, useEffect, useRef } from 'react';

// import seeMoreLarge from '../../../assets/icons/seeMore_large.svg';
import IItemDropdown from './IItemDropdown';

// Utils
import { handleClickOutside } from 'utils/handleClickOutside';

import {
  Container,
  Wrapper,
  FilterDescription,
  Select,
  ListOptions,
  Option,
} from './styles';

interface IDropdownProps {
  titleDropdown?: string;
  selectedValue?: string;
  placeholder: string;
  itens: IItemDropdown[];
  onChangeOption: (item: IItemDropdown) => void;
}

export const Dropdown: React.FC<IDropdownProps> = ({
  titleDropdown,
  selectedValue,
  placeholder,
  itens,
  onChangeOption,
}) => {
  const [selectOpen, setSelectOpen] = useState(false);

  useEffect(() => {
    setSelectOpen(false);
  }, [selectedValue]);

  const wrapperRef = useRef(document.createElement('div'));
  useEffect(() => {
    handleClickOutside(wrapperRef, setSelectOpen);
  }, [wrapperRef]);

  return (
    <>
      <Container>
        {titleDropdown && <span>{titleDropdown}</span>}

        <Wrapper ref={wrapperRef}>
          <FilterDescription
            onClick={() => setSelectOpen(!selectOpen)}
            data-testid="Filter-Methods"
          >
            <div>
              {selectedValue ? (
                <span className="selected_value">{selectedValue}</span>
              ) : (
                <span className="placeholder">{placeholder}</span>
              )}
            </div>

            {/* <img src={seeMoreLarge} alt="See more icon" /> */}
          </FilterDescription>

          <Select isOpen={selectOpen}>
            <ListOptions>
              {itens.map(item => (
                <Option key={item.key} onClick={() => onChangeOption(item)}>
                  {item.label}
                </Option>
              ))}
            </ListOptions>
          </Select>
        </Wrapper>
      </Container>
    </>
  );
};
