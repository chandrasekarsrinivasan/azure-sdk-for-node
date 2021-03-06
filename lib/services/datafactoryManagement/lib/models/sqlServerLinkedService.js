/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * SQL Server linked service.
 *
 * @extends models['LinkedService']
 */
class SqlServerLinkedService extends models['LinkedService'] {
  /**
   * Create a SqlServerLinkedService.
   * @member {object} connectionString The connection string.
   * @member {string} [connectionString.value] Value of secure string.
   * @member {object} [userName] The on-premises Windows authentication user
   * name. Type: string (or Expression with resultType string).
   * @member {object} [password] The on-premises Windows authentication
   * password.
   * @member {string} [password.value] Value of secure string.
   * @member {object} [encryptedCredential] The encrypted credential used for
   * authentication. Credentials are encrypted using the integration runtime
   * credential manager. Type: string (or Expression with resultType string).
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of SqlServerLinkedService
   *
   * @returns {object} metadata of SqlServerLinkedService
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SqlServer',
      type: {
        name: 'Composite',
        className: 'SqlServerLinkedService',
        modelProperties: {
          connectVia: {
            required: false,
            serializedName: 'connectVia',
            type: {
              name: 'Composite',
              className: 'IntegrationRuntimeReference'
            }
          },
          description: {
            required: false,
            serializedName: 'description',
            type: {
              name: 'String'
            }
          },
          type: {
            required: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          connectionString: {
            required: true,
            serializedName: 'typeProperties.connectionString',
            type: {
              name: 'Composite',
              className: 'SecureString'
            }
          },
          userName: {
            required: false,
            serializedName: 'typeProperties.userName',
            type: {
              name: 'Object'
            }
          },
          password: {
            required: false,
            serializedName: 'typeProperties.password',
            type: {
              name: 'Composite',
              className: 'SecureString'
            }
          },
          encryptedCredential: {
            required: false,
            serializedName: 'typeProperties.encryptedCredential',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = SqlServerLinkedService;
