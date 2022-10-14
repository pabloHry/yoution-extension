const axios = require('axios');
require('dotenv').config();

const refreshToken = async () => {
  const responseRefreshToken = await axios.post(
    'https://developers.google.com/oauthplayground/refreshAccessToken',
    {
      token_uri: 'https://oauth2.googleapis.com/token',
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    },
    {
      headers: {
        accept: 'application/json, text/javascript, */*; q=0.01',
        'accept-language': 'en-GB,en;q=0.9',
        'cache-control': 'no-cache',
        'content-type': 'application/json',
        pragma: 'no-cache',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'sec-gpc': '1',
        'x-requested-with': 'XMLHttpRequest',
        cookie:
          '_ga_devsite=GA1.3.3850784030.1665650414; django_language=en; _ga=GA1.3.1317310620.1665650416; CONSENT=PENDING+558; SEARCH_SAMESITE=CgQIzpYB; SID=PgiIsx5beFQmJCafUCNwL3mY-_BpsygOo8jPORmFnG39WCcmd1G06l4Ju4VMUK0bn6v1aw.; __Secure-1PSID=PgiIsx5beFQmJCafUCNwL3mY-_BpsygOo8jPORmFnG39WCcmwcCYiDjE4YXwuJ8WTX-HNA.; __Secure-3PSID=PgiIsx5beFQmJCafUCNwL3mY-_BpsygOo8jPORmFnG39WCcmz1s_LgGRzDLwIchONQWaAA.; HSID=AZTz_zYEu62DYfNGd; SSID=AGNLo45NkS-g5eKqn; APISID=kxCjl1GDeqx9u5OU/A2QgzI0PeXD55b3mQ; SAPISID=lLjGLbUSmRn8-SZ-/ASx8Mj5mb-FC__P-g; __Secure-1PAPISID=lLjGLbUSmRn8-SZ-/ASx8Mj5mb-FC__P-g; __Secure-3PAPISID=lLjGLbUSmRn8-SZ-/ASx8Mj5mb-FC__P-g; AEC=AakniGOI-XjA327CAnHMZJjAUCuBUDEi7UNxY1aHyAyg519WOMVxexp5qQ; __Secure-ENID=7.SE=dSOJM8pY022tDakqjPXU9L0Ukpfcesx6P4ywv8wrapC2uQex28D6AsLoacXpXVBe8nH1viVXcq3EOlOKu7I-yGuoho12s8x4PRWrP8lxH8OIULuQqJh_seHpvQEFv3DZ-g8Bx-vLiFUE5ZbKpy0_GShzNlFCEhOXz7zTo9cF0SB1EJFO0Ln0slNeA09e70HJ4pbCvMpUZVp1hc8W9CIM2soEwWrAStTU1w0K4G1uYyi1LSdQtqAHXukovtuQ6bAAtiSAosc; NID=511=kCwmI-vYEzYm7kDZa_31ynejG9Sd0Bfgst1zVtJc05XmBVmCSfdESlQYh-_XAouUFDV3K-U5H3hEnh9Tf7XSgyVg_HMN4hqndhtbq1EN32zoYUyiQ6jzMpLz1GwgB2YD8s3gcFNVxtnxcvCbbexbxKc0oEFmyilPu3F3zCHfgI7JkP-JxlVEgHkGUZ-fL--Uqi-xwZj0AyPldYiSothuK_0aEp3Yvz8U2FDnFFh6L7pF7xKmInypUN2DiUpsyM-ZpdFhHmYYP7_npdn5ngmC3jGY2WRJjix1rffuir3MaButDXjn_zoQ8KtVU_qdTu5zCCljdyrZPKirdXJGW-Ibzmktq-6IX5PkzLg64yO7fr_GlABvm-eSjF0H4s4; 1P_JAR=2022-10-14-8; _gid=GA1.3.113339517.1665737564; SIDCC=AEf-XMSEbABzQAovMxRaRPW0wz6miSVJY0Jx2Wl1BfAXwVKpstEuvjcfrnGhv33-JNTHRpSwgGg; __Secure-1PSIDCC=AEf-XMRWmtMVGMxnWFwq2Fv0VoaeBGXOnBw4dNnZvDKbuEUUHRHEs8uwuWyXs8pMSWt9ySLd9OiS; __Secure-3PSIDCC=AEf-XMSEp20WZBDR1u1nmLxuHXYKafAWR7cJlAeK66FTdajfleqBBduFpzOQMbIw6fFN5Ezsw_U3',
        Referer:
          'https://developers.google.com/oauthplayground/?code=4/0ARtbsJr3U2qKSN6c4E0RuLsbTfpi1jxccNSwDGfBxtmIvGAahAc8AWv8qNcVrOHIfrxR4w&scope=https://www.googleapis.com/auth/youtube.channel-memberships.creator%20https://www.googleapis.com/auth/youtube.force-ssl%20https://www.googleapis.com/auth/youtubepartner-channel-audit%20https://www.googleapis.com/auth/youtube.upload%20https://www.googleapis.com/auth/youtube.readonly%20https://www.googleapis.com/auth/youtubepartner%20https://www.googleapis.com/auth/youtube',
        'Referrer-Policy': 'strict-origin-when-cross-origin',
      },
    }
  );

  const token = responseRefreshToken.data.access_token;

  return token;
};

module.exports = refreshToken;
