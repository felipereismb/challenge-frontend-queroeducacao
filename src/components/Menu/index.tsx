/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useEffect, useRef, useState } from 'react';

// Icons
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Utils
import { handleClickOutside } from 'utils/handleClickOutside';

// Styles
import { Container, Item, MobileMenu, DesktopMenu } from './styles';

export const Menu: React.FC = () => {
  const [selected, setSelected] = useState('bolsas-favoritas');
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const wrapperRef = useRef(document.createElement('div'));
  useEffect(() => {
    handleClickOutside(wrapperRef, setOpenMobileMenu);
  }, [wrapperRef]);

  return (
    <Container>
      <MobileMenu>
        <p>
          {selected === 'minha-conta' && 'Minha Conta'}
          {selected === 'pre-matriculas' && 'Pré-matrículas'}
          {selected === 'bolsas-favoritas' && 'Bolsas favoritas'}
        </p>

        <div
          ref={wrapperRef}
          onClick={() => setOpenMobileMenu(!openMobileMenu)}
        >
          <p>Menu</p>
          <FontAwesomeIcon
            icon={faChevronDown}
            transform={{ rotate: openMobileMenu ? 180 : 360 }}
          />
          {openMobileMenu && (
            <div className="wrapper">
              <p
                data-testid="item-minha-conta"
                onClick={() => setSelected('minha-conta')}
              >
                Minha Conta
              </p>
              <p
                data-testid="item-pre-matriculas"
                onClick={() => setSelected('pre-matriculas')}
              >
                Pré-matrículas
              </p>
              <p
                data-testid="item-bolsas-favoritas"
                onClick={() => setSelected('bolsas-favoritas')}
              >
                Bolsas favoritas
              </p>
            </div>
          )}
        </div>
      </MobileMenu>

      <DesktopMenu>
        <Item
          data-testid="minha-conta"
          selected={selected === 'minha-conta'}
          onClick={() => setSelected('minha-conta')}
        >
          Minha Conta
        </Item>
        <Item
          data-testid="pre-matriculas"
          selected={selected === 'pre-matriculas'}
          onClick={() => setSelected('pre-matriculas')}
        >
          Pré-matrículas
        </Item>
        <Item
          data-testid="bolsas-favoritas"
          selected={selected === 'bolsas-favoritas'}
          onClick={() => setSelected('bolsas-favoritas')}
        >
          Bolsas favoritas
        </Item>
      </DesktopMenu>
    </Container>
  );
};
