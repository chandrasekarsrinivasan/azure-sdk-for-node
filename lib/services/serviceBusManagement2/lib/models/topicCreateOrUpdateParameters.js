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

var models = require('./index');

/**
 * @class
 * Initializes a new instance of the TopicCreateOrUpdateParameters class.
 * @constructor
 * Parameters supplied to the CreateOrUpdate Topic operation.
 *
 * @member {string} [name] Topic name.
 * 
 * @member {string} location Location of the resource.
 * 
 * @member {date} [accessedAt] Last time the message was sent or a request was
 * received for this topic.
 * 
 * @member {string} [autoDeleteOnIdle] TimeSpan idle interval after which the
 * topic is automatically deleted. The minimum duration is 5 minutes.
 * 
 * @member {string} [entityAvailabilityStatus] Entity availability status for
 * the topic. Possible values include: 'Available', 'Limited', 'Renaming',
 * 'Restoring', 'Unknown'
 * 
 * @member {date} [createdAt] Exact time the message was created.
 * 
 * @member {object} [countDetails]
 * 
 * @member {number} [countDetails.activeMessageCount] Number of active
 * messages in the queue, topic, or subscription.
 * 
 * @member {number} [countDetails.deadLetterMessageCount] Number of messages
 * that are dead letters.
 * 
 * @member {number} [countDetails.scheduledMessageCount] Number scheduled
 * messages.
 * 
 * @member {number} [countDetails.transferDeadLetterMessageCount] Number of
 * messages transferred into dead letters.
 * 
 * @member {number} [countDetails.transferMessageCount] Number of messages
 * transferred to another queue, topic, or subscription.
 * 
 * @member {string} [defaultMessageTimeToLive] Default message time to live
 * value. This is the duration after which the message expires, starting from
 * when the message is sent to Service Bus. This is the default value used
 * when TimeToLive is not set on a message itself.
 * 
 * @member {string} [duplicateDetectionHistoryTimeWindow] TimeSpan structure
 * that defines the duration of the duplicate detection history. The default
 * value is 10 minutes..
 * 
 * @member {boolean} [enableBatchedOperations] Value that indicates whether
 * server-side batched operations are enabled..
 * 
 * @member {boolean} [enableExpress] Value that indicates whether Express
 * Entities are enabled. An express topic holds a message in memory
 * temporarily before writing it to persistent storage.
 * 
 * @member {boolean} [enablePartitioning] Value that indicates whether the
 * topic to be partitioned across multiple message brokers is enabled.
 * 
 * @member {boolean} [enableSubscriptionPartitioning] Value that indicates
 * whether partitioning is enabled or disabled..
 * 
 * @member {boolean} [filteringMessagesBeforePublishing] Whether messages
 * should be filtered before publishing.
 * 
 * @member {boolean} [isAnonymousAccessible] Value that indicates whether the
 * message is anonymous accessible.
 * 
 * @member {boolean} [isExpress]
 * 
 * @member {number} [maxSizeInMegabytes] Maximum size of the topic in
 * megabytes, which is the size of memory allocated for the topic.
 * 
 * @member {boolean} [requiresDuplicateDetection] Value indicating if this
 * topic requires duplicate detection.
 * 
 * @member {number} [sizeInBytes] Size of the topic in bytes.
 * 
 * @member {string} [status] Enumerates the possible values for the status of
 * a messaging entity. Possible values include: 'Active', 'Creating',
 * 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring',
 * 'SendDisabled', 'Unknown'
 * 
 * @member {number} [subscriptionCount] Number of subscriptions.
 * 
 * @member {boolean} [supportOrdering] Value that indicates whether the topic
 * supports ordering.
 * 
 * @member {date} [updatedAt] The exact time the message has been updated.
 * 
 */
function TopicCreateOrUpdateParameters() {
}

/**
 * Defines the metadata of TopicCreateOrUpdateParameters
 *
 * @returns {object} metadata of TopicCreateOrUpdateParameters
 *
 */
