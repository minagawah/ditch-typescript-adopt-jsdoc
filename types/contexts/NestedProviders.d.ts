export const NestedProviders: React.FC<NestedProvidersProps>;
export type GivenProviderSpec = {
    provider: React.FC<any>;
    props?: any;
};
export type NestedProvidersProps = {
    components?: Array<GivenProviderSpec>;
    children: React.ReactElement<any>;
};
import React from 'react';
