import {FieldsSelection,Observable} from '@genql/runtime'

export type Scalars = {
    JSON: any,
    JSONObject: any,
    String: string,
    Int: number,
    ID: string,
    Boolean: boolean,
}

export interface Error {
    code: Scalars['String']
    __typename: 'Error'
}

export interface Query {
    _empty?: Scalars['String']
    GetGlobalVariable?: GlobalVariable
    GetGlobalVariableByName?: GlobalVariable
    ListGlobalVariables: GlobalVariable[]
    SearchGlobalVariablesByName: GlobalVariable[]
    GetLog?: LogQueryResponse
    ListLogs?: LogsListQueryResponse
    GetMessage?: MessageQueryResponse
    ListMessages?: MessagesListQueryResponse
    GetMyMessages: Message[]
    GetRole: Role
    ListRoles: Role[]
    GetStorageCategory?: StorageCategory
    ListStorageCategories: StorageCategory[]
    SearchStorageCategoriesByName: StorageCategory[]
    GetStorageCategoryFormField?: StorageCategoryFormField
    ListStorageCategoryFormFields: StorageCategoryFormField[]
    SearchStorageCategoryFormFieldsByName: StorageCategoryFormField[]
    ListStorageItems: StorageItem[]
    GetStorageItemsByCategory: StorageItem[]
    GetStorageItem: StorageItem
    GetStorageItemControllerBlueprint: StorageItemControllerBlueprint
    ListStorageItemControllerBlueprints: StorageItemControllerBlueprint[]
    SearchStorageItemControllerBlueprintsByName: StorageItemControllerBlueprint[]
    GetStorageItemControllerInstance: StorageItemControllerInstance
    ListStorageItemControllerInstances: StorageItemControllerInstance[]
    ListStorageItemRecords: StorageItemRecord[]
    GetStorageItemRecord: StorageItemRecord
    ListStorageItemRelations: StorageItemRelation[]
    GetStorageItemRelation: StorageItemRelation
    GetUser?: User
    ListUsers: User[]
    CurrentUser?: User
    __typename: 'Query'
}

export interface Mutation {
    _empty?: Scalars['String']
    CreateGlobalVariable: GlobalVariableMutationResponse
    UpdateGlobalVariable: GlobalVariableMutationResponse
    DeleteGlobalVariable: GlobalVariableMutationResponse
    CreateLog: LogMutationResponse
    DeleteLog: LogMutationResponse
    CreateMessage: MessageMutationResponse
    DeleteMessage: MessageMutationResponse
    MarkMessageAsSeen: MessageMutationResponse
    CreateRole: RoleMutationResponse
    UpdateRole: RoleMutationResponse
    DeleteRole: RoleMutationResponse
    CreateStorageCategory: StorageCategoryMutationResponse
    UpdateStorageCategory: StorageCategoryMutationResponse
    DeleteStorageCategory: StorageCategoryMutationResponse
    CreateStorageCategoryFormField: StorageCategoryFormFieldMutationResponse
    UpdateStorageCategoryFormField: StorageCategoryFormFieldMutationResponse
    DeleteStorageCategoryFormField: StorageCategoryFormFieldMutationResponse
    CreateStorageItem: StorageItemMutationResponse
    UpdateStorageItem: StorageItemMutationResponse
    DeleteStorageItem: StorageItemMutationResponse
    CreateStorageItemControllerBlueprint: StorageItemControllerBlueprintMutationResponse
    UpdateStorageItemControllerBlueprint: StorageItemControllerBlueprintMutationResponse
    DeleteStorageItemControllerBlueprint: StorageItemControllerBlueprintMutationResponse
    CreateStorageItemControllerInstance: StorageItemControllerInstanceMutationResponse
    UpdateStorageItemControllerInstance: StorageItemControllerInstanceMutationResponse
    DeleteStorageItemControllerInstance: StorageItemControllerInstanceMutationResponse
    CreateStorageItemRecord: StorageItemRecordMutationResponse
    UpdateStorageItemRecord: StorageItemRecordMutationResponse
    DeleteStorageItemRecord: StorageItemRecordMutationResponse
    CreateStorageItemRelation: StorageItemRelationMutationResponse
    UpdateStorageItemRelation: StorageItemRelationMutationResponse
    DeleteStorageItemRelation: StorageItemRelationMutationResponse
    CreateUser: UserMutationResponse
    UpdateUser: UserMutationResponse
    DeleteUser: UserMutationResponse
    Login: UserMutationResponse
    __typename: 'Mutation'
}

export type GenericValueType = 'STRING' | 'NUMBER' | 'BOOLEAN' | 'LIST'

export type LogType = 'NOTE' | 'INFO' | 'SUCCESS' | 'WARNING' | 'ERROR'

export type MessageImportanceType = 'URGENT' | 'IMPORTANT' | 'ROUTINE'

export type PermissionType = 'SUDO' | 'WRITE_STORAGE_CATEGORY' | 'WRITE_STORAGE_CATEGORY_FORM_FIELD' | 'WRITE_STORAGE_ITEM' | 'WRITE_STORAGE_ITEM_RECORD' | 'WRITE_STORAGE_ITEM_CONTROLLER' | 'WRITE_STORAGE_RELATION' | 'WRITE_USER' | 'WRITE_ROLE' | 'READ_MESSAGES' | 'READ_LOGS'

export interface GlobalVariable {
    id: Scalars['ID']
    name: Scalars['String']
    type: GenericValueType
    value: Scalars['String']
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'GlobalVariable'
}

export type GlobalVariableMutationResponse = (GlobalVariable | Error) & { __isUnion?: true }

export interface Log {
    id: Scalars['ID']
    type: Scalars['String']
    message: Scalars['String']
    user: User
    createdAt: Scalars['String']
    __typename: 'Log'
}

export type LogsListQueryResponse = (LogsList | Error) & { __isUnion?: true }

export type LogQueryResponse = (Log | Error) & { __isUnion?: true }

export interface LogsList {
    list: Log[]
    __typename: 'LogsList'
}

export type LogMutationResponse = (Log | Error) & { __isUnion?: true }

export interface Message {
    id: Scalars['ID']
    type: MessageImportanceType
    title: Scalars['String']
    content: Scalars['String']
    seen: Scalars['Boolean']
    sender: User
    recipient: User
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'Message'
}

export type MessagesListQueryResponse = (MessagesList | Error) & { __isUnion?: true }

export type MessageQueryResponse = (Message | Error) & { __isUnion?: true }

export interface MessagesList {
    list: Message[]
    __typename: 'MessagesList'
}

export type MessageMutationResponse = (Message | Error) & { __isUnion?: true }

export interface Role {
    id: Scalars['ID']
    name: Scalars['String']
    permissions: PermissionType[]
    users: (Role | undefined)[]
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'Role'
}

export type RoleMutationResponse = (Role | Error) & { __isUnion?: true }

export interface StorageCategory {
    id: Scalars['ID']
    name: Scalars['String']
    parent?: StorageCategory
    fields: StorageCategoryFormField[]
    inheritedFields: StorageCategoryFormField[]
    children: StorageCategory[]
    items: StorageItem[]
    nestedItems: StorageItem[]
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageCategory'
}

export type StorageCategoryMutationResponse = (StorageCategory | Error) & { __isUnion?: true }

export interface StorageCategoryFormField {
    id: Scalars['ID']
    name: Scalars['String']
    label: Scalars['String']
    type: GenericValueType
    required: Scalars['Boolean']
    default: Scalars['String']
    format: Scalars['String']
    properties?: Scalars['JSONObject']
    categories: StorageCategory[]
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageCategoryFormField'
}

export type StorageCategoryFormFieldMutationResponse = (StorageCategoryFormField | Error) & { __isUnion?: true }

export interface StorageItem {
    id: Scalars['ID']
    properties: Scalars['JSONObject']
    quantity: Scalars['Int']
    category: StorageCategory
    records: StorageItemRecord[]
    relations: StorageItemRelation[]
    lhsRelations: StorageItemRelation[]
    rhsRelations: StorageItemRelation[]
    controllers: StorageItemControllerInstance[]
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageItem'
}

export type StorageItemMutationResponse = (StorageItem | Error) & { __isUnion?: true }

export interface StorageItemControllerBlueprint {
    id: Scalars['ID']
    name: Scalars['String']
    script: Scalars['String']
    instances: StorageItemControllerInstance[]
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageItemControllerBlueprint'
}

export type StorageItemControllerBlueprintMutationResponse = (StorageItemControllerBlueprint | Error) & { __isUnion?: true }

export interface StorageItemControllerInstance {
    id: Scalars['ID']
    blueprint: StorageItemControllerBlueprint
    parameters?: Scalars['JSONObject']
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageItemControllerInstance'
}

export type StorageItemControllerInstanceMutationResponse = (StorageItemControllerInstance | Error) & { __isUnion?: true }

