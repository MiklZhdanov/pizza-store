/// <reference types="react-scripts" />
declare global {
  interface Window {
    dataLayer: any;
  }
}

window.dataLayer = window.dataLayer || {};
