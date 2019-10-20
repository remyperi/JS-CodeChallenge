// Import stylesheets
import "./style.css";

var apps = [
  {
    name: "Outlook",
    platform: "Android"
  },
  {
    name: "Slack",
    platform: "Android"
  },
  {
    name: "Safari",
    platform: "iOS"
  },
  {
    name: "ATM",
    platform: "Kiosk"
  }
];

var feature = [
  {
    name: "Android",
    features: ["Mail", "Contacts"]
  },
  {
    name: "iOS",
    features: ["Security", "Attractive UI"]
  },
  {
    name: "Kiosk",
    features: ["Card", "Internet"]
  }
];

function getAppNames(apps, platform, featureName) {
  const listOfApps = apps.filter(app => {
    const features = platform.filter(plat =>
      plat.features.includes(featureName)
    );
    return features.some(platForm => platForm.name === app.platform);
  });

  return listOfApps.length ? listOfApps.map(app => app.name) : [];
}

function getAppWithFeature(apps, platform, appNames) {
  const filteredApps = apps.filter(app => appNames.includes(app.name));
  return filteredApps.map(app => {
    const appFeature = platform.find(plat => plat.name === app.platform);
    return !!appFeature ? { ...app, features: appFeature.features } : null;
  });
}

console.log(getAppNames(apps, feature, "Security"));

console.log(getAppWithFeature(apps, feature, ["Safari"]));
