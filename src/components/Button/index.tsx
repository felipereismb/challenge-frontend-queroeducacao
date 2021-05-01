import { Container } from './styles';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'prymary' | 'secondary';
  size?: 'SM' | 'L' | 'XL';
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  variant,
  size,
  ...props
}) => {
  return (
    <Container size={size} onClick={onClick} variant={variant} {...props}>
      {children}
    </Container>
  );
};