TopicCreateOrUpdateParameters.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'TopicCreateOrUpdateParameters',
    type: {
      name: 'Composite',
      className: 'TopicCreateOrUpdateParameters',
      modelProperties: {
        name: {
          required: false,
          serializedName: 'name',
          type: {
            name: 'String'
          }
        },
        location: {
          required: true,
          serializedName: 'location',
          type: {
            name: 'String'
          }
        },
        accessedAt: {
          required: false,
          serializedName: 'properties.accessedAt',
          type: {
            name: 'DateTime'
          }
        },
        autoDeleteOnIdle: {
          required: false,
          serializedName: 'properties.autoDeleteOnIdle',
          type: {
            name: 'String'
          }
        },
        entityAvailabilityStatus: {
          required: false,
          serializedName: 'properties.entityAvailabilityStatus ',
          type: {
            name: 'Enum',
            allowedValues: [ 'Available', 'Limited', 'Renaming', 'Restoring', 'Unknown' ]
          }
        },
        createdAt: {
          required: false,
          serializedName: 'properties.createdAt',
          type: {
            name: 'DateTime'
          }
        },
        countDetails: {
          required: false,
          serializedName: 'properties.countDetails',
          type: {
            name: 'Composite',
            className: 'MessageCountDetails'
          }
        },
        defaultMessageTimeToLive: {
          required: false,
          serializedName: 'properties.defaultMessageTimeToLive',
          type: {
            name: 'String'
          }
        },
        duplicateDetectionHistoryTimeWindow: {
          required: false,
          serializedName: 'properties.duplicateDetectionHistoryTimeWindow ',
          type: {
            name: 'String'
          }
        },
        enableBatchedOperations: {
          required: false,
          serializedName: 'properties.enableBatchedOperations',
          type: {
            name: 'Boolean'
          }
        },
        enableExpress: {
          required: false,
          serializedName: 'properties.enableExpress',
          type: {
            name: 'Boolean'
          }
        },
        enablePartitioning: {
          required: false,
          serializedName: 'properties.enablePartitioning',
          type: {
            name: 'Boolean'
          }
        },
        enableSubscriptionPartitioning: {
          required: false,
          serializedName: 'properties.enableSubscriptionPartitioning',
          type: {
            name: 'Boolean'
          }
        },
        filteringMessagesBeforePublishing: {
          required: false,
          serializedName: 'properties.filteringMessagesBeforePublishing',
          type: {
            name: 'Boolean'
          }
        },
        isAnonymousAccessible: {
          required: false,
          serializedName: 'properties.isAnonymousAccessible',
          type: {
            name: 'Boolean'
          }
        },
        isExpress: {
          required: false,
          serializedName: 'properties.isExpress',
          type: {
            name: 'Boolean'
          }
        },
        maxSizeInMegabytes: {
          required: false,
          serializedName: 'properties.maxSizeInMegabytes',
          type: {
            name: 'Number'
          }
        },
        requiresDuplicateDetection: {
          required: false,
          serializedName: 'properties.requiresDuplicateDetection',
          type: {
            name: 'Boolean'
          }
        },
        sizeInBytes: {
          required: false,
          serializedName: 'properties.sizeInBytes',
          type: {
            name: 'Number'
          }
        },
        status: {
          required: false,
          serializedName: 'properties.status',
          type: {
            name: 'Enum',
            allowedValues: [ 'Active', 'Creating', 'Deleting', 'Disabled', 'ReceiveDisabled', 'Renaming', 'Restoring', 'SendDisabled', 'Unknown' ]
          }
        },
        subscriptionCount: {
          required: false,
          serializedName: 'properties.subscriptionCount',
          type: {
            name: 'Number'
          }
        },
        supportOrdering: {
          required: false,
          serializedName: 'properties.supportOrdering',
          type: {
            name: 'Boolean'
          }
        },
        updatedAt: {
          required: false,
          serializedName: 'properties.updatedAt',
          type: {
            name: 'DateTime'
          }
        }
      }
    }
  };
};

module.exports = TopicCreateOrUpdateParameters;