export interface StorageItemRecord {
    id: Scalars['ID']
    item: StorageItem
    quantity: Scalars['Int']
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageItemRecord'
}

export type StorageItemRecordMutationResponse = (StorageItemRecord | Error) & { __isUnion?: true }

export interface StorageItemRelation {
    id: Scalars['ID']
    name: Scalars['String']
    mutual: Scalars['Boolean']
    lhs: StorageItem
    rhs: StorageItem
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'StorageItemRelation'
}

export type StorageItemRelationMutationResponse = (StorageItemRelation | Error) & { __isUnion?: true }

export interface User {
    id: Scalars['ID']
    username: Scalars['String']
    role: Role
    logs: Log[]
    sentMessages: MessagesListQueryResponse
    receivedMessages?: MessagesListQueryResponse
    jwt?: Scalars['String']
    createdAt: Scalars['String']
    updatedAt: Scalars['String']
    __typename: 'User'
}

export type UserMutationResponse = (User | Error) & { __isUnion?: true }

export interface ErrorRequest{
    code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    _empty?: boolean | number
    GetGlobalVariable?: [{id: Scalars['Int']},GlobalVariableRequest]
    GetGlobalVariableByName?: [{name: Scalars['String']},GlobalVariableRequest]
    ListGlobalVariables?: GlobalVariableRequest
    SearchGlobalVariablesByName?: [{keyword: Scalars['String']},GlobalVariableRequest]
    GetLog?: [{id: Scalars['Int']},LogQueryResponseRequest]
    ListLogs?: LogsListQueryResponseRequest
    GetMessage?: [{id: Scalars['Int']},MessageQueryResponseRequest]
    ListMessages?: MessagesListQueryResponseRequest
    GetMyMessages?: MessageRequest
    GetRole?: [{id: Scalars['Int']},RoleRequest]
    ListRoles?: RoleRequest
    GetStorageCategory?: [{id: Scalars['Int']},StorageCategoryRequest]
    ListStorageCategories?: StorageCategoryRequest
    SearchStorageCategoriesByName?: [{keyword: Scalars['String']},StorageCategoryRequest]
    GetStorageCategoryFormField?: [{id: Scalars['Int']},StorageCategoryFormFieldRequest]
    ListStorageCategoryFormFields?: [{skip: Scalars['Int'],take: Scalars['Int'],orderBy: Scalars['String'],orderType: Scalars['String']},StorageCategoryFormFieldRequest]
    SearchStorageCategoryFormFieldsByName?: [{keyword: Scalars['String']},StorageCategoryFormFieldRequest]
    ListStorageItems?: StorageItemRequest
    GetStorageItemsByCategory?: [{category: Scalars['Int']},StorageItemRequest]
    GetStorageItem?: [{id: Scalars['Int']},StorageItemRequest]
    GetStorageItemControllerBlueprint?: [{id: Scalars['Int']},StorageItemControllerBlueprintRequest]
    ListStorageItemControllerBlueprints?: StorageItemControllerBlueprintRequest
    SearchStorageItemControllerBlueprintsByName?: [{id: Scalars['Int']},StorageItemControllerBlueprintRequest]
    GetStorageItemControllerInstance?: [{id: Scalars['Int']},StorageItemControllerInstanceRequest]
    ListStorageItemControllerInstances?: StorageItemControllerInstanceRequest
    ListStorageItemRecords?: StorageItemRecordRequest
    GetStorageItemRecord?: [{id: Scalars['Int']},StorageItemRecordRequest]
    ListStorageItemRelations?: StorageItemRelationRequest
    GetStorageItemRelation?: [{id: Scalars['Int']},StorageItemRelationRequest]
    GetUser?: [{id: Scalars['Int']},UserRequest]
    ListUsers?: UserRequest
    CurrentUser?: UserRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MutationRequest{
    _empty?: boolean | number
    CreateGlobalVariable?: [{input: GlobalVariableMutationInput},GlobalVariableMutationResponseRequest]
    UpdateGlobalVariable?: [{id: Scalars['Int'],input: GlobalVariableMutationInput},GlobalVariableMutationResponseRequest]
    DeleteGlobalVariable?: [{id: Scalars['Int']},GlobalVariableMutationResponseRequest]
    CreateLog?: [{input?: (LogMutationInput | null)},LogMutationResponseRequest] | LogMutationResponseRequest
    DeleteLog?: [{id: Scalars['Int']},LogMutationResponseRequest]
    CreateMessage?: [{input: MessageMutationInput},MessageMutationResponseRequest]
    DeleteMessage?: [{id: Scalars['Int']},MessageMutationResponseRequest]
    MarkMessageAsSeen?: MessageMutationResponseRequest
    CreateRole?: [{input: RoleMutationInput},RoleMutationResponseRequest]
    UpdateRole?: [{id: Scalars['Int'],input: RoleMutationInput},RoleMutationResponseRequest]
    DeleteRole?: [{id: Scalars['Int']},RoleMutationResponseRequest]
    CreateStorageCategory?: [{input: StorageCategoryMutationInput},StorageCategoryMutationResponseRequest]
    UpdateStorageCategory?: [{id: Scalars['Int'],input: StorageCategoryMutationInput},StorageCategoryMutationResponseRequest]
    DeleteStorageCategory?: [{id: Scalars['Int']},StorageCategoryMutationResponseRequest]
    CreateStorageCategoryFormField?: [{input: StorageCategoryFormFieldMutationInput},StorageCategoryFormFieldMutationResponseRequest]
    UpdateStorageCategoryFormField?: [{id: Scalars['Int'],input: StorageCategoryFormFieldMutationInput},StorageCategoryFormFieldMutationResponseRequest]
    DeleteStorageCategoryFormField?: [{id: Scalars['Int']},StorageCategoryFormFieldMutationResponseRequest]
    CreateStorageItem?: [{input: StorageItemMutationInput},StorageItemMutationResponseRequest]
    UpdateStorageItem?: [{id: Scalars['Int'],input: StorageItemMutationInput},StorageItemMutationResponseRequest]
    DeleteStorageItem?: [{id: Scalars['Int']},StorageItemMutationResponseRequest]
    CreateStorageItemControllerBlueprint?: [{input: StorageItemControllerBlueprintMutationInput},StorageItemControllerBlueprintMutationResponseRequest]
    UpdateStorageItemControllerBlueprint?: [{id: Scalars['Int'],input: StorageItemControllerBlueprintMutationInput},StorageItemControllerBlueprintMutationResponseRequest]
    DeleteStorageItemControllerBlueprint?: [{id: Scalars['Int']},StorageItemControllerBlueprintMutationResponseRequest]
    CreateStorageItemControllerInstance?: [{input: StorageItemControllerInstanceMutationInput},StorageItemControllerInstanceMutationResponseRequest]
    UpdateStorageItemControllerInstance?: [{id: Scalars['Int'],input: StorageItemControllerInstanceMutationInput},StorageItemControllerInstanceMutationResponseRequest]
    DeleteStorageItemControllerInstance?: [{id: Scalars['Int']},StorageItemControllerInstanceMutationResponseRequest]
    CreateStorageItemRecord?: [{input: StorageItemRecordMutationInput},StorageItemRecordMutationResponseRequest]
    UpdateStorageItemRecord?: [{id: Scalars['Int'],input: StorageItemRecordMutationInput},StorageItemRecordMutationResponseRequest]
    DeleteStorageItemRecord?: [{id: Scalars['Int']},StorageItemRecordMutationResponseRequest]
    CreateStorageItemRelation?: [{input: StorageItemRelationMutationInput},StorageItemRelationMutationResponseRequest]
    UpdateStorageItemRelation?: [{id: Scalars['Int'],input: StorageItemRelationMutationInput},StorageItemRelationMutationResponseRequest]
    DeleteStorageItemRelation?: [{id: Scalars['Int']},StorageItemRelationMutationResponseRequest]
    CreateUser?: [{input: UserMutationInput},UserMutationResponseRequest]
    UpdateUser?: [{id: Scalars['Int'],input: UserMutationInput},UserMutationResponseRequest]
    DeleteUser?: [{id: Scalars['Int']},UserMutationResponseRequest]
    Login?: [{username: Scalars['String'],password: Scalars['String']},UserMutationResponseRequest]
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GlobalVariableRequest{
    id?: boolean | number
    name?: boolean | number
    type?: boolean | number
    value?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface GlobalVariableMutationResponseRequest{
    on_GlobalVariable?:GlobalVariableRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface GlobalVariableMutationInput {name: Scalars['String'],type: GenericValueType,value: Scalars['String']}

export interface LogRequest{
    id?: boolean | number
    type?: boolean | number
    message?: boolean | number
    user?: UserRequest
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogsListQueryResponseRequest{
    on_LogsList?:LogsListRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface LogQueryResponseRequest{
    on_Log?:LogRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface LogsListRequest{
    list?: LogRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface LogMutationResponseRequest{
    on_Log?:LogRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface LogMutationInput {type: LogType,message: Scalars['String'],userId: Scalars['Int']}

export interface MessageRequest{
    id?: boolean | number
    type?: boolean | number
    title?: boolean | number
    content?: boolean | number
    seen?: boolean | number
    sender?: UserRequest
    recipient?: UserRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MessagesListQueryResponseRequest{
    on_MessagesList?:MessagesListRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface MessageQueryResponseRequest{
    on_Message?:MessageRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface MessagesListRequest{
    list?: MessageRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MessageMutationResponseRequest{
    on_Message?:MessageRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface MessageMutationInput {type: MessageImportanceType,content: Scalars['String'],senderId: Scalars['Int'],recipientId: Scalars['Int']}

export interface RoleRequest{
    id?: boolean | number
    name?: boolean | number
    permissions?: boolean | number
    users?: RoleRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RoleMutationResponseRequest{
    on_Role?:RoleRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface RoleMutationInput {name: Scalars['String'],permissions: PermissionType[]}

export interface StorageCategoryRequest{
    id?: boolean | number
    name?: boolean | number
    parent?: StorageCategoryRequest
    fields?: StorageCategoryFormFieldRequest
    inheritedFields?: StorageCategoryFormFieldRequest
    children?: StorageCategoryRequest
    items?: StorageItemRequest
    nestedItems?: StorageItemRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageCategoryMutationResponseRequest{
    on_StorageCategory?:StorageCategoryRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageCategoryMutationInput {name: Scalars['String'],parentId?: (Scalars['Int'] | null),fields: Scalars['Int'][]}

export interface StorageCategoryFormFieldRequest{
    id?: boolean | number
    name?: boolean | number
    label?: boolean | number
    type?: boolean | number
    required?: boolean | number
    default?: boolean | number
    format?: boolean | number
    properties?: boolean | number
    categories?: StorageCategoryRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageCategoryFormFieldMutationResponseRequest{
    on_StorageCategoryFormField?:StorageCategoryFormFieldRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageCategoryFormFieldMutationInput {name: Scalars['String'],label: Scalars['String'],type: GenericValueType,required: Scalars['Boolean'],default: Scalars['String'],format: Scalars['String'],properties?: (Scalars['JSONObject'] | null)}

export interface StorageItemRequest{
    id?: boolean | number
    properties?: boolean | number
    quantity?: boolean | number
    category?: StorageCategoryRequest
    records?: StorageItemRecordRequest
    relations?: StorageItemRelationRequest
    lhsRelations?: StorageItemRelationRequest
    rhsRelations?: StorageItemRelationRequest
    controllers?: StorageItemControllerInstanceRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageItemMutationResponseRequest{
    on_StorageItem?:StorageItemRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageItemMutationInput {categoryId: Scalars['Int'],properties: Scalars['JSONObject']}

export interface StorageItemControllerBlueprintRequest{
    id?: boolean | number
    name?: boolean | number
    script?: boolean | number
    instances?: StorageItemControllerInstanceRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageItemControllerBlueprintMutationResponseRequest{
    on_StorageItemControllerBlueprint?:StorageItemControllerBlueprintRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageItemControllerBlueprintMutationInput {name: Scalars['String'],script: Scalars['String']}

export interface StorageItemControllerInstanceRequest{
    id?: boolean | number
    blueprint?: StorageItemControllerBlueprintRequest
    parameters?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageItemControllerInstanceMutationResponseRequest{
    on_StorageItemControllerInstance?:StorageItemControllerInstanceRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageItemControllerInstanceMutationInput {blueprintId: Scalars['Int'],parameters?: (Scalars['JSONObject'] | null)}

export interface StorageItemRecordRequest{
    id?: boolean | number
    item?: StorageItemRequest
    quantity?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageItemRecordMutationResponseRequest{
    on_StorageItemRecord?:StorageItemRecordRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageItemRecordMutationInput {item: Scalars['Int'],quantity: Scalars['Int']}

export interface StorageItemRelationRequest{
    id?: boolean | number
    name?: boolean | number
    mutual?: boolean | number
    lhs?: StorageItemRequest
    rhs?: StorageItemRequest
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface StorageItemRelationMutationResponseRequest{
    on_StorageItemRelation?:StorageItemRelationRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface StorageItemRelationMutationInput {name: Scalars['String'],mutual: Scalars['Boolean'],lhsItemId: Scalars['Int'],rhsItemId: Scalars['Int']}

export interface UserRequest{
    id?: boolean | number
    username?: boolean | number
    role?: RoleRequest
    logs?: LogRequest
    sentMessages?: MessagesListQueryResponseRequest
    receivedMessages?: MessagesListQueryResponseRequest
    jwt?: boolean | number
    createdAt?: boolean | number
    updatedAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserMutationResponseRequest{
    on_User?:UserRequest,
    on_Error?:ErrorRequest,
    __typename?: boolean | number
}

export interface UserMutationInput {username: Scalars['String'],password: Scalars['String'],roleId: Scalars['Int']}


const Error_possibleTypes: string[] = ['Error']
export const isError = (obj?: { __typename?: any } | null): obj is Error => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isError"')
  return Error_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const GlobalVariable_possibleTypes: string[] = ['GlobalVariable']
export const isGlobalVariable = (obj?: { __typename?: any } | null): obj is GlobalVariable => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGlobalVariable"')
  return GlobalVariable_possibleTypes.includes(obj.__typename)
}



const GlobalVariableMutationResponse_possibleTypes: string[] = ['GlobalVariable','Error']
export const isGlobalVariableMutationResponse = (obj?: { __typename?: any } | null): obj is GlobalVariableMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isGlobalVariableMutationResponse"')
  return GlobalVariableMutationResponse_possibleTypes.includes(obj.__typename)
}



const Log_possibleTypes: string[] = ['Log']
export const isLog = (obj?: { __typename?: any } | null): obj is Log => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLog"')
  return Log_possibleTypes.includes(obj.__typename)
}



const LogsListQueryResponse_possibleTypes: string[] = ['LogsList','Error']
export const isLogsListQueryResponse = (obj?: { __typename?: any } | null): obj is LogsListQueryResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLogsListQueryResponse"')
  return LogsListQueryResponse_possibleTypes.includes(obj.__typename)
}



const LogQueryResponse_possibleTypes: string[] = ['Log','Error']
export const isLogQueryResponse = (obj?: { __typename?: any } | null): obj is LogQueryResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLogQueryResponse"')
  return LogQueryResponse_possibleTypes.includes(obj.__typename)
}



const LogsList_possibleTypes: string[] = ['LogsList']
export const isLogsList = (obj?: { __typename?: any } | null): obj is LogsList => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLogsList"')
  return LogsList_possibleTypes.includes(obj.__typename)
}



const LogMutationResponse_possibleTypes: string[] = ['Log','Error']
export const isLogMutationResponse = (obj?: { __typename?: any } | null): obj is LogMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isLogMutationResponse"')
  return LogMutationResponse_possibleTypes.includes(obj.__typename)
}



const Message_possibleTypes: string[] = ['Message']
export const isMessage = (obj?: { __typename?: any } | null): obj is Message => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMessage"')
  return Message_possibleTypes.includes(obj.__typename)
}



const MessagesListQueryResponse_possibleTypes: string[] = ['MessagesList','Error']
export const isMessagesListQueryResponse = (obj?: { __typename?: any } | null): obj is MessagesListQueryResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMessagesListQueryResponse"')
  return MessagesListQueryResponse_possibleTypes.includes(obj.__typename)
}



const MessageQueryResponse_possibleTypes: string[] = ['Message','Error']
export const isMessageQueryResponse = (obj?: { __typename?: any } | null): obj is MessageQueryResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMessageQueryResponse"')
  return MessageQueryResponse_possibleTypes.includes(obj.__typename)
}



const MessagesList_possibleTypes: string[] = ['MessagesList']
export const isMessagesList = (obj?: { __typename?: any } | null): obj is MessagesList => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMessagesList"')
  return MessagesList_possibleTypes.includes(obj.__typename)
}



const MessageMutationResponse_possibleTypes: string[] = ['Message','Error']
export const isMessageMutationResponse = (obj?: { __typename?: any } | null): obj is MessageMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMessageMutationResponse"')
  return MessageMutationResponse_possibleTypes.includes(obj.__typename)
}



const Role_possibleTypes: string[] = ['Role']
export const isRole = (obj?: { __typename?: any } | null): obj is Role => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRole"')
  return Role_possibleTypes.includes(obj.__typename)
}



const RoleMutationResponse_possibleTypes: string[] = ['Role','Error']
export const isRoleMutationResponse = (obj?: { __typename?: any } | null): obj is RoleMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRoleMutationResponse"')
  return RoleMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageCategory_possibleTypes: string[] = ['StorageCategory']
export const isStorageCategory = (obj?: { __typename?: any } | null): obj is StorageCategory => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageCategory"')
  return StorageCategory_possibleTypes.includes(obj.__typename)
}



const StorageCategoryMutationResponse_possibleTypes: string[] = ['StorageCategory','Error']
export const isStorageCategoryMutationResponse = (obj?: { __typename?: any } | null): obj is StorageCategoryMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageCategoryMutationResponse"')
  return StorageCategoryMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageCategoryFormField_possibleTypes: string[] = ['StorageCategoryFormField']
export const isStorageCategoryFormField = (obj?: { __typename?: any } | null): obj is StorageCategoryFormField => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageCategoryFormField"')
  return StorageCategoryFormField_possibleTypes.includes(obj.__typename)
}



const StorageCategoryFormFieldMutationResponse_possibleTypes: string[] = ['StorageCategoryFormField','Error']
export const isStorageCategoryFormFieldMutationResponse = (obj?: { __typename?: any } | null): obj is StorageCategoryFormFieldMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageCategoryFormFieldMutationResponse"')
  return StorageCategoryFormFieldMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageItem_possibleTypes: string[] = ['StorageItem']
export const isStorageItem = (obj?: { __typename?: any } | null): obj is StorageItem => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItem"')
  return StorageItem_possibleTypes.includes(obj.__typename)
}



const StorageItemMutationResponse_possibleTypes: string[] = ['StorageItem','Error']
export const isStorageItemMutationResponse = (obj?: { __typename?: any } | null): obj is StorageItemMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemMutationResponse"')
  return StorageItemMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageItemControllerBlueprint_possibleTypes: string[] = ['StorageItemControllerBlueprint']
export const isStorageItemControllerBlueprint = (obj?: { __typename?: any } | null): obj is StorageItemControllerBlueprint => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemControllerBlueprint"')
  return StorageItemControllerBlueprint_possibleTypes.includes(obj.__typename)
}



const StorageItemControllerBlueprintMutationResponse_possibleTypes: string[] = ['StorageItemControllerBlueprint','Error']
export const isStorageItemControllerBlueprintMutationResponse = (obj?: { __typename?: any } | null): obj is StorageItemControllerBlueprintMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemControllerBlueprintMutationResponse"')
  return StorageItemControllerBlueprintMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageItemControllerInstance_possibleTypes: string[] = ['StorageItemControllerInstance']
export const isStorageItemControllerInstance = (obj?: { __typename?: any } | null): obj is StorageItemControllerInstance => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemControllerInstance"')
  return StorageItemControllerInstance_possibleTypes.includes(obj.__typename)
}



const StorageItemControllerInstanceMutationResponse_possibleTypes: string[] = ['StorageItemControllerInstance','Error']
export const isStorageItemControllerInstanceMutationResponse = (obj?: { __typename?: any } | null): obj is StorageItemControllerInstanceMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemControllerInstanceMutationResponse"')
  return StorageItemControllerInstanceMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageItemRecord_possibleTypes: string[] = ['StorageItemRecord']
export const isStorageItemRecord = (obj?: { __typename?: any } | null): obj is StorageItemRecord => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemRecord"')
  return StorageItemRecord_possibleTypes.includes(obj.__typename)
}



const StorageItemRecordMutationResponse_possibleTypes: string[] = ['StorageItemRecord','Error']
export const isStorageItemRecordMutationResponse = (obj?: { __typename?: any } | null): obj is StorageItemRecordMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemRecordMutationResponse"')
  return StorageItemRecordMutationResponse_possibleTypes.includes(obj.__typename)
}



const StorageItemRelation_possibleTypes: string[] = ['StorageItemRelation']
export const isStorageItemRelation = (obj?: { __typename?: any } | null): obj is StorageItemRelation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemRelation"')
  return StorageItemRelation_possibleTypes.includes(obj.__typename)
}



const StorageItemRelationMutationResponse_possibleTypes: string[] = ['StorageItemRelation','Error']
export const isStorageItemRelationMutationResponse = (obj?: { __typename?: any } | null): obj is StorageItemRelationMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isStorageItemRelationMutationResponse"')
  return StorageItemRelationMutationResponse_possibleTypes.includes(obj.__typename)
}



const User_possibleTypes: string[] = ['User']
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
  return User_possibleTypes.includes(obj.__typename)
}



const UserMutationResponse_possibleTypes: string[] = ['User','Error']
export const isUserMutationResponse = (obj?: { __typename?: any } | null): obj is UserMutationResponse => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUserMutationResponse"')
  return UserMutationResponse_possibleTypes.includes(obj.__typename)
}


export interface ErrorPromiseChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface ErrorObservableChain{
    code: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface QueryPromiseChain{
    _empty: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    GetGlobalVariable: ((args: {id: Scalars['Int']}) => GlobalVariablePromiseChain & {get: <R extends GlobalVariableRequest>(request: R, defaultValue?: (FieldsSelection<GlobalVariable, R> | undefined)) => Promise<(FieldsSelection<GlobalVariable, R> | undefined)>}),
    GetGlobalVariableByName: ((args: {name: Scalars['String']}) => GlobalVariablePromiseChain & {get: <R extends GlobalVariableRequest>(request: R, defaultValue?: (FieldsSelection<GlobalVariable, R> | undefined)) => Promise<(FieldsSelection<GlobalVariable, R> | undefined)>}),
    ListGlobalVariables: ({get: <R extends GlobalVariableRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariable, R>[]) => Promise<FieldsSelection<GlobalVariable, R>[]>}),
    SearchGlobalVariablesByName: ((args: {keyword: Scalars['String']}) => {get: <R extends GlobalVariableRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariable, R>[]) => Promise<FieldsSelection<GlobalVariable, R>[]>}),
    GetLog: ((args: {id: Scalars['Int']}) => {get: <R extends LogQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<LogQueryResponse, R> | undefined)) => Promise<(FieldsSelection<LogQueryResponse, R> | undefined)>}),
    ListLogs: ({get: <R extends LogsListQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<LogsListQueryResponse, R> | undefined)) => Promise<(FieldsSelection<LogsListQueryResponse, R> | undefined)>}),
    GetMessage: ((args: {id: Scalars['Int']}) => {get: <R extends MessageQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<MessageQueryResponse, R> | undefined)) => Promise<(FieldsSelection<MessageQueryResponse, R> | undefined)>}),
    ListMessages: ({get: <R extends MessagesListQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<MessagesListQueryResponse, R> | undefined)) => Promise<(FieldsSelection<MessagesListQueryResponse, R> | undefined)>}),
    GetMyMessages: ({get: <R extends MessageRequest>(request: R, defaultValue?: FieldsSelection<Message, R>[]) => Promise<FieldsSelection<Message, R>[]>}),
    GetRole: ((args: {id: Scalars['Int']}) => RolePromiseChain & {get: <R extends RoleRequest>(request: R, defaultValue?: FieldsSelection<Role, R>) => Promise<FieldsSelection<Role, R>>}),
    ListRoles: ({get: <R extends RoleRequest>(request: R, defaultValue?: FieldsSelection<Role, R>[]) => Promise<FieldsSelection<Role, R>[]>}),
    GetStorageCategory: ((args: {id: Scalars['Int']}) => StorageCategoryPromiseChain & {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: (FieldsSelection<StorageCategory, R> | undefined)) => Promise<(FieldsSelection<StorageCategory, R> | undefined)>}),
    ListStorageCategories: ({get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Promise<FieldsSelection<StorageCategory, R>[]>}),
    SearchStorageCategoriesByName: ((args: {keyword: Scalars['String']}) => {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Promise<FieldsSelection<StorageCategory, R>[]>}),
    GetStorageCategoryFormField: ((args: {id: Scalars['Int']}) => StorageCategoryFormFieldPromiseChain & {get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: (FieldsSelection<StorageCategoryFormField, R> | undefined)) => Promise<(FieldsSelection<StorageCategoryFormField, R> | undefined)>}),
    ListStorageCategoryFormFields: ((args: {skip: Scalars['Int'],take: Scalars['Int'],orderBy: Scalars['String'],orderType: Scalars['String']}) => {get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Promise<FieldsSelection<StorageCategoryFormField, R>[]>}),
    SearchStorageCategoryFormFieldsByName: ((args: {keyword: Scalars['String']}) => {get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Promise<FieldsSelection<StorageCategoryFormField, R>[]>}),
    ListStorageItems: ({get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Promise<FieldsSelection<StorageItem, R>[]>}),
    GetStorageItemsByCategory: ((args: {category: Scalars['Int']}) => {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Promise<FieldsSelection<StorageItem, R>[]>}),
    GetStorageItem: ((args: {id: Scalars['Int']}) => StorageItemPromiseChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Promise<FieldsSelection<StorageItem, R>>}),
    GetStorageItemControllerBlueprint: ((args: {id: Scalars['Int']}) => StorageItemControllerBlueprintPromiseChain & {get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>) => Promise<FieldsSelection<StorageItemControllerBlueprint, R>>}),
    ListStorageItemControllerBlueprints: ({get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>[]) => Promise<FieldsSelection<StorageItemControllerBlueprint, R>[]>}),
    SearchStorageItemControllerBlueprintsByName: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>[]) => Promise<FieldsSelection<StorageItemControllerBlueprint, R>[]>}),
    GetStorageItemControllerInstance: ((args: {id: Scalars['Int']}) => StorageItemControllerInstancePromiseChain & {get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>) => Promise<FieldsSelection<StorageItemControllerInstance, R>>}),
    ListStorageItemControllerInstances: ({get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>[]) => Promise<FieldsSelection<StorageItemControllerInstance, R>[]>}),
    ListStorageItemRecords: ({get: <R extends StorageItemRecordRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecord, R>[]) => Promise<FieldsSelection<StorageItemRecord, R>[]>}),
    GetStorageItemRecord: ((args: {id: Scalars['Int']}) => StorageItemRecordPromiseChain & {get: <R extends StorageItemRecordRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecord, R>) => Promise<FieldsSelection<StorageItemRecord, R>>}),
    ListStorageItemRelations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Promise<FieldsSelection<StorageItemRelation, R>[]>}),
    GetStorageItemRelation: ((args: {id: Scalars['Int']}) => StorageItemRelationPromiseChain & {get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>) => Promise<FieldsSelection<StorageItemRelation, R>>}),
    GetUser: ((args: {id: Scalars['Int']}) => UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>}),
    ListUsers: ({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Promise<FieldsSelection<User, R>[]>}),
    CurrentUser: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Promise<(FieldsSelection<User, R> | undefined)>})
}

