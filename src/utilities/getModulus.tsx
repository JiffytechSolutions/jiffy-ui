const getModulus = (a: number, b: number) => ((a % b) + b) % b;

export default getModulus