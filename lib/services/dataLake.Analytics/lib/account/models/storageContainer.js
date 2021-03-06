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
 * Azure Storage blob container information.
 *
 */
class StorageContainer {
  /**
   * Create a StorageContainer.
   * @member {string} [id] the unique identifier of the blob container.
   * @member {string} [name] the name of the blob container.
   * @member {string} [type] the type of the blob container.
   * @member {date} [lastModifiedTime] the last modified time of the blob
   * container.
   */
  constructor() {
  }

  /**
   * Defines the metadata of StorageContainer
   *
   * @returns {object} metadata of StorageContainer
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StorageContainer',
      type: {
        name: 'Composite',
        className: 'StorageContainer',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            readOnly: true,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = StorageContainer;
