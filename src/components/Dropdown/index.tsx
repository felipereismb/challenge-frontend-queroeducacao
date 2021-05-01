import React, { useState, useEffect, useRef } from 'react';

// Icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils and Models
import IItemDropdown from './IItemDropdown';
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

            <FontAwesomeIcon
              icon={faChevronDown}
              transform={{ rotate: selectOpen ? 180 : 360 }}
            />
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
