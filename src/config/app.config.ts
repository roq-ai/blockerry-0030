interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Business Owner'],
  tenantName: 'Account',
  applicationName: 'Blockerry',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View coin details', 'View payment details', 'View subscription details', 'View service details'],
  ownerAbilities: [
    'Manage coin detail',
    'Manage payment',
    'Manage subscription',
    'Manage service',
    'Manage user',
    'Manage account',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/b19368db-01bc-4218-86dc-c3c32a03fdfb',
};
