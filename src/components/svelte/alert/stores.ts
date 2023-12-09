import { writable } from "svelte/store";

const TOAST_STORE_KEY = 'alertStore';


export const alertStores = writable<string[]>([]);

const durations = 30000;

export const toString = (message: any) => {
  return JSON.stringify(message, null, 2);
};

export const alert = (message: any) => {
  let result = toString(message);
  console.dir(result, { colors: true });
  alertStores.update((alerts) => [result, ...alerts]);
  setTimeout(removeAlert, durations);
};

function removeAlert() {
  alertStores.update((alerts) => {
    return [...alerts.slice(0, alerts.length - 1)];
  });
}

export const slugify = (str: string) => {
  // Remove leading and trailing whitespace
  str = str.trim();

  // Make the string lowercase
  str = str.toLowerCase();

  // Remove accents, swap ñ for n, etc
  str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Remove invalid characters
  str = str.replace(/[^a-z0-9 -]/g, "");

  // Replace whitespace with a hyphen
  str = str.replace(/\s+/g, "-");

  // Collapse consecutive hyphens
  str = str.replace(/-+/g, "-");

  return str;
};

const text = "2015-01-02 2022-02-04 2040-12-02";

const regex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;

text.match(regex);
