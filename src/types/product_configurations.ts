export type AllProductConfigurations = WebspaceConfiguration | DomainConfiguration | KvmConfiguration;

export interface BaseConfiguration {
  billingCycle: number;
}

// tslint:disable-next-line:no-empty-interface
export interface WebspaceConfiguration extends BaseConfiguration {}

export interface DomainConfiguration {
  sld: string;
  tld: string;
}

export interface KvmConfiguration extends BaseConfiguration {
  hostname: string;
  template: string;
  password: string;
}