export interface QueryObservableChain{
    _empty: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    GetGlobalVariable: ((args: {id: Scalars['Int']}) => GlobalVariableObservableChain & {get: <R extends GlobalVariableRequest>(request: R, defaultValue?: (FieldsSelection<GlobalVariable, R> | undefined)) => Observable<(FieldsSelection<GlobalVariable, R> | undefined)>}),
    GetGlobalVariableByName: ((args: {name: Scalars['String']}) => GlobalVariableObservableChain & {get: <R extends GlobalVariableRequest>(request: R, defaultValue?: (FieldsSelection<GlobalVariable, R> | undefined)) => Observable<(FieldsSelection<GlobalVariable, R> | undefined)>}),
    ListGlobalVariables: ({get: <R extends GlobalVariableRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariable, R>[]) => Observable<FieldsSelection<GlobalVariable, R>[]>}),
    SearchGlobalVariablesByName: ((args: {keyword: Scalars['String']}) => {get: <R extends GlobalVariableRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariable, R>[]) => Observable<FieldsSelection<GlobalVariable, R>[]>}),
    GetLog: ((args: {id: Scalars['Int']}) => {get: <R extends LogQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<LogQueryResponse, R> | undefined)) => Observable<(FieldsSelection<LogQueryResponse, R> | undefined)>}),
    ListLogs: ({get: <R extends LogsListQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<LogsListQueryResponse, R> | undefined)) => Observable<(FieldsSelection<LogsListQueryResponse, R> | undefined)>}),
    GetMessage: ((args: {id: Scalars['Int']}) => {get: <R extends MessageQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<MessageQueryResponse, R> | undefined)) => Observable<(FieldsSelection<MessageQueryResponse, R> | undefined)>}),
    ListMessages: ({get: <R extends MessagesListQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<MessagesListQueryResponse, R> | undefined)) => Observable<(FieldsSelection<MessagesListQueryResponse, R> | undefined)>}),
    GetMyMessages: ({get: <R extends MessageRequest>(request: R, defaultValue?: FieldsSelection<Message, R>[]) => Observable<FieldsSelection<Message, R>[]>}),
    GetRole: ((args: {id: Scalars['Int']}) => RoleObservableChain & {get: <R extends RoleRequest>(request: R, defaultValue?: FieldsSelection<Role, R>) => Observable<FieldsSelection<Role, R>>}),
    ListRoles: ({get: <R extends RoleRequest>(request: R, defaultValue?: FieldsSelection<Role, R>[]) => Observable<FieldsSelection<Role, R>[]>}),
    GetStorageCategory: ((args: {id: Scalars['Int']}) => StorageCategoryObservableChain & {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: (FieldsSelection<StorageCategory, R> | undefined)) => Observable<(FieldsSelection<StorageCategory, R> | undefined)>}),
    ListStorageCategories: ({get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Observable<FieldsSelection<StorageCategory, R>[]>}),
    SearchStorageCategoriesByName: ((args: {keyword: Scalars['String']}) => {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Observable<FieldsSelection<StorageCategory, R>[]>}),
    GetStorageCategoryFormField: ((args: {id: Scalars['Int']}) => StorageCategoryFormFieldObservableChain & {get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: (FieldsSelection<StorageCategoryFormField, R> | undefined)) => Observable<(FieldsSelection<StorageCategoryFormField, R> | undefined)>}),
    ListStorageCategoryFormFields: ((args: {skip: Scalars['Int'],take: Scalars['Int'],orderBy: Scalars['String'],orderType: Scalars['String']}) => {get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Observable<FieldsSelection<StorageCategoryFormField, R>[]>}),
    SearchStorageCategoryFormFieldsByName: ((args: {keyword: Scalars['String']}) => {get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Observable<FieldsSelection<StorageCategoryFormField, R>[]>}),
    ListStorageItems: ({get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Observable<FieldsSelection<StorageItem, R>[]>}),
    GetStorageItemsByCategory: ((args: {category: Scalars['Int']}) => {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Observable<FieldsSelection<StorageItem, R>[]>}),
    GetStorageItem: ((args: {id: Scalars['Int']}) => StorageItemObservableChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Observable<FieldsSelection<StorageItem, R>>}),
    GetStorageItemControllerBlueprint: ((args: {id: Scalars['Int']}) => StorageItemControllerBlueprintObservableChain & {get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>) => Observable<FieldsSelection<StorageItemControllerBlueprint, R>>}),
    ListStorageItemControllerBlueprints: ({get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>[]) => Observable<FieldsSelection<StorageItemControllerBlueprint, R>[]>}),
    SearchStorageItemControllerBlueprintsByName: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>[]) => Observable<FieldsSelection<StorageItemControllerBlueprint, R>[]>}),
    GetStorageItemControllerInstance: ((args: {id: Scalars['Int']}) => StorageItemControllerInstanceObservableChain & {get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>) => Observable<FieldsSelection<StorageItemControllerInstance, R>>}),
    ListStorageItemControllerInstances: ({get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>[]) => Observable<FieldsSelection<StorageItemControllerInstance, R>[]>}),
    ListStorageItemRecords: ({get: <R extends StorageItemRecordRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecord, R>[]) => Observable<FieldsSelection<StorageItemRecord, R>[]>}),
    GetStorageItemRecord: ((args: {id: Scalars['Int']}) => StorageItemRecordObservableChain & {get: <R extends StorageItemRecordRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecord, R>) => Observable<FieldsSelection<StorageItemRecord, R>>}),
    ListStorageItemRelations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Observable<FieldsSelection<StorageItemRelation, R>[]>}),
    GetStorageItemRelation: ((args: {id: Scalars['Int']}) => StorageItemRelationObservableChain & {get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>) => Observable<FieldsSelection<StorageItemRelation, R>>}),
    GetUser: ((args: {id: Scalars['Int']}) => UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>}),
    ListUsers: ({get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>[]) => Observable<FieldsSelection<User, R>[]>}),
    CurrentUser: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: (FieldsSelection<User, R> | undefined)) => Observable<(FieldsSelection<User, R> | undefined)>})
}

