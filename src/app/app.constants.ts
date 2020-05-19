export const appApiResources = {
    baseUrl: 'http://192.168.1.107:5000/',
    hostCountries: createUrl('hostCountries'),
    team: createUrl('teams'),
    years: createUrl('years'),
    grounds: createUrl('grounds?hostcountry='),
    allGrounds: createUrl('grounds'),
    predict: createUrl('predict?'),
    defaults: createUrl('defaultvalues?'),
}

function createUrl(actionName: string): string {
    return `http://13.229.105.42:5000/${actionName}`;
  }