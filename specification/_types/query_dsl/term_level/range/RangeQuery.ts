/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import { double } from '@_types/Numeric'
import { QueryBase } from '@_types/query_dsl/abstractions/query/Query'
import { DateMath } from '@_types/Time'
import { RangeRelation } from './RangeRelation'

export class RangeQuery extends QueryBase {
  gt?: double | DateMath
  gte?: double | DateMath
  lt?: double | DateMath
  lte?: double | DateMath
  relation?: RangeRelation

  time_zone?: string

  //TODO obsolete, update yaml tests to no longer use this
  from?: double | DateMath
  to?: double | DateMath
}