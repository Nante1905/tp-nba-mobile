import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "tp-nba-mobile",
  webDir: "dist",
  server: {
    androidScheme: "https",
    allowNavigation: ["34.163.147.58"],
  },
};

export default config;

