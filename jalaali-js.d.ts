// jalaali-js ships no TypeScript types — minimal ambient declaration for the API we use.
declare module "jalaali-js" {
  interface JalaaliDate {
    jy: number;
    jm: number;
    jd: number;
  }
  const jalaali: {
    toJalaali(gy: number, gm: number, gd: number): JalaaliDate;
    toGregorian(jy: number, jm: number, jd: number): {
      gy: number;
      gm: number;
      gd: number;
    };
  };
  export = jalaali;
}
