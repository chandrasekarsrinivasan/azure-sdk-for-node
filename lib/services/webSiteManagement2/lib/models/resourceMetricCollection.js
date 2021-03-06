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

/**
 * Collection of metric responses.
 */
class ResourceMetricCollection extends Array {
  /**
   * Create a ResourceMetricCollection.
   * @member {string} [nextLink] Link to next page of resources.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of ResourceMetricCollection
   *
   * @returns {object} metadata of ResourceMetricCollection
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ResourceMetricCollection',
      type: {
        name: 'Composite',
        className: 'ResourceMetricCollection',
        modelProperties: {
          value: {
            required: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceMetricElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceMetric'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = ResourceMetricCollection;