export interface MutationPromiseChain{
    _empty: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    CreateGlobalVariable: ((args: {input: GlobalVariableMutationInput}) => {get: <R extends GlobalVariableMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariableMutationResponse, R>) => Promise<FieldsSelection<GlobalVariableMutationResponse, R>>}),
    UpdateGlobalVariable: ((args: {id: Scalars['Int'],input: GlobalVariableMutationInput}) => {get: <R extends GlobalVariableMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariableMutationResponse, R>) => Promise<FieldsSelection<GlobalVariableMutationResponse, R>>}),
    DeleteGlobalVariable: ((args: {id: Scalars['Int']}) => {get: <R extends GlobalVariableMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariableMutationResponse, R>) => Promise<FieldsSelection<GlobalVariableMutationResponse, R>>}),
    CreateLog: ((args?: {input?: (LogMutationInput | null)}) => {get: <R extends LogMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<LogMutationResponse, R>) => Promise<FieldsSelection<LogMutationResponse, R>>})&({get: <R extends LogMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<LogMutationResponse, R>) => Promise<FieldsSelection<LogMutationResponse, R>>}),
    DeleteLog: ((args: {id: Scalars['Int']}) => {get: <R extends LogMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<LogMutationResponse, R>) => Promise<FieldsSelection<LogMutationResponse, R>>}),
    CreateMessage: ((args: {input: MessageMutationInput}) => {get: <R extends MessageMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<MessageMutationResponse, R>) => Promise<FieldsSelection<MessageMutationResponse, R>>}),
    DeleteMessage: ((args: {id: Scalars['Int']}) => {get: <R extends MessageMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<MessageMutationResponse, R>) => Promise<FieldsSelection<MessageMutationResponse, R>>}),
    MarkMessageAsSeen: ({get: <R extends MessageMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<MessageMutationResponse, R>) => Promise<FieldsSelection<MessageMutationResponse, R>>}),
    CreateRole: ((args: {input: RoleMutationInput}) => {get: <R extends RoleMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<RoleMutationResponse, R>) => Promise<FieldsSelection<RoleMutationResponse, R>>}),
    UpdateRole: ((args: {id: Scalars['Int'],input: RoleMutationInput}) => {get: <R extends RoleMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<RoleMutationResponse, R>) => Promise<FieldsSelection<RoleMutationResponse, R>>}),
    DeleteRole: ((args: {id: Scalars['Int']}) => {get: <R extends RoleMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<RoleMutationResponse, R>) => Promise<FieldsSelection<RoleMutationResponse, R>>}),
    CreateStorageCategory: ((args: {input: StorageCategoryMutationInput}) => {get: <R extends StorageCategoryMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryMutationResponse, R>) => Promise<FieldsSelection<StorageCategoryMutationResponse, R>>}),
    UpdateStorageCategory: ((args: {id: Scalars['Int'],input: StorageCategoryMutationInput}) => {get: <R extends StorageCategoryMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryMutationResponse, R>) => Promise<FieldsSelection<StorageCategoryMutationResponse, R>>}),
    DeleteStorageCategory: ((args: {id: Scalars['Int']}) => {get: <R extends StorageCategoryMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryMutationResponse, R>) => Promise<FieldsSelection<StorageCategoryMutationResponse, R>>}),
    CreateStorageCategoryFormField: ((args: {input: StorageCategoryFormFieldMutationInput}) => {get: <R extends StorageCategoryFormFieldMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormFieldMutationResponse, R>) => Promise<FieldsSelection<StorageCategoryFormFieldMutationResponse, R>>}),
    UpdateStorageCategoryFormField: ((args: {id: Scalars['Int'],input: StorageCategoryFormFieldMutationInput}) => {get: <R extends StorageCategoryFormFieldMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormFieldMutationResponse, R>) => Promise<FieldsSelection<StorageCategoryFormFieldMutationResponse, R>>}),
    DeleteStorageCategoryFormField: ((args: {id: Scalars['Int']}) => {get: <R extends StorageCategoryFormFieldMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormFieldMutationResponse, R>) => Promise<FieldsSelection<StorageCategoryFormFieldMutationResponse, R>>}),
    CreateStorageItem: ((args: {input: StorageItemMutationInput}) => {get: <R extends StorageItemMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemMutationResponse, R>) => Promise<FieldsSelection<StorageItemMutationResponse, R>>}),
    UpdateStorageItem: ((args: {id: Scalars['Int'],input: StorageItemMutationInput}) => {get: <R extends StorageItemMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemMutationResponse, R>) => Promise<FieldsSelection<StorageItemMutationResponse, R>>}),
    DeleteStorageItem: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemMutationResponse, R>) => Promise<FieldsSelection<StorageItemMutationResponse, R>>}),
    CreateStorageItemControllerBlueprint: ((args: {input: StorageItemControllerBlueprintMutationInput}) => {get: <R extends StorageItemControllerBlueprintMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>) => Promise<FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>>}),
    UpdateStorageItemControllerBlueprint: ((args: {id: Scalars['Int'],input: StorageItemControllerBlueprintMutationInput}) => {get: <R extends StorageItemControllerBlueprintMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>) => Promise<FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>>}),
    DeleteStorageItemControllerBlueprint: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemControllerBlueprintMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>) => Promise<FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>>}),
    CreateStorageItemControllerInstance: ((args: {input: StorageItemControllerInstanceMutationInput}) => {get: <R extends StorageItemControllerInstanceMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstanceMutationResponse, R>) => Promise<FieldsSelection<StorageItemControllerInstanceMutationResponse, R>>}),
    UpdateStorageItemControllerInstance: ((args: {id: Scalars['Int'],input: StorageItemControllerInstanceMutationInput}) => {get: <R extends StorageItemControllerInstanceMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstanceMutationResponse, R>) => Promise<FieldsSelection<StorageItemControllerInstanceMutationResponse, R>>}),
    DeleteStorageItemControllerInstance: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemControllerInstanceMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstanceMutationResponse, R>) => Promise<FieldsSelection<StorageItemControllerInstanceMutationResponse, R>>}),
    CreateStorageItemRecord: ((args: {input: StorageItemRecordMutationInput}) => {get: <R extends StorageItemRecordMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecordMutationResponse, R>) => Promise<FieldsSelection<StorageItemRecordMutationResponse, R>>}),
    UpdateStorageItemRecord: ((args: {id: Scalars['Int'],input: StorageItemRecordMutationInput}) => {get: <R extends StorageItemRecordMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecordMutationResponse, R>) => Promise<FieldsSelection<StorageItemRecordMutationResponse, R>>}),
    DeleteStorageItemRecord: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemRecordMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecordMutationResponse, R>) => Promise<FieldsSelection<StorageItemRecordMutationResponse, R>>}),
    CreateStorageItemRelation: ((args: {input: StorageItemRelationMutationInput}) => {get: <R extends StorageItemRelationMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelationMutationResponse, R>) => Promise<FieldsSelection<StorageItemRelationMutationResponse, R>>}),
    UpdateStorageItemRelation: ((args: {id: Scalars['Int'],input: StorageItemRelationMutationInput}) => {get: <R extends StorageItemRelationMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelationMutationResponse, R>) => Promise<FieldsSelection<StorageItemRelationMutationResponse, R>>}),
    DeleteStorageItemRelation: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemRelationMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelationMutationResponse, R>) => Promise<FieldsSelection<StorageItemRelationMutationResponse, R>>}),
    CreateUser: ((args: {input: UserMutationInput}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Promise<FieldsSelection<UserMutationResponse, R>>}),
    UpdateUser: ((args: {id: Scalars['Int'],input: UserMutationInput}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Promise<FieldsSelection<UserMutationResponse, R>>}),
    DeleteUser: ((args: {id: Scalars['Int']}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Promise<FieldsSelection<UserMutationResponse, R>>}),
    Login: ((args: {username: Scalars['String'],password: Scalars['String']}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Promise<FieldsSelection<UserMutationResponse, R>>})
}

