const apiKey = 'KjTFKEGi7R11DuvLSPaV16IJLfTPCkKV3qowOXtE';

export const environment = {
  api: {
    baseUrl: 'https://angular-exercise.trunarrative.cloud',
    companySearch: {
      endpoint: '/TruProxyAPI/rest/Companies/v1/Search?Query=',
      key: apiKey
    },
    companyOfficers: {
      endpoint: '/TruProxyAPI/rest/Companies/v1/Officers?CompanyNumber=',
      key: apiKey
    }
  }
};
