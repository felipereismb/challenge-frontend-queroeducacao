export const handleClickOutside: any = (ref: any, frame: any) => {
  const handleClick = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      frame(false);
    }
  };

  document.addEventListener('mousedown', handleClick);
  return () => {
    document.removeEventListener('mousedown', handleClick);
  };
};
