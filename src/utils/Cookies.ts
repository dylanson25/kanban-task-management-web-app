import Cookies from 'cookies-ts';

const COOKIE_ID = process.env.VUE_APP_COOKIE_ID || undefined;
const DOMAIN = process.env.VUE_APP_COOKIE_DOMAIN || undefined;
const EXTERNAL = process.env.VUE_APP_EXTERNAL_COOKIE_NAME;

const $cookies = new Cookies();

export const setCookies = (
  name: string,
  value: any,
  expiration?: string | number | Date | undefined,
): void => {
  $cookies.set(`${COOKIE_ID}_${name}`, value, {
    expires: expiration,
    domain: DOMAIN,
    secure: true,
  });
};

export const getCookies = (name: string): any => {
  const externalCookie = EXTERNAL && $cookies.get(`${EXTERNAL}_${name}`);
  if (externalCookie) return externalCookie;
  else return $cookies.get(`${COOKIE_ID}_${name}`);
};

export const removeCookie = (name: string) => {
  $cookies.remove(`${COOKIE_ID}_${name}`, { domain: DOMAIN });
  EXTERNAL && $cookies.remove(`${EXTERNAL}_${name}`, { domain: DOMAIN });
};
