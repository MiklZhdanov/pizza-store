import styled from 'styled-components';
import { inputStyles } from 'atomic/atoms/Input';

export const Textarea = styled.textarea.attrs(({ rows = '8' }) => ({ rows }))`
  ${inputStyles}
`;
