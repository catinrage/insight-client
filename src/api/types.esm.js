export default {
    "scalars": [
        0,
        1,
        3,
        5,
        7,
        8,
        9,
        10,
        12,
        22
    ],
    "types": {
        "JSON": {},
        "JSONObject": {},
        "Error": {
            "code": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "String": {},
        "Query": {
            "_empty": [
                3
            ],
            "GetGlobalVariable": [
                11,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "GetGlobalVariableByName": [
                11,
                {
                    "name": [
                        3,
                        "String!"
                    ]
                }
            ],
            "ListGlobalVariables": [
                11
            ],
            "SearchGlobalVariablesByName": [
                11,
                {
                    "keyword": [
                        3,
                        "String!"
                    ]
                }
            ],
            "GetLog": [
                17,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListLogs": [
                16
            ],
            "GetMessage": [
                24,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListMessages": [
                23
            ],
            "GetMyMessages": [
                21
            ],
            "GetRole": [
                28,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListRoles": [
                28
            ],
            "GetStorageCategory": [
                31,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListStorageCategories": [
                31
            ],
            "SearchStorageCategoriesByName": [
                31,
                {
                    "keyword": [
                        3,
                        "String!"
                    ]
                }
            ],
            "GetStorageCategoryFormField": [
                34,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListStorageCategoryFormFields": [
                34,
                {
                    "skip": [
                        5,
                        "Int!"
                    ],
                    "take": [
                        5,
                        "Int!"
                    ],
                    "orderBy": [
                        3,
                        "String!"
                    ],
                    "orderType": [
                        3,
                        "String!"
                    ]
                }
            ],
            "SearchStorageCategoryFormFieldsByName": [
                34,
                {
                    "keyword": [
                        3,
                        "String!"
                    ]
                }
            ],
            "GetStorageCategoryFormFieldGenerator": [
                37,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListStorageCategoryFormFieldGenerators": [
                37
            ],
            "ListStorageItems": [
                40
            ],
            "GetStorageItemsByCategory": [
                40,
                {
                    "category": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "GetStorageItem": [
                40,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "GetStorageItemControllerBlueprint": [
                43,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListStorageItemControllerBlueprints": [
                43
            ],
            "SearchStorageItemControllerBlueprintsByName": [
                43,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "GetStorageItemControllerInstance": [
                46,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListStorageItemControllerInstances": [
                46
            ],
            "ListStorageItemRecords": [
                49
            ],
            "GetStorageItemRecord": [
                49,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListStorageItemRelations": [
                52
            ],
            "GetStorageItemRelation": [
                52,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "GetUser": [
                55,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "ListUsers": [
                55
            ],
            "CurrentUser": [
                55
            ],
            "__typename": [
                3
            ]
        },
        "Int": {},
        "Mutation": {
            "_empty": [
                3
            ],
            "CreateGlobalVariable": [
                13,
                {
                    "input": [
                        14,
                        "GlobalVariableMutationInput!"
                    ]
                }
            ],
            "UpdateGlobalVariable": [
                13,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        14,
                        "GlobalVariableMutationInput!"
                    ]
                }
            ],
            "DeleteGlobalVariable": [
                13,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateLog": [
                19,
                {
                    "input": [
                        20
                    ]
                }
            ],
            "DeleteLog": [
                19,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateMessage": [
                26,
                {
                    "input": [
                        27,
                        "MessageMutationInput!"
                    ]
                }
            ],
            "DeleteMessage": [
                26,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "MarkMessageAsSeen": [
                26
            ],
            "CreateRole": [
                29,
                {
                    "input": [
                        30,
                        "RoleMutationInput!"
                    ]
                }
            ],
            "UpdateRole": [
                29,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        30,
                        "RoleMutationInput!"
                    ]
                }
            ],
            "DeleteRole": [
                29,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageCategory": [
                32,
                {
                    "input": [
                        33,
                        "StorageCategoryMutationInput!"
                    ]
                }
            ],
            "UpdateStorageCategory": [
                32,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        33,
                        "StorageCategoryMutationInput!"
                    ]
                }
            ],
            "DeleteStorageCategory": [
                32,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageCategoryFormField": [
                35,
                {
                    "input": [
                        36,
                        "StorageCategoryFormFieldMutationInput!"
                    ]
                }
            ],
            "UpdateStorageCategoryFormField": [
                35,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        36,
                        "StorageCategoryFormFieldMutationInput!"
                    ]
                }
            ],
            "DeleteStorageCategoryFormField": [
                35,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageCategoryFormFieldGenerator": [
                38,
                {
                    "input": [
                        39,
                        "StorageCategoryFormFieldGeneratorMutationInput!"
                    ]
                }
            ],
            "UpdateStorageCategoryFormFieldGenerator": [
                38,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        39,
                        "StorageCategoryFormFieldGeneratorMutationInput!"
                    ]
                }
            ],
            "DeleteStorageCategoryFormFieldGenerator": [
                38,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageItem": [
                41,
                {
                    "input": [
                        42,
                        "StorageItemMutationInput!"
                    ]
                }
            ],
            "UpdateStorageItem": [
                41,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        42,
                        "StorageItemMutationInput!"
                    ]
                }
            ],
            "DeleteStorageItem": [
                41,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageItemControllerBlueprint": [
                44,
                {
                    "input": [
                        45,
                        "StorageItemControllerBlueprintMutationInput!"
                    ]
                }
            ],
            "UpdateStorageItemControllerBlueprint": [
                44,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        45,
                        "StorageItemControllerBlueprintMutationInput!"
                    ]
                }
            ],
            "DeleteStorageItemControllerBlueprint": [
                44,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageItemControllerInstance": [
                47,
                {
                    "input": [
                        48,
                        "StorageItemControllerInstanceMutationInput!"
                    ]
                }
            ],
            "UpdateStorageItemControllerInstance": [
                47,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        48,
                        "StorageItemControllerInstanceMutationInput!"
                    ]
                }
            ],
            "DeleteStorageItemControllerInstance": [
                47,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageItemRecord": [
                50,
                {
                    "input": [
                        51,
                        "StorageItemRecordMutationInput!"
                    ]
                }
            ],
            "UpdateStorageItemRecord": [
                50,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        51,
                        "StorageItemRecordMutationInput!"
                    ]
                }
            ],
            "DeleteStorageItemRecord": [
                50,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateStorageItemRelation": [
                53,
                {
                    "input": [
                        54,
                        "StorageItemRelationMutationInput!"
                    ]
                }
            ],
            "UpdateStorageItemRelation": [
                53,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        54,
                        "StorageItemRelationMutationInput!"
                    ]
                }
            ],
            "DeleteStorageItemRelation": [
                53,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "CreateUser": [
                56,
                {
                    "input": [
                        57,
                        "UserMutationInput!"
                    ]
                }
            ],
            "UpdateUser": [
                56,
                {
                    "id": [
                        5,
                        "Int!"
                    ],
                    "input": [
                        57,
                        "UserMutationInput!"
                    ]
                }
            ],
            "DeleteUser": [
                56,
                {
                    "id": [
                        5,
                        "Int!"
                    ]
                }
            ],
            "Login": [
                56,
                {
                    "username": [
                        3,
                        "String!"
                    ],
                    "password": [
                        3,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                3
            ]
        },
        "GenericValueType": {},
        "LogType": {},
        "MessageImportanceType": {},
        "PermissionType": {},
        "GlobalVariable": {
            "id": [
                12
            ],
            "name": [
                3
            ],
            "type": [
                7
            ],
            "value": [
                3
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "ID": {},
        "GlobalVariableMutationResponse": {
            "on_GlobalVariable": [
                11
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "GlobalVariableMutationInput": {
            "name": [
                3
            ],
            "type": [
                7
            ],
            "value": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Log": {
            "id": [
                12
            ],
            "type": [
                3
            ],
            "message": [
                3
            ],
            "user": [
                55
            ],
            "createdAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "LogsListQueryResponse": {
            "on_LogsList": [
                18
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "LogQueryResponse": {
            "on_Log": [
                15
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "LogsList": {
            "list": [
                15
            ],
            "__typename": [
                3
            ]
        },
        "LogMutationResponse": {
            "on_Log": [
                15
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "LogMutationInput": {
            "type": [
                8
            ],
            "message": [
                3
            ],
            "userId": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "Message": {
            "id": [
                12
            ],
            "type": [
                9
            ],
            "title": [
                3
            ],
            "content": [
                3
            ],
            "seen": [
                22
            ],
            "sender": [
                55
            ],
            "recipient": [
                55
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "Boolean": {},
        "MessagesListQueryResponse": {
            "on_MessagesList": [
                25
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "MessageQueryResponse": {
            "on_Message": [
                21
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "MessagesList": {
            "list": [
                21
            ],
            "__typename": [
                3
            ]
        },
        "MessageMutationResponse": {
            "on_Message": [
                21
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "MessageMutationInput": {
            "type": [
                9
            ],
            "content": [
                3
            ],
            "senderId": [
                5
            ],
            "recipientId": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "Role": {
            "id": [
                12
            ],
            "name": [
                3
            ],
            "permissions": [
                10
            ],
            "users": [
                28
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "RoleMutationResponse": {
            "on_Role": [
                28
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "RoleMutationInput": {
            "name": [
                3
            ],
            "permissions": [
                10
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategory": {
            "id": [
                12
            ],
            "name": [
                3
            ],
            "parent": [
                31
            ],
            "fields": [
                34
            ],
            "inheritedFields": [
                34
            ],
            "children": [
                31
            ],
            "items": [
                40
            ],
            "nestedItems": [
                40
            ],
            "generators": [
                37
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryMutationResponse": {
            "on_StorageCategory": [
                31
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryMutationInput": {
            "name": [
                3
            ],
            "parentId": [
                5
            ],
            "fields": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryFormField": {
            "id": [
                12
            ],
            "name": [
                3
            ],
            "label": [
                3
            ],
            "type": [
                7
            ],
            "required": [
                22
            ],
            "format": [
                3
            ],
            "properties": [
                1
            ],
            "categories": [
                31
            ],
            "generators": [
                37
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryFormFieldMutationResponse": {
            "on_StorageCategoryFormField": [
                34
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryFormFieldMutationInput": {
            "name": [
                3
            ],
            "label": [
                3
            ],
            "type": [
                7
            ],
            "required": [
                22
            ],
            "format": [
                3
            ],
            "properties": [
                1
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryFormFieldGenerator": {
            "generator": [
                3
            ],
            "category": [
                31
            ],
            "field": [
                34
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryFormFieldGeneratorMutationResponse": {
            "on_StorageCategoryFormFieldGenerator": [
                37
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageCategoryFormFieldGeneratorMutationInput": {
            "generator": [
                3
            ],
            "categoryId": [
                5
            ],
            "fieldId": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "StorageItem": {
            "id": [
                12
            ],
            "properties": [
                1
            ],
            "quantity": [
                5
            ],
            "category": [
                31
            ],
            "records": [
                49
            ],
            "relations": [
                52
            ],
            "lhsRelations": [
                52
            ],
            "rhsRelations": [
                52
            ],
            "controllers": [
                46
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemMutationResponse": {
            "on_StorageItem": [
                40
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemMutationInput": {
            "categoryId": [
                5
            ],
            "properties": [
                1
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemControllerBlueprint": {
            "id": [
                12
            ],
            "name": [
                3
            ],
            "script": [
                3
            ],
            "instances": [
                46
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemControllerBlueprintMutationResponse": {
            "on_StorageItemControllerBlueprint": [
                43
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemControllerBlueprintMutationInput": {
            "name": [
                3
            ],
            "script": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemControllerInstance": {
            "id": [
                12
            ],
            "blueprint": [
                43
            ],
            "parameters": [
                1
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemControllerInstanceMutationResponse": {
            "on_StorageItemControllerInstance": [
                46
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemControllerInstanceMutationInput": {
            "blueprintId": [
                5
            ],
            "parameters": [
                1
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemRecord": {
            "id": [
                12
            ],
            "item": [
                40
            ],
            "quantity": [
                5
            ],
            "description": [
                3
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemRecordMutationResponse": {
            "on_StorageItemRecord": [
                49
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemRecordMutationInput": {
            "itemId": [
                5
            ],
            "quantity": [
                5
            ],
            "description": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemRelation": {
            "id": [
                12
            ],
            "name": [
                3
            ],
            "mutual": [
                22
            ],
            "lhs": [
                40
            ],
            "rhs": [
                40
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemRelationMutationResponse": {
            "on_StorageItemRelation": [
                52
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "StorageItemRelationMutationInput": {
            "name": [
                3
            ],
            "mutual": [
                22
            ],
            "lhsItemId": [
                5
            ],
            "rhsItemId": [
                5
            ],
            "__typename": [
                3
            ]
        },
        "User": {
            "id": [
                12
            ],
            "username": [
                3
            ],
            "role": [
                28
            ],
            "logs": [
                15
            ],
            "sentMessages": [
                23
            ],
            "receivedMessages": [
                23
            ],
            "jwt": [
                3
            ],
            "createdAt": [
                3
            ],
            "updatedAt": [
                3
            ],
            "__typename": [
                3
            ]
        },
        "UserMutationResponse": {
            "on_User": [
                55
            ],
            "on_Error": [
                2
            ],
            "__typename": [
                3
            ]
        },
        "UserMutationInput": {
            "username": [
                3
            ],
            "password": [
                3
            ],
            "roleId": [
                5
            ],
            "__typename": [
                3
            ]
        }
    }
}