import { IMagicLinkEmailData } from '../mail.interfaces';

export default ({ firstName, lastName, link }: IMagicLinkEmailData) => {
  return `
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <meta name="viewport" content="initial-scale=1.0">
      <meta name="format-detection" content="telephone=no">
      <style>
      .main-container {
        background-color: #d4d9dd;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;
        font-family: monospace;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
      }
      </style>
    </head>
    <body>
      <div class="main-container">
        <h3>Hey ${firstName} ${lastName}! Here is your magic link!</h3>
        <p>For Signing In please follow the link bellow.</p>
        <a href="${link}">Magic Link</a>
      </div>
    </body>
  </html>
  `;
};