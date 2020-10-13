import React from 'react';
import { JssProvider, SheetsRegistry } from 'react-jss';
import Document, { Head, Main, NextScript } from 'next/document';

import { getTitle } from '../site/utils';

export default class AppDocument extends Document {

  static getInitialProps ({ renderPage, pathname }) {

    const sheets = new SheetsRegistry();
    const decoratePage = Page => props => (
      <JssProvider registry={sheets}>
        <Page {...props} />
      </JssProvider>
    );

    const renderedPage = renderPage(decoratePage);

    const styles = (
      <style type='text/css' id='pages-styles'>
        {'body { opacity: 0; }'}
        {sheets.toString()}
      </style>
    );

    return { ...renderedPage, styles, pathname };
  }

  render () {
    const title = getTitle(this.props.pathname);

    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta http-equiv='X-UA-Compatible' content='IE=edge,chrome=1' />
          <title>{title}</title>

          <meta name='description' content="Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code" />
          <meta name='keywords' content='romel perez, romel pérez, prhone, software engineer, frontend engineer, programmer' />
          <meta name='robots' content='index, follow' />

          <meta property='og:title' content={title} />
          <meta property='og:site_name' content={title} />
          <meta property='og:description' content="Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code" />
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://romelperez.com' />
          <meta property='og:image' content='https://romelperez.com/static/img/romelperez.jpg' />

          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={title} />
          <meta name='twitter:description' content="Software engineering autodidact. Enthusiast, JavaScript dev, Sci-Fi and nature fan. Making the world a better place through lines of code" />
          <meta name='twitter:site' content='@romelperez07' />
          <meta name='twitter:creator' content='@romelperez07' />
          <meta name='twitter:image' content='https://romelperez.com/static/img/romelperez.jpg' />

          <meta name='theme-color' content='#000000' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content={title} />
          <meta name='apple-mobile-web-app-status-bar-style' content='#000000' />
          <meta name='msapplication-TileColor' content='#000000' />

          <link rel='shortcut icon' href='/static/favicon.ico' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Titillium+Web:400,600' />
          <link rel='stylesheet' href='//fonts.googleapis.com/css?family=Electrolize' />

          <style type='text/css'>
          {`
            html, body {
              background-color: #000000;
            }
            body {
              box-sizing: border-box;
              margin: 0;
              padding: 0;
            }
            *, *:before, *:after {
              box-sizing: inherit;
            }
          `}
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
          <link rel='stylesheet' href='//cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css' />
        </body>
      </html>
    );
  }
}
