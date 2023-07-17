/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { ConditionTypeEnum } from "./conditiontypeenum";
import { OperatorSchema } from "./operatorschema";
import { Expose, Type } from "class-transformer";

export class ConditionSchema extends SpeakeasyBase {
    /**
     * The common model for which a condition schema is defined.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "common_model" })
    commonModel?: string;

    /**
     * The type of value(s) that can be set for this condition.
     *
     * @remarks
     *
     * * `BOOLEAN` - BOOLEAN
     * * `DATE` - DATE
     * * `DATE_TIME` - DATE_TIME
     * * `INTEGER` - INTEGER
     * * `FLOAT` - FLOAT
     * * `STRING` - STRING
     * * `LIST_OF_STRINGS` - LIST_OF_STRINGS
     */
    @SpeakeasyMetadata()
    @Expose({ name: "condition_type" })
    conditionType: ConditionTypeEnum;

    /**
     * The name of the field on the common model that this condition corresponds to, if they conceptually match. e.g. "location_type".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "field_name" })
    fieldName: string;

    /**
     * The ID of the condition schema. This ID is used when updating selective syncs for a linked account.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "id" })
    id: string;

    /**
     * Whether this condition can only be applied once. If false, the condition can be AND'd together multiple times.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "is_unique" })
    isUnique?: boolean;

    /**
     * User-facing *native condition* name. e.g. "Skip Manager".
     */
    @SpeakeasyMetadata()
    @Expose({ name: "native_name" })
    nativeName: string;

    /**
     * The schemas for the operators that can be used on a condition.
     */
    @SpeakeasyMetadata({ elemType: OperatorSchema })
    @Expose({ name: "operators" })
    @Type(() => OperatorSchema)
    operators: OperatorSchema[];
}