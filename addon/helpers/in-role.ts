import Helper from '@ember/component/helper';

import {inject as service} from '@ember/service';

import {KeycloakAdapterService} from '@djvoa12/ember-keycloak-auth';

/**
 * Helper that checks a keycloak session for realm or resource roles.
 *
 * Usage @enabled = {{in-role 'my-role'}}
 * Usage @enabled = {{in-role 'my-role' 'my-resource'}}
 *
 * @class InRoleHelper
 * @public
 */
export default class InRoleHelper extends Helper {

  @service
  keycloakSession!: KeycloakAdapterService;

  /**
   * Delegates to the wrapped Keycloak instance's method.
   *
   * @method compute
   * @param role {string} The role to check
   * @param resource {string} The resource to check
   * @return {boolean} True if user in role, else false.
   */
  compute([role, resource]: any) {

    return this.keycloakSession.inRole(role, resource);
  }
}