export interface MutationObservableChain{
    _empty: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    CreateGlobalVariable: ((args: {input: GlobalVariableMutationInput}) => {get: <R extends GlobalVariableMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariableMutationResponse, R>) => Observable<FieldsSelection<GlobalVariableMutationResponse, R>>}),
    UpdateGlobalVariable: ((args: {id: Scalars['Int'],input: GlobalVariableMutationInput}) => {get: <R extends GlobalVariableMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariableMutationResponse, R>) => Observable<FieldsSelection<GlobalVariableMutationResponse, R>>}),
    DeleteGlobalVariable: ((args: {id: Scalars['Int']}) => {get: <R extends GlobalVariableMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<GlobalVariableMutationResponse, R>) => Observable<FieldsSelection<GlobalVariableMutationResponse, R>>}),
    CreateLog: ((args?: {input?: (LogMutationInput | null)}) => {get: <R extends LogMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<LogMutationResponse, R>) => Observable<FieldsSelection<LogMutationResponse, R>>})&({get: <R extends LogMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<LogMutationResponse, R>) => Observable<FieldsSelection<LogMutationResponse, R>>}),
    DeleteLog: ((args: {id: Scalars['Int']}) => {get: <R extends LogMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<LogMutationResponse, R>) => Observable<FieldsSelection<LogMutationResponse, R>>}),
    CreateMessage: ((args: {input: MessageMutationInput}) => {get: <R extends MessageMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<MessageMutationResponse, R>) => Observable<FieldsSelection<MessageMutationResponse, R>>}),
    DeleteMessage: ((args: {id: Scalars['Int']}) => {get: <R extends MessageMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<MessageMutationResponse, R>) => Observable<FieldsSelection<MessageMutationResponse, R>>}),
    MarkMessageAsSeen: ({get: <R extends MessageMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<MessageMutationResponse, R>) => Observable<FieldsSelection<MessageMutationResponse, R>>}),
    CreateRole: ((args: {input: RoleMutationInput}) => {get: <R extends RoleMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<RoleMutationResponse, R>) => Observable<FieldsSelection<RoleMutationResponse, R>>}),
    UpdateRole: ((args: {id: Scalars['Int'],input: RoleMutationInput}) => {get: <R extends RoleMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<RoleMutationResponse, R>) => Observable<FieldsSelection<RoleMutationResponse, R>>}),
    DeleteRole: ((args: {id: Scalars['Int']}) => {get: <R extends RoleMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<RoleMutationResponse, R>) => Observable<FieldsSelection<RoleMutationResponse, R>>}),
    CreateStorageCategory: ((args: {input: StorageCategoryMutationInput}) => {get: <R extends StorageCategoryMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryMutationResponse, R>) => Observable<FieldsSelection<StorageCategoryMutationResponse, R>>}),
    UpdateStorageCategory: ((args: {id: Scalars['Int'],input: StorageCategoryMutationInput}) => {get: <R extends StorageCategoryMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryMutationResponse, R>) => Observable<FieldsSelection<StorageCategoryMutationResponse, R>>}),
    DeleteStorageCategory: ((args: {id: Scalars['Int']}) => {get: <R extends StorageCategoryMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryMutationResponse, R>) => Observable<FieldsSelection<StorageCategoryMutationResponse, R>>}),
    CreateStorageCategoryFormField: ((args: {input: StorageCategoryFormFieldMutationInput}) => {get: <R extends StorageCategoryFormFieldMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormFieldMutationResponse, R>) => Observable<FieldsSelection<StorageCategoryFormFieldMutationResponse, R>>}),
    UpdateStorageCategoryFormField: ((args: {id: Scalars['Int'],input: StorageCategoryFormFieldMutationInput}) => {get: <R extends StorageCategoryFormFieldMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormFieldMutationResponse, R>) => Observable<FieldsSelection<StorageCategoryFormFieldMutationResponse, R>>}),
    DeleteStorageCategoryFormField: ((args: {id: Scalars['Int']}) => {get: <R extends StorageCategoryFormFieldMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormFieldMutationResponse, R>) => Observable<FieldsSelection<StorageCategoryFormFieldMutationResponse, R>>}),
    CreateStorageItem: ((args: {input: StorageItemMutationInput}) => {get: <R extends StorageItemMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemMutationResponse, R>) => Observable<FieldsSelection<StorageItemMutationResponse, R>>}),
    UpdateStorageItem: ((args: {id: Scalars['Int'],input: StorageItemMutationInput}) => {get: <R extends StorageItemMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemMutationResponse, R>) => Observable<FieldsSelection<StorageItemMutationResponse, R>>}),
    DeleteStorageItem: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemMutationResponse, R>) => Observable<FieldsSelection<StorageItemMutationResponse, R>>}),
    CreateStorageItemControllerBlueprint: ((args: {input: StorageItemControllerBlueprintMutationInput}) => {get: <R extends StorageItemControllerBlueprintMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>) => Observable<FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>>}),
    UpdateStorageItemControllerBlueprint: ((args: {id: Scalars['Int'],input: StorageItemControllerBlueprintMutationInput}) => {get: <R extends StorageItemControllerBlueprintMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>) => Observable<FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>>}),
    DeleteStorageItemControllerBlueprint: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemControllerBlueprintMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>) => Observable<FieldsSelection<StorageItemControllerBlueprintMutationResponse, R>>}),
    CreateStorageItemControllerInstance: ((args: {input: StorageItemControllerInstanceMutationInput}) => {get: <R extends StorageItemControllerInstanceMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstanceMutationResponse, R>) => Observable<FieldsSelection<StorageItemControllerInstanceMutationResponse, R>>}),
    UpdateStorageItemControllerInstance: ((args: {id: Scalars['Int'],input: StorageItemControllerInstanceMutationInput}) => {get: <R extends StorageItemControllerInstanceMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstanceMutationResponse, R>) => Observable<FieldsSelection<StorageItemControllerInstanceMutationResponse, R>>}),
    DeleteStorageItemControllerInstance: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemControllerInstanceMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstanceMutationResponse, R>) => Observable<FieldsSelection<StorageItemControllerInstanceMutationResponse, R>>}),
    CreateStorageItemRecord: ((args: {input: StorageItemRecordMutationInput}) => {get: <R extends StorageItemRecordMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecordMutationResponse, R>) => Observable<FieldsSelection<StorageItemRecordMutationResponse, R>>}),
    UpdateStorageItemRecord: ((args: {id: Scalars['Int'],input: StorageItemRecordMutationInput}) => {get: <R extends StorageItemRecordMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecordMutationResponse, R>) => Observable<FieldsSelection<StorageItemRecordMutationResponse, R>>}),
    DeleteStorageItemRecord: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemRecordMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecordMutationResponse, R>) => Observable<FieldsSelection<StorageItemRecordMutationResponse, R>>}),
    CreateStorageItemRelation: ((args: {input: StorageItemRelationMutationInput}) => {get: <R extends StorageItemRelationMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelationMutationResponse, R>) => Observable<FieldsSelection<StorageItemRelationMutationResponse, R>>}),
    UpdateStorageItemRelation: ((args: {id: Scalars['Int'],input: StorageItemRelationMutationInput}) => {get: <R extends StorageItemRelationMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelationMutationResponse, R>) => Observable<FieldsSelection<StorageItemRelationMutationResponse, R>>}),
    DeleteStorageItemRelation: ((args: {id: Scalars['Int']}) => {get: <R extends StorageItemRelationMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelationMutationResponse, R>) => Observable<FieldsSelection<StorageItemRelationMutationResponse, R>>}),
    CreateUser: ((args: {input: UserMutationInput}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Observable<FieldsSelection<UserMutationResponse, R>>}),
    UpdateUser: ((args: {id: Scalars['Int'],input: UserMutationInput}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Observable<FieldsSelection<UserMutationResponse, R>>}),
    DeleteUser: ((args: {id: Scalars['Int']}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Observable<FieldsSelection<UserMutationResponse, R>>}),
    Login: ((args: {username: Scalars['String'],password: Scalars['String']}) => {get: <R extends UserMutationResponseRequest>(request: R, defaultValue?: FieldsSelection<UserMutationResponse, R>) => Observable<FieldsSelection<UserMutationResponse, R>>})
}

