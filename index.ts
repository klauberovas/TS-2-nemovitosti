console.log('Ahoj');

interface LocationAddress {
  street: string;
  unitNumber: number;
  zipCode: string | number;
  region: string;
}

interface BasicInfo {
  name: string;
  location: LocationAddress;
  price: number;
  area: number;
  isForSale: boolean;
  isForRent: boolean;
}

interface House extends BasicInfo {
  disposition: string;
  floor: number;
  hasGarage: boolean;
  hasPool: boolean;
  hasGarden: boolean;
}

interface Flat extends BasicInfo {
  disposition: string;
  hasFloor: boolean;
  hasLift: boolean;
  hasBalcony: boolean;
}

interface Ground extends BasicInfo {
  landType: 'komerční' | 'obytný';
  hasWater: boolean;
  hasElectricity: boolean;
  hasGas: boolean;
}

interface Garage extends BasicInfo {
  capacity: number;
  hasWater: boolean;
  hasElectricity: boolean;
  hasGas: boolean;
}

interface Properties {
  houses: House[];
  flats: Flat[];
  grounds: Ground[];
  garages: Garage[];
}

const realityMM: Properties = {
  houses: [
    {
      name: 'Beautiful House',
      location: {
        street: 'Main Street',
        unitNumber: 10,
        zipCode: '12345',
        region: 'City',
      },
      price: 250000,
      area: 200,
      isForSale: true,
      isForRent: false,
      disposition: '3+1',
      floor: 2,
      hasGarage: true,
      hasPool: false,
      hasGarden: true,
    },
    {
      name: 'Cozy Cottage',
      location: {
        street: 'Maple Avenue',
        unitNumber: 5,
        zipCode: '54321',
        region: 'Town',
      },
      price: 150000,
      area: 150,
      isForSale: true,
      isForRent: false,
      disposition: '2+kk',
      floor: 1,
      hasGarage: false,
      hasPool: false,
      hasGarden: true,
    },
  ],
  flats: [
    {
      name: 'Modern Apartment',
      location: {
        street: 'Oak Street',
        unitNumber: 20,
        zipCode: '67890',
        region: 'City',
      },
      price: 180000,
      area: 100,
      isForSale: true,
      isForRent: false,
      disposition: '2+1',
      hasFloor: true,
      hasLift: true,
      hasBalcony: true,
    },
    {
      name: 'Charming Studio',
      location: {
        street: 'Elm Avenue',
        unitNumber: 8,
        zipCode: '98765',
        region: 'Town',
      },
      price: 90000,
      area: 50,
      isForSale: true,
      isForRent: false,
      disposition: '1+kk',
      hasFloor: true,
      hasLift: false,
      hasBalcony: false,
    },
  ],
  grounds: [
    {
      name: 'Commercial Plot',
      location: {
        street: 'Cedar Street',
        unitNumber: 0,
        zipCode: '11111',
        region: 'Suburb',
      },
      price: 50000,
      area: 500,
      isForSale: true,
      isForRent: false,
      landType: 'komerční',
      hasWater: true,
      hasElectricity: true,
      hasGas: false,
    },
    {
      name: 'Residential Plot',
      location: {
        street: 'Pine Avenue',
        unitNumber: 0,
        zipCode: '22222',
        region: 'Suburb',
      },
      price: 40000,
      area: 400,
      isForSale: true,
      isForRent: false,
      landType: 'obytný',
      hasWater: true,
      hasElectricity: true,
      hasGas: true,
    },
  ],
  garages: [
    {
      name: 'Spacious Garage',
      location: {
        street: 'Walnut Street',
        unitNumber: 30,
        zipCode: '33333',
        region: 'City',
      },
      price: 20000,
      area: 30,
      isForSale: true,
      isForRent: false,
      capacity: 2,
      hasWater: false,
      hasElectricity: true,
      hasGas: false,
    },
    {
      name: 'Compact Garage',
      location: {
        street: 'Birch Avenue',
        unitNumber: 15,
        zipCode: '44444',
        region: 'Town',
      },
      price: 15000,
      area: 20,
      isForSale: true,
      isForRent: false,
      capacity: 1,
      hasWater: false,
      hasElectricity: false,
      hasGas: false,
    },
  ],
};

console.log('Moje nemovitosti:', realityMM);
