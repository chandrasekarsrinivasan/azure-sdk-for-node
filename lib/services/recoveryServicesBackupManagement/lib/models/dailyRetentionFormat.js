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
 * @class
 * Initializes a new instance of the DailyRetentionFormat class.
 * @constructor
 * Daily retention format.
 *
 * @member {array} [daysOfTheMonth] List of days of the month.
 *
 */
class DailyRetentionFormat {
  constructor() {
  }

  /**
   * Defines the metadata of DailyRetentionFormat
   *
   * @returns {object} metadata of DailyRetentionFormat
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DailyRetentionFormat',
      type: {
        name: 'Composite',
        className: 'DailyRetentionFormat',
        modelProperties: {
          daysOfTheMonth: {
            required: false,
            serializedName: 'daysOfTheMonth',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DayElementType',
                  type: {
                    name: 'Composite',
                    className: 'Day'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = DailyRetentionFormat;