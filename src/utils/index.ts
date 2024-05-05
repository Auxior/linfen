export const creatRandom = (a: number, b: number) => {
    const c: number = b - a + 1;
    return Math.floor(Math.random() * c + a);
}