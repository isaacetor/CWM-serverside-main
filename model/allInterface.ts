export interface clientDetails {
  name: string;
  address: string;
  clientType: string;
  email: string;
  phoneNumber: number;
  password: string;
  notification: []; //pushing the message model inside
  message: {}[];
  paymentLog: {}[];
  contact_us: {}[];
  bills: {}[];
}

export interface adminDetails {
  name: string;
  email: string;
  password: string;
  message: {}[];
  notification: [];
  paymentLog: {}[];
  bills: {}[];
}
