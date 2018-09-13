import { CustomerDto } from '../../modules/customers/dto/customer.dto';
import { BasicMock } from './BaseMock';

export const CUSTOMER_ID = 1;

export const creatingCustomer = {
  customerName: 'TestCustomerName',
  contacts: 'test test',
};

export const existingCustomer = {
  id: CUSTOMER_ID,
  customerName: 'ExistingCustomerName',
  contacts: 'test test',
};

this.existingCustomer.destroy = () => {
  return 'user was deleted';
};

this.existingCustomer.update = (data: CustomerDto) => {
  return data;
};

export const customerProfileData = {
  customerName: 'UpdatingCustomerName',
  contacts: 'update test contacts',
};

export default new BasicMock(existingCustomer);