export interface GlobalVariablePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    type: ({get: (request?: boolean|number, defaultValue?: GenericValueType) => Promise<GenericValueType>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface GlobalVariableObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    type: ({get: (request?: boolean|number, defaultValue?: GenericValueType) => Observable<GenericValueType>}),
    value: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface LogPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    user: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface LogObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    type: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    message: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    user: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface LogsListPromiseChain{
    list: ({get: <R extends LogRequest>(request: R, defaultValue?: FieldsSelection<Log, R>[]) => Promise<FieldsSelection<Log, R>[]>})
}

export interface LogsListObservableChain{
    list: ({get: <R extends LogRequest>(request: R, defaultValue?: FieldsSelection<Log, R>[]) => Observable<FieldsSelection<Log, R>[]>})
}

export interface MessagePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    type: ({get: (request?: boolean|number, defaultValue?: MessageImportanceType) => Promise<MessageImportanceType>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    sender: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    recipient: (UserPromiseChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Promise<FieldsSelection<User, R>>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface MessageObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    type: ({get: (request?: boolean|number, defaultValue?: MessageImportanceType) => Observable<MessageImportanceType>}),
    title: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    content: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    seen: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    sender: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    recipient: (UserObservableChain & {get: <R extends UserRequest>(request: R, defaultValue?: FieldsSelection<User, R>) => Observable<FieldsSelection<User, R>>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface MessagesListPromiseChain{
    list: ({get: <R extends MessageRequest>(request: R, defaultValue?: FieldsSelection<Message, R>[]) => Promise<FieldsSelection<Message, R>[]>})
}

export interface MessagesListObservableChain{
    list: ({get: <R extends MessageRequest>(request: R, defaultValue?: FieldsSelection<Message, R>[]) => Observable<FieldsSelection<Message, R>[]>})
}

export interface RolePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    permissions: ({get: (request?: boolean|number, defaultValue?: PermissionType[]) => Promise<PermissionType[]>}),
    users: ({get: <R extends RoleRequest>(request: R, defaultValue?: (FieldsSelection<Role, R> | undefined)[]) => Promise<(FieldsSelection<Role, R> | undefined)[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface RoleObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    permissions: ({get: (request?: boolean|number, defaultValue?: PermissionType[]) => Observable<PermissionType[]>}),
    users: ({get: <R extends RoleRequest>(request: R, defaultValue?: (FieldsSelection<Role, R> | undefined)[]) => Observable<(FieldsSelection<Role, R> | undefined)[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageCategoryPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    parent: (StorageCategoryPromiseChain & {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: (FieldsSelection<StorageCategory, R> | undefined)) => Promise<(FieldsSelection<StorageCategory, R> | undefined)>}),
    fields: ({get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Promise<FieldsSelection<StorageCategoryFormField, R>[]>}),
    inheritedFields: ({get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Promise<FieldsSelection<StorageCategoryFormField, R>[]>}),
    children: ({get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Promise<FieldsSelection<StorageCategory, R>[]>}),
    items: ({get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Promise<FieldsSelection<StorageItem, R>[]>}),
    nestedItems: ({get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Promise<FieldsSelection<StorageItem, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageCategoryObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    parent: (StorageCategoryObservableChain & {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: (FieldsSelection<StorageCategory, R> | undefined)) => Observable<(FieldsSelection<StorageCategory, R> | undefined)>}),
    fields: ({get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Observable<FieldsSelection<StorageCategoryFormField, R>[]>}),
    inheritedFields: ({get: <R extends StorageCategoryFormFieldRequest>(request: R, defaultValue?: FieldsSelection<StorageCategoryFormField, R>[]) => Observable<FieldsSelection<StorageCategoryFormField, R>[]>}),
    children: ({get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Observable<FieldsSelection<StorageCategory, R>[]>}),
    items: ({get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Observable<FieldsSelection<StorageItem, R>[]>}),
    nestedItems: ({get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>[]) => Observable<FieldsSelection<StorageItem, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageCategoryFormFieldPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    label: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    type: ({get: (request?: boolean|number, defaultValue?: GenericValueType) => Promise<GenericValueType>}),
    required: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    default: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    format: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    properties: ({get: (request?: boolean|number, defaultValue?: (Scalars['JSONObject'] | undefined)) => Promise<(Scalars['JSONObject'] | undefined)>}),
    categories: ({get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Promise<FieldsSelection<StorageCategory, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageCategoryFormFieldObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    label: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    type: ({get: (request?: boolean|number, defaultValue?: GenericValueType) => Observable<GenericValueType>}),
    required: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    default: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    format: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    properties: ({get: (request?: boolean|number, defaultValue?: (Scalars['JSONObject'] | undefined)) => Observable<(Scalars['JSONObject'] | undefined)>}),
    categories: ({get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>[]) => Observable<FieldsSelection<StorageCategory, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageItemPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    properties: ({get: (request?: boolean|number, defaultValue?: Scalars['JSONObject']) => Promise<Scalars['JSONObject']>}),
    quantity: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    category: (StorageCategoryPromiseChain & {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>) => Promise<FieldsSelection<StorageCategory, R>>}),
    records: ({get: <R extends StorageItemRecordRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecord, R>[]) => Promise<FieldsSelection<StorageItemRecord, R>[]>}),
    relations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Promise<FieldsSelection<StorageItemRelation, R>[]>}),
    lhsRelations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Promise<FieldsSelection<StorageItemRelation, R>[]>}),
    rhsRelations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Promise<FieldsSelection<StorageItemRelation, R>[]>}),
    controllers: ({get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>[]) => Promise<FieldsSelection<StorageItemControllerInstance, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageItemObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    properties: ({get: (request?: boolean|number, defaultValue?: Scalars['JSONObject']) => Observable<Scalars['JSONObject']>}),
    quantity: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    category: (StorageCategoryObservableChain & {get: <R extends StorageCategoryRequest>(request: R, defaultValue?: FieldsSelection<StorageCategory, R>) => Observable<FieldsSelection<StorageCategory, R>>}),
    records: ({get: <R extends StorageItemRecordRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRecord, R>[]) => Observable<FieldsSelection<StorageItemRecord, R>[]>}),
    relations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Observable<FieldsSelection<StorageItemRelation, R>[]>}),
    lhsRelations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Observable<FieldsSelection<StorageItemRelation, R>[]>}),
    rhsRelations: ({get: <R extends StorageItemRelationRequest>(request: R, defaultValue?: FieldsSelection<StorageItemRelation, R>[]) => Observable<FieldsSelection<StorageItemRelation, R>[]>}),
    controllers: ({get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>[]) => Observable<FieldsSelection<StorageItemControllerInstance, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageItemControllerBlueprintPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    script: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    instances: ({get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>[]) => Promise<FieldsSelection<StorageItemControllerInstance, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageItemControllerBlueprintObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    script: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    instances: ({get: <R extends StorageItemControllerInstanceRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerInstance, R>[]) => Observable<FieldsSelection<StorageItemControllerInstance, R>[]>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageItemControllerInstancePromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    blueprint: (StorageItemControllerBlueprintPromiseChain & {get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>) => Promise<FieldsSelection<StorageItemControllerBlueprint, R>>}),
    parameters: ({get: (request?: boolean|number, defaultValue?: (Scalars['JSONObject'] | undefined)) => Promise<(Scalars['JSONObject'] | undefined)>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageItemControllerInstanceObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    blueprint: (StorageItemControllerBlueprintObservableChain & {get: <R extends StorageItemControllerBlueprintRequest>(request: R, defaultValue?: FieldsSelection<StorageItemControllerBlueprint, R>) => Observable<FieldsSelection<StorageItemControllerBlueprint, R>>}),
    parameters: ({get: (request?: boolean|number, defaultValue?: (Scalars['JSONObject'] | undefined)) => Observable<(Scalars['JSONObject'] | undefined)>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageItemRecordPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    item: (StorageItemPromiseChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Promise<FieldsSelection<StorageItem, R>>}),
    quantity: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Promise<Scalars['Int']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageItemRecordObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    item: (StorageItemObservableChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Observable<FieldsSelection<StorageItem, R>>}),
    quantity: ({get: (request?: boolean|number, defaultValue?: Scalars['Int']) => Observable<Scalars['Int']>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface StorageItemRelationPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    mutual: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Promise<Scalars['Boolean']>}),
    lhs: (StorageItemPromiseChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Promise<FieldsSelection<StorageItem, R>>}),
    rhs: (StorageItemPromiseChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Promise<FieldsSelection<StorageItem, R>>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface StorageItemRelationObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    name: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    mutual: ({get: (request?: boolean|number, defaultValue?: Scalars['Boolean']) => Observable<Scalars['Boolean']>}),
    lhs: (StorageItemObservableChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Observable<FieldsSelection<StorageItem, R>>}),
    rhs: (StorageItemObservableChain & {get: <R extends StorageItemRequest>(request: R, defaultValue?: FieldsSelection<StorageItem, R>) => Observable<FieldsSelection<StorageItem, R>>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}

export interface UserPromiseChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Promise<Scalars['ID']>}),
    username: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    role: (RolePromiseChain & {get: <R extends RoleRequest>(request: R, defaultValue?: FieldsSelection<Role, R>) => Promise<FieldsSelection<Role, R>>}),
    logs: ({get: <R extends LogRequest>(request: R, defaultValue?: FieldsSelection<Log, R>[]) => Promise<FieldsSelection<Log, R>[]>}),
    sentMessages: ({get: <R extends MessagesListQueryResponseRequest>(request: R, defaultValue?: FieldsSelection<MessagesListQueryResponse, R>) => Promise<FieldsSelection<MessagesListQueryResponse, R>>}),
    receivedMessages: ({get: <R extends MessagesListQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<MessagesListQueryResponse, R> | undefined)) => Promise<(FieldsSelection<MessagesListQueryResponse, R> | undefined)>}),
    jwt: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Promise<(Scalars['String'] | undefined)>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Promise<Scalars['String']>})
}

export interface UserObservableChain{
    id: ({get: (request?: boolean|number, defaultValue?: Scalars['ID']) => Observable<Scalars['ID']>}),
    username: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    role: (RoleObservableChain & {get: <R extends RoleRequest>(request: R, defaultValue?: FieldsSelection<Role, R>) => Observable<FieldsSelection<Role, R>>}),
    logs: ({get: <R extends LogRequest>(request: R, defaultValue?: FieldsSelection<Log, R>[]) => Observable<FieldsSelection<Log, R>[]>}),
    sentMessages: ({get: <R extends MessagesListQueryResponseRequest>(request: R, defaultValue?: FieldsSelection<MessagesListQueryResponse, R>) => Observable<FieldsSelection<MessagesListQueryResponse, R>>}),
    receivedMessages: ({get: <R extends MessagesListQueryResponseRequest>(request: R, defaultValue?: (FieldsSelection<MessagesListQueryResponse, R> | undefined)) => Observable<(FieldsSelection<MessagesListQueryResponse, R> | undefined)>}),
    jwt: ({get: (request?: boolean|number, defaultValue?: (Scalars['String'] | undefined)) => Observable<(Scalars['String'] | undefined)>}),
    createdAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>}),
    updatedAt: ({get: (request?: boolean|number, defaultValue?: Scalars['String']) => Observable<Scalars['String']>})
}