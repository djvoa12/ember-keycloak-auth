import Component from '@glimmer/component';

import {inject as service} from '@ember/service';
import {KeycloakAdapterService} from "@djvoa12/ember-keycloak-auth";

/**
 * @class KeycloakSessionConfig
 * @public
 */
export default class KeycloakSessionConfig extends Component {

  /**
   * An injected keycloak session.
   *
   * @property keycloakSession
   * @type {KeycloakAdapterService}
   */
  @service
  keycloakSession!: KeycloakAdapterService;

}
