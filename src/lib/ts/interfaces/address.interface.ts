export interface IAddress {
  _id: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
}
