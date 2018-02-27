import styled from 'styled-components';
import { BLACK, GRAY, INDIGO, LIGHT_VIOLET, BERRY } from './colors';

export default styled.button`
    background: ${props => ((props.theme.main === 'light') ? LIGHT_VIOLET : INDIGO )} ;
    color: ${GRAY};
    border-radius: 2px;
    height: 32px;
    width: 140px;
    border: 0px;
`