
export const onChange = (state, setState, key) => {
  const value = state?.[key];
  const onChange = (text) =>
    setState((prevState) => ({ ...prevState, [key]: text }));

  return { value, onChange };
};

export const onInput = (state, setState, key) => {
  const value = state?.[key];
  const onInput = (text) =>
    setState((prevState) => ({ ...prevState, [key]: text }));

  return { value, onInput };
};