import { data } from "../Value/data";
export function numFormatter(num) {
  if (num > data.lowValue && num < data.highValue) {
    return (num / data.divident).toFixed(0) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num >= data.highValue) {
    return (num / data.highValue).toFixed(0) + "M"; // convert to M for number from > 1 million
  } else if (num < data.lowValue) {
    return num; // if value < 1000, nothing to do
  }
}
