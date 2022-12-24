
var Error_possibleTypes = ['Error']
export var isError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isError"')
  return Error_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
export var isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
export var isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var GlobalVariable_possibleTypes = ['GlobalVariable']
export var isGlobalVariable = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGlobalVariable"')
  return GlobalVariable_possibleTypes.includes(obj.__typename)
}



var GlobalVariableMutationResponse_possibleTypes = ['GlobalVariable','Error']
export var isGlobalVariableMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isGlobalVariableMutationResponse"')
  return GlobalVariableMutationResponse_possibleTypes.includes(obj.__typename)
}



var Log_possibleTypes = ['Log']
export var isLog = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLog"')
  return Log_possibleTypes.includes(obj.__typename)
}



var LogsListQueryResponse_possibleTypes = ['LogsList','Error']
export var isLogsListQueryResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLogsListQueryResponse"')
  return LogsListQueryResponse_possibleTypes.includes(obj.__typename)
}



var LogQueryResponse_possibleTypes = ['Log','Error']
export var isLogQueryResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLogQueryResponse"')
  return LogQueryResponse_possibleTypes.includes(obj.__typename)
}



var LogsList_possibleTypes = ['LogsList']
export var isLogsList = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLogsList"')
  return LogsList_possibleTypes.includes(obj.__typename)
}



var LogMutationResponse_possibleTypes = ['Log','Error']
export var isLogMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isLogMutationResponse"')
  return LogMutationResponse_possibleTypes.includes(obj.__typename)
}



var Message_possibleTypes = ['Message']
export var isMessage = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMessage"')
  return Message_possibleTypes.includes(obj.__typename)
}



var MessagesListQueryResponse_possibleTypes = ['MessagesList','Error']
export var isMessagesListQueryResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMessagesListQueryResponse"')
  return MessagesListQueryResponse_possibleTypes.includes(obj.__typename)
}



var MessageQueryResponse_possibleTypes = ['Message','Error']
export var isMessageQueryResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMessageQueryResponse"')
  return MessageQueryResponse_possibleTypes.includes(obj.__typename)
}



var MessagesList_possibleTypes = ['MessagesList']
export var isMessagesList = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMessagesList"')
  return MessagesList_possibleTypes.includes(obj.__typename)
}



var MessageMutationResponse_possibleTypes = ['Message','Error']
export var isMessageMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMessageMutationResponse"')
  return MessageMutationResponse_possibleTypes.includes(obj.__typename)
}



var Role_possibleTypes = ['Role']
export var isRole = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRole"')
  return Role_possibleTypes.includes(obj.__typename)
}



var RoleMutationResponse_possibleTypes = ['Role','Error']
export var isRoleMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRoleMutationResponse"')
  return RoleMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageCategory_possibleTypes = ['StorageCategory']
export var isStorageCategory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageCategory"')
  return StorageCategory_possibleTypes.includes(obj.__typename)
}



var StorageCategoryMutationResponse_possibleTypes = ['StorageCategory','Error']
export var isStorageCategoryMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageCategoryMutationResponse"')
  return StorageCategoryMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageCategoryFormField_possibleTypes = ['StorageCategoryFormField']
export var isStorageCategoryFormField = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageCategoryFormField"')
  return StorageCategoryFormField_possibleTypes.includes(obj.__typename)
}



var StorageCategoryFormFieldMutationResponse_possibleTypes = ['StorageCategoryFormField','Error']
export var isStorageCategoryFormFieldMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageCategoryFormFieldMutationResponse"')
  return StorageCategoryFormFieldMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageCategoryFormFieldGenerator_possibleTypes = ['StorageCategoryFormFieldGenerator']
export var isStorageCategoryFormFieldGenerator = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageCategoryFormFieldGenerator"')
  return StorageCategoryFormFieldGenerator_possibleTypes.includes(obj.__typename)
}



var StorageCategoryFormFieldGeneratorMutationResponse_possibleTypes = ['StorageCategoryFormFieldGenerator','Error']
export var isStorageCategoryFormFieldGeneratorMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageCategoryFormFieldGeneratorMutationResponse"')
  return StorageCategoryFormFieldGeneratorMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageItem_possibleTypes = ['StorageItem']
export var isStorageItem = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItem"')
  return StorageItem_possibleTypes.includes(obj.__typename)
}



var StorageItemMutationResponse_possibleTypes = ['StorageItem','Error']
export var isStorageItemMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemMutationResponse"')
  return StorageItemMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageItemControllerBlueprint_possibleTypes = ['StorageItemControllerBlueprint']
export var isStorageItemControllerBlueprint = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemControllerBlueprint"')
  return StorageItemControllerBlueprint_possibleTypes.includes(obj.__typename)
}



var StorageItemControllerBlueprintMutationResponse_possibleTypes = ['StorageItemControllerBlueprint','Error']
export var isStorageItemControllerBlueprintMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemControllerBlueprintMutationResponse"')
  return StorageItemControllerBlueprintMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageItemControllerInstance_possibleTypes = ['StorageItemControllerInstance']
export var isStorageItemControllerInstance = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemControllerInstance"')
  return StorageItemControllerInstance_possibleTypes.includes(obj.__typename)
}



var StorageItemControllerInstanceMutationResponse_possibleTypes = ['StorageItemControllerInstance','Error']
export var isStorageItemControllerInstanceMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemControllerInstanceMutationResponse"')
  return StorageItemControllerInstanceMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageItemRecord_possibleTypes = ['StorageItemRecord']
export var isStorageItemRecord = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemRecord"')
  return StorageItemRecord_possibleTypes.includes(obj.__typename)
}



var StorageItemRecordMutationResponse_possibleTypes = ['StorageItemRecord','Error']
export var isStorageItemRecordMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemRecordMutationResponse"')
  return StorageItemRecordMutationResponse_possibleTypes.includes(obj.__typename)
}



var StorageItemRelation_possibleTypes = ['StorageItemRelation']
export var isStorageItemRelation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemRelation"')
  return StorageItemRelation_possibleTypes.includes(obj.__typename)
}



var StorageItemRelationMutationResponse_possibleTypes = ['StorageItemRelation','Error']
export var isStorageItemRelationMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isStorageItemRelationMutationResponse"')
  return StorageItemRelationMutationResponse_possibleTypes.includes(obj.__typename)
}



var User_possibleTypes = ['User']
export var isUser = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



var UserMutationResponse_possibleTypes = ['User','Error']
export var isUserMutationResponse = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUserMutationResponse"')
  return UserMutationResponse_possibleTypes.includes(obj.__typename)
}
