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
 * @class
 * Initializes a new instance of the ExpressRouteCircuitArpTable class.
 * @constructor
 * The arp table associated with the ExpressRouteCircuit
 *
 * @member {number} [age] Age.
 * 
 * @member {string} [interface] Interface.
 * 
 * @member {string} [ipAddress] Gets ipAddress.
 * 
 * @member {string} [macAddress] Gets macAddress.
 * 
 */
function ExpressRouteCircuitArpTable() {
}

/**
 * Defines the metadata of ExpressRouteCircuitArpTable
 *
 * @returns {object} metadata of ExpressRouteCircuitArpTable
 *
 */
ExpressRouteCircuitArpTable.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'ExpressRouteCircuitArpTable',
    type: {
      name: 'Composite',
      className: 'ExpressRouteCircuitArpTable',
      modelProperties: {
        age: {
          required: false,
          serializedName: 'age',
          type: {
            name: 'Number'
          }
        },
        interface: {
          required: false,
          serializedName: 'interface',
          type: {
            name: 'String'
          }
        },
        ipAddress: {
          required: false,
          serializedName: 'ipAddress',
          type: {
            name: 'String'
          }
        },
        macAddress: {
          required: false,
          serializedName: 'macAddress',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = ExpressRouteCircuitArpTable;