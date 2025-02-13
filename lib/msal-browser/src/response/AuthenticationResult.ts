/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { AccountInfo, AuthenticationResult as CommonAuthenticationResult } from "@azure/msal-common";

export type AuthenticationResult = CommonAuthenticationResult & {
    account: AccountInfo;
};
