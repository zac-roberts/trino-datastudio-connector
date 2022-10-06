var cc = DataStudioApp.createCommunityConnector();

// https://developers.google.com/datastudio/connector/reference#getauthtype
/**
 * Returns the Auth Type of this connector.
 * @return {object} The Auth type.
 */
function getAuthType() {
  var cc = DataStudioApp.createCommunityConnector();
  return cc.newAuthTypeResponse()
      .setAuthType(cc.AuthType.USER_PASS)
      .setHelpUrl('TBD')
      .build();
}

/**
 * Resets the auth service.
 */
function resetAuth() {
  var userProperties = PropertiesService.getUserProperties();
  userProperties.deleteProperty('dscc.username');
  userProperties.deleteProperty('dscc.password');
}

/**
 * Returns true if the auth service has access.
 * @return {boolean} True if the auth service has access.
 */
function isAuthValid() {
  var userProperties = PropertiesService.getUserProperties();
  var userName = userProperties.getProperty('dscc.username');
  var password = userProperties.getProperty('dscc.password');
  // This assumes you have a validateCredentials function that
  // can validate if the userName and password are correct.
  // TODO return validateCredentials(userName, password);
  return true //TODO 
}
