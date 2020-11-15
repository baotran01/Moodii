const spotifyConfig = {
    clientId : process.env.spotifyClientID,
    clientSecret : process.env.spotifyClientSecret,
  };
  
const hueConfig = {
token: process.env.hueToken,
targetGroup: process.env.hueTargetGroup,
targetSceneName : process.env.hueTargetSceneName,
};

module.exports = {spotifyConfig: spotifyConfig, hueConfig: hueConfig}