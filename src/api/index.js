import {
  linkTypeMap,
  createClient as createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} from '@genql/runtime'
import types from './types.esm'
var typeMap = linkTypeMap(types)
export * from './guards.esm'

export var version = '2.10.0'
assertSameVersion(version)

export var createClient = function(options) {
  options = options || {}
  var optionsCopy = {
    url: 'http://localhost:4000/graphql',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

export const enumGenericValueType = {
  STRING: 'STRING',
  NUMBER: 'NUMBER',
  BOOLEAN: 'BOOLEAN',
  LIST: 'LIST',
}

export const enumLogType = {
  NOTE: 'NOTE',
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
}

export const enumMessageImportanceType = {
  URGENT: 'URGENT',
  IMPORTANT: 'IMPORTANT',
  ROUTINE: 'ROUTINE',
}

export const enumPermissionType = {
  SUDO: 'SUDO',
  WRITE_STORAGE_CATEGORY: 'WRITE_STORAGE_CATEGORY',
  WRITE_STORAGE_CATEGORY_FORM_FIELD: 'WRITE_STORAGE_CATEGORY_FORM_FIELD',
  WRITE_STORAGE_ITEM: 'WRITE_STORAGE_ITEM',
  WRITE_STORAGE_ITEM_RECORD: 'WRITE_STORAGE_ITEM_RECORD',
  WRITE_STORAGE_ITEM_CONTROLLER: 'WRITE_STORAGE_ITEM_CONTROLLER',
  WRITE_STORAGE_RELATION: 'WRITE_STORAGE_RELATION',
  WRITE_USER: 'WRITE_USER',
  WRITE_ROLE: 'WRITE_ROLE',
  READ_MESSAGES: 'READ_MESSAGES',
  READ_LOGS: 'READ_LOGS',
}

export var generateQueryOp = function(fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
export var generateMutationOp = function(fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
export var generateSubscriptionOp = function(fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
export var everything = {
  __scalar: true,
}
