import {
  FieldsSelection,
  GraphqlOperation,
  ClientOptions,
  Observable,
} from '@genql/runtime'
import { SubscriptionClient } from 'subscriptions-transport-ws'
export * from './schema'
import {
  QueryRequest,
  QueryPromiseChain,
  Query,
  MutationRequest,
  MutationPromiseChain,
  Mutation,
} from './schema'
export declare const createClient: (options?: ClientOptions) => Client
export declare const everything: { __scalar: boolean }
export declare const version: string

export interface Client {
  wsClient?: SubscriptionClient

  query<R extends QueryRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Query, R>>

  mutation<R extends MutationRequest>(
    request: R & { __name?: string },
  ): Promise<FieldsSelection<Mutation, R>>

  chain: {
    query: QueryPromiseChain

    mutation: MutationPromiseChain
  }
}

export type QueryResult<fields extends QueryRequest> = FieldsSelection<
  Query,
  fields
>

export declare const generateQueryOp: (
  fields: QueryRequest & { __name?: string },
) => GraphqlOperation
export type MutationResult<fields extends MutationRequest> = FieldsSelection<
  Mutation,
  fields
>

export declare const generateMutationOp: (
  fields: MutationRequest & { __name?: string },
) => GraphqlOperation

export declare const enumGenericValueType: {
  readonly STRING: 'STRING'
  readonly NUMBER: 'NUMBER'
  readonly BOOLEAN: 'BOOLEAN'
  readonly LIST: 'LIST'
}

export declare const enumLogType: {
  readonly NOTE: 'NOTE'
  readonly INFO: 'INFO'
  readonly SUCCESS: 'SUCCESS'
  readonly WARNING: 'WARNING'
  readonly ERROR: 'ERROR'
}

export declare const enumMessageImportanceType: {
  readonly URGENT: 'URGENT'
  readonly IMPORTANT: 'IMPORTANT'
  readonly ROUTINE: 'ROUTINE'
}

export declare const enumPermissionType: {
  readonly SUDO: 'SUDO'
  readonly WRITE_STORAGE_CATEGORY: 'WRITE_STORAGE_CATEGORY'
  readonly WRITE_STORAGE_CATEGORY_FORM_FIELD: 'WRITE_STORAGE_CATEGORY_FORM_FIELD'
  readonly WRITE_STORAGE_ITEM: 'WRITE_STORAGE_ITEM'
  readonly WRITE_STORAGE_ITEM_RECORD: 'WRITE_STORAGE_ITEM_RECORD'
  readonly WRITE_STORAGE_ITEM_CONTROLLER: 'WRITE_STORAGE_ITEM_CONTROLLER'
  readonly WRITE_STORAGE_RELATION: 'WRITE_STORAGE_RELATION'
  readonly WRITE_USER: 'WRITE_USER'
  readonly WRITE_ROLE: 'WRITE_ROLE'
  readonly READ_MESSAGES: 'READ_MESSAGES'
  readonly READ_LOGS: 'READ_LOGS'
}
