export class Client {
  constructor(
    public name: string,
    public logotype: string,
    public tel: string,
    public mail: string,
    public adress: string,
    public postalCode: string,
    public city: string,
    public country: string,
    public details: string,
    public activityArea: string,
    public lead: string,
    public potential: string,
    public contacted: string,
    public contactedDate: Date,
    public converted: string,
    public convertedDate: Date,
    public notConvertedReason: string,
    public source: string,
    public createdAt: Date,
    public updatedAt: Date
  ) {}
}

export const clients: Client[] = [
  {
    name: 'Brioche Boulangerie',
    logotype: 'Brioche',
    tel: '02 01 05 06 08',
    mail: 'briocheBoulangerie@gmail.com',
    adress: '145 avenue de la Gironde',
    postalCode: '59000',
    city: 'Lille',
    country: 'France',
    details: 'Fabrication artisanale',
    activityArea: 'Artisan Boulanger',
    lead: '1',
    potential: '1',
    contacted: 'oui',
    contactedDate: new Date(),
    converted: '1',
    convertedDate: new Date(),
    notConvertedReason: '',
    source: 'null',
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
