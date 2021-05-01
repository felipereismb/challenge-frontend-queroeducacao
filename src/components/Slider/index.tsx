import { Container } from './styles';

interface Props {
  min: number;
  max: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Slider: React.FC<Props> = ({ min, max, onChange, value }) => {
  return (
    <Container
      data-testid="slider"
      min={min}
      max={max}
      type="range"
      value={value}
      onChange={onChange}
      backgroundValue={((parseInt(value, 10) - min) / (max - min)) * 100}
    />
  );
};
