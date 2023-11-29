
const withNextIntl = require('next-intl/plugin')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ADMIN_PASS: 'autbantadmin*7654#',
    MESSAGE: 'progress',
    API_KEY: 'AIzaSyB6L4s1oDyOxeHtVG-pKoHWCRr88cBE8I4',
    AUTH_DOMAIN: 'autobant-1f848.firebaseapp.com',
    PROJECT_ID: 'autobant-1f848',
    STORAGE_BUCKET: 'autobant-1f848.appspot.com',
    MESSAGIN_SENFER_ID: '464041843857',
    APP_ID: '1:464041843857:web:8d4c769562ed67e6367330',
    MEASUREMENT_ID: 'G-WSLYLDBSV8',
    AUTH_KEY:
      'AJsdjn89u230dj9023jdjdDS&DY^&DGYDHBAJDIH&Y*WH*DHI&I@G&DHIUWDGHNX*&YD&HSADUASDG&*HIQUO@AKJSNDHASYGDIUSANDKJSABI',
  }
};

module.exports = withNextIntl(nextConfig)
