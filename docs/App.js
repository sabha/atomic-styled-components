import React from 'react'
import { H1, H2, H3, H4, Button, Row, Column, Layout } from 'atomic-styled-components'
import {ThemeProvider} from 'styled-components';

const lightTheme = {
  main: 'light'
};

const darkTheme = {
  main: 'dark'
};

const App = () =>
  <Layout>
    <Row>
      <Column>
        <ThemeProvider theme={lightTheme}>
          <div>
            <H1>Hello world</H1>
            <H2>Hello world</H2>
            <H3>Hello world</H3>
            <H4>Hello world</H4>
            <Button>Hello world</Button>
          </div>
        </ThemeProvider>
      </Column>
      <Column> 
        <ThemeProvider theme={darkTheme}>
          <div>
            <H1>Hello world</H1>
            <H2>Hello world</H2>
            <H3>Hello world</H3>
            <H4>Hello world</H4>
            <Button>Hello world</Button>
          </div>
        </ThemeProvider>
      </Column>
    </Row>
  </Layout>

export default App;
