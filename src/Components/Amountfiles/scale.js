//import { followersMarks } from "./followersMarks";
const followersMarks = [
  {
    value: 0,
    scaledValue: 10000,
    label: "10k",
  },
  {
    value: 25,
    scaledValue: 50000,
    label: "50k",
  },
  {
    value: 50,
    scaledValue: 100000,
    label: "100k",
  },
  {
    value: 75,
    scaledValue: 250000,
    label: "250k",
  },
  {
    value: 100,
    scaledValue: 500000,
    label: "500k",
  },
  {
    value: 125,
    scaledValue: 1000000,
    label: "1M",
  },
  {
    value: 150,
    scaledValue: 5000000,
    label: "5M",
  },
  {
    value: 175,
    scaledValue: 7500000,
    label: "7.5M",
  },
  {
    value: 200,
    scaledValue: 10000000,
    label: "10M",
  },
];

let value = 22;
const scale = (value) => {
  const previousMarkIndex = Math.floor(value / 25);
  const previousMark = followersMarks[previousMarkIndex];
  const remainder = value % 25;
  if (remainder === 0) {
    return previousMark.scaledValue;
  }
  const nextMark = followersMarks[previousMarkIndex + 1];
  const increment = (nextMark.scaledValue - previousMark.scaledValue) / 25;
  return remainder * increment + previousMark.scaledValue;
};
console.log(scale(value));
