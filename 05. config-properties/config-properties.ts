interface AppConfig {
  appName: string;
  version?: number;
  isEnabled?: boolean;
}

let appConfig1: AppConfig = {
  appName: "MyApp",
};

let appConfig2: AppConfig = {
  appName: "AwesomeApp",
  version: 2,
  isEnabled: true,
};

let appConfig3: AppConfig = {
  appName: "CoolApp",
  version: undefined,
  isEnabled: false,
};
