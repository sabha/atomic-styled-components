import styled from 'styled-components';

export const Layout = styled.div`
    box-sizing: border-box;
`
export const Row = Layout.withComponent('div').extend`
   display: flex;
`
export const Column = Layout.withComponent('div').extend`
    flex: 50%;
    padding: 10px;
    height: 300px; /* Should be removed. Only for demonstration */
`