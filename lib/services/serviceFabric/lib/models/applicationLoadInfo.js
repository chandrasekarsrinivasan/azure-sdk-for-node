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
 * Load Information about a Service Fabric application.
 *
 */
class ApplicationLoadInfo {
  /**
   * Create a ApplicationLoadInfo.
   * @member {string} [id]
   * @member {number} [minimumNodes] The minimum number of nodes for this
   * application.
   * It is the number of nodes where Service Fabric will reserve Capacity in
   * the cluster which equals to ReservedLoad * MinimumNodes for this
   * Application instance.
   * For applications that do not have application capacity defined this value
   * will be zero.
   * @member {number} [maximumNodes] The maximum number of nodes where this
   * application can be instantiated.
   * It is the number of nodes this application is allowed to span.
   * For applications that do not have application capacity defined this value
   * will be zero.
   * @member {number} [nodeCount] The number of nodes on which this application
   * is instantiated.
   * For applications that do not have application capacity defined this value
   * will be zero.
   * @member {array} [applicationLoadMetricInformation]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApplicationLoadInfo
   *
   * @returns {object} metadata of ApplicationLoadInfo
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApplicationLoadInfo',
      type: {
        name: 'Composite',
        className: 'ApplicationLoadInfo',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'Id',
            type: {
              name: 'String'
            }
          },
          minimumNodes: {
            required: false,
            serializedName: 'MinimumNodes',
            type: {
              name: 'Number'
            }
          },
          maximumNodes: {
            required: false,
            serializedName: 'MaximumNodes',
            type: {
              name: 'Number'
            }
          },
          nodeCount: {
            required: false,
            serializedName: 'NodeCount',
            type: {
              name: 'Number'
            }
          },
          applicationLoadMetricInformation: {
            required: false,
            serializedName: 'ApplicationLoadMetricInformation',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationMetricDescriptionElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationMetricDescription'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = ApplicationLoadInfo;
