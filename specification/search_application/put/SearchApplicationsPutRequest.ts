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
import { RequestBase } from '@_types/Base'
import { Name } from '@_types/common'
import { SearchApplication } from '../_types/SearchApplication'

/**
 * Creates or updates a search application.
 * @rest_spec_name search_application.put
 * @availability stack since=8.8.0 stability=beta
 * @availability serverless stability=beta visibility=public
 */
interface Request extends RequestBase {
  path_parts: {
    /**
     * The name of the search application to be created or updated
     */
    name: Name
  }
  query_parameters: {
    /**
     * If true, requires that a search application with the specified resource_id does not already exist. (default: false)
     */
    create?: boolean
  }
  /**
   * The search application information to update
   */
  /** @codegen_name search_application */
  body: SearchApplication
}