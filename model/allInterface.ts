export interface clientDetails {
  name: string;
  address: string;
  clientType: string;
  email: string;
  phoneNumber: string;
  password: string;
  notification: []; //pushing the message model inside
  role: string;
  message: {}[];
  paymentLog: {}[];
  contact_us: {}[];
  //   bills: [];
}

export interface adminDetails {
  name: string;
  email: string;
  isAdmin: boolean;
  password: string;
  message: {}[];
  notification: [];
  paymentLog: {}[];
  bills: {}[];
}
